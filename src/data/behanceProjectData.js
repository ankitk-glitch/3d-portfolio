export const revitProjectData = {
  id: 'revit-modern-house-full-project',
  title: 'REVIT Modern House | Full Project',
  subtitle: 'A Study in Minimalism | BIM Driven Design',
  tagline: 'Modern Minimalist Residence: Space Planning & Architecture',
  client: 'Private Residential Client (Europe)',
  location: 'Munich Suburbs / Bavaria, Germany',
  software: ['Autodesk Revit 2024', 'Dynamo BIM', 'Enscape 3.5', 'OpenBIM IFC4'],
  lod: 'LOD 300 (Detailed Architectural BIM)',
  year: '2024–2026',
  stats: {
    views: '1,480+',
    appreciations: '142',
    drawingSheets: '10 Sheets',
    turnaround: '48 Hours'
  },
  overview: {
    description:
      'Development of an efficient spatial layout and refined exterior character. The project balances a fluid floor plan across private and social zones, integrating high-end functional amenities with distinct material selections.',
    pillars: [
      {
        title: 'Strategic Spatial Zoning',
        desc: 'Optimized floor plan separating 4 independent master bedrooms from a spacious, open-concept studio living area.'
      },
      {
        title: 'Material & Facade Detail',
        desc: 'Sharp architectural geometries wrapped in premium metal cladding for a sleek, contemporary finish.'
      },
      {
        title: 'Landscape & Water Features',
        desc: 'Curated site design integrating lush greenery with an artificial decorative waterfall and infinity pool to enhance visual depth.'
      }
    ],
    quantities: {
      plotArea: '840.0 m²',
      grossFloorArea: '342.5 m²',
      netUsableArea: '278.4 m²',
      heatedVolume: '965.0 m³',
      envelopeArea: '612.0 m²',
      compactnessRatio: '0.63 m⁻¹',
      energyStandard: 'KfW 40 / Passivhaus EnEV Standard'
    }
  },
  boards: [
    {
      id: 'board-01',
      number: '01',
      code: 'A-001',
      title: 'Project Cover & Orthographic 3D Axonometric View',
      badge: 'Orthographic 3D View :',
      type: '3d-render',
      image: 'assets/portfolio/modern_house_orthographic_3d.png',
      caption:
        'Complete property axonometric generated natively in Autodesk Revit 2024. Shows building massing, intensive green roof terrace, rear swimming pool with sun deck, sunken outdoor fire lounge, and perimeter landscaping.',
      specs: [
        { label: 'View Type', value: 'Orthographic Axonometric (30° / 60°)' },
        { label: 'BIM Platform', value: 'Autodesk Revit 2024' },
        { label: 'Level of Detail', value: 'LOD 300' },
        { label: 'Exterior Material', value: 'Charcoal Zinc Cladding & Cedar Slats' }
      ]
    },
    {
      id: 'board-02',
      number: '02',
      code: 'A-101',
      title: 'Ground Floor & Master Site Layout (Scale 1:100)',
      badge: 'Ground Floor Plan :',
      type: 'cad-plan',
      image: 'assets/drawings/floor_plan.jpg',
      caption:
        'Technical Ground Floor Plan (DIN 1356 compliant) showing structural concrete columns, thermal envelope boundary, entrance foyer, double-height living room, kitchen island, guest suite, double garage, and terrace connection to the pool.',
      specs: [
        { label: 'Drawing Scale', value: '1:100 @ A1 Format' },
        { label: 'Ground Floor GFA (BGF)', value: '185.2 m²' },
        { label: 'Living / Dining Area', value: '64.8 m² (Double-Height Void)' },
        { label: 'Exterior Terrace / Deck', value: '92.5 m² with Infinity Pool' }
      ]
    },
    {
      id: 'board-03',
      number: '03',
      code: 'A-102',
      title: 'Upper Floor & Intensive Green Roof Terrace (Scale 1:100)',
      badge: 'Upper Level & Roof Plan :',
      type: 'cad-plan',
      image: 'assets/portfolio/3_Architectural_Floorplan_3D.jpg',
      caption:
        'First Floor layout featuring 4 autonomous master bedroom suites, walk-in dressing areas, ensuite bathrooms, laundry chute, cantilevered balconies, and direct stair access to the intensive sedum green roof deck.',
      specs: [
        { label: 'First Floor GFA (BGF)', value: '157.3 m²' },
        { label: 'Bedrooms Count', value: '4 Master Suites with Ensuites' },
        { label: 'Green Roof Area', value: '88.0 m² (Sedum extensive / intensive)' },
        { label: 'Floor-to-Floor Height', value: '3.30 m' }
      ]
    },
    {
      id: 'board-04',
      number: '04',
      code: 'A-201',
      title: 'Transverse Building Section A-A (Scale 1:100)',
      badge: 'Building Section A-A :',
      type: 'cad-section',
      image: 'assets/drawings/section_drawing.jpg',
      caption:
        'Longitudinal and transverse building cutaway detailing foundation footings, basement crawlspace, reinforced concrete floor slabs, double-glazed curtain walls, acoustic ceilings, and insulated parapet capping.',
      specs: [
        { label: 'Section Datum', value: 'Section A-A Transverse' },
        { label: 'Clear Ceiling Height', value: '2.85 m (Ground) / 2.70 m (Level 1)' },
        { label: 'Slab Assembly', value: '240 mm RC Slab + 120 mm Screed & Underfloor Heating' },
        { label: 'Roof Slope', value: '2.0% towards internal concealed downpipes' }
      ]
    },
    {
      id: 'board-05',
      number: '05',
      code: 'A-301',
      title: 'Architectural Facade Elevations (North, South, East, West)',
      badge: 'Exterior Elevations :',
      type: 'cad-elevation',
      image: 'assets/drawings/elevation_drawing.jpg',
      caption:
        'North and South architectural elevations showcasing standing-seam dark zinc vertical siding, slimline structural triple-pane aluminum window mullions, frameless glass balustrades, and board-formed concrete base.',
      specs: [
        { label: 'Facade Cladding', value: 'Standing-seam dark zinc (Anthracite RAL 7016)' },
        { label: 'Glazing System', value: 'Triple Insulated Argon (Ug = 0.5 W/m²K)' },
        { label: 'Solar Shading', value: 'Motorized concealed Venetian blinds' },
        { label: 'Wall Height (Total)', value: '7.15 m above finished ground grade' }
      ]
    },
    {
      id: 'board-06',
      number: '06',
      code: 'A-401',
      title: '3D Exploded Axonometric & Model Organisation',
      badge: 'Exploded BIM Hierarchy :',
      type: 'exploded-3d',
      image: 'assets/drawings/axonometric_exploded.jpg',
      caption:
        'Exploded axonometric visualization demonstrating clean BIM level hierarchy in Revit. Illustrates the structural separation of the foundation, ground floor slab, level 1 framing, and the rooftop pergola deck.',
      specs: [
        { label: 'Separation Levels', value: '4 Discrete BIM Assemblies' },
        { label: 'Family Parameterization', value: '100% Native System Families' },
        { label: 'Thermal Zone Tags', value: 'Assigned for DIN EN 12831 simulation' },
        { label: 'Coordination Check', value: 'Zero structural clashes / Solibri verified' }
      ]
    },
    {
      id: 'board-07',
      number: '07',
      code: 'A-501',
      title: 'LOD 300 Wall Section Detail & Building Physics Schedule',
      badge: 'Construction Assemblies :',
      type: 'detail-audit',
      image: 'assets/drawings/energy_audit_comparison.jpg',
      caption:
        'Watertight thermal envelope calculation table complying with DIN EN 12831-1 and GEG 2024. Summarizes component U-values, total surface area, and verified air tightness parameters.',
      specs: [
        { label: 'Exterior Wall U-Value', value: 'U = 0.16 W/m²K' },
        { label: 'Roof Deck U-Value', value: 'U = 0.12 W/m²K' },
        { label: 'Ground Slab U-Value', value: 'U = 0.18 W/m²K' },
        { label: 'Window Uw-Value', value: 'Uw = 0.78 W/m²K' }
      ]
    },
    {
      id: 'board-08',
      number: '08',
      code: 'A-601',
      title: 'Revit Quantities Takeoff & Component Schedules',
      badge: 'BIM QTO Schedules :',
      type: 'schedule-table',
      image: 'assets/portfolio/1_Single_Family_Home_LOD200.jpg',
      caption:
        'Automated Revit schedules extracting bill of quantities for concrete, thermal insulation, glazing square meters, internal partition drywall areas, and door/window counts for cost estimating.',
      specs: [
        { label: 'Concrete Volume', value: '142.6 m³ (C30/37)' },
        { label: 'Glazing Surface', value: '118.4 m² (Window-to-Wall Ratio: 32%)' },
        { label: 'Total Wall Area', value: '372.0 m² Gross Exterior' },
        { label: 'Door & Window Items', value: '28 Individual Scheduled Openings' }
      ]
    },
    {
      id: 'board-09',
      number: '09',
      code: 'A-701',
      title: 'Urban Multi-Story Residential Portfolio Reference',
      badge: 'Comparative Project :',
      type: 'urban-multi',
      image: 'assets/portfolio/2_Multi_Story_Residential_LOD300.jpg',
      caption:
        'Complementary urban multi-family residential building model delivered at LOD 300 with 12 residential units, automated gross area takeoffs, and subterranean parking.',
      specs: [
        { label: 'Building Typology', value: 'Urban Multi-Story Residential (4 Storeys)' },
        { label: 'Total GFA (BGF)', value: '1,120 m²' },
        { label: 'Revit LOD', value: 'LOD 300 with Full Interior Layout' },
        { label: 'Turnaround Time', value: '48 Hours' }
      ]
    }
  ]
};
