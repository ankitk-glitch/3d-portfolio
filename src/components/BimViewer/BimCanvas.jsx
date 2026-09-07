import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { sampleBimProperties } from '../../data/bimModels';

export default function BimCanvas({
  selectedPreset,
  viewMode, // 'standard', 'thermal', 'xray', 'wireframe'
  explodeProgress, // 0 to 1
  sectionHeight, // null or float height
  sectionAxis, // 'Y', 'X', 'Z'
  sunAngle, // 0 to 360
  onSelectElement,
  selectedElementId,
  isolatedStorey, // null or number
  hiddenCategories, // Set of hidden categories
}) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const bimObjectsGroupRef = useRef(null);
  const clipPlaneRef = useRef(null);
  const sunLightRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());

  // Store metadata map for raycasting: mesh.uuid -> bimData
  const bimDataMap = useRef(new Map());

  // Highlight mesh reference
  const highlightedMeshRef = useRef(null);

  // Initialize Scene, Camera, Renderer, Controls
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0f1d);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 500);
    camera.position.set(18, 14, 22);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.localClippingEnabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.05; // allow slightly below horizon
    controls.minDistance = 3;
    controls.maxDistance = 120;
    controls.target.set(0, 3, 0);
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0x7dd3fc, 0x1e293b, 0.45);
    hemiLight.position.set(0, 50, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.3);
    dirLight.position.set(25, 35, 20);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 100;
    const d = 25;
    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);
    sunLightRef.current = dirLight;

    // Architectural Ground Grid
    const gridHelper = new THREE.GridHelper(50, 50, 0x0284c7, 0x1e293b);
    gridHelper.position.y = -0.01;
    scene.add(gridHelper);

    // Ground plane for soft shadows
    const groundGeo = new THREE.PlaneGeometry(80, 80);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Main BIM Elements Container
    const bimGroup = new THREE.Group();
    scene.add(bimGroup);
    bimObjectsGroupRef.current = bimGroup;

    // Clipping Plane
    const clipPlane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 100);
    clipPlaneRef.current = clipPlane;

    // Animation Loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Sun Angle
  useEffect(() => {
    if (!sunLightRef.current) return;
    const rad = (sunAngle * Math.PI) / 180;
    const radius = 40;
    const height = 30;
    sunLightRef.current.position.set(
      Math.cos(rad) * radius,
      height,
      Math.sin(rad) * radius
    );
  }, [sunAngle]);

  // Update Clipping Plane
  useEffect(() => {
    if (!rendererRef.current || !clipPlaneRef.current) return;
    if (sectionHeight !== null) {
      rendererRef.current.clippingPlanes = [clipPlaneRef.current];
      if (sectionAxis === 'Y') {
        clipPlaneRef.current.normal.set(0, -1, 0);
        clipPlaneRef.current.constant = sectionHeight;
      } else if (sectionAxis === 'X') {
        clipPlaneRef.current.normal.set(-1, 0, 0);
        clipPlaneRef.current.constant = sectionHeight;
      } else {
        clipPlaneRef.current.normal.set(0, 0, -1);
        clipPlaneRef.current.constant = sectionHeight;
      }
    } else {
      rendererRef.current.clippingPlanes = [];
    }
  }, [sectionHeight, sectionAxis]);

  // Build Procedural BIM Model
  const buildModel = useCallback((presetId) => {
    const bimGroup = bimObjectsGroupRef.current;
    if (!bimGroup) return;

    // Clear previous elements
    while (bimGroup.children.length > 0) {
      const obj = bimGroup.children[0];
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
      bimGroup.remove(obj);
    }
    bimDataMap.current.clear();

    // Helper material generator
    const getElementMaterial = (elemType, customColor = null) => {
      let color = 0x94a3b8;
      let roughness = 0.5;
      let metalness = 0.1;
      let opacity = 1.0;
      let transparent = false;

      if (customColor) {
        color = customColor;
      } else if (elemType === 'wall_ext') {
        color = 0xe2e8f0; // Smooth architectural render
        roughness = 0.8;
      } else if (elemType === 'wall_int') {
        color = 0xcfd8dc;
        roughness = 0.9;
      } else if (elemType === 'slab') {
        color = 0x334155; // Concrete dark edge
        roughness = 0.7;
      } else if (elemType === 'column') {
        color = 0x64748b; // Concrete structural column
        roughness = 0.4;
      } else if (elemType === 'glazing') {
        color = 0x38bdf8; // Architectural reflective blue glass
        opacity = 0.45;
        transparent = true;
        roughness = 0.05;
        metalness = 0.3;
      } else if (elemType === 'frame') {
        color = 0x0f172a; // Anthracite window mullion (RAL 7016)
        roughness = 0.3;
        metalness = 0.7;
      } else if (elemType === 'wood_terrace') {
        color = 0xa16207; // Natural warm timber decking
        roughness = 0.7;
      } else if (elemType === 'roof') {
        color = 0x1e293b;
        roughness = 0.85;
      }

      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness,
        metalness,
        opacity,
        transparent,
        side: THREE.DoubleSide,
      });
      return mat;
    };

    // Helper to register mesh
    const addBimElement = (mesh, bimProps, storeyLevel, category) => {
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.userData = {
        ...bimProps,
        storey: storeyLevel,
        category: category,
        initialY: mesh.position.y,
        originalMaterial: mesh.material,
      };
      bimGroup.add(mesh);
      bimDataMap.current.set(mesh.uuid, mesh.userData);
    };

    // 1. Model: RESIDENTIAL VILLA (LOD 350)
    if (presetId === 'residential-villa' || !presetId) {
      // Storey 0: Basement / Ground Slab (Elevation 0.0)
      const slab0Geo = new THREE.BoxGeometry(15, 0.4, 11);
      const slab0Mesh = new THREE.Mesh(slab0Geo, getElementMaterial('slab'));
      slab0Mesh.position.set(0, 0.2, 0);
      addBimElement(slab0Mesh, {
        id: 'SLAB-EG-001',
        name: 'Ground Floor Reinforced Concrete Slab',
        ...sampleBimProperties['SLAB_BASEMENT'],
        area: '165 m²',
        volume: '57.75 m³',
        thermalBoundary: 'Floor to Ground (DIN EN ISO 13370)',
      }, 0, 'Slabs');

      // Ground Floor Columns (Grid 4x3m)
      const colGeo = new THREE.BoxGeometry(0.35, 3.0, 0.35);
      const colPositions = [
        [-5.5, 1.7, -4], [0, 1.7, -4], [5.5, 1.7, -4],
        [-5.5, 1.7, 0], [0, 1.7, 0], [5.5, 1.7, 0],
        [-5.5, 1.7, 4], [0, 1.7, 4], [5.5, 1.7, 4]
      ];
      colPositions.forEach((pos, idx) => {
        const colMesh = new THREE.Mesh(colGeo, getElementMaterial('column'));
        colMesh.position.set(pos[0], pos[1], pos[2]);
        addBimElement(colMesh, {
          id: `COL-EG-${String(idx + 1).padStart(2, '0')}`,
          name: `Structural Column C30/37 (EG-${idx + 1})`,
          ...sampleBimProperties['COLUMN_STRUCTURAL'],
          area: '4.2 m²',
          volume: '0.37 m³',
        }, 0, 'Columns');
      });

      // Ground Floor North Exterior Wall (Continuous Insulated)
      const wallNorthGeo = new THREE.BoxGeometry(14, 3.0, 0.4);
      const wallNorth = new THREE.Mesh(wallNorthGeo, getElementMaterial('wall_ext'));
      wallNorth.position.set(0, 1.7, -4.8);
      addBimElement(wallNorth, {
        id: 'WALL-EXT-EG-NORTH',
        name: 'Exterior Insulated Monolithic Wall (North)',
        ...sampleBimProperties['EXT_WALL_INSULATED'],
        area: '42.0 m²',
        volume: '16.8 m³',
        orientation: 'North (0°)',
        transmissionHeatLoss: 'HT = 7.56 W/K',
      }, 0, 'Walls');

      // Ground Floor West Wall
      const wallWestGeo = new THREE.BoxGeometry(0.4, 3.0, 10);
      const wallWest = new THREE.Mesh(wallWestGeo, getElementMaterial('wall_ext'));
      wallWest.position.set(-6.8, 1.7, 0);
      addBimElement(wallWest, {
        id: 'WALL-EXT-EG-WEST',
        name: 'Exterior Insulated Wall (West)',
        ...sampleBimProperties['EXT_WALL_INSULATED'],
        area: '30.0 m²',
        volume: '12.0 m³',
        orientation: 'West (270°)',
        transmissionHeatLoss: 'HT = 5.40 W/K',
      }, 0, 'Walls');

      // Ground Floor South Glazed Curtain Wall (Solar Gain Optimization)
      const southGlassGeo = new THREE.BoxGeometry(10, 2.8, 0.08);
      const southGlass = new THREE.Mesh(southGlassGeo, getElementMaterial('glazing'));
      southGlass.position.set(0.5, 1.7, 4.8);
      addBimElement(southGlass, {
        id: 'GLAZ-CW-EG-SOUTH',
        name: 'Triple Low-E Curtain Wall Glazing (South)',
        ...sampleBimProperties['CURTAIN_GLAZING'],
        area: '28.0 m²',
        volume: '1.45 m³',
        orientation: 'South (180°)',
        solarGainPotential: 'High Solar Heat Gain in Winter (g=0.52)',
      }, 0, 'Glazing');

      // South Door / Window Anthracite Frame Mullions
      const southFrameGeo = new THREE.BoxGeometry(10.1, 0.15, 0.2);
      const southFrameTop = new THREE.Mesh(southFrameGeo, getElementMaterial('frame'));
      southFrameTop.position.set(0.5, 3.1, 4.8);
      addBimElement(southFrameTop, {
        id: 'MULLION-CW-TOP',
        name: 'Aluminium Thermal Break Transom Frame',
        category: 'Fenestration',
        material: 'Anodized Anthracite Aluminium (RAL 7016)',
        uValue: '1.10 W/(m²K)',
        lod: 'LOD 350'
      }, 0, 'Fenestration');

      // Ground Floor Interior Partition (Living/Kitchen acoustic divider)
      const partGeo = new THREE.BoxGeometry(0.15, 3.0, 5);
      const partMesh = new THREE.Mesh(partGeo, getElementMaterial('wall_int'));
      partMesh.position.set(1.5, 1.7, -1.5);
      addBimElement(partMesh, {
        id: 'PART-INT-EG-01',
        name: 'Drywall Interior Partition (Living/Utility)',
        ...sampleBimProperties['INTERIOR_PARTITION'],
        area: '15.0 m²',
        volume: '2.25 m³',
      }, 0, 'Partitions');

      // STOREY 1: First Floor Slab & Cantilever Terrace (Elevation 3.2m)
      const slab1Geo = new THREE.BoxGeometry(16, 0.35, 12);
      const slab1Mesh = new THREE.Mesh(slab1Geo, getElementMaterial('slab'));
      slab1Mesh.position.set(0.5, 3.375, 0.5);
      addBimElement(slab1Mesh, {
        id: 'SLAB-1OG-001',
        name: 'Intermediate Floor Concrete Slab C25/30',
        standard: 'DIN EN 1992',
        thickness: '350 mm including impact sound insulation',
        material: '200mm Reinforced Concrete + 60mm EPS 035 DEO + 50mm Anhydrite Screed',
        uValue: '0.28 W/(m²K)',
        fireRating: 'REI 90',
        lod: 'LOD 350',
        area: '192 m²',
        volume: '67.2 m³',
        category: 'Slabs',
      }, 1, 'Slabs');

      // Upper Floor Timber Terrace Deck
      const terraceGeo = new THREE.BoxGeometry(4.5, 0.05, 10);
      const terraceMesh = new THREE.Mesh(terraceGeo, getElementMaterial('wood_terrace'));
      terraceMesh.position.set(5.5, 3.58, 0.5);
      addBimElement(terraceMesh, {
        id: 'DECK-1OG-TERRACE',
        name: 'Exterior Thermal-Treated Pine Wood Decking',
        standard: 'DIN 68800',
        thickness: '28 mm Decking on Rubber Pedestals',
        material: 'Thermo-Pine Substructure',
        uValue: 'N/A (Exterior Deck)',
        lod: 'LOD 300',
        area: '45.0 m²',
        volume: '1.26 m³',
      }, 1, 'Architecture');

      // Upper Floor Structural Columns
      colPositions.slice(0, 6).forEach((pos, idx) => {
        const colMesh = new THREE.Mesh(colGeo, getElementMaterial('column'));
        colMesh.position.set(pos[0] - 0.5, 4.9, pos[2] - 0.5);
        addBimElement(colMesh, {
          id: `COL-1OG-${String(idx + 1).padStart(2, '0')}`,
          name: `Upper Structural Column C30/37 (1.OG-${idx + 1})`,
          ...sampleBimProperties['COLUMN_STRUCTURAL'],
          area: '4.2 m²',
          volume: '0.37 m³',
        }, 1, 'Columns');
      });

      // Upper Floor North Wall
      const wall1NorthGeo = new THREE.BoxGeometry(11, 2.8, 0.4);
      const wall1North = new THREE.Mesh(wall1NorthGeo, getElementMaterial('wall_ext'));
      wall1North.position.set(-1.5, 4.9, -4.8);
      addBimElement(wall1North, {
        id: 'WALL-EXT-1OG-NORTH',
        name: 'Upper Exterior Thermal Wall (North)',
        ...sampleBimProperties['EXT_WALL_INSULATED'],
        area: '30.8 m²',
        volume: '12.3 m³',
        orientation: 'North (0°)',
        transmissionHeatLoss: 'HT = 5.54 W/K',
      }, 1, 'Walls');

      // Upper Floor West Wall
      const wall1WestGeo = new THREE.BoxGeometry(0.4, 2.8, 8.5);
      const wall1West = new THREE.Mesh(wall1WestGeo, getElementMaterial('wall_ext'));
      wall1West.position.set(-6.8, 4.9, -0.7);
      addBimElement(wall1West, {
        id: 'WALL-EXT-1OG-WEST',
        name: 'Upper Exterior Thermal Wall (West)',
        ...sampleBimProperties['EXT_WALL_INSULATED'],
        area: '23.8 m²',
        volume: '9.5 m³',
        orientation: 'West (270°)',
      }, 1, 'Walls');

      // Upper Floor Panoramic Corner Glazing (East & South)
      const cornerGlassGeo = new THREE.BoxGeometry(6, 2.6, 0.08);
      const cornerGlass = new THREE.Mesh(cornerGlassGeo, getElementMaterial('glazing'));
      cornerGlass.position.set(0.5, 4.9, 3.5);
      addBimElement(cornerGlass, {
        id: 'GLAZ-1OG-CORNER',
        name: 'Upper Panorama Triple Glazing Bedroom Suite',
        ...sampleBimProperties['CURTAIN_GLAZING'],
        area: '15.6 m²',
        volume: '0.81 m³',
        orientation: 'South-East',
      }, 1, 'Glazing');

      // STOREY 2: Roof / Dachgeschoss (Elevation 6.3m)
      const roofGeo = new THREE.BoxGeometry(14, 0.42, 11);
      const roofMesh = new THREE.Mesh(roofGeo, getElementMaterial('roof'));
      roofMesh.position.set(-0.5, 6.51, -0.2);
      addBimElement(roofMesh, {
        id: 'ROOF-FLAT-WARM',
        name: 'Warm Compact Flat Roof System with PIR Insulation',
        ...sampleBimProperties['ROOF_INSULATION'],
        area: '154 m²',
        volume: '64.68 m³',
        orientation: 'Horizontal / Upward Heat Flow',
        transmissionHeatLoss: 'HT = 21.56 W/K',
      }, 2, 'Roof');

      // Roof Skylight / Solar Energy Lantern
      const skylightGeo = new THREE.BoxGeometry(3.0, 0.5, 2.0);
      const skylightMesh = new THREE.Mesh(skylightGeo, getElementMaterial('glazing'));
      skylightMesh.position.set(-1.0, 6.9, 0);
      addBimElement(skylightMesh, {
        id: 'SKYLIGHT-ROOF-01',
        name: 'Passivhaus Certified Thermal Roof Glazed Light Dome',
        category: 'Roof Glazing',
        standard: 'EN 1873 / GEG',
        thickness: 'Triple Glazed Toughened Laminated (Ug=0.6 W/m²K)',
        material: 'Self-Cleaning Glass + Insulated Upstand Curb',
        uValue: '0.72 W/(m²K)',
        fireRating: 'Broof(t1)',
        lod: 'LOD 350',
        area: '6.0 m²',
        volume: '0.4 m³',
      }, 2, 'Glazing');

      // Roof Parapet / Attika Wall
      const parapetGeo = new THREE.BoxGeometry(14.2, 0.6, 0.3);
      const parapetNorth = new THREE.Mesh(parapetGeo, getElementMaterial('wall_ext'));
      parapetNorth.position.set(-0.5, 6.8, -5.55);
      addBimElement(parapetNorth, {
        id: 'ATTIKA-NORTH',
        name: 'Insulated Parapet Wall (Attika)',
        category: 'Exterior Wall',
        standard: 'DIN 4108-Bbl.2 (Thermal Bridge Calibrated)',
        thickness: '300 mm including EPS Cap Insulation',
        material: 'Reinforced Concrete Upstand + Continuous Insulation',
        uValue: '0.19 W/(m²K)',
        psiValue: 'ψ = 0.05 W/(m·K) (Thermal Bridge Free)',
        lod: 'LOD 350'
      }, 2, 'Walls');
    }

    // 2. Model: HISTORIC AS-BUILT & ENERGY AUDIT MODEL (DIN EN 12831)
    else if (presetId === 'energy-audit-building') {
      // 3-Storey traditional geometry with thicker walls, roof gable, and room-by-room thermal zoning
      // Basement Slab
      const bGeo = new THREE.BoxGeometry(18, 0.5, 12);
      const bMesh = new THREE.Mesh(bGeo, getElementMaterial('slab'));
      bMesh.position.set(0, 0.25, 0);
      addBimElement(bMesh, {
        id: 'AUDIT-SLAB-EG',
        name: 'Existing Uninsulated Basement Ceiling / Ground Floor',
        category: 'Thermal Envelope (Floor)',
        standard: 'DIN V 18599-4 / Existing Stock 1958',
        thickness: '220 mm Concrete Hollow Pot Slab',
        material: 'Clay Pot Infill + Concrete Topping (Uninsulated)',
        uValue: '1.20 W/(m²K) -> Retrofit Target: 0.24 W/(m²K)',
        heatLossSeverity: 'High Heat Loss Zone',
        lod: 'LOD 300'
      }, 0, 'Slabs');

      // Massive Masonry Exterior Walls (45cm Vollziegel Brickwork)
      const wallSouthGeo = new THREE.BoxGeometry(17.4, 3.2, 0.45);
      const wallSouth = new THREE.Mesh(wallSouthGeo, getElementMaterial('wall_ext', 0xd97706)); // Amber brick
      wallSouth.position.set(0, 1.85, 5.75);
      addBimElement(wallSouth, {
        id: 'WALL-ASBUILT-EG-S',
        name: 'South Facade Masonry (Vollziegelmauerwerk 38cm)',
        category: 'Exterior Wall',
        standard: 'DIN 4108 Existing Stock',
        thickness: '380 mm solid clay brick + 20mm lime plaster',
        material: 'Historical Solid Brick λ = 0.81 W/(m·K)',
        uValue: '1.45 W/(m²K) [Unrenovated]',
        energyMeasure: 'Recommended: 16cm Mineral Wool WDVS (reduces to 0.19 W/m²K)',
        lod: 'LOD 300'
      }, 0, 'Walls');

      const wallNorthGeo = new THREE.BoxGeometry(17.4, 3.2, 0.45);
      const wallNorth = new THREE.Mesh(wallNorthGeo, getElementMaterial('wall_ext', 0xd97706));
      wallNorth.position.set(0, 1.85, -5.75);
      addBimElement(wallNorth, {
        id: 'WALL-ASBUILT-EG-N',
        name: 'North Facade Masonry (High Transmission Loss)',
        category: 'Exterior Wall',
        standard: 'DIN EN 12831 / GEG Audit',
        thickness: '450 mm Solid Masonry',
        material: 'Historical Solid Brick + Lime Render',
        uValue: '1.52 W/(m²K)',
        transmissionHeatLoss: 'HT = 84.5 W/K',
        lod: 'LOD 300'
      }, 0, 'Walls');

      // Windows (Double Glazed Wood 1980s)
      const winGeo = new THREE.BoxGeometry(2.4, 1.6, 0.1);
      [-5, 0, 5].forEach((xPos, idx) => {
        const win = new THREE.Mesh(winGeo, getElementMaterial('glazing', 0x38bdf8));
        win.position.set(xPos, 2.0, 5.95);
        addBimElement(win, {
          id: `WIN-ASBUILT-EG-0${idx + 1}`,
          name: `Window Opening ${idx + 1} (Wood Frame 1984)`,
          category: 'Glazing',
          standard: 'DIN EN 14351-1',
          thickness: '24mm Insulating Glass (Air filling)',
          material: 'Pine Wood Frame + Float Glass',
          uValue: '2.70 W/(m²K) -> Retrofit: 0.80 W/(m²K)',
          gValue: '0.76',
          lod: 'LOD 300'
        }, 0, 'Glazing');
      });

      // Upper Level 1.OG
      const slab1Geo = new THREE.BoxGeometry(18, 0.35, 12);
      const slab1 = new THREE.Mesh(slab1Geo, getElementMaterial('slab'));
      slab1.position.set(0, 3.62, 0);
      addBimElement(slab1, {
        id: 'SLAB-ASBUILT-1OG',
        name: 'First Floor Intermediate Slab (Holzbalkendecke)',
        category: 'Slabs',
        material: 'Timber Joist Ceiling with Slag Infill',
        uValue: '0.85 W/(m²K)',
        lod: 'LOD 300'
      }, 1, 'Slabs');

      // Upper Walls
      const wall1S = new THREE.Mesh(wallSouthGeo, getElementMaterial('wall_ext', 0xd97706));
      wall1S.position.set(0, 5.25, 5.75);
      addBimElement(wall1S, {
        id: 'WALL-ASBUILT-1OG-S',
        name: 'First Floor South Wall Masonry',
        category: 'Exterior Wall',
        uValue: '1.45 W/(m²K)',
        lod: 'LOD 300'
      }, 1, 'Walls');

      // Attic Roof (Unheated Dachraum)
      const atticSlabGeo = new THREE.BoxGeometry(18.2, 0.4, 12.2);
      const atticSlab = new THREE.Mesh(atticSlabGeo, getElementMaterial('roof'));
      atticSlab.position.set(0, 6.9, 0);
      addBimElement(atticSlab, {
        id: 'CEILING-UPPER-ATTIC',
        name: 'Top Floor Ceiling to Cold Unheated Attic (Oberste Geschossdecke)',
        category: 'Thermal Envelope (Roof Boundary)',
        standard: 'GEG § 47 Pflicht zur Dämmung',
        thickness: '200 mm existing + proposed 180mm WLG 032 insulation',
        material: 'Top Ceiling Retrofit Boundary',
        uValue: '0.85 W/(m²K) -> Retrofit: 0.14 W/(m²K)',
        lod: 'LOD 300'
      }, 2, 'Roof');
    }

    // 3. Model: COMMERCIAL INNOVATION PAVILION (LOD 300)
    else if (presetId === 'commercial-pavilion') {
      // Commercial 2-Storey Atrium Structure
      const baseGeo = new THREE.BoxGeometry(20, 0.4, 14);
      const base = new THREE.Mesh(baseGeo, getElementMaterial('slab'));
      base.position.set(0, 0.2, 0);
      addBimElement(base, {
        id: 'COMM-FOUNDATION',
        name: 'Industrial Floor Slab with Heavy Load Reinforcement',
        category: 'Slabs',
        standard: 'DIN 1045 / Eurocode 2',
        thickness: '400 mm C35/45 Concrete',
        uValue: '0.21 W/(m²K)',
        lod: 'LOD 300'
      }, 0, 'Slabs');

      // Grid of Steel/Concrete Columns
      for (let x = -8; x <= 8; x += 4) {
        for (let z = -5; z <= 5; z += 5) {
          const cGeo = new THREE.CylinderGeometry(0.2, 0.2, 6.5, 16);
          const cMesh = new THREE.Mesh(cGeo, getElementMaterial('column'));
          cMesh.position.set(x, 3.45, z);
          addBimElement(cMesh, {
            id: `COL-COMM-${x}-${z}`,
            name: `Circular Concrete Column Ø400mm`,
            category: 'Columns',
            material: 'Centrifugally Cast Concrete Column C45/55',
            loadBearing: true,
            lod: 'LOD 350'
          }, 0, 'Columns');
        }
      }

      // Massive Curtain Facade Front
      const frontCurtainGeo = new THREE.BoxGeometry(19.6, 6.0, 0.1);
      const frontCurtain = new THREE.Mesh(frontCurtainGeo, getElementMaterial('glazing'));
      frontCurtain.position.set(0, 3.4, 6.8);
      addBimElement(frontCurtain, {
        id: 'CW-DOUBLE-HEIGHT',
        name: 'Double-Skin Structural Glazing Facade (Atrium)',
        category: 'Glazing',
        standard: 'DIN EN 13830',
        material: 'Triple Insulating Solar Control Glass with Cavity Ventilation',
        uValue: '0.70 W/(m²K)',
        gValue: '0.38 (High Solar Rejection for Overheating Prevention)',
        lod: 'LOD 350'
      }, 1, 'Glazing');

      // Solid Back & Side Insulated Sandwich Panels
      const backWallGeo = new THREE.BoxGeometry(20, 6.0, 0.35);
      const backWall = new THREE.Mesh(backWallGeo, getElementMaterial('wall_ext'));
      backWall.position.set(0, 3.4, -6.8);
      addBimElement(backWall, {
        id: 'WALL-SANDWICH-NORTH',
        name: 'Composite Architectural Insulated Facade Panel',
        category: 'Exterior Wall',
        thickness: '250 mm Polyurethane Core Sandwich Element',
        uValue: '0.15 W/(m²K)',
        lod: 'LOD 300'
      }, 1, 'Walls');

      // Roof Slab with Solar Array area
      const cRoofGeo = new THREE.BoxGeometry(20.5, 0.4, 14.5);
      const cRoof = new THREE.Mesh(cRoofGeo, getElementMaterial('roof'));
      cRoof.position.set(0, 6.6, 0);
      addBimElement(cRoof, {
        id: 'ROOF-COMMERCIAL-EXTENSIVE',
        name: 'Extensive Green Roof Assembly with Retention Layer',
        category: 'Roof',
        standard: 'FLL Green Roof Guidelines / GEG',
        thickness: '450 mm Extensive Substrate + PIR + Reinforced Concrete',
        uValue: '0.12 W/(m²K)',
        lod: 'LOD 350'
      }, 2, 'Roof');
    }
  }, []);

  // Re-build model when selectedPreset changes
  useEffect(() => {
    buildModel(selectedPreset);
  }, [selectedPreset, buildModel]);

  // Apply Explode Animation / Separation along Y axis
  useEffect(() => {
    const bimGroup = bimObjectsGroupRef.current;
    if (!bimGroup) return;

    bimGroup.children.forEach((mesh) => {
      if (mesh.userData && typeof mesh.userData.storey === 'number') {
        const storey = mesh.userData.storey;
        const initialY = mesh.userData.initialY ?? mesh.position.y;
        // explode factor: storey 0 stays grounded, storey 1 lifts up, storey 2 lifts higher
        const liftDistance = 3.5;
        mesh.position.y = initialY + (storey * liftDistance * explodeProgress);
      }
    });
  }, [explodeProgress]);

  // Apply View Mode (Materials: Standard, Thermal, X-Ray, Wireframe)
  useEffect(() => {
    const bimGroup = bimObjectsGroupRef.current;
    if (!bimGroup) return;

    bimGroup.children.forEach((mesh) => {
      if (!mesh.userData) return;

      const cat = mesh.userData.category;
      const uValStr = mesh.userData.uValue || '';
      // Parse numerical U-value if present
      const match = uValStr.match(/([0-9]+\.[0-9]+)/);
      const uVal = match ? parseFloat(match[1]) : null;

      if (viewMode === 'wireframe') {
        mesh.material = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          wireframe: true,
        });
      } else if (viewMode === 'xray') {
        const isGlazing = cat === 'Glazing';
        mesh.material = new THREE.MeshStandardMaterial({
          color: isGlazing ? 0x06b6d4 : (cat === 'Columns' || cat === 'Slabs' ? 0x0284c7 : 0x94a3b8),
          opacity: cat === 'Columns' ? 0.95 : 0.22,
          transparent: true,
          roughness: 0.3,
          metalness: 0.1,
          depthWrite: cat === 'Columns',
        });
      } else if (viewMode === 'thermal') {
        // Color mapping for building energy audit & thermal envelope heat loss:
        // Deep Green: Super Insulated (U <= 0.20)
        // Cyan / Teal: Well insulated (U <= 0.35)
        // Yellow / Amber: Moderate heat loss / Glazing (U <= 0.85)
        // Bright Orange: Higher loss (U <= 1.5)
        // Crimson Red: Thermal bridge / Uninsulated envelope (U > 1.5)
        let thermalColor = 0x10b981; // default green
        if (uVal !== null) {
          if (uVal <= 0.20) thermalColor = 0x10b981; // optimal
          else if (uVal <= 0.35) thermalColor = 0x06b6d4; // good
          else if (uVal <= 0.85) thermalColor = 0xf59e0b; // moderate / triple glazing
          else if (uVal <= 1.5) thermalColor = 0xf97316; // noticeable heat loss
          else thermalColor = 0xef4444; // severe heat loss
        } else if (cat === 'Columns' || cat === 'Partitions') {
          thermalColor = 0x64748b; // neutral interior
        }

        mesh.material = new THREE.MeshStandardMaterial({
          color: thermalColor,
          roughness: 0.4,
          metalness: 0.2,
          side: THREE.DoubleSide,
        });
      } else {
        // Standard view: restore original material
        mesh.material = mesh.userData.originalMaterial;
      }
    });
  }, [viewMode]);

  // Handle Category Visibility & Storey Isolation
  useEffect(() => {
    const bimGroup = bimObjectsGroupRef.current;
    if (!bimGroup) return;

    bimGroup.children.forEach((mesh) => {
      if (!mesh.userData) return;
      const cat = mesh.userData.category;
      const storey = mesh.userData.storey;

      let visible = true;
      if (hiddenCategories && hiddenCategories.has(cat)) {
        visible = false;
      }
      if (isolatedStorey !== null && storey !== isolatedStorey) {
        visible = false;
      }
      mesh.visible = visible;
    });
  }, [hiddenCategories, isolatedStorey]);

  // Handle Raycasting / Selection
  const handlePointerDown = (event) => {
    const container = containerRef.current;
    if (!container || !cameraRef.current || !bimObjectsGroupRef.current) return;

    const rect = container.getBoundingClientRect();
    mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const visibleObjects = bimObjectsGroupRef.current.children.filter(o => o.visible);
    const intersects = raycasterRef.current.intersectObjects(visibleObjects, false);

    if (intersects.length > 0) {
      const hit = intersects[0].object;
      if (hit.userData && hit.userData.id) {
        if (onSelectElement) {
          onSelectElement(hit.userData);
        }
      }
    }
  };

  // Preset Camera View Presets (External control trigger)
  useEffect(() => {
    const handleCameraPreset = (e) => {
      const preset = e.detail;
      const camera = cameraRef.current;
      const controls = controlsRef.current;
      if (!camera || !controls) return;

      if (preset === 'iso') {
        camera.position.set(18, 14, 22);
        controls.target.set(0, 3, 0);
      } else if (preset === 'top') {
        camera.position.set(0, 32, 0.01);
        controls.target.set(0, 0, 0);
      } else if (preset === 'front') {
        camera.position.set(0, 4, 30);
        controls.target.set(0, 3, 0);
      } else if (preset === 'side') {
        camera.position.set(30, 4, 0);
        controls.target.set(0, 3, 0);
      } else if (preset === 'reset') {
        camera.position.set(18, 14, 22);
        controls.target.set(0, 3, 0);
      }
      camera.lookAt(controls.target);
      controls.update();
    };

    window.addEventListener('bim-camera-preset', handleCameraPreset);
    return () => window.removeEventListener('bim-camera-preset', handleCameraPreset);
  }, []);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      className="relative w-full h-full cursor-grab active:cursor-grabbing select-none"
    >
      {/* Viewport Overlay Hints */}
      <div className="absolute top-4 left-4 pointer-events-none flex flex-col gap-1 z-10">
        <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-md border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          WebGL BIM Engine &bull; {selectedPreset ? selectedPreset.toUpperCase() : 'RESIDENTIAL VILLA'}
        </div>
        <div className="text-[11px] text-slate-400 font-mono pl-1">
          Click any element to inspect BIM parameters &bull; Drag to orbit &bull; Scroll to zoom
        </div>
      </div>
    </div>
  );
}
