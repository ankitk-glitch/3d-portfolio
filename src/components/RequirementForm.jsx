import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle, 
  FileUp, 
  Calculator, 
  Clock, 
  Mail, 
  User, 
  Building2,
  FileCheck
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

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });

    setSubmitted(true);
  };

  return (
    <section id="request-form" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border-2 border-slate-900 rounded-3xl p-8 sm:p-12 shadow-xl">
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700">
              Direct Production Request
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Submit Your Modeling Requirement
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Upload your 2D plans or select your scope. We will review your drawings and send a fixed-fee quote within 2–4 hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-2xl bg-white border border-emerald-300 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Requirement Submitted Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed font-sans">
                Thank you, <strong className="text-slate-900">{name}</strong>. The Ribhus technical team has received your request for <span className="font-mono font-bold text-cyan-800">{projectType} (~{floorArea} m²)</span>. We will review and email you at <strong className="text-slate-900">{email}</strong> within 2–4 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300"
              >
                Submit Another Project
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-xs text-slate-700">
              {/* Project Type Dropdown (Exact Section 4) */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-900 mb-2">
                  1. Project Type
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 font-medium focus:outline-none focus:border-slate-900 shadow-sm text-xs sm:text-sm"
                >
                  {projectTypeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Gross Floor Area Slider */}
              <div>
                <div className="flex justify-between items-center mb-1 font-mono">
                  <label className="text-xs uppercase tracking-wider font-bold text-slate-900">
                    2. Approximate Gross Floor Area (BGF)
                  </label>
                  <span className="text-sm font-bold text-cyan-800">{floorArea} m²</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="3500"
                  step="20"
                  value={floorArea}
                  onChange={(e) => setFloorArea(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>80 m² (Small Home)</span>
                  <span>500 m² (Villa / Multi-Family)</span>
                  <span>3,500+ m² (Commercial Complex)</span>
                </div>
              </div>

              {/* Formats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-900 mb-1.5">
                    Your Available 2D Input
                  </label>
                  <select
                    value={inputFormat}
                    onChange={(e) => setInputFormat(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-800 font-mono focus:outline-none focus:border-slate-900"
                  >
                    <option value="2D PDF / Scans">Scanned Paper PDF / Blueprints</option>
                    <option value="2D CAD DWG">2D CAD (DWG / DXF)</option>
                    <option value="Sketch / Measurements">Hand Survey Sketches &amp; Dimensions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-900 mb-1.5">
                    Desired 3D BIM Output
                  </label>
                  <select
                    value={outputFormat}
                    onChange={(e) => setOutputFormat(e.target.value)}
                    className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-800 font-mono focus:outline-none focus:border-slate-900"
                  >
                    <option value="ArchiCAD (.pln) + IFC">ArchiCAD (.pln) + OpenBIM (.ifc)</option>
                    <option value="Autodesk Revit (.rvt) + IFC">Autodesk Revit (.rvt) + OpenBIM (.ifc)</option>
                    <option value="OpenBIM IFC Only">IFC 2x3 / IFC4 Only (Energy Audit Ready)</option>
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-900 mb-1">
                    Your Name / Studio Name
                  </label>
                  <div className="relative">
                    <User size={15} className="absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Thomas Weber (Architekturbüro)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-900 mb-1">
                    Work Email Address
                  </label>
                  <div className="relative">
                    <Mail size={15} className="absolute left-3.5 top-3.5 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="contact@studio-weber.de"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-slate-900 mb-1">
                  Project Notes &amp; Deadlines (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Include any specific European standards, split levels, or heating load deadlines..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 resize-none font-medium"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-slate-900 hover:bg-cyan-800 text-white font-mono font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Send size={16} />
                <span>Submit Requirement for Fixed-Price Quote</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
