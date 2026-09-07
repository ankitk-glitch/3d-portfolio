import React, { useState } from 'react';
import { 
  FileText, 
  Box, 
  ArrowRight, 
  Flame, 
  CheckCircle2, 
  Layers, 
  Maximize2, 
  ShieldAlert, 
  Gauge, 
  ChevronRight,
  Database,
  Cpu
} from 'lucide-react';

export default function EnergyAuditWorkflow() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      title: '2D Legacy CAD & Paper Survey Ingestion',
      subtitle: 'Scan Ingestion & Geometric Alignment',
      badge: 'Input Phase',
      desc: 'We import fragmented paper blueprints, historical microfiche scans, and 2D DWG/DXF drawings. Scale calibration, wall thickness checks (e.g. 24cm, 36.5cm, 49cm masonry), and elevation alignments are verified against structural realities.',
      deliverable: 'Calibrated 2D Cadastral Underlays & Storey Reference Planes',
      icon: FileText,
      standards: ['DIN ISO 128', 'DIN 1356-1']
    },
    {
      id: '02',
      title: '3D Watertight Structural Envelope Modeling',
      subtitle: 'Thermal Boundary Hull (Hüllfläche)',
      badge: 'BIM Construction',
      desc: 'Building the monolithic 3D geometry in ArchiCAD/Revit with strict boundary airtightness. Exterior walls, roof slopes, basement slabs against ground, and thermal breaks are modeled without geometric gaps.',
      deliverable: 'Watertight Closed Envelope Volume (Ve) & Surface Areas (A)',
      icon: Box,
      standards: ['DIN EN ISO 13789', 'GEG § 23']
    },
    {
      id: '03',
      title: 'Composite Material & U-Value Assignment',
      subtitle: 'Building Physics & Component Layers',
      badge: 'Thermal Modeling',
      desc: 'Assigning multi-layered physical assemblies to every building element: brickwork, insulation thickness, screed, and triple glazing specs. Calculating component-level heat transfer coefficients (U-values in W/m²K).',
      deliverable: 'Component U-Value Schedule & Thermal Conductivity Matrix',
      icon: Flame,
      standards: ['DIN 4108-4', 'DIN EN ISO 6946']
    },
    {
      id: '04',
      title: 'Raumbuch & Room-by-Room Thermal Zoning',
      subtitle: 'Heizlastberechnung (DIN EN 12831)',
      badge: 'Energy Audit',
      desc: 'Generating automated Raumbuch (room schedule) allocating design interior temperatures (+20°C living, +24°C bathroom, +15°C stairwell, unheated attic/cellar). Net room volumes, perimeter exposure, and ventilation air change rates are linked.',
      deliverable: 'Automated Room Volume Table & Standard Heating Load Input Geometry',
      icon: Database,
      standards: ['DIN EN 12831-1', 'DIN V 18599']
    },
    {
      id: '05',
      title: 'OpenBIM IFC Export & Energy Audit Handover',
      subtitle: 'Direct Solar-Computer & Hottgenroth Import',
      badge: 'Audit Export',
      desc: 'Model export via IFC 2x3 and IFC4 with custom Energy Analysis Property Sets (Pset_ThermalEnvelope, Raumstempel). Seamlessly loaded into energy calculation software without manual recalculation.',
      deliverable: 'Audit-Certified IFC File, 2D Verification Sheets & Raum-Buch PDF',
      icon: CheckCircle2,
      standards: ['buildingSMART openBIM', 'ISO 16739']
    }
  ];

  return (
    <section id="energy-workflow" className="py-20 bg-slate-900/60 border-y border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Flame size={13} className="text-amber-400" />
            <span>Energy Audit Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 2D-to-3D Energy Audit Reconstruction Pipeline
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            How The Ribhus transforms legacy 2D blueprints into millimeter-accurate, simulation-ready 3D building physics models for German heating load calculations (<span className="text-cyan-300 font-mono">Heizlast</span>).
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'bg-slate-800/90 border-cyan-500/80 shadow-lg shadow-cyan-950/50 scale-[1.02]'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    STEP {step.id}
                  </span>
                  <Icon size={16} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
                </div>
                <div className={`text-xs font-semibold line-clamp-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Step Card */}
        <div className="bg-slate-950/80 border border-cyan-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/50 font-mono text-xs font-semibold">
                  {steps[activeStep].badge}
                </span>
                <span className="font-mono text-xs text-slate-400">Phase {steps[activeStep].id} of 05</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2 space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 size={15} />
                  <span>Deliverable: <strong>{steps[activeStep].deliverable}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <Layers size={15} className="text-cyan-400" />
                  <span>Referenced Norms: {steps[activeStep].standards.join(' &bull; ')}</span>
                </div>
              </div>
            </div>

            {/* Visual Callout Box */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-xl p-5 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                <span>The Ribhus Audit Metric</span>
                <span className="text-cyan-400">DIN EN 12831-1</span>
              </div>
              
              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between items-center py-1 bg-slate-950/60 px-2.5 rounded border border-slate-800/60">
                  <span className="text-slate-400">Gross Envelope Area (A):</span>
                  <span className="text-slate-200 font-semibold">Automated Polygon Tracing</span>
                </div>
                <div className="flex justify-between items-center py-1 bg-slate-950/60 px-2.5 rounded border border-slate-800/60">
                  <span className="text-slate-400">Gross Heated Volume (Ve):</span>
                  <span className="text-emerald-400 font-semibold">Closed Watertight Shell</span>
                </div>
                <div className="flex justify-between items-center py-1 bg-slate-950/60 px-2.5 rounded border border-slate-800/60">
                  <span className="text-slate-400">Compactness Ratio (A/Ve):</span>
                  <span className="text-amber-400 font-semibold">Optimal Thermal Form Factor</span>
                </div>
                <div className="flex justify-between items-center py-1 bg-slate-950/60 px-2.5 rounded border border-slate-800/60">
                  <span className="text-slate-400">Thermal Bridges (Psi ψ):</span>
                  <span className="text-sky-300 font-semibold">DIN 4108 Beiblatt 2</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#estimate"
                  className="w-full py-2 rounded-lg bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/40 text-cyan-300 font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Request 2D-to-3D Conversion Quote</span>
                  <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
