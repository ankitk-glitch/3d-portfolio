import React, { useState } from 'react';
import { 
  Info, 
  X, 
  Copy, 
  Check, 
  Flame, 
  ShieldAlert, 
  Ruler, 
  Layers, 
  Cpu,
  FileSpreadsheet
} from 'lucide-react';

export default function PropertyPanel({ selectedElement, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!selectedElement) {
    return (
      <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-700/60 text-slate-400 text-xs shadow-xl pointer-events-none">
        <Info size={14} className="text-cyan-400 animate-pulse" />
        <span>Click any 3D element to inspect BIM parameters & U-values</span>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(selectedElement, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="absolute bottom-6 right-6 z-20 w-80 md:w-96 max-h-[80vh] bg-slate-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-4 shadow-2xl flex flex-col text-xs text-slate-200 overflow-hidden animate-fadeIn">
      {/* Header */}
      <div className="flex items-start justify-between pb-3 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-700/50">
              {selectedElement.lod || 'LOD 350'}
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {selectedElement.id}
            </span>
          </div>
          <h4 className="font-semibold text-sm text-slate-100 mt-1 line-clamp-1">
            {selectedElement.name || 'BIM Element'}
          </h4>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleCopy}
            title="Copy BIM Parameters"
            className="p-1 text-slate-400 hover:text-cyan-300 rounded hover:bg-slate-800 transition-colors"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          </button>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-200 rounded hover:bg-slate-800 transition-colors"
          >
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Content Scroll */}
      <div className="overflow-y-auto space-y-3 py-3 pr-1">
        {/* Thermal Energy Audit Highlights */}
        {selectedElement.uValue && (
          <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/25 space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                <Flame size={13} className="text-amber-400" />
                Thermal Transmittance (U-Value)
              </span>
              <span className="font-mono font-bold text-amber-300">
                {selectedElement.uValue}
              </span>
            </div>
            {selectedElement.standard && (
              <div className="text-[10px] text-slate-400 font-mono">
                Standard: <span className="text-slate-300">{selectedElement.standard}</span>
              </div>
            )}
            {selectedElement.energyZone && (
              <div className="text-[10px] text-emerald-400 font-mono">
                Boundary: {selectedElement.energyZone}
              </div>
            )}
            {selectedElement.transmissionHeatLoss && (
              <div className="text-[10px] text-orange-300 font-mono">
                Loss Coefficient: {selectedElement.transmissionHeatLoss}
              </div>
            )}
          </div>
        )}

        {/* Geometry Takeoff */}
        <div className="space-y-1.5 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/40">
          <div className="flex items-center gap-1.5 text-slate-300 font-medium text-[11px]">
            <Ruler size={13} className="text-cyan-400" />
            <span>Geometric Takeoff (DIN 277)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
            {selectedElement.area && (
              <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800">
                <span className="text-slate-500 block text-[9px] uppercase">Surface Area</span>
                <span className="text-slate-200 font-semibold">{selectedElement.area}</span>
              </div>
            )}
            {selectedElement.volume && (
              <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800">
                <span className="text-slate-500 block text-[9px] uppercase">Net Volume</span>
                <span className="text-slate-200 font-semibold">{selectedElement.volume}</span>
              </div>
            )}
            {selectedElement.thickness && (
              <div className="bg-slate-900/60 p-1.5 rounded border border-slate-800 col-span-2">
                <span className="text-slate-500 block text-[9px] uppercase">Assembly Thickness</span>
                <span className="text-slate-200 font-semibold">{selectedElement.thickness}</span>
              </div>
            )}
          </div>
        </div>

        {/* Material Build-up */}
        {selectedElement.material && (
          <div className="space-y-1 bg-slate-800/40 p-2.5 rounded-lg border border-slate-700/40">
            <div className="flex items-center gap-1.5 text-slate-300 font-medium text-[11px]">
              <Layers size={13} className="text-indigo-400" />
              <span>Material Composition</span>
            </div>
            <p className="text-[11px] text-slate-300 font-mono leading-relaxed pt-0.5">
              {selectedElement.material}
            </p>
          </div>
        )}

        {/* Structural & Safety Characteristics */}
        <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
          {selectedElement.fireRating && (
            <div className="bg-slate-800/40 p-2 rounded-lg border border-slate-700/40">
              <span className="text-slate-400 block mb-0.5">Fire Resistance</span>
              <span className="text-rose-400 font-semibold">{selectedElement.fireRating}</span>
            </div>
          )}
          {typeof selectedElement.loadBearing === 'boolean' && (
            <div className="bg-slate-800/40 p-2 rounded-lg border border-slate-700/40">
              <span className="text-slate-400 block mb-0.5">Load Bearing</span>
              <span className={selectedElement.loadBearing ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                {selectedElement.loadBearing ? 'Yes (Structural)' : 'No (Envelope/Non-load)'}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px]">
        <span className="text-slate-400 font-mono">The Ribhus BIM Studio</span>
        <button
          onClick={handleCopy}
          className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
        >
          <FileSpreadsheet size={12} />
          <span>Export IFC Props</span>
        </button>
      </div>
    </div>
  );
}
