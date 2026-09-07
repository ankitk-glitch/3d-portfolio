import React from 'react';
import { 
  X, 
  Download, 
  FileCode, 
  Layers, 
  Flame, 
  CheckCircle2, 
  Ruler, 
  Building, 
  Table, 
  Calendar,
  ExternalLink
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isEnergy = project.category === 'Energy Audit & Heizlast' || project.name?.includes('Heizlast');
  const q = project.quantities || {};

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Real ArchiCAD Model Viewport Hero Banner */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-slate-950 shrink-0 border-b border-slate-800">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 backdrop-blur-md transition-colors z-10"
          >
            <X size={18} />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-5 left-6 right-6 space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${
                isEnergy ? 'bg-amber-950 text-amber-300 border border-amber-500/40' : 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
              }`}>
                {project.type || project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800/90 text-slate-300 border border-slate-700">
                {project.lod}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-slate-800/90 text-cyan-300 border border-slate-700">
                Formats: {project.format}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              {project.name}
            </h2>
            <p className="text-xs sm:text-sm text-cyan-300 font-mono">
              {project.specs}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Detailed Quantities Takeoff (Massenermittlung nach DIN 277 / DIN EN 12831) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm uppercase tracking-wider font-mono font-bold text-cyan-400 flex items-center gap-2">
                <Table size={16} />
                <span>BIM Quantities Takeoff (Massenermittlung)</span>
              </h4>
              <span className="text-[11px] font-mono text-slate-400">ArchiCAD Verified</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Gross Area (BGF)</span>
                <span className="text-white font-bold text-sm">{q.bgf || project.area}</span>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Net Usable Area (NRF)</span>
                <span className="text-slate-200 font-bold text-sm">{q.nrf || '—'}</span>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Gross Volume (Ve)</span>
                <span className="text-emerald-400 font-bold text-sm">{q.ve || '—'}</span>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Envelope Area (A)</span>
                <span className="text-amber-300 font-bold text-sm">{q.envelopeArea || '—'}</span>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Exterior Walls</span>
                <span className="text-slate-300 font-semibold">{q.wallArea || '—'}</span>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Glazing (WWR)</span>
                <span className="text-sky-300 font-semibold">{q.glazingArea ? `${q.glazingArea} (${q.wwr})` : '—'}</span>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Storey Count</span>
                <span className="text-slate-300 font-semibold">{q.storeys || '—'}</span>
              </div>
              <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
                <span className="text-slate-500 block text-[10px] uppercase">Thermal Zones / Rooms</span>
                <span className="text-amber-400 font-bold">{q.thermalZones || '—'}</span>
              </div>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400 mb-2">
              Model Scope &amp; Technical Execution
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Deliverables List */}
          {project.deliverables && (
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-mono text-slate-400">
                Project Deliverables &amp; Schedules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-300"
                  >
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Software, Standards & File Download Action */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-slate-400">Software &amp; Standards</div>
              <div className="flex flex-wrap gap-1.5">
                {(project.software || ['ArchiCAD 28']).map((s) => (
                  <span key={s} className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 text-[11px] font-mono border border-slate-700">
                    {s}
                  </span>
                ))}
                {(project.standards || ['DIN 277', 'GEG 2024']).map((st) => (
                  <span key={st} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700">
                    {st}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              {project.file ? (
                <a
                  href={`models/${project.file}`}
                  download={project.file}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-lg shadow-cyan-600/30"
                >
                  <Download size={14} />
                  <span>Download Model ({project.file.split('.').pop().toUpperCase()})</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700">
                  Archived LOD 400 Package (&gt;100MB)
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
