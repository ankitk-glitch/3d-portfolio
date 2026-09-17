import React from 'react';
import { Mail, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const cols = [
    {
      title: 'Native Deliverables',
      items: [
        'ArchiCAD (.pln & .bpn)',
        'Autodesk Revit (.rvt)',
        'OpenBIM IFC (IFC4 & 2x3)',
        '2D CAD Verification (.dwg)',
        'Watertight Thermal Envelopes',
      ],
    },
    {
      title: 'Pricing & Standards',
      items: [
        'Single-Family: €180 – €290',
        'Multi-Family: €450 – €950+',
        'Studio Retainer: €1,500/mo',
        'DIN EN 12831 · Heat Load',
        'GEG 2024 · Building Energy Act',
      ],
    },
  ];

  return (
    <footer className="bg-[#03040A] text-slate-500 text-xs border-t border-white/[0.05]">
      {/* Ticker */}
      <div className="overflow-hidden py-3 border-b border-white/[0.05] bg-blue-500/[0.04]">
        <div className="flex whitespace-nowrap marquee-track text-[9px] font-mono text-blue-400/50 uppercase tracking-[0.18em] gap-12">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="shrink-0">
              The Ribhus · BIM Atelier · theribhus.com · European Architectural 3D Modeling · Revit · ArchiCAD · IFC4 · DIN EN 12831 · GEG 2024 · LOD 200/300 · 24–48h Turnaround ·
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.05]">

          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-lg bg-blue-500/20 border border-blue-500/40" />
                <div className="absolute inset-[3px] rounded-md bg-blue-500 flex items-center justify-center">
                  <span className="text-white font-display font-black text-[11px] tracking-widest">R</span>
                </div>
              </div>
              <div>
                <div className="font-display font-black text-sm tracking-[0.1em] text-white uppercase">The Ribhus</div>
                <div className="font-mono text-[9px] tracking-[0.15em] text-blue-400/60 uppercase mt-0.5">BIM Atelier</div>
              </div>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              Every 2D plan becomes an accurate 3D BIM model. Converting scanned paper drawings,
              PDF blueprints, and 2D CAD surveys into production-ready ArchiCAD and Revit architectural
              models for architects and energy consultants across Europe.
            </p>

            <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] text-slate-400">
              <a
                href="mailto:contact@theribhus.com"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <Mail size={12} />
                contact@theribhus.com
              </a>
              <a
                href="https://theribhus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
              >
                <Globe size={12} />
                theribhus.com
              </a>
            </div>
          </div>

          {/* Info columns */}
          {cols.map(({ title, items }) => (
            <div key={title} className="space-y-3">
              <h4 className="text-white font-mono text-[10px] uppercase tracking-[0.18em] font-bold">
                {title}
              </h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item} className="text-slate-500 text-[11px] leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-600">
          <div>
            &copy; {new Date().getFullYear()} The Ribhus (theribhus.com). Tailored for the European Architectural &amp; Energy Market.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            Back to top
            <ArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
}
