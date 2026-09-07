import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Printer, 
  Layers, 
  Building2, 
  CheckCircle2, 
  FileText, 
  Mail, 
  Globe, 
  Flame,
  ArrowRight,
  Maximize2
} from 'lucide-react';

export default function PortfolioBook() {
  const [currentPage, setCurrentPage] = useState(0);

  const sheets = [
    { idx: 0, title: 'Cover Page', code: '01 COVER' },
    { idx: 1, title: 'About & Skills', code: '02 INTRO' },
    { idx: 2, title: 'P1: Overview (Single-Family)', code: '03 P1-VIEW' },
    { idx: 3, title: 'P1: Model Organisation & 3D', code: '04 P1-3D' },
    { idx: 4, title: 'P1: Drawing Output (Plan/Sec/Elev)', code: '05 P1-DOCS' },
    { idx: 5, title: 'P1: Energy Audit & Heat Load', code: '06 P1-AUDIT' },
    { idx: 6, title: 'P2: Multi-Story Residential', code: '07 P2-MULTI' },
    { idx: 7, title: 'P3: 3D Architectural Floor Layout', code: '08 P3-PLAN' },
    { idx: 8, title: 'Contact: Let\'s Connect', code: '09 CONNECT' },
  ];

  const totalPages = sheets.length;
  const nextPage = () => setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 0));

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="portfolio-deck" className="py-16 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Presentation Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-300 text-xs font-mono font-bold text-slate-700 shadow-sm mb-2">
              <FileText size={13} className="text-cyan-700" />
              <span>Architectural Presentation Portfolio Sheets</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              BIM Portfolio Sheets &bull; Page-by-Page
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Structured according to European architectural submission standards. Navigate through individual sheets below or export as a printable PDF.
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-800 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-md transition-all self-start md:self-auto cursor-pointer"
          >
            <Printer size={15} />
            <span>Print / Save as PDF Portfolio</span>
          </button>
        </div>

        {/* Sheet Navigator Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-slate-200 p-3 rounded-2xl shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-600"></span>
            <span>SHEET {currentPage + 1} OF {totalPages}:</span>
            <span className="text-cyan-800">{sheets[currentPage].title}</span>
          </div>

          {/* Quick Jump Buttons */}
          <div className="hidden lg:flex items-center gap-1 text-[11px] font-mono">
            {sheets.map((s) => (
              <button
                key={s.idx}
                onClick={() => setCurrentPage(s.idx)}
                className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                  currentPage === s.idx
                    ? 'bg-slate-900 text-white font-bold'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600'
                }`}
              >
                {s.code}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="Previous Sheet"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="Next Sheet"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* The Landscape Sheet Board (A3/A4 Landscape 16:10 Ratio) */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[1.414/1] bg-white text-slate-900 rounded-2xl shadow-xl overflow-hidden border-2 border-slate-800 p-6 sm:p-10 flex flex-col justify-between font-sans print:border-none print:shadow-none print:m-0 print:p-8">
          
          {/* ============================================================ */}
          {/* SHEET 1: COVER PAGE                                         */}
          {/* ============================================================ */}
          {currentPage === 0 && (
            <div className="h-full flex flex-col justify-between animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  1. COVER PAGE &bull; SHEET 01
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  THE RIBHUS &bull; theribhus.com
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center flex-1 my-4">
                <div className="md:col-span-6 space-y-5">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-800 font-bold block mb-1">
                      BIM ARCHITECTURAL &amp; ENERGY MODELING PORTFOLIO
                    </span>
                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                      THE RIBHUS
                    </h1>
                    <h2 className="text-lg sm:text-xl font-bold text-slate-700 font-mono tracking-tight mt-1">
                      BIM ARCHITECT &bull; EUROPEAN PRODUCTION
                    </h2>
                  </div>

                  <div className="w-16 h-1 bg-cyan-700"></div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                    Specialized in converting scanned paper blueprints, rough PDF drawings, and 2D CAD surveys into millimeter-accurate, production-ready <strong className="text-slate-900">ArchiCAD and Revit 3D architectural models</strong> and watertight thermal envelopes.
                  </p>

                  <div className="space-y-1.5 text-xs font-mono text-slate-700 pt-2 border-t border-slate-200">
                    <div>✉️ contact@theribhus.com</div>
                    <div>🌐 theribhus.com</div>
                    <div>📍 Dedicated European Engineering Pods (Germany / Austria / Switzerland / Europe)</div>
                  </div>
                </div>

                <div className="md:col-span-6 h-full flex items-center justify-center">
                  <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900 bg-slate-950">
                    <img
                      src="assets/portfolio/1_Single_Family_Home_LOD200.jpg"
                      alt="The Ribhus Flagship Model"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4 text-white">
                      <div className="text-[10px] font-mono text-cyan-400 font-bold uppercase">LOD 200 / LOD 300 Architectural Volume</div>
                      <div className="text-sm font-bold">Watertight Thermal Envelope Model</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Fast 24–48h Turnaround &bull; Native ArchiCAD &amp; Revit</span>
                <span>Sheet 01 of 09</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SHEET 2: ABOUT & SKILLS                                     */}
          {/* ============================================================ */}
          {currentPage === 1 && (
            <div className="h-full flex flex-col justify-between animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  2. INTRODUCTION &amp; SKILLS &bull; SHEET 02
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  THE RIBHUS &bull; theribhus.com
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-4">
                <div className="md:col-span-5 space-y-4">
                  <div className="relative h-48 rounded-xl overflow-hidden shadow-md border border-slate-300">
                    <img
                      src="assets/portfolio/2_Multi_Story_Residential_LOD300.jpg"
                      alt="Multi-Story Residential Model"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-base font-black text-slate-900 uppercase">
                      About The Ribhus
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      Operating as a seamless external BIM pod for European architectural studios and Energieberater. We eliminate drafting bottlenecks by delivering precise 3D models from 2D archives without bloated MEP overhead.
                    </p>
                  </div>
                </div>

                <div className="md:col-span-7 space-y-5">
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-900 mb-2">
                      Software Proficiency
                    </h4>
                    <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                      <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
                        <div className="font-bold text-slate-900">ArchiCAD (v26–28)</div>
                        <div className="text-[10px] text-slate-500">Composite walls, GDL parametric objects, IFC mapping</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
                        <div className="font-bold text-slate-900">Autodesk Revit</div>
                        <div className="text-[10px] text-slate-500">LOD 300 families, floor zoning, drawing extractions</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
                        <div className="font-bold text-slate-900">AutoCAD (DWG/DXF)</div>
                        <div className="text-[10px] text-slate-500">Survey calibration &amp; 2D underlay cleanups</div>
                      </div>
                      <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50">
                        <div className="font-bold text-slate-900">OpenBIM IFC4 / 2x3</div>
                        <div className="text-[10px] text-slate-500">Watertight simulation geometry for Solar-Computer</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-900 mb-2">
                      Standards &amp; Certifications
                    </h4>
                    <div className="space-y-1 text-xs text-slate-700 font-mono">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span><strong>DIN EN 12831:</strong> Design heat load &amp; thermal zone envelope calculation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span><strong>GEG 2024:</strong> German Building Energy Act envelope area verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 size={13} className="text-emerald-600" />
                        <span><strong>DIN 277:</strong> Floor areas (BGF, NRF) &amp; gross cubic volume (BRI)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Introduction &amp; Capabilities</span>
                <span>Sheet 02 of 09</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SHEET 3: PROJECT 1 – OVERVIEW                               */}
          {/* ============================================================ */}
          {currentPage === 2 && (
            <div className="h-full flex flex-col justify-between animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  3. PROJECT 1 &bull; PROJECT OVERVIEW &bull; SHEET 03
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  Modern Single-Family House (Einfamilienhaus)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-4 items-center">
                <div className="md:col-span-5 space-y-4">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-800 border border-cyan-300">
                      LOD 200 ARCHITECTURAL VOLUME
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      Modern Single-Family House
                    </h3>
                    <p className="text-xs font-mono text-slate-500">Einfamilienhaus &bull; Energy Consulting &bull; 2025</p>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs border-y border-slate-200 py-3 text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scope:</span>
                      <span className="font-bold">2D PDF to 3D BIM Model</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Software:</span>
                      <span className="font-bold text-cyan-800">ArchiCAD / IFC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Gross Floor Area:</span>
                      <span className="font-bold">280 m² (BGF)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Turnaround:</span>
                      <span className="font-bold text-emerald-700">Delivered in 24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Primary Use:</span>
                      <span className="font-bold text-slate-900">Thermal Envelope &amp; Permit</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Rapid conversion of client-supplied 2D PDF architectural plans into an accurate LOD 200 architectural volume. Modeled with continuous exterior envelope boundaries for direct integration into heating load simulation software.
                  </p>
                </div>

                <div className="md:col-span-7 h-full flex items-center justify-center">
                  <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-900">
                    <img
                      src="assets/portfolio/1_Single_Family_Home_LOD200.jpg"
                      alt="Modern Single-Family House"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-mono text-white">
                      3D Perspective View
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Project Overview &bull; Single-Family Residential</span>
                <span>Sheet 03 of 09</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SHEET 4: PROJECT 1 – MODEL ORGANISATION & 3D                */}
          {/* ============================================================ */}
          {currentPage === 3 && (
            <div className="h-full flex flex-col justify-between animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  3. PROJECT 1 &bull; MODEL ORGANISATION &amp; 3D AXONOMETRIC &bull; SHEET 04
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  Model Hierarchy &bull; 3D Axonometric
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-3 items-center">
                <div className="md:col-span-5 space-y-4 font-mono text-xs">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="text-[10px] uppercase font-bold text-slate-500">
                      Model Browser Structure
                    </div>
                    <div className="space-y-1 text-slate-700 text-[11px]">
                      <div>📁 Single_Family_House.pln</div>
                      <div className="pl-3 space-y-0.5 text-slate-600">
                        <div>├─ 🏢 EG: Ground Floor (0.00m)</div>
                        <div>├─ 🏢 1.OG: Upper Living (+3.10m)</div>
                        <div>└─ 🏢 DG: Insulated Warm Roof (+6.20m)</div>
                      </div>
                      <div className="pt-2 font-bold text-slate-900">
                        <span>Classification &amp; Quantities:</span>
                      </div>
                      <div className="pl-3 space-y-0.5 text-slate-600">
                        <div>├─ Exterior Wall (WDVS 36.5cm): 380 m²</div>
                        <div>├─ Slabs (Concrete C25/30): 280 m²</div>
                        <div>└─ Fenestration (Triple Glazed): 68 m²</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-sans space-y-1">
                    <strong className="block text-[11px] uppercase font-mono">BIM Workflow:</strong>
                    <div className="grid grid-cols-4 gap-1 text-[10px] font-mono text-center pt-1">
                      <span className="p-1 rounded bg-white font-bold">1. Align</span>
                      <span className="p-1 rounded bg-white font-bold">2. Model</span>
                      <span className="p-1 rounded bg-white font-bold">3. Check</span>
                      <span className="p-1 rounded bg-white font-bold">4. Export</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-7 h-full flex items-center justify-center">
                  <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden border border-slate-300 bg-white p-2 shadow-lg">
                    <img
                      src="assets/drawings/axonometric_exploded.jpg"
                      alt="3D Exploded Axonometric BIM Model"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-4 left-4 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-mono text-cyan-300">
                      3D Exploded Axonometric Model
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Model Organisation &amp; 3D Disassembly</span>
                <span>Sheet 04 of 09</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SHEET 5: PROJECT 1 – DRAWING OUTPUT (PLAN, SECTION, ELEVATION) */}
          {/* ============================================================ */}
          {currentPage === 4 && (
            <div className="h-full flex flex-col justify-between animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  3. PROJECT 1 &bull; DRAWING OUTPUT (2D CD EXTRACTION) &bull; SHEET 05
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  Floor Plan &bull; Section A-A &bull; North Elevation
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 my-auto py-2 flex-1 items-center">
                {/* Plan */}
                <div className="md:col-span-6 h-[180px] sm:h-[210px] rounded-xl overflow-hidden border border-slate-300 bg-white shadow-sm p-1 flex flex-col justify-between">
                  <div className="h-[85%] w-full overflow-hidden">
                    <img
                      src="assets/drawings/floor_plan.jpg"
                      alt="Ground Floor Plan"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-2 py-0.5 bg-slate-100 text-[10px] font-mono text-slate-700 flex justify-between font-bold">
                    <span>GROUND FLOOR PLAN</span>
                    <span>1:100</span>
                  </div>
                </div>

                {/* Section */}
                <div className="md:col-span-6 h-[180px] sm:h-[210px] rounded-xl overflow-hidden border border-slate-300 bg-white shadow-sm p-1 flex flex-col justify-between">
                  <div className="h-[85%] w-full overflow-hidden">
                    <img
                      src="assets/drawings/section_drawing.jpg"
                      alt="Building Section A-A"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-2 py-0.5 bg-slate-100 text-[10px] font-mono text-slate-700 flex justify-between font-bold">
                    <span>SECTION A-A</span>
                    <span>1:100</span>
                  </div>
                </div>

                {/* Elevation */}
                <div className="md:col-span-7 h-[150px] sm:h-[170px] rounded-xl overflow-hidden border border-slate-300 bg-white shadow-sm p-1 flex flex-col justify-between">
                  <div className="h-[80%] w-full overflow-hidden">
                    <img
                      src="assets/drawings/elevation_drawing.jpg"
                      alt="North Facade Elevation"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="px-2 py-0.5 bg-slate-100 text-[10px] font-mono text-slate-700 flex justify-between font-bold">
                    <span>NORTH ELEVATION</span>
                    <span>1:100</span>
                  </div>
                </div>

                {/* Area Table */}
                <div className="md:col-span-5 h-[150px] sm:h-[170px] rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-3 flex flex-col justify-between font-mono text-[10px]">
                  <div className="font-bold text-slate-900 border-b border-slate-200 pb-1">
                    DIN 277 AREA SCHEDULE
                  </div>
                  <div className="space-y-1 text-slate-700">
                    <div className="flex justify-between">
                      <span>Ground Floor (EG)</span>
                      <span className="font-bold">145 m²</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Upper Floor (1.OG)</span>
                      <span className="font-bold">135 m²</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-1 font-bold text-slate-900">
                      <span>Total BGF</span>
                      <span className="text-cyan-800">280 m²</span>
                    </div>
                  </div>
                  <div className="text-[9px] text-slate-400 text-right">Extracted from 3D Geometry</div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Architectural Drawing Sets Extraction</span>
                <span>Sheet 05 of 09</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SHEET 6: PROJECT 1 – ENERGY AUDIT & HEAT LOAD               */}
          {/* ============================================================ */}
          {currentPage === 5 && (
            <div className="h-full flex flex-col justify-between animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  3. PROJECT 1 &bull; 2D-TO-3D ENERGY AUDIT &bull; SHEET 06
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  DIN EN 12831 &bull; GEG 2024
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-3 items-center">
                <div className="md:col-span-7 h-full flex items-center justify-center">
                  <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-white p-2">
                    <img
                      src="assets/drawings/energy_audit_comparison.jpg"
                      alt="2D to 3D Energy Audit Comparison"
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute top-4 left-4 px-2 py-0.5 rounded bg-amber-900/90 text-amber-200 font-mono text-[10px]">
                      2D Blueprint &rarr; 3D Thermal Zone Model
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-4 font-mono text-xs">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">
                      WATERTIGHT THERMAL HULL
                    </span>
                    <h3 className="text-base font-black text-slate-900 font-sans mt-1">
                      Heating Load Takeoff (Heizlast)
                    </h3>
                    <p className="text-xs text-slate-600 font-sans mt-0.5">
                      Direct volumetric calculation for German building energy consultants without polygon errors.
                    </p>
                  </div>

                  <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 p-3 space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-slate-600">
                      <span>Heated Volume (Ve):</span>
                      <span className="font-bold text-slate-900">840 m³</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Envelope Area (A):</span>
                      <span className="font-bold text-slate-900">540 m²</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Compactness (A/Ve):</span>
                      <span className="font-bold text-amber-700">0.64 m⁻¹</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Wall U-Value:</span>
                      <span className="font-bold text-emerald-700">0.21 W/m²K</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-sans">
                    <strong>Software Compatibility:</strong> Direct import into Solar-Computer, Hottgenroth, and IDA ICE via clean IFC2x3.
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Thermal Envelope Calculation &bull; DIN EN 12831</span>
                <span>Sheet 06 of 09</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SHEET 7: PROJECT 2 – MULTI-STORY RESIDENTIAL                */}
          {/* ============================================================ */}
          {currentPage === 6 && (
            <div className="h-full flex flex-col justify-between animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  4. PROJECT 2 &bull; MULTI-STORY RESIDENTIAL &bull; SHEET 07
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  Urban Multi-Story Residential Building (LOD 300)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-4 items-center">
                <div className="md:col-span-5 space-y-4">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-800 border border-cyan-300">
                      LOD 300 ARCHITECTURAL MODEL
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      Urban Multi-Story Residential
                    </h3>
                    <p className="text-xs font-mono text-slate-500">1,850 m² BGF &bull; Autodesk Revit</p>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs border-y border-slate-200 py-3 text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scope:</span>
                      <span className="font-bold">2D CAD to 3D BIM (LOD 300)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Software:</span>
                      <span className="font-bold text-blue-800">Autodesk Revit</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Primary Use:</span>
                      <span className="font-bold text-slate-900">Space Planning &amp; Volumetric Takeoff</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Turnaround:</span>
                      <span className="font-bold text-emerald-700">3 Business Days</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Accurate translation of 2D CAD architectural plan sets into a multi-story Revit building model. Coordinated core structures, modular apartment floor layouts, and exterior window schedule takeoff.
                  </p>
                </div>

                <div className="md:col-span-7 h-full flex items-center justify-center">
                  <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-900">
                    <img
                      src="assets/portfolio/2_Multi_Story_Residential_LOD300.jpg"
                      alt="Urban Multi-Story Residential Building"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-mono text-white">
                      Revit 3D Model Perspective
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Multi-Story Residential Modeling (LOD 300)</span>
                <span>Sheet 07 of 09</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SHEET 8: PROJECT 3 – DETAILED 3D FLOOR LAYOUT               */}
          {/* ============================================================ */}
          {currentPage === 7 && (
            <div className="h-full flex flex-col justify-between animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  5. PROJECT 3 &bull; 3D ARCHITECTURAL FLOOR LAYOUT &bull; SHEET 08
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  Detailed 3D Visual Plan
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-4 items-center">
                <div className="md:col-span-5 space-y-4">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-100 text-cyan-800 border border-cyan-300">
                      PRESENTATION 3D FLOORPLAN
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">
                      Detailed 3D Visual Plan
                    </h3>
                    <p className="text-xs font-mono text-slate-500">ArchiCAD &bull; High-Res Render &bull; 165 m²</p>
                  </div>

                  <div className="space-y-1.5 font-mono text-xs border-y border-slate-200 py-3 text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scope:</span>
                      <span className="font-bold">2D Survey Sketch to Detailed 3D Plan</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Software:</span>
                      <span className="font-bold text-cyan-800">ArchiCAD &amp; Presentation Engine</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Primary Use:</span>
                      <span className="font-bold text-slate-900">Brochures &amp; Tenant Planning</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Turnaround:</span>
                      <span className="font-bold text-emerald-700">24–48 Hours</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Designed for real estate marketing, client presentations, and tenant space planning. Color-coded floor finishes, accurate wall thicknesses, and clear visual circulation flow.
                  </p>
                </div>

                <div className="md:col-span-7 h-full flex items-center justify-center">
                  <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-900">
                    <img
                      src="assets/portfolio/3_Architectural_Floorplan_3D.jpg"
                      alt="Detailed 3D Architectural Floor Layout"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] font-mono text-white">
                      3D Axonometric Floor Cutaway
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>3D Architectural Floor Layout</span>
                <span>Sheet 08 of 09</span>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* SHEET 9: CONTACT PAGE                                       */}
          {/* ============================================================ */}
          {currentPage === 8 && (
            <div className="h-full flex flex-col justify-between animate-fadeIn">
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
                  6. CONTACT PAGE &bull; SHEET 09
                </span>
                <span className="text-xs font-mono font-bold text-slate-900">
                  THE RIBHUS &bull; theribhus.com
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-auto py-6 items-center">
                <div className="md:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-800 font-bold block mb-1">
                      GET IN TOUCH
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                      LET'S CONNECT
                    </h2>
                    <div className="w-16 h-1 bg-cyan-700 mt-2"></div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
                    Looking for a dedicated architectural BIM partner to handle your 2D-to-3D conversions or weekly drafting volume? Contact The Ribhus team today.
                  </p>

                  <div className="space-y-3 font-mono text-xs text-slate-800 border-t border-slate-200 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-900">@</span>
                      <div>
                        <span className="text-slate-400 block text-[10px]">EMAIL ADDRESS</span>
                        <a href="mailto:contact@theribhus.com" className="font-bold text-slate-900 hover:text-cyan-700">contact@theribhus.com</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-900">🌐</span>
                      <div>
                        <span className="text-slate-400 block text-[10px]">WEBSITE</span>
                        <a href="https://theribhus.com" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-cyan-700">theribhus.com</a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-bold text-slate-900">💶</span>
                      <div>
                        <span className="text-slate-400 block text-[10px]">FIXED PRICE QUOTES</span>
                        <span className="font-bold text-slate-900">Starting from €180 per unit</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-6 h-full flex items-center justify-center">
                  <div className="relative w-full h-[280px] sm:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-slate-300 bg-slate-900 p-2">
                    <img
                      src="assets/portfolio/2_Multi_Story_Residential_LOD300.jpg"
                      alt="The Ribhus Architecture"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/85 backdrop-blur-md rounded-xl text-white font-mono text-[11px]">
                      <span className="text-cyan-400 font-bold">The Ribhus Studio</span> &bull; 24–48h Turnaround Across Europe
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-300 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>The Ribhus &bull; All Rights Reserved</span>
                <span>Sheet 09 of 09 &bull; End of Deck</span>
              </div>
            </div>
          )}

        </div>

        {/* Sheet Thumbnails Navigator */}
        <div className="flex items-center justify-center gap-2 pt-1">
          {sheets.map((s) => (
            <button
              key={s.idx}
              onClick={() => setCurrentPage(s.idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentPage === s.idx ? 'bg-slate-900 w-8' : 'bg-slate-300 hover:bg-slate-400 w-2.5'
              }`}
              title={s.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
