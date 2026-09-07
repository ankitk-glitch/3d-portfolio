import React from 'react';
import { 
  Check, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Euro, 
  Building2, 
  Home, 
  Briefcase 
} from 'lucide-react';
import { pricingCards } from '../data/ribhusContent';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Exact match from MD) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-xs font-mono font-bold text-cyan-800">
            <span>Pricing Structure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Transparent, Complexity-Based Pricing
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We don’t believe in one-size-fits-all bundles. Every model is priced according to its specific gross floor area, architectural geometry, and required level of detail.
          </p>
        </div>

        {/* Pricing Anchor Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingCards.map((card) => {
            const isPopular = card.popular;
            return (
              <div
                key={card.id}
                className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-white border-2 border-slate-900 shadow-xl lg:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-md">
                    Most Requested by Energieberater
                  </div>
                )}

                <div>
                  {/* Card Title */}
                  <h3 className="text-lg font-black text-slate-900">
                    {card.title}
                  </h3>

                  {/* Price */}
                  <div className="mt-4 mb-2 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono">
                      {card.price}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      / {card.priceNote}
                    </span>
                  </div>

                  {/* Turnaround Badge */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-[11px] font-mono font-bold text-slate-700 my-3">
                    <Clock size={13} className="text-cyan-700" />
                    <span>Turnaround: {card.turnaround}</span>
                  </div>

                  {/* Ideal For */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 mb-6">
                    <strong className="text-slate-800 block text-[11px] uppercase font-mono mb-0.5">Ideal For:</strong>
                    {card.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 font-bold block">
                      Scope Includes:
                    </span>
                    {card.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-8">
                  <a
                    href="#request-form"
                    className={`w-full py-3 rounded-xl font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                      isPopular
                        ? 'bg-slate-900 hover:bg-cyan-800 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300'
                    }`}
                  >
                    <span>Request Model</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote on Standards */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-slate-200 text-center max-w-2xl mx-auto text-xs font-mono text-slate-500">
          All models include watertight IFC and native ArchiCAD/Revit files ready for energy compliance (<span className="text-slate-900 font-bold">DIN EN 12831 / GEG 2024</span>) and area verification (<span className="text-slate-900 font-bold">DIN 277</span>).
        </div>
      </div>
    </section>
  );
}
