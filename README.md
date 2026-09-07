# The Ribhus (theribhus.com) – 3D Architectural BIM & Energy Audit Portfolio

A high-performance, interactive 3D BIM (Building Information Modeling) portfolio web application created from scratch for **The Ribhus** (`theribhus.com`).

Engineered specifically for:
- **Architectural 3D BIM Modeling** (LOD 200 – LOD 400 execution models)
- **2D CAD to 3D Structural / Building Envelope Reconstruction for Energy Audits & Heating Load Calculations** (*Heizlastberechnung* per DIN EN 12831 & GEG)
- **No MEP Clutter** — Zero MEP overhead, focused exclusively on architectural envelopes, structural geometry, thermal zones, and building physics.

---

## Key Features

1. **Interactive 3D WebGL BIM Studio Viewport (`Three.js`)**:
   - **Full Orbit & Axonometric Navigation**: Smooth damping, camera presets (Isometric, Top / Floor Plan, Front Elevation, Right Side, Reset).
   - **Preset BIM Models**:
     - *Modern Residential Villa (LOD 350)*: Concrete core, triple glazing, flat warm roof, cantilevered timber deck.
     - *Historic As-Built Reconstruction*: Segmented masonry walls, unheated attic, heating load analysis (DIN EN 12831).
     - *Commercial Innovation Pavilion*: Atrium curtain walls, concrete column grid, extensive green roof.
   - **Storey Explosion (Exploded Axonometric)**: Real-time dynamic slider separating ground floor, upper storey, and roof along the Y-axis.
   - **Dynamic Cross-Section / Clipping Plane**: Interactive slicing tool along horizontal and vertical axes to reveal internal slab build-ups.
   - **Viewing Modes**:
     - *Arch (Standard)*: Photorealistic architectural materials & glazing.
     - *Energy (Thermal Mode)*: Dynamic heat loss color gradient mapped to element U-values ($W/m^2K$).
     - *Ghost (X-Ray)*: Translucent exterior envelope revealing load-bearing structural columns and floor slabs.
     - *Wire (Blueprint)*: Cyber-cyan wireframe edges.
   - **Solar Study / Sun Azimuth**: Real-time directional sun slider (0° to 360°) casting dynamic soft shadows.
   - **Interactive Element Inspector**: Click any 3D wall, slab, column, or glazing to inspect its area ($m^2$), net volume ($m^3$), U-value, material layers, fire rating (REI 90), and thermal boundary zone.

2. **2D-to-3D Energy Audit Reconstruction Pipeline**:
   - Interactive 5-phase methodology detailing paper blueprint ingestion, watertight thermal boundary reconstruction, material U-value assignment, room-by-room thermal zoning (Raumbuch), and openBIM IFC handover for *Solar-Computer* & *Hottgenroth*.

3. **Curated Case Studies & Modal Inspector**:
   - High-fidelity projects with German & European norm compliance: *Bildhauuser Hof Estate*, *August Borsig Tech Quarter*, *Bruderhofstraße Complex*, *Frings Industrial Hall EH-55*, *Ferien Wohnhaus Altstetter*, and *Hallenbad Walddorf*.
   - Filter by typology or search by software / norm.

4. **Standards & Regulatory Compliance**:
   - Dedicated coverage for DIN EN 12831-1 (Heizlast), GEG 2024 (Gebäudeenergiegesetz), DIN V 18599, DIN 4108 (Wärmebrücken), and DIN 277 (BGF, NRF, BRI).

5. **Interactive Project Scope & Fee Estimator**:
   - Real-time turnaround time estimation based on gross floor area ($m^2$), input drawing types, and target deliverables with celebratory confetti submission.

---

## Tech Stack

- **Framework**: React 18 / 19
- **Build Tool**: Vite 6
- **3D Graphics**: Three.js 0.160 with custom WebGL lighting, shadows, raycasting, and clipping
- **Styling**: Tailwind CSS with custom blueprint grids, dark mode glassmorphism, and responsive layout
- **Icons**: Lucide React
- **Animations & Effects**: Canvas-Confetti

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory ready to be deployed to Vercel, Netlify, or GitHub Pages.

### 4. Preview Production Build
```bash
npm run preview
```
