import React, { useState } from 'react';
import BimCanvas from './BimCanvas';
import BimControls from './BimControls';
import BimTree from './BimTree';
import PropertyPanel from './PropertyPanel';
import { Maximize2, Minimize2, Sparkles, Thermometer, ShieldAlert, Cpu } from 'lucide-react';

export default function BimStudio({ isStandalone = false }) {
  const [selectedPreset, setSelectedPreset] = useState('residential-villa');
  const [viewMode, setViewMode] = useState('standard');
  const [explodeProgress, setExplodeProgress] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(null);
  const [sectionAxis, setSectionAxis] = useState('Y');
  const [sunAngle, setSunAngle] = useState(45);
  const [selectedElement, setSelectedElement] = useState(null);
  const [hiddenCategories, setHiddenCategories] = useState(new Set());
  const [isolatedStorey, setIsolatedStorey] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl transition-all duration-300 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'h-[680px] lg:h-[740px]'
      }`}
    >
      {/* Three.js 3D WebGL Canvas */}
      <BimCanvas
        selectedPreset={selectedPreset}
        viewMode={viewMode}
        explodeProgress={explodeProgress}
        sectionHeight={sectionHeight}
        sectionAxis={sectionAxis}
        sunAngle={sunAngle}
        onSelectElement={setSelectedElement}
        selectedElementId={selectedElement?.id}
        isolatedStorey={isolatedStorey}
        hiddenCategories={hiddenCategories}
      />

      {/* Top Floating Controls */}
      <BimControls
        selectedPreset={selectedPreset}
        setSelectedPreset={setSelectedPreset}
        viewMode={viewMode}
        setViewMode={setViewMode}
        explodeProgress={explodeProgress}
        setExplodeProgress={setExplodeProgress}
        sectionHeight={sectionHeight}
        setSectionHeight={setSectionHeight}
        sectionAxis={sectionAxis}
        setSectionAxis={setSectionAxis}
        sunAngle={sunAngle}
        setSunAngle={setSunAngle}
      />

      {/* Model Hierarchy Tree (Bottom Left) */}
      <BimTree
        selectedPreset={selectedPreset}
        hiddenCategories={hiddenCategories}
        setHiddenCategories={setHiddenCategories}
        isolatedStorey={isolatedStorey}
        setIsolatedStorey={setIsolatedStorey}
        onSelectCategory={() => {}}
      />

      {/* BIM Element Property Inspector (Bottom Right) */}
      <PropertyPanel
        selectedElement={selectedElement}
        onClose={() => setSelectedElement(null)}
      />

      {/* Fullscreen Toggle Button */}
      <div className="absolute bottom-6 right-6 md:right-[410px] z-10">
        <button
          onClick={toggleFullscreen}
          className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-slate-800 shadow-xl transition-all flex items-center gap-1.5 text-xs font-mono"
          title={isFullscreen ? 'Exit Fullscreen' : 'Expand Fullscreen 3D View'}
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          <span className="hidden sm:inline">{isFullscreen ? 'Exit' : 'Fullscreen'}</span>
        </button>
      </div>

      {/* Thermal Gradient Legend when in Thermal Mode */}
      {viewMode === 'thermal' && (
        <div className="absolute top-20 left-4 z-20 bg-slate-900/90 backdrop-blur-md p-3 rounded-xl border border-amber-500/30 text-xs font-mono shadow-2xl space-y-1.5 animate-fadeIn">
          <div className="text-[11px] font-semibold text-amber-400 flex items-center gap-1.5">
            <Thermometer size={13} />
            Thermal Heat Loss Gradient (U-Value)
          </div>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span className="w-3 h-3 rounded bg-emerald-500"></span>
            <span className="text-slate-300">U &le; 0.20 W/m²K (Passivhaus / KfW 40)</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span className="w-3 h-3 rounded bg-cyan-500"></span>
            <span className="text-slate-300">U &le; 0.35 W/m²K (Standard Insulated)</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span className="w-3 h-3 rounded bg-amber-500"></span>
            <span className="text-slate-300">U &le; 0.85 W/m²K (Triple/Double Glazing)</span>
          </div>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span className="w-3 h-3 rounded bg-red-500"></span>
            <span className="text-slate-300">U &ge; 1.20 W/m²K (Thermal Loss / As-Built)</span>
          </div>
        </div>
      )}
    </div>
  );
}
