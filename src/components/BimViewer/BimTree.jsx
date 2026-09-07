import React, { useState } from 'react';
import { 
  FolderTree, 
  Eye, 
  EyeOff, 
  Layers, 
  Home, 
  Building, 
  ChevronRight, 
  ChevronDown,
  Activity,
  ShieldCheck,
  Scale
} from 'lucide-react';
import { bimPresets } from '../../data/bimModels';

export default function BimTree({
  selectedPreset,
  hiddenCategories,
  setHiddenCategories,
  isolatedStorey,
  setIsolatedStorey,
  onSelectCategory
}) {
  const [collapsed, setCollapsed] = useState(false);
  const currentPresetData = bimPresets.find(p => p.id === selectedPreset) || bimPresets[0];

  const categories = [
    { name: 'Walls', count: 8, color: '#e2e8f0', label: 'Exterior & Boundary Walls' },
    { name: 'Slabs', count: 3, color: '#334155', label: 'Reinforced Floor & Roof Slabs' },
    { name: 'Columns', count: 9, color: '#64748b', label: 'Structural Concrete Columns' },
    { name: 'Glazing', count: 6, color: '#38bdf8', label: 'Triple Glazing & Curtain Windows' },
    { name: 'Roof', count: 2, color: '#1e293b', label: 'Thermal Flat / Pitched Roof' },
    { name: 'Partitions', count: 4, color: '#94a3b8', label: 'Interior Acoustic Dividers' },
  ];

  const storeys = [
    { id: 0, name: '00 Erdgeschoss (EG)', elevation: '0.00m', area: '165 m²' },
    { id: 1, name: '01 Obergeschoss (1.OG)', elevation: '+3.20m', area: '142 m²' },
    { id: 2, name: '02 Dachgeschoss (DG)', elevation: '+6.40m', area: '120 m²' },
  ];

  const toggleCategory = (catName) => {
    setHiddenCategories(prev => {
      const next = new Set(prev);
      if (next.has(catName)) {
        next.delete(catName);
      } else {
        next.add(catName);
      }
      return next;
    });
  };

  return (
    <div className={`absolute bottom-6 left-6 z-20 transition-all duration-300 ${collapsed ? 'w-12 h-12' : 'w-72 md:w-80'}`}>
      {collapsed ? (
        <button
          onClick={() => setCollapsed(false)}
          className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 text-cyan-400 flex items-center justify-center shadow-xl hover:bg-slate-800"
          title="Open Model Explorer"
        >
          <FolderTree size={20} />
        </button>
      ) : (
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-xl p-4 shadow-2xl flex flex-col max-h-[75vh] overflow-hidden text-xs">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <FolderTree size={16} className="text-cyan-400" />
              <span className="font-semibold text-slate-200 tracking-wide">BIM Model Tree</span>
            </div>
            <button
              onClick={() => setCollapsed(true)}
              className="text-slate-400 hover:text-slate-200 text-xs px-2 py-0.5 rounded hover:bg-slate-800"
            >
              Hide
            </button>
          </div>

          {/* Quick Metrics Badge for Building Energy Audit */}
          <div className="my-3 p-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50 space-y-1.5 font-mono text-[11px]">
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Typology:</span>
              <span className="text-cyan-400 font-semibold">{currentPresetData.type}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Gross Vol (Ve):</span>
              <span className="text-emerald-400 font-semibold">{currentPresetData.grossVolume}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">A/V Ratio:</span>
              <span className="text-amber-400 font-semibold">{currentPresetData.avRatio}</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span className="text-slate-400">Avg U-Value:</span>
              <span className="text-sky-300 font-semibold">{currentPresetData.uValueAverage}</span>
            </div>
          </div>

          {/* Scrollable Tree Area */}
          <div className="overflow-y-auto pr-1 space-y-4">
            {/* Storey Isolator */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
                <span>Building Storeys</span>
                {isolatedStorey !== null && (
                  <button
                    onClick={() => setIsolatedStorey(null)}
                    className="text-cyan-400 hover:underline text-[10px] lowercase"
                  >
                    reset
                  </button>
                )}
              </div>
              <div className="space-y-1">
                {storeys.map((st) => {
                  const isIsolated = isolatedStorey === st.id;
                  return (
                    <div
                      key={st.id}
                      onClick={() => setIsolatedStorey(isIsolated ? null : st.id)}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-md cursor-pointer transition-colors ${
                        isIsolated
                          ? 'bg-cyan-950/80 border border-cyan-500/60 text-cyan-300'
                          : 'hover:bg-slate-800/80 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Building size={13} className={isIsolated ? 'text-cyan-400' : 'text-slate-500'} />
                        <span className="font-medium text-[11px]">{st.name}</span>
                      </div>
                      <span className="font-mono text-[10px] text-slate-400">{st.elevation}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Architectural & Structural Disciplines */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                Categories & Visibility
              </div>
              <div className="space-y-1">
                {categories.map((cat) => {
                  const isHidden = hiddenCategories.has(cat.name);
                  return (
                    <div
                      key={cat.name}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-md hover:bg-slate-800/60 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className={`text-[11px] ${isHidden ? 'line-through text-slate-500' : 'text-slate-300'}`}>
                          {cat.label}
                        </span>
                      </div>
                      <button
                        onClick={() => toggleCategory(cat.name)}
                        className={`p-1 rounded hover:bg-slate-700/60 transition-colors ${
                          isHidden ? 'text-slate-500' : 'text-cyan-400'
                        }`}
                        title={isHidden ? 'Show Category' : 'Hide Category'}
                      >
                        {isHidden ? <EyeOff size={13} /> : <Eye size={13} />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
