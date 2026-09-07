import React from 'react';
import { 
  ShieldCheck, 
  FileCheck2, 
  Scale, 
  BookOpen, 
  CheckCircle2,
  Building,
  Award
} from 'lucide-react';

export default function Standards() {
  const norms = [
    {
      code: 'DIN EN 12831-1:2017',
      title: 'Heizlastberechnung (Design Heat Load)',
      scope: 'Standard method for room-by-room heating load and thermal transmission calculation in buildings.',
      impact: 'Watertight room-bounding geometries, internal design temperatures, and exterior transmission areas.'
    },
    {
      code: 'GEG 2024',
      title: 'Gebäudeenergiegesetz (Building Energy Act)',
      scope: 'Federal German legislation setting primary energy requirements, U-value caps, and renewable heating targets.',
      impact: 'Audited gross building volume (Ve), surface-to-volume ratio (A/Ve), and component-level U-value matrices.'
    },
    {
      code: 'DIN V 18599',
      title: 'Energetische Bewertung von Gebäuden',
      scope: 'Calculation of net, final and primary energy demand for heating, cooling, ventilation, and domestic hot water.',
      impact: 'Multi-zone building thermal division into conditioned, unconditioned, and buffer zones.'
    },
    {
      code: 'DIN 4108-2 / Bbl. 2',
      title: 'Wärmeschutz & Wärmebrücken (Thermal Bridges)',
      scope: 'Thermal insulation and energy economy, including thermal bridge coefficient mitigation (Psi ψ).',
      impact: 'Explicit 3D detail modeling for junctions: plinth/ground, window reveals, and roof parapets.'
    },
    {
      code: 'DIN 277:2021',
      title: 'Grundflächen und Rauminhalte (Areas & Volumes)',
      scope: 'Standardized classification of building floor areas (BGF, NRF, VF, TF) and gross cubic volume (BRI).',
      impact: 'Automated area takeoff schedules formatted for official German building permit and loan submissions.'
    },
    {
      code: 'buildingSMART IFC4 / 2x3',
      title: 'OpenBIM Handover & Classification',
      scope: 'Vendor-neutral BIM data standard for seamless import into Solar-Computer, Hottgenroth, and CAD tools.',
      impact: 'Clean IFC geometry free from corrupt polyhedrons, carrying localized German Property Sets.'
    }
  ];

  return (
    <section id="standards" className="py-24 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-400">
            <ShieldCheck size={13} />
            <span>Regulatory &amp; Engineering Compliance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            German &amp; European Standards Handled
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Our 3D models are engineered strictly according to German construction norms and energy saving regulations, guaranteeing seamless integration with local energy consultants (Energieberater) and certified auditors.
          </p>
        </div>

        {/* Norms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {norms.map((norm) => (
            <div
              key={norm.code}
              className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-emerald-500/40 transition-all flex flex-col justify-between space-y-4 shadow-lg"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-700/50 inline-block">
                  {norm.code}
                </span>
                <h3 className="text-base font-bold text-white pt-1">
                  {norm.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {norm.scope}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-900 text-xs font-mono text-slate-300 bg-slate-900/40 p-3 rounded-xl border border-slate-800/60">
                <span className="text-slate-500 block text-[10px] uppercase font-bold mb-1">
                  The Ribhus Model Application:
                </span>
                <span className="text-[11px] leading-relaxed text-slate-300">{norm.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
