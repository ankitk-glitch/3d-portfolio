import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Printer, 
  Download, 
  Layers, 
  Building2, 
  Flame, 
  CheckCircle2, 
  FileText, 
  Mail, 
  Globe, 
  Maximize2,
  ZoomIn,
  Sparkles,
  Table
} from 'lucide-react';

export default function PortfolioBook({ onOpenProjectModal }) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = 10;

  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-10 space-y-6">
      {/* Book Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/90 border border-slate-700/80 p-3.5 rounded-2xl shadow-xl">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 rounded-lg bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-mono text-xs font-bold flex items-center gap-1.5">
            <FileText size={14} />
            <span>PORTFOLIO SHEET VIEW</span>
          </div>
          <span className="text-xs text-slate-300 font-mono">
            Sheet {currentPage + 1} of {totalPages}
          </span>
        </div>

        {/* Quick Page Jump Pills */}
        <div className="hidden md:flex items-center gap-1.5 text-[11px] font-mono">
          {[
            { idx: 0, label: 'Cover' },
            { idx: 1, label: 'Intro & Skills' },
            { idx: 2, label: 'P1: Overview' },
            { idx: 3, label: 'P1: Process & 3D' },
            { idx: 4, label: 'P1: Drawing Output' },
            { idx: 5, label: 'P1: Energy & Clash' },
            { idx: 6, label: 'P2: Commercial' },
            { idx: 7, label: 'P3: Energy Audit' },
            { idx: 8, label: 'P3: Raumbuch' },
            { idx: 9, label: 'Contact' },
          ].map((item) => (
            <button
              key={item.idx}
              onClick={() => setCurrentPage(item.idx)}
              className={`px-2.5 py-1 rounded-lg transition-colors ${
                currentPage === item.idx
                  ? 'bg-cyan-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Navigation & Print Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Previous Sheet"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Next Sheet"
          >
            <ChevronRight size={18} />
          </button>
          <button
            onClick={handlePrint}
            className="px-3 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors shadow-md"
            title="Print or Export as PDF"
          >
            <Printer size={15} />
            <span className="hidden sm:inline">Print / PDF</span>
          </button>
        </div>
      </div>

      {/* The Presentation Sheet Canvas (Clean Architectural White Board / Landscape A3 Aspect Ratio) */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[1.414/1] bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-300 select-none flex flex-col justify-between p-6 sm:p-10 font-sans print:shadow-none print:m-0 print:border-none print:w-full print:h-screen">
        
        {/* ============================================================ */}
        {/* SHEET 1: COVER PAGE                                         */}
        {/* ============================================================ */}
        {currentPage === 0 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Top Sheet Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                1. COVER PAGE &bull; SHEET 01
              </span>
              <span className="text-xs font-mono text-slate-600">
                THE RIBHUS &bull; theribhus.com
              </span>
            </div>

            {/* Cover Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-1 my-6">
              {/* Left Typography & Branding */}
              <div className="md:col-span-6 space-y-6">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-mono tracking-widest text-cyan-700 font-bold block">
                    BIM ARCHITECTURAL &amp; ENERGY AUDIT PORTFOLIO
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none">
                    THE RIBHUS
                  </h1>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-700 font-mono tracking-tight pt-1">
                    BIM SPECIALIST &amp; ARCHITECT
                  </h2>
                </div>

                <div className="w-20 h-1.5 bg-cyan-600"></div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                  High-Precision Architectural 3D BIM Modeling (LOD 200–400) and 2D CAD to 3D Watertight Building Envelope Reconstruction for Energy Audits &amp; Heating Load Calculations (<span className="font-mono font-semibold text-slate-900">DIN EN 12831 / GEG 2024</span>).
                </p>

                {/* Contact Strip */}
                <div className="pt-4 space-y-2 text-xs font-mono text-slate-700 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-cyan-700" />
                    <span>contact@theribhus.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-cyan-700" />
                    <span>https://theribhus.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 size={14} className="text-cyan-700" />
                    <span>Specialization: Architectural Modeling &amp; Energy Audits (No MEP)</span>
                  </div>
                </div>
              </div>

              {/* Right Hero Image (Angular Architectural Render Frame) */}
              <div className="md:col-span-6 h-full flex items-center justify-center">
                <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-950 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="assets/screenshots/ss4.png"
                    alt="Erich Bracher Schule Campus Hero Render"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 text-white">
                    <div className="text-[11px] font-mono text-cyan-400 font-bold uppercase">
                      LOD 400 Architectural Execution Model
                    </div>
                    <div className="text-sm font-bold">Erich Bracher Schule Complex</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sheet Metadata Bar */}
            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>ArchiCAD 28 &bull; OpenBIM IFC4 &bull; DIN EN 12831</span>
              <span>2024–2026 Selected Works</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SHEET 2: INTRODUCTION & SKILLS                              */}
        {/* ============================================================ */}
        {currentPage === 1 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                2. INTRODUCTION &amp; SKILLS &bull; SHEET 02
              </span>
              <span className="text-xs font-mono text-slate-600">
                THE RIBHUS &bull; theribhus.com
              </span>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-4">
              {/* Left Column: About & Photo */}
              <div className="md:col-span-5 space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md border border-slate-300">
                  <img
                    src="assets/screenshots/ss2.png"
                    alt="August Borsig Str. 6 Konstanz"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-mono text-cyan-300">
                    August Borsig Str. 6 &bull; LOD 350
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight">
                    About The Ribhus
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    BIM architectural studio specialized in delivering high-precision ArchiCAD &amp; Revit models, construction documentation sets (LOD 200–400), and translating 2D CAD surveys into watertight thermal envelopes for German &amp; European building energy audits.
                  </p>
                </div>
              </div>

              {/* Right Column: Software Skills & Certifications */}
              <div className="md:col-span-7 space-y-6">
                {/* Software Skills */}
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-cyan-600 rounded-sm"></span>
                    Software Skills &amp; BIM Stack
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-[10px]">A</span>
                        <span>ArchiCAD (v26–28)</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">3D modeling, GDL elements, composite assemblies, IFC mapping</p>
                    </div>

                    <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-blue-700 text-white flex items-center justify-center font-bold text-[10px]">R</span>
                        <span>Autodesk Revit</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Architectural execution modeling, parametric families, schedules</p>
                    </div>

                    <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-amber-600 text-white flex items-center justify-center font-bold text-[10px]">E</span>
                        <span>Solar-Computer &amp; Hottgenroth</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">DIN EN 12831 heating load, GEG energy certificate geometry</p>
                    </div>

                    <div className="p-3 rounded-xl border border-slate-200 bg-slate-50">
                      <div className="font-bold text-xs text-slate-900 flex items-center gap-2">
                        <span className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">O</span>
                        <span>OpenBIM IFC4 / 2x3</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1">Vendor-neutral coordination, classification &amp; property sets</p>
                    </div>
                  </div>
                </div>

                {/* Certifications & Norms */}
                <div>
                  <h3 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-600 rounded-sm"></span>
                    Regulatory Compliance &amp; Standards
                  </h3>
                  <div className="space-y-1.5 text-xs text-slate-700 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span><strong>DIN EN 12831-1:</strong> Room-by-room heating load calculation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span><strong>GEG 2024:</strong> Building Energy Act (Gebäudeenergiegesetz)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span><strong>DIN 277:2021:</strong> Areas &amp; Volumes (BGF, NRF, BRI takeoff)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-600" />
                      <span><strong>DIN 4108 Beiblatt 2:</strong> Thermal bridge mitigation modeling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>BIM Architect Portfolio</span>
              <span>Sheet 02 of 10</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SHEET 3: PROJECT 1 – OVERVIEW                               */}
        {/* ============================================================ */}
        {currentPage === 2 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                3. PROJECT 1 &bull; PROJECT OVERVIEW &bull; SHEET 03
              </span>
              <span className="text-xs font-mono text-slate-600">
                Erich Bracher Schule Campus
              </span>
            </div>

            {/* Main Project Overview Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-4 items-center">
              {/* Left Column: Metadata & Technical Scope */}
              <div className="md:col-span-5 space-y-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-800 border border-cyan-300">
                    LOD 400 PRODUCTION
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    Erich Bracher Schule
                  </h2>
                  <p className="text-xs font-mono text-slate-500">Educational Campus Complex &bull; 2025</p>
                </div>

                {/* Metadata Table */}
                <div className="space-y-1.5 font-mono text-xs border-y border-slate-200 py-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Project Type:</span>
                    <span className="font-bold text-slate-900">Educational &amp; Gymnasium</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Location:</span>
                    <span className="font-bold text-slate-900">Baden-Württemberg, Germany</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Gross Floor Area (BGF):</span>
                    <span className="font-bold text-cyan-700">8,800 m²</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Gross Volume (Ve):</span>
                    <span className="font-bold text-emerald-700">36,400 m³</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Scale:</span>
                    <span className="font-bold text-slate-900">4 Levels (G+3 Floors)</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>My Role:</span>
                    <span className="font-bold text-slate-900">Lead Architectural BIM Modeler</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>BIM Tools Used:</span>
                    <span className="font-bold text-slate-900">ArchiCAD 28, OpenBIM</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Execution-level LOD 400 architectural modeling for a public vocational school complex. Coordinated acoustic wall partitions, concrete structural slab levels, curtain wall facades, and life-safety egress layouts.
                </p>
              </div>

              {/* Right Column: Large Building Render */}
              <div className="md:col-span-7 h-full flex items-center justify-center">
                <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-950">
                  <img
                    src="assets/screenshots/ss4.png"
                    alt="Erich Bracher Schule 3D Perspective"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-slate-900/85 text-cyan-300 font-mono text-[10px] border border-cyan-500/30">
                    ArchiCAD 3D Model Viewport
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Project 01 &bull; Erich Bracher Schule</span>
              <span>Sheet 03 of 10</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SHEET 4: PROJECT 1 – MODEL ORGANISATION & PROCESS           */}
        {/* ============================================================ */}
        {currentPage === 3 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                3. PROJECT 1 &bull; MODEL ORGANISATION &amp; PROCESS &bull; SHEET 04
              </span>
              <span className="text-xs font-mono text-slate-600">
                Erich Bracher Schule
              </span>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-4 items-center">
              {/* Left Column: Project Browser & Hierarchy */}
              <div className="md:col-span-5 space-y-4">
                <h3 className="text-sm uppercase font-mono tracking-wider font-bold text-slate-900">
                  Model Organisation &amp; Layers
                </h3>

                {/* ArchiCAD / Revit Project Browser Tree Visual */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 font-mono text-xs space-y-2">
                  <div className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">
                    Project Browser / Hierarchy
                  </div>
                  <div className="space-y-1.5 text-[11px] text-slate-700">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <span>📁 Erich_Bracher_Schule.pln</span>
                    </div>
                    <div className="pl-4 space-y-1 text-slate-600">
                      <div>├─ 🏢 00. Fundament / Base (-3.20m)</div>
                      <div>├─ 🏢 01. Erdgeschoss (EG 0.00m)</div>
                      <div>├─ 🏢 02. Obergeschoss (1.OG +3.60m)</div>
                      <div>├─ 🏢 03. Obergeschoss (2.OG +7.20m)</div>
                      <div>└─ 🏢 04. Dachgeschoss (DG +10.80m)</div>
                    </div>
                    <div className="pt-2 border-t border-slate-200 font-bold text-slate-900">
                      <span>📁 Classification &amp; Disciplines</span>
                    </div>
                    <div className="pl-4 space-y-1 text-slate-600">
                      <div>├─ 🧱 Exterior Thermal Walls (5,400 m²)</div>
                      <div>├─ 🏗️ Concrete Structural Slabs (8,500 m²)</div>
                      <div>├─ 🪟 Curtain Wall Glazing (1,280 m²)</div>
                      <div>└─ 🚪 Doors &amp; Egress Openings (194 units)</div>
                    </div>
                  </div>
                </div>

                {/* BIM Workflow Steps */}
                <div className="space-y-1 pt-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">
                    BIM Workflow Pipeline
                  </span>
                  <div className="grid grid-cols-4 gap-1 text-[10px] font-mono text-center">
                    <div className="p-1.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 font-bold">1. Setup</div>
                    <div className="p-1.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 font-bold">2. Model</div>
                    <div className="p-1.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 font-bold">3. Coordinate</div>
                    <div className="p-1.5 rounded bg-cyan-50 border border-cyan-200 text-cyan-800 font-bold">4. Document</div>
                  </div>
                </div>
              </div>

              {/* Right Column: 3D Exploded Axonometric Model */}
              <div className="md:col-span-7 h-full flex items-center justify-center">
                <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-white p-2">
                  <img
                    src="assets/drawings/axonometric_exploded.jpg"
                    alt="3D Architectural Exploded Axonometric BIM Model"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-4 left-4 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-mono text-cyan-300">
                    3D Exploded Axonometric View
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Model Organisation &amp; 3D Axonometric Disassembly</span>
              <span>Sheet 04 of 10</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SHEET 5: PROJECT 1 – DRAWING OUTPUT (PLAN, SECTION, ELEVATION) */}
        {/* ============================================================ */}
        {currentPage === 4 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                3. PROJECT 1 &bull; DRAWING OUTPUT (2D CD SETS) &bull; SHEET 05
              </span>
              <span className="text-xs font-mono text-slate-600">
                Ground Floor Plan &bull; Section A-A &bull; North Elevation
              </span>
            </div>

            {/* Drawing Output 3-Box Architectural Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-auto py-2 flex-1 items-center">
              {/* Top Left: Ground Floor Plan */}
              <div className="md:col-span-6 h-[190px] sm:h-[220px] rounded-xl overflow-hidden border border-slate-300 bg-white shadow-sm p-1 flex flex-col justify-between">
                <div className="h-[85%] w-full overflow-hidden">
                  <img
                    src="assets/drawings/floor_plan.jpg"
                    alt="Ground Floor Plan Drawing"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="px-2 py-1 bg-slate-100 text-[10px] font-mono text-slate-700 flex justify-between">
                  <span className="font-bold">GROUND FLOOR PLAN</span>
                  <span>SCALE 1:100 @ A2</span>
                </div>
              </div>

              {/* Top Right: Section A-A */}
              <div className="md:col-span-6 h-[190px] sm:h-[220px] rounded-xl overflow-hidden border border-slate-300 bg-white shadow-sm p-1 flex flex-col justify-between">
                <div className="h-[85%] w-full overflow-hidden">
                  <img
                    src="assets/drawings/section_drawing.jpg"
                    alt="Building Section A-A Drawing"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="px-2 py-1 bg-slate-100 text-[10px] font-mono text-slate-700 flex justify-between">
                  <span className="font-bold">BUILDING SECTION A-A</span>
                  <span>SCALE 1:100</span>
                </div>
              </div>

              {/* Bottom Left: North Elevation */}
              <div className="md:col-span-7 h-[160px] sm:h-[180px] rounded-xl overflow-hidden border border-slate-300 bg-white shadow-sm p-1 flex flex-col justify-between">
                <div className="h-[82%] w-full overflow-hidden">
                  <img
                    src="assets/drawings/elevation_drawing.jpg"
                    alt="North Elevation Drawing"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="px-2 py-1 bg-slate-100 text-[10px] font-mono text-slate-700 flex justify-between">
                  <span className="font-bold">NORTH FACADE ELEVATION</span>
                  <span>SCALE 1:100</span>
                </div>
              </div>

              {/* Bottom Right: Door & Window Schedule / Raumbuch Table */}
              <div className="md:col-span-5 h-[160px] sm:h-[180px] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-2.5 flex flex-col justify-between font-mono text-[10px]">
                <div className="font-bold text-slate-900 border-b border-slate-200 pb-1 flex justify-between">
                  <span>ROOM &amp; MASS SCHEDULE (DIN 277)</span>
                  <span className="text-cyan-700">EXTRACTED</span>
                </div>
                <div className="space-y-1 overflow-y-auto text-slate-700 pr-1">
                  <div className="flex justify-between py-0.5 border-b border-slate-200">
                    <span>Living / Foyer Area</span>
                    <span className="font-bold">44.2 m²</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200">
                    <span>Kitchen &amp; Dining</span>
                    <span className="font-bold">25.0 m²</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200">
                    <span>Master Bedroom Suite</span>
                    <span className="font-bold">18.0 m²</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-200">
                    <span>Total Net Room Area (NRF)</span>
                    <span className="font-bold text-emerald-700">7,350 m²</span>
                  </div>
                </div>
                <div className="text-[9px] text-slate-400 text-right">Automated ArchiCAD Schedule</div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Architectural Construction Documents Output</span>
              <span>Sheet 05 of 10</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SHEET 6: PROJECT 1 – ENERGY AUDIT & CLASH COORDINATION      */}
        {/* ============================================================ */}
        {currentPage === 5 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                3. PROJECT 1 &bull; 2D-TO-3D ENERGY AUDIT &amp; HEATING LOAD &bull; SHEET 06
              </span>
              <span className="text-xs font-mono text-slate-600">
                DIN EN 12831 &bull; GEG 2024
              </span>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-3 items-center">
              {/* Left Column: Energy Audit Comparison Graphic */}
              <div className="md:col-span-7 h-full flex items-center justify-center">
                <div className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-white p-2">
                  <img
                    src="assets/drawings/energy_audit_comparison.jpg"
                    alt="2D CAD to 3D BIM Energy Audit Comparison"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-4 left-4 px-2 py-0.5 rounded bg-amber-950/80 text-[10px] font-mono text-amber-300 border border-amber-500/40">
                    2D Blueprint &rarr; 3D Thermal Zone Model
                  </div>
                </div>
              </div>

              {/* Right Column: Thermal Heat Loss Table & Resolution */}
              <div className="md:col-span-5 space-y-4 font-mono text-xs">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">
                    WATERTIGHT ENVELOPE VERIFIED
                  </span>
                  <h3 className="text-lg font-black text-slate-900 font-sans mt-1">
                    Heating Load &amp; Thermal Takeoff
                  </h3>
                  <p className="text-xs text-slate-600 font-sans mt-1">
                    Resolution of thermal gaps between 2D historical drawings and on-site geometry, resulting in an audited 3D thermal hull.
                  </p>
                </div>

                {/* Heat Loss Table */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 p-3 space-y-2">
                  <div className="font-bold text-[11px] text-slate-900 border-b border-slate-200 pb-1 flex justify-between">
                    <span>Component</span>
                    <span>U-Value (W/m²K)</span>
                  </div>
                  <div className="space-y-1.5 text-[11px] text-slate-700">
                    <div className="flex justify-between">
                      <span>Exterior Wall (WDVS)</span>
                      <span className="text-emerald-700 font-bold">0.18 W/m²K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Triple Glazing (Ug)</span>
                      <span className="text-cyan-700 font-bold">0.65 W/m²K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Roof Thermal Package</span>
                      <span className="text-emerald-700 font-bold">0.14 W/m²K</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Ground Slab Insulation</span>
                      <span className="text-slate-900 font-bold">0.22 W/m²K</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-sans space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-cyan-700" />
                    <span>Resolution Summary:</span>
                  </div>
                  <p className="text-[11px] text-cyan-800 leading-snug">
                    Watertight volume seal verified: A/Ve ratio calibrated at 0.24 m⁻¹. Direct export to Solar-Computer &amp; Hottgenroth with zero geometric polyloop errors.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Thermal Zone Modeling &amp; Energy Audit Compliance</span>
              <span>Sheet 06 of 10</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SHEET 7: PROJECT 2 – AUGUST BORSIG STR. 6 (COMMERCIAL)       */}
        {/* ============================================================ */}
        {currentPage === 6 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                4. PROJECT 2 &bull; COMMERCIAL INNOVATION &bull; SHEET 07
              </span>
              <span className="text-xs font-mono text-slate-600">
                August Borsig Str. 6, Konstanz
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-4 items-center">
              <div className="md:col-span-5 space-y-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-800 border border-cyan-300">
                    LOD 350 PRECHECK &amp; FACADE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    August Borsig Str. 6
                  </h2>
                  <p className="text-xs font-mono text-slate-500">Commercial &bull; 6,450 m² &bull; Konstanz</p>
                </div>

                <div className="space-y-1.5 font-mono text-xs border-y border-slate-200 py-3 text-slate-600">
                  <div className="flex justify-between">
                    <span>Gross Volume (Ve):</span>
                    <span className="font-bold text-slate-900">22,100 m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Curtain Facade Glazing:</span>
                    <span className="font-bold text-cyan-700">1,940 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Window-to-Wall Ratio:</span>
                    <span className="font-bold text-slate-900">36.0%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>File Formats:</span>
                    <span className="font-bold text-emerald-700">.ifc (10MB), .pln (72MB)</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  LOD 350 architectural execution and double-skin curtain wall coordination. Detailed parametric modeling of aluminium transom-mullion profiles, solar shading fins, and interior column grids.
                </p>
              </div>

              <div className="md:col-span-7 h-full flex items-center justify-center">
                <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-950">
                  <img
                    src="assets/screenshots/ss2.png"
                    alt="August Borsig Str. 6 Real Screenshot"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/85 text-cyan-300 font-mono text-[10px]">
                    Real ArchiCAD 3D Model Viewport
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Project 02 &bull; Commercial Administration</span>
              <span>Sheet 07 of 10</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SHEET 8: PROJECT 3 – BILDHUUUSER HOF (ENERGY AUDIT)         */}
        {/* ============================================================ */}
        {currentPage === 7 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                5. PROJECT 3 &bull; HEIZLASTBERECHNUNG &bull; SHEET 08
              </span>
              <span className="text-xs font-mono text-slate-600">
                Bildhauuser Hof Estate
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-4 items-center">
              <div className="md:col-span-5 space-y-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300">
                    2D-TO-3D ENERGY AUDIT
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    Bildhauuser Hof
                  </h2>
                  <p className="text-xs font-mono text-slate-500">Historic Refurbishment &bull; DIN EN 12831</p>
                </div>

                <div className="space-y-1.5 font-mono text-xs border-y border-slate-200 py-3 text-slate-600">
                  <div className="flex justify-between">
                    <span>Gross Floor Area (BGF):</span>
                    <span className="font-bold text-slate-900">2,840 m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thermal Envelope Vol (Ve):</span>
                    <span className="font-bold text-emerald-700">8,420 m³</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A/Ve Ratio:</span>
                    <span className="font-bold text-amber-700">0.38 m⁻¹</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thermal Zones:</span>
                    <span className="font-bold text-slate-900">46 Heated Rooms</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Model File:</span>
                    <span className="font-bold text-slate-900">Heizlastberechnung-Bildhauuser-Hof.pln</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  2D-to-3D reconstruction of historic 19th-century estate from faded archive blueprints into watertight 3D thermal boundary geometry. Extracted room schedules and U-values for energetic subsidy appraisal.
                </p>
              </div>

              <div className="md:col-span-7 h-full flex items-center justify-center">
                <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-950">
                  <img
                    src="assets/screenshots/ss8.png"
                    alt="Bildhauuser Hof Real Screenshot"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/85 text-amber-300 font-mono text-[10px]">
                    Real ArchiCAD Heizlastberechnung Model
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Project 03 &bull; Heating Load Calculation (Heizlast)</span>
              <span>Sheet 08 of 10</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SHEET 9: PROJECT 3 – RAUMBUCH & U-VALUES                     */}
        {/* ============================================================ */}
        {currentPage === 8 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                5. PROJECT 3 &bull; RAUMBUCH &amp; THERMAL MATRIX &bull; SHEET 09
              </span>
              <span className="text-xs font-mono text-slate-600">
                Bildhauuser Hof &bull; DIN EN 12831 Room Book
              </span>
            </div>

            <div className="my-auto py-4 space-y-6">
              <div>
                <h3 className="text-base font-black text-slate-900 uppercase font-mono">
                  Automated Raumbuch (Room Schedule per DIN EN 12831)
                </h3>
                <p className="text-xs text-slate-600">
                  Generated directly from ArchiCAD thermal zone geometry, providing net heated volume, floor area, design indoor temperatures, and transmission heat loss parameters.
                </p>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-slate-900 text-white text-[11px]">
                    <tr>
                      <th className="p-3">Room ID</th>
                      <th className="p-3">Designation</th>
                      <th className="p-3">Floor Area</th>
                      <th className="p-3">Height</th>
                      <th className="p-3">Net Volume</th>
                      <th className="p-3">Design Temp</th>
                      <th className="p-3">Heat Loss HT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700 text-[11px] bg-slate-50">
                    <tr>
                      <td className="p-2.5 font-bold text-cyan-800">EG-01</td>
                      <td className="p-2.5">Living / Dining Suite</td>
                      <td className="p-2.5">45.2 m²</td>
                      <td className="p-2.5">3.10 m</td>
                      <td className="p-2.5">140.1 m³</td>
                      <td className="p-2.5 text-slate-900 font-semibold">+20°C</td>
                      <td className="p-2.5 text-emerald-700 font-bold">2.1 kW</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-cyan-800">EG-02</td>
                      <td className="p-2.5">Kitchen &amp; Pantry</td>
                      <td className="p-2.5">25.0 m²</td>
                      <td className="p-2.5">3.10 m</td>
                      <td className="p-2.5">77.5 m³</td>
                      <td className="p-2.5 text-slate-900 font-semibold">+20°C</td>
                      <td className="p-2.5 text-emerald-700 font-bold">1.3 kW</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-cyan-800">1OG-01</td>
                      <td className="p-2.5">Master Bedroom</td>
                      <td className="p-2.5">18.0 m²</td>
                      <td className="p-2.5">2.90 m</td>
                      <td className="p-2.5">52.2 m³</td>
                      <td className="p-2.5 text-slate-900 font-semibold">+20°C</td>
                      <td className="p-2.5 text-emerald-700 font-bold">0.9 kW</td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-cyan-800">1OG-02</td>
                      <td className="p-2.5">Bathroom &amp; Sanitary</td>
                      <td className="p-2.5">11.5 m²</td>
                      <td className="p-2.5">2.90 m</td>
                      <td className="p-2.5">33.3 m³</td>
                      <td className="p-2.5 text-rose-700 font-bold">+24°C</td>
                      <td className="p-2.5 text-amber-700 font-bold">1.1 kW</td>
                    </tr>
                    <tr className="bg-slate-100 font-bold text-slate-900">
                      <td className="p-2.5" colSpan={2}>Total Heated Envelope (46 Rooms)</td>
                      <td className="p-2.5">2,290 m²</td>
                      <td className="p-2.5">—</td>
                      <td className="p-2.5 text-emerald-800">8,420 m³</td>
                      <td className="p-2.5">—</td>
                      <td className="p-2.5 text-emerald-800">42.8 kW</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Raumbuch &bull; Automated Area &amp; Volume Takeoffs</span>
              <span>Sheet 09 of 10</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SHEET 10: CONTACT PAGE (LET'S CONNECT)                      */}
        {/* ============================================================ */}
        {currentPage === 9 && (
          <div className="h-full flex flex-col justify-between animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                6. CONTACT PAGE &bull; SHEET 10
              </span>
              <span className="text-xs font-mono text-slate-600">
                THE RIBHUS &bull; theribhus.com
              </span>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-6 items-center">
              {/* Left Column: Let's Connect Info */}
              <div className="md:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block">
                    PROJECT INQUIRIES &amp; COLLABORATION
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-1">
                    LET'S CONNECT
                  </h2>
                  <div className="w-16 h-1.5 bg-cyan-600 mt-2"></div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                  Looking for a dedicated BIM partner for architectural modeling (LOD 200–400) or converting 2D legacy blueprints into simulation-ready energy audit models? Get in touch with The Ribhus team.
                </p>

                <div className="space-y-3 font-mono text-xs text-slate-800 border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 font-bold">@</span>
                    <div>
                      <span className="text-slate-400 block text-[10px]">DIRECT EMAIL</span>
                      <a href="mailto:contact@theribhus.com" className="font-bold text-slate-900 hover:text-cyan-700">contact@theribhus.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 font-bold">🌐</span>
                    <div>
                      <span className="text-slate-400 block text-[10px]">WEBSITE</span>
                      <a href="https://theribhus.com" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-cyan-700">theribhus.com</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-700 font-bold">📍</span>
                    <div>
                      <span className="text-slate-400 block text-[10px]">STUDIO LOCATION</span>
                      <span className="font-bold text-slate-900">New Delhi &bull; Serving European &amp; Global Clients</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Architectural Sketch / Wireframe Building */}
              <div className="md:col-span-6 h-full flex items-center justify-center">
                <div className="relative w-full h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-950 p-2">
                  <img
                    src="assets/screenshots/ss13.png"
                    alt="BB Decker Bornheim Architectural Model"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/85 backdrop-blur-md rounded-xl text-white font-mono text-[11px]">
                    <span className="text-cyan-400 font-bold">The Ribhus Extended BIM Pods</span> &bull; Fast, Accurate, Compliant
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>The Ribhus &copy; {new Date().getFullYear()}</span>
              <span>Sheet 10 of 10 &bull; End of Portfolio</span>
            </div>
          </div>
        )}

      </div>

      {/* Sheet Thumbnails Navigator Bar */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentPage === idx ? 'bg-cyan-400 w-8' : 'bg-slate-700 hover:bg-slate-500'
            }`}
            title={`Go to Sheet ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
