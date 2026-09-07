import React from 'react';
import { 
  Building2, 
  Flame, 
  Layers, 
  ArrowUpRight, 
  Download, 
  Maximize2,
  Calendar,
  FileCode,
  Gauge,
  CheckCircle2
} from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  const isEnergy = project.category === 'Energy Audit & Heizlast' || project.type?.includes('Energy') || project.name?.includes('Heizlast');
  const q = project.quantities || {};

  return (
    <div className="group bg-slate-900/90 border border-slate-800/90 hover:border-cyan-500/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-950/40 flex flex-col justify-between">
      {/* Real ArchiCAD Screenshot */}
      <div 
        onClick={() => onOpenModal(project)}
        className="relative h-56 overflow-hidden bg-slate-950 cursor-pointer"
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md ${
            isEnergy 
              ? 'bg-amber-950/90 text-amber-300 border border-amber-500/40' 
              : 'bg-cyan-950/90 text-cyan-300 border border-cyan-500/40'
          }`}>
            {project.type || project.category}
          </span>
          <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-slate-700 backdrop-blur-md">
            {project.lod}
          </span>
        </div>

        {/* Format Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
            {project.format}
          </span>
        </div>

        {/* Bottom Year / Specs overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-mono">
          <span className="bg-slate-950/80 px-2 py-0.5 rounded text-[11px] text-slate-300 border border-slate-800">
            {project.specs}
          </span>
          <span className="text-slate-400">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 
              onClick={() => onOpenModal(project)}
              className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
            >
              {project.name}
            </h3>
          </div>

          <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Real Quantities Takeoff Grid (Massenermittlung) */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 font-mono text-[11px]">
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
            <span className="text-slate-500 block text-[9px] uppercase">Gross Area (BGF)</span>
            <span className="text-white font-bold">{q.bgf || project.area}</span>
          </div>
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
            <span className="text-slate-500 block text-[9px] uppercase">Envelope Vol (Ve)</span>
            <span className="text-emerald-400 font-bold">{q.ve || '—'}</span>
          </div>
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
            <span className="text-slate-500 block text-[9px] uppercase">Ext. Wall Area</span>
            <span className="text-slate-300 font-semibold">{q.wallArea || '—'}</span>
          </div>
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/80">
            <span className="text-slate-500 block text-[9px] uppercase">
              {isEnergy ? 'Thermal Zones' : 'Glazing (WWR)'}
            </span>
            <span className={isEnergy ? 'text-amber-400 font-semibold' : 'text-sky-300 font-semibold'}>
              {isEnergy ? q.thermalZones : `${q.glazingArea || ''} (${q.wwr || '—'})`}
            </span>
          </div>
        </div>

        {/* Actions & File Download */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {project.file ? (
              <a
                href={`models/${project.file}`}
                download={project.file}
                className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-700/80 hover:border-cyan-500/50 flex items-center gap-1.5 transition-colors"
                title={`Download ${project.file}`}
              >
                <Download size={13} className="text-cyan-400" />
                <span className="text-[10px]">{project.format.split(',')[0]} Model</span>
              </a>
            ) : (
              <span className="text-[10px] font-mono text-slate-500 px-2 py-1 bg-slate-950/80 rounded border border-slate-800">
                LOD 400 Archive (&gt;100MB)
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
          >
            <span>Quantities</span>
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
