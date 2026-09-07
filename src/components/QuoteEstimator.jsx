import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Clock, 
  Send, 
  CheckCircle, 
  Layers, 
  Flame, 
  Building2, 
  FileText, 
  Sparkles,
  Mail,
  User,
  Phone
} from 'lucide-react';

export default function QuoteEstimator() {
  const [serviceType, setServiceType] = useState('energy-audit');
  const [buildingType, setBuildingType] = useState('multi-family');
  const [floorArea, setFloorArea] = useState(650);
  const [inputFormat, setInputFormat] = useState('dwg-pdf');
  const [outputFormat, setOutputFormat] = useState('archicad-ifc');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Dynamic turnaround calculation
  const calculateEstimate = () => {
    let days = 3;
    if (floorArea > 1500) days += 3;
    else if (floorArea > 500) days += 2;

    if (buildingType === 'historic') days += 2;
    if (inputFormat === 'paper-scans') days += 1;

    return {
      turnaroundDays: `${days}–${days + 2} Business Days`,
      standard: serviceType === 'energy-audit' ? 'DIN EN 12831 / GEG 2024' : 'LOD 350 / DIN 277',
      thermalZonesEstimate: Math.max(4, Math.round(floorArea / 55)),
    };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="estimate" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form & Options */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300 mb-3">
                <Calculator size={13} />
                <span>Project Scope &amp; Fee Estimator</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Request an Architectural or Energy Audit 3D Model
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                Configure your project specifications below to calculate estimated turnaround time and receive a formal technical proposal from The Ribhus.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-slate-950/80 border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Audit Proposal Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-300 font-semibold">{name}</span>. The Ribhus technical team has logged your scope for <span className="font-mono text-emerald-400">{floorArea} m²</span> ({buildingType.replace('-', ' ')}). We will contact you at <span className="text-cyan-300">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2 text-xs font-mono bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700"
                >
                  Configure Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-xs text-slate-300">
                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    1. Primary Service Specialization
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setServiceType('energy-audit')}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        serviceType === 'energy-audit'
                          ? 'bg-amber-950/40 border-amber-500/70 text-amber-200 shadow-lg'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      <Flame size={20} className={serviceType === 'energy-audit' ? 'text-amber-400' : 'text-slate-500'} />
                      <div>
                        <div className="font-semibold text-white">2D-to-3D for Energy Audit</div>
                        <div className="text-[10px] text-slate-400">Heizlast / DIN EN 12831 / GEG</div>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setServiceType('arch-bim')}
                      className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                        serviceType === 'arch-bim'
                          ? 'bg-cyan-950/40 border-cyan-500/70 text-cyan-200 shadow-lg'
                          : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                      }`}
                    >
                      <Building2 size={20} className={serviceType === 'arch-bim' ? 'text-cyan-400' : 'text-slate-500'} />
                      <div>
                        <div className="font-semibold text-white">Architectural 3D BIM Modeling</div>
                        <div className="text-[10px] text-slate-400">LOD 200–350 Design &amp; CD Sets</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Building Typology */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                    2. Building Typology
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'single-family', label: 'Single Family' },
                      { id: 'multi-family', label: 'Multi-Family' },
                      { id: 'commercial', label: 'Commercial / Office' },
                      { id: 'historic', label: 'Historic / Denkmal' },
                    ].map((b) => (
                      <button
                        type="button"
                        key={b.id}
                        onClick={() => setBuildingType(b.id)}
                        className={`py-2 px-2.5 rounded-lg border text-center font-medium transition-colors ${
                          buildingType === b.id
                            ? 'bg-cyan-600 text-white border-cyan-500'
                            : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {b.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Floor Area Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5 font-mono">
                    <label className="text-xs uppercase tracking-wider text-slate-400">
                      3. Gross Floor Area (BGF)
                    </label>
                    <span className="text-sm font-bold text-cyan-400">{floorArea} m²</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="5000"
                    step="50"
                    value={floorArea}
                    onChange={(e) => setFloorArea(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>100 m² (Villa)</span>
                    <span>1,500 m² (Apartments)</span>
                    <span>5,000+ m² (Complex)</span>
                  </div>
                </div>

                {/* Input Format & Output Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Available Input Data
                    </label>
                    <select
                      value={inputFormat}
                      onChange={(e) => setInputFormat(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    >
                      <option value="dwg-pdf">2D CAD (DWG / DXF) + PDF Plans</option>
                      <option value="paper-scans">Scanned Paper Blueprints / Microfiche</option>
                      <option value="sketches">On-site Hand Sketches / Survey Notes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                      Desired BIM Output Format
                    </label>
                    <select
                      value={outputFormat}
                      onChange={(e) => setOutputFormat(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-slate-200 focus:outline-none focus:border-cyan-500 font-mono"
                    >
                      <option value="archicad-ifc">ArchiCAD (.pln) + OpenBIM (.ifc)</option>
                      <option value="revit-ifc">Autodesk Revit (.rvt) + OpenBIM (.ifc)</option>
                      <option value="ifc-only">IFC 2x3 &amp; IFC4 Only (Solar-Computer / Hottgenroth)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Name / Architecture Office</label>
                    <div className="relative">
                      <User size={14} className="absolute left-3 top-3 text-slate-500" />
                      <input
                        type="text"
                        required
                        placeholder="Architekturbüro Müller"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Email Address</label>
                    <div className="relative">
                      <Mail size={14} className="absolute left-3 top-3 text-slate-500" />
                      <input
                        type="email"
                        required
                        placeholder="office@mueller-architekten.de"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Project Details / Deadlines (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Mention specific DIN norms, split levels, or heating load deadlines..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 transition-all"
                >
                  <Send size={16} />
                  <span>Submit Inquiry to The Ribhus</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Dynamic Scope & Estimation Summary */}
          <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Technical Scope Estimate</span>
                <span className="text-cyan-400 font-mono text-xs">The Ribhus Studio</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Clock size={14} className="text-cyan-400" />
                    Turnaround Estimate:
                  </span>
                  <span className="text-emerald-400 font-bold">{estimate.turnaroundDays}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Governing Standard:</span>
                  <span className="text-slate-200 font-semibold">{estimate.standard}</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Est. Thermal Zones:</span>
                  <span className="text-amber-400 font-semibold">~{estimate.thermalZonesEstimate} Zones</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">Watertight Shell Guarantee:</span>
                  <span className="text-cyan-400 font-semibold">100% Volumetric Seal</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-slate-300 space-y-2">
                <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                  <Sparkles size={14} />
                  What You Receive with Every Model:
                </div>
                <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-1">
                  <li>Full native file (.pln / .rvt) with structured layer combinations</li>
                  <li>Watertight IFC export mapped to buildingSMART standards</li>
                  <li>Raumbuch (Room book) with net areas and ceiling heights</li>
                  <li>Verification checklist for energy consultant sign-off</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 font-mono text-center">
              Direct Contact: <a href="mailto:contact@theribhus.com" className="text-cyan-400 hover:underline">contact@theribhus.com</a> &bull; theribhus.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
