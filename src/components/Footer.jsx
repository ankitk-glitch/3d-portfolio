import React from 'react';
import { Box, Mail, Globe, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white">
                <Box size={18} />
              </div>
              <span className="text-white font-extrabold text-base tracking-tight">THE RIBHUS</span>
              <span className="text-[10px] font-mono bg-slate-800 text-cyan-300 border border-slate-700 px-1.5 py-0.5 rounded">
                theribhus.com
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Every 2D plan becomes an accurate 3D BIM model. Converting scanned paper drawings, PDF blueprints, and 2D CAD surveys into production-ready ArchiCAD and Revit architectural models for architects and energy consultants across Europe.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 pt-1">
              <a href="mailto:contact@theribhus.com" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <Mail size={13} />
                <span>contact@theribhus.com</span>
              </a>
              <span>&bull;</span>
              <a href="https://theribhus.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                <Globe size={13} />
                <span>theribhus.com</span>
              </a>
            </div>
          </div>

          {/* Scope & Formats */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase font-mono tracking-wider">
              Native Deliverables
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>ArchiCAD (.pln &amp; .bpn)</li>
              <li>Autodesk Revit (.rvt)</li>
              <li>OpenBIM IFC (IFC4 &amp; 2x3)</li>
              <li>2D CAD Verification (.dwg)</li>
              <li>Watertight Thermal Envelopes</li>
            </ul>
          </div>

          {/* Pricing & Norms */}
          <div className="space-y-2.5">
            <h4 className="text-white font-bold text-xs uppercase font-mono tracking-wider">
              Pricing &amp; Standards
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>Single-Family: from €180 – €290</li>
              <li>Multi-Family: from €450 – €950+</li>
              <li>Studio Retainer: from €1,500/mo</li>
              <li>DIN EN 12831 &bull; Heat Load</li>
              <li>GEG 2024 &bull; Building Energy Act</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            &copy; {new Date().getFullYear()} The Ribhus (theribhus.com). Tailored for the European Architectural &amp; Energy Market.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
