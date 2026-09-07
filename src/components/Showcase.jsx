import React, { useState } from 'react';
import { 
  Building2, 
  FileCode, 
  CheckCircle2, 
  ArrowUpRight, 
  Maximize2, 
  Layers, 
  Flame, 
  X,
  FileCheck
} from 'lucide-react';
import { showcaseItems } from '../data/ribhusContent';

export default function Showcase() {
  const [activeModalItem, setActiveModalItem] = useState(null);

  return (
    <section id="showcase" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-xs font-mono font-bold text-slate-700">
            <Building2 size={13} className="text-cyan-700" />
            <span>Portfolio &amp; Model Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Selected Architectural BIM Models
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            High-precision conversions executed from scanned paper drawings, 2D DWGs, and survey sketches for European architects and energy consultants.
          </p>
        </div>

        {/* 3 Grid Items (Matching Section 3 in MD) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 border border-slate-200 hover:border-slate-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* High-Res Image Thumbnail */}
              <div 
                onClick={() => setActiveModalItem(item)}
                className="relative h-64 overflow-hidden bg-slate-900 cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-white text-slate-900 shadow-md">
                    {item.software}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-900/80 text-cyan-300 backdrop-blur-md">
                    {item.turnaround}
                  </span>
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-mono text-cyan-400 block font-semibold">
                    SHOWCASE 0{item.id}
                  </span>
                  <h3 className="text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5 text-xs">
                <div className="space-y-3">
                  {/* Scope */}
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Scope of Conversion
                    </span>
                    <p className="font-semibold text-slate-900 text-xs mt-0.5">
                      {item.scope}
                    </p>
                  </div>

                  {/* Primary Use */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-700 font-bold block">
                      Primary Use Case
                    </span>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {item.primaryUse}
                    </p>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="pt-3 border-t border-slate-200 space-y-1.5 font-mono text-[11px] text-slate-600">
                  {item.deliverables.slice(0, 3).map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-slate-900 text-slate-800 hover:text-white border border-slate-300 hover:border-slate-900 font-mono font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Inspect Details &amp; Specs</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Showcase Modal */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white border border-slate-300 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col text-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-slate-900 shrink-0">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-contain bg-slate-950"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-cyan-700 uppercase">
                  {activeModalItem.specs}
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs font-mono text-slate-500">
                  Software: {activeModalItem.software} &bull; Delivered in {activeModalItem.turnaround}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-1">
                  Primary Application
                </span>
                <p className="text-sm text-slate-800 leading-relaxed">
                  {activeModalItem.primaryUse}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase font-bold text-slate-900 mb-3">
                  Scope &amp; Included BIM Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalItem.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-mono">
                      <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500">The Ribhus Architectural Modeling</span>
                <a
                  href="#request-form"
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-cyan-700 text-white font-mono text-xs font-bold transition-colors"
                >
                  Request Similar Model
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
