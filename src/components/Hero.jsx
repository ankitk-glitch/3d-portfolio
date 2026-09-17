import React from 'react';
import { ArrowRight, Clock, FileCode, Layers, Sparkles, ChevronDown } from 'lucide-react';

const pillars = [
  { icon: Clock, label: '24–48h Turnaround', sub: 'Guaranteed fast delivery', color: 'blue' },
  { icon: FileCode, label: 'Native BIM Formats', sub: 'Revit · ArchiCAD · IFC4', color: 'blue' },
  { icon: Layers, label: 'LOD 200/300', sub: 'No MEP overhead', color: 'emerald' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-arch-grid overflow-hidden flex flex-col justify-center pt-20">
      {/* Blueprint glow top */}
      <div className="absolute inset-0 blueprint-glow pointer-events-none" />

      {/* Animated scan line */}
      <div className="scan-line" />

      {/* Corner architectural coordinates */}
      <div className="absolute top-20 left-4 sm:left-8 font-mono text-[9px] text-blue-500/40 tracking-widest select-none pointer-events-none animate-revealLeft delay-500">
        [48°N 11°E] · REVIT 2024 · LOD300
      </div>
      <div className="absolute top-20 right-4 sm:right-8 font-mono text-[9px] text-blue-500/40 tracking-widest text-right select-none pointer-events-none animate-revealLeft delay-500">
        DWG → RVT · REV.01 · {new Date().getFullYear()}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* ── Left: Text Column ── */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm animate-revealUp">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_2px_rgba(52,211,153,0.5)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-blue-300 font-semibold">
                European Architectural BIM Studio · Zero MEP
              </span>
            </div>

            {/* H1 */}
            <div className="animate-revealUp delay-100">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.97] tracking-[-0.03em]">
                Every 2D plan
                <br />
                <span className="relative inline-block">
                  becomes an
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 rounded-full opacity-70" />
                </span>
                <br />
                <span className="text-blue-400">accurate 3D BIM.</span>
              </h1>
            </div>

            {/* Lead paragraph */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 animate-revealUp delay-200">
              Scanned blueprints, rough PDFs, 2D CAD surveys — we convert them into
              production-ready&nbsp;
              <strong className="text-white font-semibold">Autodesk Revit &amp; ArchiCAD 3D models</strong>.
              Built for European architects, real-estate planners, and Energieberater.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0 animate-revealUp delay-300">
              {pillars.map(({ icon: Icon, label, sub, color }) => (
                <div
                  key={label}
                  className="group p-3 rounded-xl border border-white/[0.08] bg-white/[0.03] hover:border-blue-500/30 hover:bg-blue-500/[0.05] transition-all"
                >
                  <Icon
                    size={16}
                    className={`mb-2 ${color === 'emerald' ? 'text-emerald-400' : 'text-blue-400'}`}
                  />
                  <div className="font-display font-bold text-white text-xs leading-tight mb-1">{label}</div>
                  <div className="font-mono text-[9px] text-slate-500">{sub}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 animate-revealUp delay-400">
              <a
                href="#behance-project"
                className="btn-glow w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-mono text-xs uppercase tracking-[0.1em] font-bold flex items-center justify-center gap-2.5 transition-all group"
              >
                <Sparkles size={13} className="text-white/80" />
                <span>Explore REVIT Project</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-white/[0.12] bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.08] text-slate-300 font-mono text-xs uppercase tracking-[0.1em] font-bold flex items-center justify-center gap-2 transition-all"
              >
                Transparent Pricing (€180+)
              </a>
            </div>
          </div>

          {/* ── Right: Framed model card ── */}
          <div className="lg:col-span-5 animate-revealUp delay-200">
            <div className="relative group">
              {/* Outer glow frame */}
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-blue-500/30 via-transparent to-blue-500/10 pointer-events-none" />

              <a
                href="#behance-project"
                className="relative block rounded-2xl overflow-hidden border border-white/10 bg-[#0C101A] cursor-pointer"
              >
                {/* Top titleblock bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_4px_2px_rgba(96,165,250,0.5)]" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-blue-400/70">
                      Featured · Full BIM Project
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-slate-600">REV.01 · 2024</span>
                </div>

                {/* Image */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src="assets/portfolio/modern_house_orthographic_3d.png"
                    alt="Modern House REVIT BIM Model - Orthographic 3D"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C101A] via-transparent to-transparent opacity-80" />

                  {/* Corner labels */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-mono text-[9px] text-blue-400/70 uppercase tracking-[0.15em]">
                      Autodesk Revit 2024 · LOD 300
                    </div>
                    <div className="font-display font-bold text-white text-base mt-0.5">
                      Modern Minimalist Residence
                    </div>
                  </div>
                </div>

                {/* Bottom metadata strip */}
                <div className="grid grid-cols-3 divide-x divide-white/[0.06] text-center">
                  {[
                    ['Typology', 'Single-Family'],
                    ['Standard', 'DIN 277'],
                    ['Format', 'RVT · IFC4'],
                  ].map(([k, v]) => (
                    <div key={k} className="py-3 px-2">
                      <div className="font-mono text-[8px] uppercase tracking-widest text-slate-600 mb-0.5">{k}</div>
                      <div className="font-mono text-[10px] font-bold text-slate-300">{v}</div>
                    </div>
                  ))}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce opacity-40">
        <ChevronDown size={18} className="text-blue-400" />
      </div>

      {/* Bottom gradient fade to section below */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#06080F] to-transparent pointer-events-none" />
    </section>
  );
}
