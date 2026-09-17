import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  FileCode, 
  Layers, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  FileText,
  Sparkles
} from 'lucide-react';
import { heroContent } from '../data/ribhusContent';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-arch-grid border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Positioning Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Market Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-semibold text-slate-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Tailored for European Architects &amp; Energieberater &bull; Zero MEP Clutter</span>
            </div>

            {/* Headline H1 (Exact match from MD) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Every 2D plan becomes an <span className="text-blue-700 underline decoration-blue-400 decoration-wavy decoration-2">accurate 3D BIM model.</span>
            </h1>

            {/* Sub-headline Lead Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Scanned paper blueprints, rough PDF drawings, or 2D CAD surveys &mdash; we convert them into production-ready <strong className="text-slate-900 font-semibold">Autodesk Revit and ArchiCAD 3D architectural models</strong>. Engineered specifically for European architects, real estate planners, and energy auditors. Fast, reliable, and strictly dimensional.
            </p>

            {/* Badges / USPs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 mb-0.5">
                  <Clock size={14} className="text-blue-600" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="text-[11px] text-slate-500">Delivered in 24–48 hours</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 mb-0.5">
                  <FileCode size={14} className="text-indigo-600" />
                  <span>Native Formats</span>
                </div>
                <div className="text-[11px] text-slate-500">Revit (.rvt), ArchiCAD (.pln), IFC, DWG</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 mb-0.5">
                  <Layers size={14} className="text-emerald-600" />
                  <span>Focused Scope</span>
                </div>
                <div className="text-[11px] text-slate-500">LOD 200 / 300 (No bloated MEP overhead)</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#behance-project"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm font-mono shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 transition-all group cursor-pointer"
              >
                <Sparkles size={16} />
                <span>Explore Featured REVIT Modern House</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm font-mono shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Transparent Pricing (€180+)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Featured Orthographic 3D View Card */}
          <div className="lg:col-span-5 relative">
            <a 
              href="#behance-project"
              className="block relative rounded-3xl overflow-hidden border-2 border-slate-900 bg-white p-3 shadow-2xl space-y-3 group hover:border-blue-600 transition-colors"
            >
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src="assets/portfolio/modern_house_orthographic_3d.png"
                  alt="Modern House: A Study in Minimalism - Revit BIM Model"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/90 text-white font-mono text-[10px] font-bold border border-slate-700">
                  Featured: Revit Full Project
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-blue-600 text-white font-mono text-[10px] font-bold shadow-md flex items-center gap-1">
                  <span>Orthographic 3D View</span>
                </div>
              </div>

              {/* Bottom Mini Split preview */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase">Project Typology</span>
                  <span className="font-bold text-slate-900 text-[11px] leading-tight block mt-0.5">
                    Modern Minimalist Residence
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase">BIM Platform</span>
                  <span className="font-bold text-blue-700 text-[11px] leading-tight block mt-0.5">
                    Autodesk Revit 2024 (LOD 300)
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
