import React from 'react';
import { Check, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { pricingCards } from '../data/ribhusContent';

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-[#06080F] border-t border-white/[0.05]">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/[0.05] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/[0.08]">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-400 font-semibold">
              Pricing Structure
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            Transparent, Complexity-Based Pricing
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every model is priced according to its gross floor area, architectural geometry, and required level of detail.
            No bundles, no surprises.
          </p>
          <div className="blueprint-divider mt-2" />
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingCards.map((card) => {
            const isPopular = card.popular;
            return (
              <div
                key={card.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-blue-950/60 to-[#0C101A] border border-blue-500/40 shadow-[0_0_60px_-12px_rgba(59,130,246,0.3)] lg:-translate-y-2'
                    : 'bg-[#0C101A] border border-white/[0.07] hover:border-blue-500/20'
                }`}
              >
                {/* Popular label */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg whitespace-nowrap">
                    <Sparkles size={10} />
                    Most Requested by Energieberater
                  </div>
                )}

                <div>
                  {/* Title */}
                  <h3 className="font-display font-black text-white text-lg">{card.title}</h3>

                  {/* Price */}
                  <div className="mt-5 mb-2 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl sm:text-5xl font-black text-white">
                      {card.price}
                    </span>
                    <span className="font-mono text-xs text-slate-500">/ {card.priceNote}</span>
                  </div>

                  {/* Turnaround */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/[0.08] bg-white/[0.03] text-[10px] font-mono font-bold text-slate-400 my-3">
                    <Clock size={11} className="text-blue-400" />
                    Turnaround: {card.turnaround}
                  </div>

                  {/* Ideal for */}
                  <div className="p-3 rounded-xl border border-white/[0.05] bg-white/[0.02] text-xs text-slate-400 mb-6 leading-relaxed">
                    <strong className="text-slate-300 block font-mono text-[9px] uppercase tracking-widest mb-1">
                      Ideal For:
                    </strong>
                    {card.idealFor}
                  </div>

                  {/* Features */}
                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600 block">
                      Scope Includes:
                    </span>
                    {card.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                        <Check size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-8">
                  <a
                    href="#request-form"
                    className={`w-full py-3 rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'btn-glow bg-blue-500 hover:bg-blue-400 text-white shadow-md'
                        : 'border border-white/[0.1] bg-white/[0.03] hover:border-blue-500/30 hover:bg-blue-500/[0.08] text-slate-400 hover:text-white'
                    }`}
                  >
                    Request Model
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-12 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] text-center max-w-2xl mx-auto text-xs font-mono text-slate-500">
          All models include watertight IFC &amp; native ArchiCAD/Revit files ready for energy compliance&nbsp;
          <span className="text-slate-300 font-bold">DIN EN 12831 / GEG 2024</span> and area verification&nbsp;
          <span className="text-slate-300 font-bold">DIN 277</span>.
        </div>
      </div>
    </section>
  );
}
