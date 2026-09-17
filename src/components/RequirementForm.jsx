import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Send,
  CheckCircle,
  Mail,
  User,
} from 'lucide-react';
import { projectTypeOptions } from '../data/ribhusContent';

export default function RequirementForm() {
  const [projectType, setProjectType] = useState(projectTypeOptions[0]);
  const [floorArea, setFloorArea] = useState(250);
  const [inputFormat, setInputFormat] = useState('2D PDF / Scans');
  const [outputFormat, setOutputFormat] = useState('ArchiCAD (.pln) + IFC');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
    setSubmitted(true);
  };

  return (
    <section id="request-form" className="relative py-28 bg-[#06080F] border-t border-white/[0.05]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/[0.06] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/[0.08]">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-400 font-semibold">
              Direct Production Request
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            Submit Your Modeling Requirement
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Upload your 2D plans or select your scope. We will review your drawings and send a fixed-fee quote within 2–4 hours.
          </p>
          <div className="blueprint-divider" />
        </div>

        <div className="rounded-2xl border border-white/[0.08] bg-[#0C101A] p-8 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="p-8 rounded-xl border border-emerald-500/30 bg-emerald-500/[0.05] text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle size={28} />
              </div>
              <h3 className="font-display text-xl font-black text-white">
                Requirement Submitted Successfully!
              </h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. The Ribhus technical team has received your request for{' '}
                <span className="font-mono font-bold text-blue-400">{projectType} (~{floorArea} m²)</span>. We will email you at{' '}
                <strong className="text-white">{email}</strong> within 2–4 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-lg text-xs font-mono font-bold border border-white/[0.1] bg-white/[0.04] hover:border-blue-500/30 hover:text-blue-400 text-slate-400 transition-all"
              >
                Submit Another Project
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs">

              {/* Project Type */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-2">
                  1. Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-3 bg-[#06080F] border border-white/[0.1] rounded-xl text-slate-300 font-mono focus:outline-none focus:border-blue-500/50 text-xs transition-colors"
                >
                  {projectTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Floor Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono">
                  <label className="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400">
                    2. Gross Floor Area (BGF)
                  </label>
                  <span className="text-sm font-bold text-blue-400">{floorArea} m²</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="3500"
                  step="20"
                  value={floorArea}
                  onChange={(e) => setFloorArea(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/[0.08] rounded-full appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[9px] text-slate-600 font-mono mt-1.5">
                  <span>80 m²</span>
                  <span>500 m²</span>
                  <span>3,500+ m²</span>
                </div>
              </div>

              {/* Format grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-1.5">
                    Your 2D Input Format
                  </label>
                  <select
                    value={inputFormat}
                    onChange={(e) => setInputFormat(e.target.value)}
                    className="w-full p-3 bg-[#06080F] border border-white/[0.1] rounded-xl text-slate-300 font-mono focus:outline-none focus:border-blue-500/50 transition-colors"
                  >
                    <option value="2D PDF / Scans">Scanned Paper PDF / Blueprints</option>
                    <option value="2D CAD DWG">2D CAD (DWG / DXF)</option>
                    <option value="Sketch / Measurements">Hand Survey Sketches &amp; Dimensions</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-1.5">
                    Desired 3D BIM Output
                  </label>
                  <select
                    value={outputFormat}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="w-full p-3 bg-[#06080F] border border-white/[0.1] rounded-xl text-slate-300 font-mono focus:outline-none focus:border-blue-500/50 transition-colors"
                  >
                    <option value="ArchiCAD (.pln) + IFC">ArchiCAD (.pln) + OpenBIM (.ifc)</option>
                    <option value="Autodesk Revit (.rvt) + IFC">Autodesk Revit (.rvt) + OpenBIM (.ifc)</option>
                    <option value="OpenBIM IFC Only">IFC 2x3 / IFC4 Only (Energy Audit Ready)</option>
                  </select>
                </div>
              </div>

              {/* Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-1.5">
                    Your Name / Studio Name
                  </label>
                  <div className="relative">
                    <User size={13} className="absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Thomas Weber (Architekturbüro)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 bg-[#06080F] border border-white/[0.1] rounded-xl text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 font-mono transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-1.5">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <Mail size={13} className="absolute left-3.5 top-3.5 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="contact@studio-weber.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 bg-[#06080F] border border-white/[0.1] rounded-xl text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 font-mono transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 mb-1.5">
                  Project Notes &amp; Deadlines (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Include any specific European standards, split levels, or heating load deadlines..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 bg-[#06080F] border border-white/[0.1] rounded-xl text-slate-300 placeholder-slate-600 focus:outline-none focus:border-blue-500/50 resize-none font-mono transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-glow w-full py-4 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-mono font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send size={15} />
                Submit Requirement for Fixed-Price Quote
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
