import React from 'react';
import { 
  Box, 
  Flame, 
  FileCheck2, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Building2,
  Table,
  Eye
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-blueprint-grid">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Studio Specialization Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>The Ribhus &bull; Professional 3D BIM &amp; Energy Modeling</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Architectural <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">3D BIM Portfolio</span> &amp; 2D-to-3D Energy Audits
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
              Specializing in high-precision ArchiCAD 3D modeling, construction execution (LOD 200–400), and translating 2D CAD surveys into validated thermal building envelopes for heating load calculations (<span className="text-cyan-300 font-mono">Heizlastberechnung / DIN EN 12831</span>).
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-cyan-500/30 text-cyan-300">
                <Building2 size={13} />
                22 Real ArchiCAD Projects
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-emerald-500/30 text-emerald-400">
                <Table size={13} />
                DIN 277 Quantities Takeoff
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1 rounded-md border border-amber-500/30 text-amber-300">
                <Flame size={13} />
                DIN EN 12831 &amp; GEG
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#portfolio"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2 transition-all group"
              >
                <span>View 22 Projects Gallery</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#studio"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
              >
                <Eye size={15} className="text-cyan-400" />
                <span>Interactive 3D Studio</span>
              </a>
            </div>
          </div>

          {/* Right Column: Featured Real Project Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-slate-900/90 p-2 group">
              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden bg-slate-950">
                <img
                  src="assets/screenshots/ss4.png"
                  alt="Erich Bracher Schule Real BIM Model"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Overlay details */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-cyan-950/90 text-cyan-300 border border-cyan-500/40">
                    LOD 400 Production
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-slate-700">
                    8,800 m² BGF
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-950/85 backdrop-blur-md rounded-xl border border-slate-800">
                  <div className="font-bold text-white text-sm">
                    Erich Bracher Schule Campus Model
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-1">
                    <span>Ve: 36,400 m³ &bull; 96 Zones</span>
                    <span className="text-cyan-400 font-semibold">ArchiCAD Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
            <div className="text-2xl lg:text-3xl font-bold font-mono text-cyan-400">22 Projects</div>
            <div className="text-xs text-slate-400 mt-1">Real .PLN &amp; .IFC Case Studies</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
            <div className="text-2xl lg:text-3xl font-bold font-mono text-emerald-400">DIN 277 QTO</div>
            <div className="text-xs text-slate-400 mt-1">Accurate Volume &amp; Area Takeoffs</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
            <div className="text-2xl lg:text-3xl font-bold font-mono text-amber-400">DIN EN 12831</div>
            <div className="text-xs text-slate-400 mt-1">Heizlast &amp; Thermal Envelopes</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
            <div className="text-2xl lg:text-3xl font-bold font-mono text-sky-400">LOD 200–400</div>
            <div className="text-xs text-slate-400 mt-1">Precheck &amp; Production Execution</div>
          </div>
        </div>
      </div>
    </section>
  );
}
