export const bimPresets = [
  {
    id: 'residential-villa',
    name: 'Modern Contemporary Residence',
    subtitle: 'LOD 350 Architectural Model with Insulated Envelope',
    type: 'Residential (KfW 40 Standard)',
    storeys: 2,
    footprint: '14.0m × 10.0m',
    grossVolume: '880 m³',
    heatedArea: '260 m²',
    uValueAverage: '0.19 W/m²K',
    avRatio: '0.42 m⁻¹',
    description: 'Two-storey low-energy residential villa modeled to LOD 350. Features continuous thermal insulation boundary, concrete structural core, floor-to-ceiling triple glazing, and cantilevered upper canopy.',
    cameraPosition: [18, 14, 22],
    cameraTarget: [0, 3, 0]
  },
  {
    id: 'energy-audit-building',
    name: 'Historic As-Built Reconstruction',
    subtitle: '2D-to-3D Energy Audit & Heizlast (DIN EN 12831)',
    type: 'Multi-Family Retrofit',
    storeys: 3,
    footprint: '18.0m × 12.0m',
    grossVolume: '1,950 m³',
    heatedArea: '580 m²',
    uValueAverage: '0.34 W/m²K (Post-retrofit)',
    avRatio: '0.36 m⁻¹',
    description: 'Converted from legacy 1950s 2D drawings. Features thermal heat-loss zones, segmented exterior wall thicknesses, unheated roof attic, and basement thermal decoupling.',
    cameraPosition: [22, 16, 26],
    cameraTarget: [0, 4, 0]
  },
  {
    id: 'commercial-pavilion',
    name: 'Commercial Innovation Pavilion',
    subtitle: 'LOD 300 Architectural Steel & Glazed Envelope',
    type: 'Commercial / Office',
    storeys: 2,
    footprint: '20.0m × 14.0m',
    grossVolume: '1,680 m³',
    heatedArea: '490 m²',
    uValueAverage: '0.22 W/m²K',
    avRatio: '0.39 m⁻¹',
    description: 'Double-height central atrium, structural column grid, high-performance solar control curtain walling, and thermal buffer zones.',
    cameraPosition: [24, 18, 24],
    cameraTarget: [0, 3.5, 0]
  }
];

export const sampleBimProperties = {
  'EXT_WALL_INSULATED': {
    category: 'Exterior Wall (Thermal Envelope)',
    standard: 'DIN 4108-2 / GEG',
    thickness: '400 mm',
    material: '240mm Poroton T10 + 160mm Mineral Wool + Mineral Plaster',
    uValue: '0.18 W/(m²K)',
    fireRating: 'F90-AB (REI 90)',
    thermalConductivity: 'λ = 0.035 W/(m·K)',
    acousticRating: 'Rw = 52 dB',
    loadBearing: true,
    energyZone: 'Heated Envelope (+20°C)',
    lod: 'LOD 350'
  },
  'CURTAIN_GLAZING': {
    category: 'Curtain Wall / Glazing System',
    standard: 'DIN EN 14351-1',
    thickness: '52 mm Triple Glazing',
    material: 'Aluminium Thermal Break Frame + Argon Gas + Low-E Coating',
    uValue: '0.65 W/(m²K) (Ug) / 0.85 W/(m²K) (Uw)',
    gValue: '0.52 (Solar Gain Factor)',
    lightTransmittance: '71%',
    acousticRating: 'Rw = 42 dB',
    loadBearing: false,
    energyZone: 'Heated Envelope (+20°C)',
    lod: 'LOD 350'
  },
  'ROOF_INSULATION': {
    category: 'Flat Warm Roof Assembly',
    standard: 'DIN 18531 / GEG',
    thickness: '420 mm',
    material: 'EPDM Waterproofing + 200mm PIR Insulation + 200mm Reinforced Concrete Slab',
    uValue: '0.14 W/(m²K)',
    fireRating: 'B-s1, d0 / REI 120',
    thermalConductivity: 'λ = 0.022 W/(m·K)',
    loadBearing: true,
    energyZone: 'Top Thermal Envelope Limit',
    lod: 'LOD 350'
  },
  'SLAB_BASEMENT': {
    category: 'Ground Floor Slab against Soil',
    standard: 'DIN EN ISO 13370',
    thickness: '350 mm',
    material: '150mm XPS Perimeter Insulation + 200mm Concrete C25/30 + Screed',
    uValue: '0.22 W/(m²K)',
    fireRating: 'REI 120',
    loadBearing: true,
    energyZone: 'Bottom Thermal Boundary to Ground',
    lod: 'LOD 300'
  },
  'COLUMN_STRUCTURAL': {
    category: 'Structural Concrete Column',
    standard: 'Eurocode 2 / DIN EN 1992',
    dimensions: '300 × 300 mm',
    material: 'Reinforced Concrete C30/37 with Internal Rebar Cage',
    uValue: 'N/A (Interior Core)',
    fireRating: 'R 90',
    loadBearing: true,
    energyZone: 'Conditioned Interior Core',
    lod: 'LOD 350'
  },
  'INTERIOR_PARTITION': {
    category: 'Interior Partition Wall',
    standard: 'DIN 4103-1',
    thickness: '125 mm',
    material: 'Double Gypsum Board (2×12.5mm) + 75mm CW Studs + Acoustic Wool',
    uValue: 'N/A (Interior Partition)',
    fireRating: 'EI 60',
    acousticRating: 'Rw = 54 dB',
    loadBearing: false,
    energyZone: 'Interior Zone Divider',
    lod: 'LOD 300'
  }
};
