import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BimStudio from './components/BimViewer/BimStudio';
import EnergyAuditWorkflow from './components/EnergyAuditWorkflow';
import ProjectGallery from './components/Projects/ProjectGallery';
import Capabilities from './components/Capabilities';
import Standards from './components/Standards';
import QuoteEstimator from './components/QuoteEstimator';
import Footer from './components/Footer';
import { Box, Sparkles, Flame, Eye, Layers } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Interactive 3D BIM Studio Section */}
      <section id="studio" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            <Box size={14} className="text-cyan-400" />
            <span>Real-Time WebGL BIM Engine</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Interactive 3D Architectural BIM &amp; Energy Audit Studio
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Select a project model below. Test <span className="text-amber-400 font-mono">Thermal Heat-Loss Mode</span> to visualize U-values, pull the <span className="text-cyan-400 font-mono">Storey Explosion</span> slider to inspect interior slabs and columns, or slice through the building with the <span className="text-orange-400 font-mono">Section Cut</span> tool. Click any element to view its complete BIM parameters.
          </p>
        </div>

        {/* 3D BIM Studio Viewport */}
        <BimStudio />
      </section>

      {/* 2D-to-3D Energy Audit Reconstruction Pipeline */}
      <EnergyAuditWorkflow />

      {/* Curated Project Portfolio Case Studies */}
      <ProjectGallery />

      {/* Specialization Capabilities */}
      <Capabilities />

      {/* German & European Norms Compliance */}
      <Standards />

      {/* Project Scope & Turnaround Estimator */}
      <QuoteEstimator />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
