export const heroContent = {
  h1: "Every 2D plan becomes an accurate 3D BIM model.",
  subHeadline: "Scanned paper drawings, rough PDF blueprints, or 2D CAD files — we convert them into production-ready ArchiCAD and Revit 3D architectural models. Built specifically for architects, real estate planners, and building energy consultants across Europe. Fast, reliable, and strictly dimensional.",
  badges: [
    { label: "Fast Turnaround", detail: "Delivered in 24–48 hours", icon: "Clock" },
    { label: "Native Formats", detail: "ArchiCAD (.pln), Revit (.rvt), IFC, and DWG", icon: "FileCode" },
    { label: "Focused Scope", detail: "Pure Architectural LOD 200 / LOD 300 (No bloated MEP overhead)", icon: "Layers" }
  ]
};

export const pricingCards = [
  {
    id: "residential-small",
    title: "Single-Family Homes & Small Residential",
    price: "€180 – €290",
    priceNote: "Per Unit",
    idealFor: "Energy consultants (Energieberater), private architects, renovation planning.",
    turnaround: "24–48 Hours",
    popular: true,
    features: [
      "Clean exterior & interior architectural envelope",
      "Exact wall, window, door, and roof geometry",
      "Level-accurate height references and floor datums",
      "Delivered in native ArchiCAD (.pln), Revit (.rvt), and IFC",
      "Watertight thermal boundary ready for energy calculation"
    ]
  },
  {
    id: "multi-story",
    title: "Multi-Story Residential & Apartment Buildings",
    price: "€450 – €950+",
    priceNote: "Based on floors & complexity",
    idealFor: "Property developers, real estate agencies, multi-family housing renovations.",
    turnaround: "3–5 Business Days",
    popular: false,
    features: [
      "Complete multi-story architectural volume & structural slabs",
      "Floor-by-floor room zoning and boundary areas (DIN 277)",
      "Window and door takeoff schedules",
      "Export-ready openBIM IFC geometry with validated classifications",
      "2D drawing sets (Plans, Elevations, Sections) extraction"
    ]
  },
  {
    id: "studio-retainer",
    title: "Ongoing Monthly Volume (Studio Retainer)",
    price: "From €1,500",
    priceNote: "Per Month",
    idealFor: "Growing European studios and energy audit practices that need dedicated weekly drafting capacity without local hiring costs.",
    turnaround: "Guaranteed 24h Queue Response",
    popular: false,
    features: [
      "Dedicated senior architectural BIM modeler",
      "Direct Slack / Teams communication & sprint alignment",
      "Flexible volume: single-family houses, additions, multi-units",
      "Custom template integration with your office layers & GDL objects",
      "Zero local employment overhead or hardware costs"
    ]
  }
];

export const showcaseItems = [
  {
    id: 1,
    image: "assets/portfolio/1_Single_Family_Home_LOD200.jpg",
    title: "Modern Single-Family House (Einfamilienhaus)",
    scope: "2D PDF to 3D BIM (LOD 200 Architectural Volume)",
    software: "ArchiCAD / IFC",
    primaryUse: "Thermal envelope calculation for energy consulting & permit presentation.",
    turnaround: "24 Hours",
    specs: "LOD 200 | Single-Family | 280 m² BGF",
    deliverables: [
      "Full 3D Architectural Envelope (.pln & .ifc)",
      "Continuous Thermal Boundary Area Schedule",
      "Gross Volume (Ve) & A/Ve Compactness Ratio",
      "Watertight geometry ready for Solar-Computer & Hottgenroth"
    ]
  },
  {
    id: 2,
    image: "assets/portfolio/2_Multi_Story_Residential_LOD300.jpg",
    title: "Urban Multi-Story Residential Building",
    scope: "2D CAD Drawings to 3D Architectural Model (LOD 300)",
    software: "Autodesk Revit / ArchiCAD",
    primaryUse: "Space planning, facade visualization, and accurate volumetric takeoffs.",
    turnaround: "3 Business Days",
    specs: "LOD 300 | Multi-Story | 1,850 m² BGF",
    deliverables: [
      "Multi-level Architectural Model (.rvt & .pln)",
      "Facade & Ribbon Window Detailing",
      "Floor-by-Floor Gross & Net Room Areas (DIN 277)",
      "OpenBIM IFC4 Coordination Model"
    ]
  },
  {
    id: 3,
    image: "assets/portfolio/3_Architectural_Floorplan_3D.jpg",
    title: "Detailed 3D Architectural Floor Layout",
    scope: "2D Survey Sketch to Detailed 3D Visual Plan",
    software: "ArchiCAD & High-Res Presentation Render",
    primaryUse: "Real estate sales brochures, tenant planning, and interior layout review.",
    turnaround: "24–48 Hours",
    specs: "Presentation BIM | Interior Layout | 165 m²",
    deliverables: [
      "Color-coded 3D Axonometric Floor Cutaway",
      "High-Resolution Marketing & Sales Brochure Graphics",
      "Dimensioned Room Schedule & Circulation Flow",
      "Furnishing and Joinery Layout Verification"
    ]
  }
];

export const projectTypeOptions = [
  "Residential (Single-Family / Villa)",
  "Multi-Family / Residential Complex",
  "Commercial & Office Space",
  "Building Energy Audit / Consulting (Energieberatung)",
  "Other"
];
