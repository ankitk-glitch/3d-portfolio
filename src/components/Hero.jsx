import React from 'react';
import { 
  Box, 
  Flame, 
  FileCheck2, 
  Layers, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Compass,
  Building2,
  Gauge
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-blueprint-grid">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Studio Specialization Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl shadow-cyan-950/40">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>The Ribhus &bull; Architectural BIM &amp; Energy Audit Modeling</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            High-Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Architectural BIM</span> &amp; 2D-to-3D for Energy Audits
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed">
            We translate architectural blueprints and legacy 2D CAD surveys into millimeter-accurate 3D BIM models ready for German &amp; European energy audits, heating load simulations (<span className="text-cyan-300 font-mono">Heizlastberechnung / DIN EN 12831</span>), and GEG compliance.
          </p>

          {/* No MEP & Focus Tagline */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 pt-1 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-md border border-emerald-500/30">
              <ShieldCheck size={14} />
              100% Watertight Thermal Envelopes
            </span>
            <span className="flex items-center gap-1.5 text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-md border border-cyan-500/30">
              <FileCheck2 size={14} />
              DIN EN 12831 &amp; GEG Compliant
            </span>
            <span className="flex items-center gap-1.5 text-amber-300 bg-amber-950/40 px-3 py-1 rounded-md border border-amber-500/30">
              <Layers size={14} />
              Pure Architecture &amp; Structure (No MEP Clutter)
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#studio"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center gap-2 transition-all group"
            >
              <span>Explore Interactive 3D Studio</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#energy-workflow"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>See 2D-to-3D Energy Workflow</span>
            </a>
          </div>
        </div>

        {/* Highlight Metrics Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
            <div className="text-2xl lg:text-3xl font-bold font-mono text-cyan-400">LOD 350+</div>
            <div className="text-xs text-slate-400 mt-1">Detailed Architectural Execution</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
            <div className="text-2xl lg:text-3xl font-bold font-mono text-emerald-400">DIN EN 12831</div>
            <div className="text-xs text-slate-400 mt-1">Heating Load (Heizlast) Standard</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
            <div className="text-2xl lg:text-3xl font-bold font-mono text-amber-400">A/V Ratio &amp; Ve</div>
            <div className="text-xs text-slate-400 mt-1">Precise Gross Thermal Volume</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
            <div className="text-2xl lg:text-3xl font-bold font-mono text-sky-400">ArchiCAD &amp; Revit</div>
            <div className="text-xs text-slate-400 mt-1">OpenBIM IFC Handover</div>
          </div>
        </div>
      </div>
    </section>
  );
}
