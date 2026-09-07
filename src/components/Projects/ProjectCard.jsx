import React from 'react';
import { 
  Building2, 
  Flame, 
  Layers, 
  ArrowUpRight, 
  MapPin, 
  Maximize2,
  Calendar,
  Sparkles
} from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  const isEnergy = project.category === 'Energy Audit';

  return (
    <div 
      onClick={() => onOpenModal(project)}
      className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyan-950/40 flex flex-col cursor-pointer"
    >
      {/* Image Thumbnail with Overlay Badges */}
      <div className="relative h-56 overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider backdrop-blur-md shadow-md ${
            isEnergy 
              ? 'bg-amber-950/80 text-amber-300 border border-amber-500/40' 
              : 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40'
          }`}>
            {project.category}
          </span>
          <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-slate-900/80 text-slate-300 border border-slate-700 backdrop-blur-md">
            {project.lod}
          </span>
        </div>

        {/* Year / Location */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
          <span className="flex items-center gap-1">
            <MapPin size={13} className="text-cyan-400" />
            <span>{project.location}</span>
          </span>
          <span className="font-mono text-slate-400">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5 line-clamp-1">
            {project.subTitle}
          </p>
          <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Spec Highlights */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80 font-mono text-[11px]">
          <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
            <span className="text-slate-500 block text-[9px] uppercase">Gross Area</span>
            <span className="text-slate-200 font-semibold">{project.area}</span>
          </div>
          <div className="bg-slate-950/60 p-2 rounded-lg border border-slate-800">
            <span className="text-slate-500 block text-[9px] uppercase">Envelope Volume</span>
            <span className="text-emerald-400 font-semibold">{project.stats.volume}</span>
          </div>
        </div>

        {/* Software & CTA */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-wrap gap-1">
            {project.software.slice(0, 2).map((sw) => (
              <span key={sw} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 border border-slate-700/60">
                {sw}
              </span>
            ))}
          </div>
          <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            <span>Case Study</span>
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}
