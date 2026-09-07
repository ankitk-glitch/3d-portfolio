import React from 'react';
import { Box, Mail, Globe, Shield, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-850">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white">
                <Box size={18} />
              </div>
              <span className="text-white font-extrabold text-base tracking-tight">THE RIBHUS</span>
              <span className="text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 px-1.5 py-0.5 rounded">theribhus.com</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Specialized Architectural 3D BIM Modeling and 2D-to-3D Building Envelope Reconstruction for Energy Audits and Heating Load Calculations (<span className="text-slate-300">DIN EN 12831 / GEG</span>). Zero MEP clutter — pure precision building envelopes.
            </p>
            <div className="pt-1 flex items-center gap-4 text-slate-400 text-xs font-mono">
              <a href="mailto:contact@theribhus.com" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <Mail size={13} />
                <span>contact@theribhus.com</span>
              </a>
              <span className="text-slate-700">&bull;</span>
              <a href="https://theribhus.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <Globe size={13} />
                <span>theribhus.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#energy-workflow" className="hover:text-cyan-400 transition-colors">2D to 3D Energy Audit</a></li>
              <li><a href="#energy-workflow" className="hover:text-cyan-400 transition-colors">Heizlastberechnung (DIN EN 12831)</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Architectural Execution BIM (LOD 350)</a></li>
              <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">DIN 277 Area &amp; Volume Takeoff</a></li>
              <li><a href="#standards" className="hover:text-cyan-400 transition-colors">openBIM IFC Handover</a></li>
            </ul>
          </div>

          {/* Col 3: Standards */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono">
              Compliance Norms
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><span className="text-slate-300 font-mono">DIN EN 12831-1</span> &bull; Heat Load</li>
              <li><span className="text-slate-300 font-mono">GEG 2024</span> &bull; Building Energy Act</li>
              <li><span className="text-slate-300 font-mono">DIN V 18599</span> &bull; Energy Demand</li>
              <li><span className="text-slate-300 font-mono">DIN 4108</span> &bull; Thermal Insulation</li>
              <li><span className="text-slate-300 font-mono">ISO 19650</span> &bull; BIM Information</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} The Ribhus (theribhus.com). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
