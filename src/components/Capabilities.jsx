import React from 'react';
import { 
  Building2, 
  Flame, 
  Layers, 
  FileCheck2, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Scale,
  Sparkles
} from 'lucide-react';
import { capabilities } from '../data/projects';

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
          <Layers size={13} />
          <span>Specialized Services</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          BIM Capabilities &amp; Technical Scope
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          The Ribhus concentrates on architectural execution and energy analysis geometry — eliminating unnecessary MEP overhead to deliver fast, millimeter-exact BIM deliverables.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {capabilities.map((cap, idx) => {
          const isEnergy = cap.id === 'energy-audit';
          return (
            <div
              key={cap.id}
              className={`p-8 rounded-2xl bg-slate-900/80 border transition-all duration-300 flex flex-col justify-between ${
                isEnergy
                  ? 'border-amber-500/40 shadow-xl shadow-amber-950/30'
                  : 'border-slate-800 hover:border-cyan-500/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg ${
                    isEnergy ? 'bg-amber-950 text-amber-400 border border-amber-600/40' : 'bg-cyan-950 text-cyan-400 border border-cyan-700/40'
                  }`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                    isEnergy ? 'bg-amber-900/40 text-amber-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {isEnergy ? 'Core Specialization' : 'Architecture'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {cap.shortDesc}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-800/80">
                  {cap.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check size={14} className={`shrink-0 mt-0.5 ${isEnergy ? 'text-amber-400' : 'text-cyan-400'}`} />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#estimate"
                  className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                    isEnergy
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  <span>Inquire for {cap.title.split(' ')[0]}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
