import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  FileCode, 
  Layers, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-arch-grid border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Architectural Atelier Positioning Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* European Standard Marker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[11px] font-mono font-semibold text-slate-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>European Architectural BIM &amp; Energy Audit Production &bull; Zero MEP</span>
            </div>

            {/* Headline H1 (Architectural Editorial Display) */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-black text-[#0A0F1D] tracking-tight leading-[1.08]">
              Every 2D plan becomes an <span className="underline decoration-[#0F172A]/30 decoration-2 underline-offset-8">accurate 3D BIM model.</span>
            </h1>

            {/* Sub-headline Lead Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Scanned paper blueprints, rough PDF drawings, or 2D CAD surveys &mdash; we convert them into production-ready <strong className="text-[#0F172A] font-semibold">Autodesk Revit and ArchiCAD 3D architectural models</strong>. Engineered specifically for European architects, real estate planners, and energy auditors. Fast, reliable, and strictly dimensional.
            </p>

            {/* Badges / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 mb-1">
                  <Clock size={14} className="text-[#1E3A8A]" />
                  <span>24–48h Turnaround</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">Guaranteed fast delivery</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 mb-1">
                  <FileCode size={14} className="text-[#1E3A8A]" />
                  <span>Native BIM Formats</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">Revit (.rvt), ArchiCAD (.pln), IFC</div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 mb-1">
                  <Layers size={14} className="text-emerald-700" />
                  <span>Focused Scope</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">LOD 200/300 &bull; No MEP overhead</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#behance-project"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#0F172A] hover:bg-[#1E3A8A] text-white font-mono text-xs uppercase tracking-wider font-bold shadow-md shadow-slate-900/10 flex items-center justify-center gap-2.5 transition-all group cursor-pointer"
              >
                <Sparkles size={14} className="text-amber-300" />
                <span>Explore Featured REVIT Project</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-mono text-xs uppercase tracking-wider font-bold shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Transparent Pricing (€180+)</span>
              </a>
            </div>
          </div>

          {/* Right Column: High-End Framed Preview Card */}
          <div className="lg:col-span-5 relative">
            <a 
              href="#behance-project"
              className="block relative rounded-3xl overflow-hidden border border-slate-300 bg-white p-3.5 shadow-xl group hover:border-[#0F172A] transition-all"
            >
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#0C1017] border border-slate-800">
                <img
                  src="assets/portfolio/modern_house_orthographic_3d.png"
                  alt="Modern House: A Study in Minimalism - Revit BIM Model"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0F172A]/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider border border-slate-700">
                  Featured: Revit Full Project
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#0F172A] text-white font-mono text-[10px] font-bold shadow-md">
                  Orthographic 3D View
                </div>
              </div>

              {/* Bottom Metadata Split */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Typology</span>
                  <span className="font-bold text-slate-900 text-xs block mt-0.5">
                    Modern Minimalist House
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">BIM Standard</span>
                  <span className="font-bold text-[#1E3A8A] text-xs block mt-0.5">
                    Revit 2024 &bull; LOD 300
                  </span>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
