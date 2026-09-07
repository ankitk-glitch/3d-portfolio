import React from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Layers, 
  ShieldCheck, 
  Flame, 
  FileCheck, 
  Download, 
  Building2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isEnergy = project.category === 'Energy Audit';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Hero Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950 shrink-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-colors"
          >
            <X size={18} />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-6 right-6 space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                isEnergy ? 'bg-amber-950 text-amber-300 border border-amber-500/40' : 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
              }`}>
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800/90 text-slate-300 border border-slate-700">
                {project.lod}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1 font-mono">
                <MapPin size={13} className="text-cyan-400" />
                {project.location}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-cyan-300 font-mono">
              {project.subTitle}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200">
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-500 block text-[10px] uppercase">Gross Area (BGF)</span>
              <span className="text-white font-bold text-sm">{project.area}</span>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-500 block text-[10px] uppercase">Gross Volume (Ve)</span>
              <span className="text-emerald-400 font-bold text-sm">{project.stats.volume}</span>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-500 block text-[10px] uppercase">
                {isEnergy ? 'Thermal Zones' : 'Storeys'}
              </span>
              <span className="text-cyan-400 font-bold text-sm">
                {project.stats.thermalZones || project.stats.storeys}
              </span>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
              <span className="text-slate-500 block text-[10px] uppercase">Efficiency Target</span>
              <span className="text-amber-400 font-bold text-sm">
                {project.stats.energyReductionPotential || project.stats.plannedEfficiency || project.stats.envelopeTightness || 'KfW 55'}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-2">
              <h5 className="text-xs font-mono font-bold text-rose-300 uppercase tracking-wide">
                The Engineering Challenge
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2">
              <h5 className="text-xs font-mono font-bold text-emerald-300 uppercase tracking-wide">
                The Ribhus Solution
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400">
              Handover Deliverables &amp; Schedules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300"
                >
                  <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Software & Standards Footer */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-slate-400">Standards Handled</div>
              <div className="flex flex-wrap gap-1.5">
                {project.standards.map((st) => (
                  <span key={st} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700">
                    {st}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#estimate"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors flex items-center gap-2"
              >
                <span>Request Similar Model</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
