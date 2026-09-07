import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioBook from './components/PortfolioBook/PortfolioBook';
import BimStudio from './components/BimViewer/BimStudio';
import EnergyAuditWorkflow from './components/EnergyAuditWorkflow';
import ProjectGallery from './components/Projects/ProjectGallery';
import Capabilities from './components/Capabilities';
import Standards from './components/Standards';
import QuoteEstimator from './components/QuoteEstimator';
import Footer from './components/Footer';
import { BookOpen, LayoutGrid, Box, Sparkles, Flame, Eye, Layers, FileText } from 'lucide-react';

function App() {
  const [activeViewMode, setActiveViewMode] = useState('book'); // 'book' or 'grid'

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main View Mode Selector Banner */}
      <section id="portfolio-view" className="py-8 bg-slate-900/60 border-y border-slate-800/80 sticky top-16 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">View Format:</span>
            <div className="flex items-center p-1 bg-slate-950 rounded-xl border border-slate-800 shadow-inner">
              <button
                onClick={() => setActiveViewMode('book')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeViewMode === 'book'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen size={14} />
                <span>Portfolio Presentation Sheets (PDF/Book)</span>
              </button>

              <button
                onClick={() => setActiveViewMode('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeViewMode === 'grid'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <LayoutGrid size={14} />
                <span>All 22 Projects Grid &amp; QTO</span>
              </button>
            </div>
          </div>

          <div className="text-xs font-mono text-cyan-400 hidden lg:block">
            {activeViewMode === 'book' ? 'Structured A3 Presentation Deck Mode' : 'Interactive 22 Projects Directory'}
          </div>
        </div>
      </section>

      {/* Conditional Portfolio View: Book Sheets vs Interactive Grid */}
      <div id="portfolio" className="scroll-mt-28">
        {activeViewMode === 'book' ? (
          <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <PortfolioBook />
          </section>
        ) : (
          <ProjectGallery />
        )}
      </div>

      {/* Interactive 3D WebGL BIM Studio Section */}
      <section id="studio" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full scroll-mt-20 border-t border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-xs font-mono text-cyan-300">
            <Box size={14} className="text-cyan-400" />
            <span>Interactive 3D WebGL BIM Studio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Explore Models in Real-Time 3D
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Inspect our procedural and as-built BIM geometry. Toggle <span className="text-amber-400 font-mono">Thermal Heat-Loss Mode</span> to evaluate U-values, adjust the <span className="text-cyan-400 font-mono">Storey Explosion</span> slider to separate floor levels, or use the dynamic <span className="text-orange-400 font-mono">Section Cut</span> tool.
          </p>
        </div>

        {/* 3D BIM Studio Viewport */}
        <BimStudio />
      </section>

      {/* 2D-to-3D Energy Audit Reconstruction Pipeline */}
      <EnergyAuditWorkflow />

      {/* All Projects Grid (If not already shown in activeViewMode) */}
      {activeViewMode === 'book' && (
        <div className="border-t border-slate-800/80">
          <ProjectGallery />
        </div>
      )}

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
