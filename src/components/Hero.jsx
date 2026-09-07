import React from 'react';
import { 
  ArrowRight, 
  Clock, 
  FileCode, 
  Layers, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  FileText
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
              <span>Tailored for the European Architectural &amp; Energy Consultant Market</span>
            </div>

            {/* Headline H1 (Exact match from MD) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Every 2D plan becomes an <span className="text-cyan-700 underline decoration-cyan-400 decoration-wavy decoration-2">accurate 3D BIM model.</span>
            </h1>

            {/* Sub-headline Lead Paragraph (Exact match from MD) */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
              Scanned paper drawings, rough PDF blueprints, or 2D CAD files — we convert them into production-ready <strong className="text-slate-900 font-semibold">ArchiCAD and Revit 3D architectural models</strong>. Built specifically for architects, real estate planners, and building energy consultants across Europe. Fast, reliable, and strictly dimensional.
            </p>

            {/* Badges / USPs (Exact match from MD) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 mb-0.5">
                  <Clock size={14} className="text-cyan-600" />
                  <span>Fast Turnaround</span>
                </div>
                <div className="text-[11px] text-slate-500">Delivered in 24–48 hours</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 mb-0.5">
                  <FileCode size={14} className="text-blue-600" />
                  <span>Native Formats</span>
                </div>
                <div className="text-[11px] text-slate-500">ArchiCAD (.pln), Revit (.rvt), IFC, DWG</div>
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
                href="#portfolio-deck"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-cyan-800 text-white font-bold text-xs sm:text-sm font-mono shadow-md flex items-center justify-center gap-2 transition-all group"
              >
                <span>Browse Portfolio Deck</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm font-mono shadow-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>View Transparent Pricing (€180+)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Architectural Showcase Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-900 bg-white p-3 shadow-2xl space-y-3">
              <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <img
                  src="assets/portfolio/1_Single_Family_Home_LOD200.jpg"
                  alt="Modern Single-Family House LOD 200"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 text-white font-mono text-[10px] font-bold">
                  2D PDF &rarr; 3D BIM (LOD 200)
                </div>
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-white/95 text-slate-900 font-mono text-[10px] font-bold shadow-md">
                  Delivered in 24 Hours
                </div>
              </div>

              {/* Bottom Mini Split preview */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase">Primary Use</span>
                  <span className="font-bold text-slate-800 text-[11px] leading-tight block mt-0.5">
                    Energy Consulting &amp; Permit (Heizlast)
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-500 block uppercase">Compatible With</span>
                  <span className="font-bold text-cyan-700 text-[11px] leading-tight block mt-0.5">
                    Solar-Computer, Hottgenroth &amp; IFC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
