import React from 'react';
import { 
  Eye, 
  Flame, 
  Layers, 
  Box, 
  Compass, 
  Sun, 
  Scissors, 
  RotateCcw,
  Sliders,
  ChevronDown
} from 'lucide-react';
import { bimPresets } from '../../data/bimModels';

export default function BimControls({
  selectedPreset,
  setSelectedPreset,
  viewMode,
  setViewMode,
  explodeProgress,
  setExplodeProgress,
  sectionHeight,
  setSectionHeight,
  sectionAxis,
  setSectionAxis,
  sunAngle,
  setSunAngle,
  showTree,
  setShowTree,
  showProps,
  setShowProps
}) {
  const triggerCamera = (presetName) => {
    window.dispatchEvent(new CustomEvent('bim-camera-preset', { detail: presetName }));
  };

  return (
    <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 max-w-sm">
      {/* Main Mode Toolbar */}
      <div className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 p-1.5 rounded-xl shadow-2xl">
        {/* Preset Selector Dropdown */}
        <div className="relative group">
          <select
            value={selectedPreset}
            onChange={(e) => setSelectedPreset(e.target.value)}
            className="appearance-none bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 pl-3 pr-7 py-2 rounded-lg border border-slate-700 font-medium focus:outline-none focus:border-cyan-500 cursor-pointer"
          >
            {bimPresets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <ChevronDown size={14} className="absolute right-2 top-2.5 text-slate-400 pointer-events-none" />
        </div>

        <div className="h-5 w-px bg-slate-700 mx-1"></div>

        {/* View Mode Buttons */}
        <button
          onClick={() => setViewMode('standard')}
          title="Architectural Material View"
          className={`p-2 rounded-lg text-xs flex items-center gap-1 font-mono transition-all ${
            viewMode === 'standard'
              ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <Eye size={15} />
          <span className="hidden sm:inline">Arch</span>
        </button>

        <button
          onClick={() => setViewMode('thermal')}
          title="Energy Audit & Thermal Heat Loss Mode"
          className={`p-2 rounded-lg text-xs flex items-center gap-1 font-mono transition-all ${
            viewMode === 'thermal'
              ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
              : 'text-slate-400 hover:text-amber-400 hover:bg-slate-800'
          }`}
        >
          <Flame size={15} />
          <span className="hidden sm:inline">Energy</span>
        </button>

        <button
          onClick={() => setViewMode('xray')}
          title="X-Ray Envelope Ghosting (Inspect Structural Core)"
          className={`p-2 rounded-lg text-xs flex items-center gap-1 font-mono transition-all ${
            viewMode === 'xray'
              ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
              : 'text-slate-400 hover:text-sky-300 hover:bg-slate-800'
          }`}
        >
          <Box size={15} />
          <span className="hidden sm:inline">Ghost</span>
        </button>

        <button
          onClick={() => setViewMode('wireframe')}
          title="Blueprint Wireframe"
          className={`p-2 rounded-lg text-xs flex items-center gap-1 font-mono transition-all ${
            viewMode === 'wireframe'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
              : 'text-slate-400 hover:text-indigo-300 hover:bg-slate-800'
          }`}
        >
          <Layers size={15} />
          <span className="hidden sm:inline">Wire</span>
        </button>
      </div>

      {/* Interactive Tool Adjustment Sliders Panel */}
      <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 p-3 rounded-xl shadow-2xl flex flex-col gap-3 text-xs">
        {/* Explode Axonometric */}
        <div className="space-y-1">
          <div className="flex justify-between items-center text-slate-300 font-mono">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Sliders size={13} />
              Storey Explosion
            </span>
            <span className="text-[11px] text-slate-400 font-semibold">{Math.round(explodeProgress * 100)}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={explodeProgress}
            onChange={(e) => setExplodeProgress(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        {/* Section Cut / Clipping */}
        <div className="space-y-1 pt-1 border-t border-slate-800">
          <div className="flex justify-between items-center text-slate-300 font-mono">
            <span className="flex items-center gap-1.5 text-orange-400">
              <Scissors size={13} />
              Section Cut Plane
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSectionHeight(sectionHeight === null ? 3.5 : null)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  sectionHeight !== null ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-400'
                }`}
              >
                {sectionHeight !== null ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>
          {sectionHeight !== null && (
            <div className="flex items-center gap-2 pt-1">
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.1"
                value={sectionHeight}
                onChange={(e) => setSectionHeight(parseFloat(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <span className="font-mono text-[10px] text-slate-400 w-10 text-right">{sectionHeight.toFixed(1)}m</span>
            </div>
          )}
        </div>

        {/* Solar Sun Angle Study */}
        <div className="space-y-1 pt-1 border-t border-slate-800">
          <div className="flex justify-between items-center text-slate-300 font-mono">
            <span className="flex items-center gap-1.5 text-amber-300">
              <Sun size={13} />
              Solar Azimuth
            </span>
            <span className="text-[11px] text-slate-400">{sunAngle}°</span>
          </div>
          <input
            type="range"
            min="0"
            max="360"
            step="5"
            value={sunAngle}
            onChange={(e) => setSunAngle(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
        </div>

        {/* Camera Views */}
        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <span className="text-[11px] font-mono text-slate-400">Camera:</span>
          <div className="flex gap-1">
            {['iso', 'top', 'front', 'side'].map((cam) => (
              <button
                key={cam}
                onClick={() => triggerCamera(cam)}
                className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded font-mono text-[10px] uppercase transition-colors"
              >
                {cam}
              </button>
            ))}
            <button
              onClick={() => triggerCamera('reset')}
              title="Reset Camera"
              className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded transition-colors"
            >
              <RotateCcw size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
