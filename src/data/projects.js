export const projects = [
  {
    id: 'proj-01',
    title: 'Bildhauuser Hof Estate',
    subTitle: '2D CAD to 3D Thermal Envelope & Heizlastberechnung',
    location: 'Baden-Württemberg, Germany',
    category: 'Energy Audit',
    lod: 'LOD 300',
    type: 'Historic Refurbishment / Multi-Family',
    area: '2,840 m²',
    year: '2025',
    software: ['ArchiCAD', 'Solar-Computer', 'AutoCAD 2D'],
    standards: ['DIN EN 12831', 'GEG 2024', 'KfW Effizienzhaus 55'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    summary: 'Conversion of historic 19th-century 2D paper blueprints and fragmented CAD surveys into a watertight 3D thermal envelope for comprehensive heating load calculation (Heizlast) and thermal bridge mitigation.',
    challenge: 'Irregular masonry wall thicknesses (38cm to 65cm), varying ceiling heights across split levels, and missing sectional data for unheated roof eaves.',
    solution: 'Engineered a millimeter-precise 3D architectural shell in ArchiCAD with custom composite wall assemblies, calibrated room-by-room thermal boundary areas (A/V ratio: 0.38 m⁻¹), and exported clean IFC2x3 boundary definitions for direct simulation.',
    deliverables: [
      'Complete 3D As-Built Architectural BIM Model',
      'Automated Raum-Buch (Room Schedule with net volumes & transmission loss)',
      'Thermal Transmission Envelope Mapping (U-values: 0.18 - 1.25 W/m²K)',
      'IFC 2x3 Coordination & DIN EN 12831 Compliance Report'
    ],
    stats: {
      volume: '8,420 m³',
      thermalZones: '46 Rooms',
      energyReductionPotential: '42%'
    }
  },
  {
    id: 'proj-02',
    title: 'August Borsig Tech Quarter',
    subTitle: 'Architectural Design Development & Glazing Studies',
    location: 'Konstanz, Germany',
    category: 'Architectural BIM',
    lod: 'LOD 350',
    type: 'Commercial & Innovation Hub',
    area: '6,450 m²',
    year: '2024',
    software: ['Revit', 'ArchiCAD', 'Enscape'],
    standards: ['DIN 277', 'ISO 19650', 'DGNB Gold'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    summary: 'High-precision architectural BIM modeling for a contemporary commercial innovation campus featuring timber-hybrid construction, double-skin glass facades, and modular office partitions.',
    challenge: 'Complex solar shading fins integrated into a faceted curtain wall with stringent daylight autonomy requirements.',
    solution: 'Modeled detailed parametric architectural elements with nested window families and adaptive curtain wall panels, delivering accurate construction document sets (LOD 350) and solar incidence visualization.',
    deliverables: [
      'Multi-storey Architectural BIM (Revit & ArchiCAD)',
      'LOD 350 Construction Detail Drawings (1:50 scale)',
      'Window-to-Wall Ratio (WWR) Schedule & Daylighting Views',
      'Area Computation per DIN 277 (BGF, NRF, BRI)'
    ],
    stats: {
      volume: '22,100 m³',
      storeys: '5 Levels + Underground',
      solarGainOptimization: '28%'
    }
  },
  {
    id: 'proj-03',
    title: 'Bruderhofstraße Multi-Unit Complex',
    subTitle: '2D-to-3D Energy Audit & Envelope Verification',
    location: 'Munich (München), Germany',
    category: 'Energy Audit',
    lod: 'LOD 300',
    type: 'Residential Multi-Family (3 Buildings)',
    area: '4,120 m²',
    year: '2025',
    software: ['ArchiCAD', 'Hottgenroth', 'AutoCAD'],
    standards: ['GEG 2024', 'DIN V 18599', 'BEG Einzelmaßnahmen'],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    summary: 'Reconstruction of 3 residential apartment blocks from legacy 2D floor plans into unified 3D thermal zone geometry for energetic modernization subsidy appraisal.',
    challenge: 'Resolving discrepancies between 1970s structural 2D plans and subsequent window replacement alterations across 36 residential units.',
    solution: 'Created an audit-ready BIM model featuring standardized composite layers (WDVS facade insulation, roof insulation), thermal perimeter tracking, and automated Gross External Volume (Ve) extraction.',
    deliverables: [
      '3D Energetic As-Built Architectural Model',
      'Room-by-room heating requirement schedule',
      'Component-wise U-Value Matrix (Floor slab, Exterior walls, Fenestration, Roof)',
      'Subsidy-compliant Energy Certificate (Bedarfsausweis) 3D input geometry'
    ],
    stats: {
      volume: '11,890 m³',
      thermalZones: '72 Zones',
      plannedEfficiency: 'KfW 40'
    }
  },
  {
    id: 'proj-04',
    title: 'Frings Industrial & Logistics Hall EH-55',
    subTitle: 'Structural Envelope & Architectural Execution Model',
    location: 'North Rhine-Westphalia, Germany',
    category: 'Architectural BIM',
    lod: 'LOD 350',
    type: 'Industrial Logistics & Office Pavilion',
    area: '5,300 m²',
    year: '2025',
    software: ['ArchiCAD', 'Revit'],
    standards: ['KfW 55', 'DIN 4108', 'ISO 19650'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    summary: 'LOD 350 architectural execution and envelope modeling for an industrial production hall with attached two-storey administrative wing, achieving KfW 55 energy efficiency standards.',
    challenge: 'Minimizing thermal bridging at steel column penetrations through insulated sandwich panel envelopes and loading dock seals.',
    solution: 'Detailed 3D junction modeling of thermal breaks at column footings and sandwich panel joints with seamless 2D detail callouts.',
    deliverables: [
      'Architectural Production Model (.pln & .ifc)',
      'Envelope & Cladding Shop Drawing Integration',
      'Industrial Floor Slab & Foundation Thermal Insulation Model',
      'Quantity Takeoff (QTO) for Facade & Glazing Packages'
    ],
    stats: {
      volume: '34,500 m³',
      clearHeight: '9.2 m',
      envelopeTightness: 'n50 < 0.8 /h'
    }
  },
  {
    id: 'proj-05',
    title: 'Ferien Wohnhaus Altstetter',
    subTitle: 'Timber-Hybrid Alpine Residence Architectural BIM',
    location: 'Bavarian Alps, Germany',
    category: 'Architectural BIM',
    lod: 'LOD 300',
    type: 'High-End Alpine Residential',
    area: '480 m²',
    year: '2024',
    software: ['ArchiCAD', 'Rhino'],
    standards: ['GEG 2024', 'SIA 380/1'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    summary: 'Custom timber-frame holiday residence modeled with complex pitched gables, triple-glazed panorama curtain walls, and thermal mass optimization.',
    challenge: 'Steep alpine slope topography requiring split-level foundation stepped into bedrock with strict frost insulation boundaries.',
    solution: 'Precise terrain digital elevation integration with split-level architectural modeling and integrated sun-path optimization.',
    deliverables: [
      'Complete Architectural Design BIM Model',
      'Topography & Retaining Wall Coordination',
      'Timber Frame Structural Geometry',
      'Photorealistic Exterior & Interior Visualizations'
    ],
    stats: {
      volume: '1,620 m³',
      glazingRatio: '34%',
      heatingDemand: '< 30 kWh/(m²a)'
    }
  },
  {
    id: 'proj-06',
    title: 'Hallenbad Walddorf Recreation Center',
    subTitle: 'Envelope Refurbishment & Thermal Zone Modeling',
    location: 'Baden-Württemberg, Germany',
    category: 'Energy Audit',
    lod: 'LOD 350',
    type: 'Public Aquatic & Leisure Facility',
    area: '3,200 m²',
    year: '2026',
    software: ['ArchiCAD', 'Revit', 'AutoCAD 2D'],
    standards: ['DIN EN 12831', 'VDI 2089', 'GEG'],
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    summary: 'Reconstruction from archived 1980s microfiche 2D drawings into an audited 3D thermal envelope model to evaluate high-humidity indoor climate insulation retrofits.',
    challenge: 'High indoor temperatures (30°C) and water surface evaporation requiring vapor-tight envelope detailing and moisture-resistant insulation planes.',
    solution: 'Constructed multi-layered thermal boundary BIM components including vapor barrier coordinates, glulam roof truss geometries, and pool basin perimeter insulation.',
    deliverables: [
      'Full As-Built Envelope Reconstruction (.pln, .ifc)',
      'Thermal Boundary Area Schedules (DIN 18599-compliant)',
      'Condensation Risk Surface Temperature Verification',
      'Retrofit Scenario Visualizations (Baseline vs. Upgraded)'
    ],
    stats: {
      volume: '16,800 m³',
      indoorPoolArea: '625 m²',
      heatLossReduction: '38%'
    }
  }
];

export const capabilities = [
  {
    id: 'arch-bim',
    title: 'Architectural 3D BIM Modeling',
    shortDesc: 'Precision LOD 200 to 400 architectural models generated in ArchiCAD and Revit with compliant documentation.',
    points: [
      'Full architectural BIM authoring (Walls, Slabs, Roofs, Curtain Walls, Joinery)',
      'Generation of 1:50 & 1:100 architectural drawing sets & detail callouts',
      'Parametric families and GDL objects tailored to European construction standards',
      'OpenBIM IFC 2x3 & IFC4 export with classification schemas (DIN 277, OmniClass)'
    ]
  },
  {
    id: 'energy-audit',
    title: '2D-to-3D Energy Audit & Thermal Envelopes',
    shortDesc: 'Converting legacy 2D blueprints into validated 3D thermal envelopes for heating load calculations (Heizlastberechnung).',
    points: [
      'Precise translation of paper plans, PDFs, and 2D DWG/DXF to 3D BIM',
      'Room-by-room boundary area extraction (A/V ratio, net thermal volume Ve)',
      'Standard-compliant thermal model setup for DIN EN 12831, GEG, and DIN V 18599',
      'Detailed composite material mapping: U-values, thermal mass, and envelope orientation'
    ]
  },
  {
    id: 'as-built',
    title: 'As-Built Documentation & Digital Twins',
    shortDesc: 'Creating faithful digital representations of existing residential and commercial building stocks.',
    points: [
      'Correction of on-site discrepancies versus historical drawings',
      'Watertight geometry ready for energy simulation and building physics software',
      'Automated Raumbuch (Room Schedules) with floor finishes, ceiling heights, and volumes',
      'Streamlined handover formats (.pln, .bpn, .ifc, .rvt)'
    ]
  }
];
