import React, { useState } from 'react';
import {
  CheckCircle2,
  ArrowUpRight,
  X,
} from 'lucide-react';
import { showcaseItems } from '../data/ribhusContent';

export default function Showcase() {
  const [activeModalItem, setActiveModalItem] = useState(null);

  return (
    <section id="showcase" className="relative py-28 bg-[#06080F] border-t border-white/[0.05]">
      {/* Subtle section background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundSize: '40px 40px',
          backgroundImage:
            'linear-gradient(to right, rgba(59,130,246,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.05) 1px, transparent 1px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/[0.08]">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-400 font-semibold">
              Model Showcase
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            Selected Architectural BIM Models
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            High-precision conversions from scanned paper drawings, 2D DWGs, and survey sketches —
            for European architects and energy consultants.
          </p>
          <div className="blueprint-divider mt-2" />
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {showcaseItems.map((item, i) => (
            <div
              key={item.id}
              className="card-lift group relative rounded-2xl overflow-hidden border border-white/[0.07] bg-[#0C101A] flex flex-col"
            >
              {/* Index label */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[9px] text-blue-400/60 tracking-[0.2em] uppercase">
                0{i + 1}
              </div>

              {/* Image */}
              <div
                className="relative h-56 bg-[#06080F] overflow-hidden cursor-pointer"
                onClick={() => setActiveModalItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C101A] via-[#0C101A]/20 to-transparent" />

                {/* Badges */}
                <span className="absolute top-4 right-4 px-2 py-0.5 rounded-md bg-[#06080F]/80 border border-white/[0.12] text-[10px] font-mono font-bold text-blue-300 backdrop-blur-sm">
                  {item.turnaround}
                </span>

                {/* Bottom label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-blue-400/70 mb-1">
                    {item.software}
                  </span>
                  <h3 className="font-display font-bold text-white text-base leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <p className="text-slate-400 text-xs leading-relaxed">{item.scope}</p>

                  {/* Use case pill */}
                  <div className="p-3 rounded-lg bg-blue-500/[0.05] border border-blue-500/[0.12]">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-blue-400/70 mb-1">
                      Primary Use
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">{item.primaryUse}</p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="pt-3 border-t border-white/[0.05] space-y-1.5">
                  {item.deliverables.slice(0, 3).map((del, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-500 font-mono">
                      <CheckCircle2 size={11} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>

                {/* Action */}
                <button
                  onClick={() => setActiveModalItem(item)}
                  className="w-full py-2.5 rounded-lg border border-white/[0.1] bg-white/[0.03] hover:border-blue-500/40 hover:bg-blue-500/[0.08] text-slate-400 hover:text-white font-mono text-[10px] uppercase tracking-[0.1em] font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  Inspect Details
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox modal ── */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0C101A] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-80 sm:h-96 w-full overflow-hidden bg-[#06080F] shrink-0">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#06080F]/80 border border-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-400 font-semibold">
                  {activeModalItem.specs}
                </span>
                <h3 className="font-display text-2xl font-black text-white mt-1">
                  {activeModalItem.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  {activeModalItem.software} · Delivered in {activeModalItem.turnaround}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-blue-500/[0.05] border border-blue-500/[0.15]">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                  Primary Application
                </span>
                <p className="text-sm text-slate-300 leading-relaxed">{activeModalItem.primaryUse}</p>
              </div>

              <div>
                <h4 className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-3">
                  Scope &amp; BIM Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalItem.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-xs text-slate-400 font-mono"
                    >
                      <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600">The Ribhus Architectural Modeling</span>
                <a
                  href="#request-form"
                  onClick={() => setActiveModalItem(null)}
                  className="btn-glow px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-mono text-xs font-bold transition-all"
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
