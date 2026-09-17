import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Heart, 
  Eye, 
  Printer, 
  Layers, 
  Maximize2, 
  X, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  FileText, 
  CheckCircle2, 
  Share2, 
  Sparkles,
  ArrowDown,
  Compass,
  Ruler,
  Box,
  Flame
} from 'lucide-react';
import { revitProjectData } from '../../data/behanceProjectData';

export default function BehanceProject() {
  const [viewMode, setViewMode] = useState('roll'); // 'roll' (Behance vertical feed) or 'deck' (slide-by-slide A3 sheets)
  const [currentSheetIdx, setCurrentSheetIdx] = useState(0);
  const [appreciations, setAppreciations] = useState(142);
  const [hasAppreciated, setHasAppreciated] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const { title, subtitle, tagline, overview, boards, stats, software, lod, client, year } = revitProjectData;

  const handleAppreciate = () => {
    if (!hasAppreciated) {
      setAppreciations(prev => prev + 1);
      setHasAppreciated(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const nextSheet = () => {
    setCurrentSheetIdx(prev => Math.min(prev + 1, boards.length - 1));
  };

  const prevSheet = () => {
    setCurrentSheetIdx(prev => Math.max(prev - 1, 0));
  };

  return (
    <section id="behance-project" className="bg-[#F6F7F9] text-slate-900 py-12 sm:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* ==================================================================== */}
        {/* BEHANCE HEADER & PROJECT TITLE BLOCK                                */}
        {/* ==================================================================== */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Top Breadcrumb & Studio Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-slate-950 text-white flex items-center justify-center font-black text-sm tracking-tighter shadow-md">
                TR
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
                    The Ribhus &bull; BIM Studio
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    Featured Project
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  {client} &bull; {year} &bull; {lod}
                </div>
              </div>
            </div>

            {/* Social & View Count */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-mono font-bold">
                <Eye size={14} className="text-slate-500" />
                <span>{stats.views}</span>
              </div>

              <button
                onClick={handleAppreciate}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-mono font-bold transition-all shadow-sm cursor-pointer ${
                  hasAppreciated
                    ? 'bg-blue-600 text-white shadow-blue-500/20'
                    : 'bg-slate-900 hover:bg-blue-600 text-white'
                }`}
                title="Appreciate this project"
              >
                <Heart size={14} className={hasAppreciated ? 'fill-current' : ''} />
                <span>{appreciations} {hasAppreciated ? 'Appreciated' : 'Appreciate'}</span>
              </button>

              <a
                href="Modern_House_BIM_Portfolio_The_Ribhus.pptx"
                download="Modern_House_BIM_Portfolio_The_Ribhus.pptx"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold shadow-sm transition-all cursor-pointer"
                title="Download 16:9 PowerPoint Presentation (.PPTX)"
              >
                <Download size={14} className="text-amber-700" />
                <span>Download PPT</span>
              </a>

              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 text-xs font-mono font-bold shadow-sm transition-all cursor-pointer"
                title="Export as PDF Document"
              >
                <Printer size={14} />
                <span>PDF Set</span>
              </button>
            </div>
          </div>

          {/* Main Hero Title (Matching Behance Presentation Board) */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
              <Box size={13} className="text-blue-600" />
              <span>Full BIM Architectural Documentation Set</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              Modern House:
            </h1>
            <p className="text-xl sm:text-2xl font-bold text-slate-600 tracking-tight border-b-2 border-slate-950 pb-4">
              A Study in Minimalism | BIM Driven Design | Full Project
            </p>
          </div>

          {/* Project Narrative & Spatial Zoning (Matching Exact Cover Board) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-blue-700">
                {tagline}
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {overview.description}
              </p>

              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                {overview.pillars.map((pillar, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      <span>{pillar.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Spec Card */}
            <div className="lg:col-span-4 bg-slate-950 text-white rounded-2xl p-6 flex flex-col justify-between space-y-4 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Software Suite</span>
                  <span className="text-xs font-mono font-bold text-blue-400">Revit &bull; IFC4</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Gross Floor Area</span>
                  <span className="text-xs font-mono font-bold text-white">{overview.quantities.grossFloorArea}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Net Usable Area</span>
                  <span className="text-xs font-mono font-bold text-white">{overview.quantities.netUsableArea}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Heated Volume (Ve)</span>
                  <span className="text-xs font-mono font-bold text-white">{overview.quantities.heatedVolume}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Energy Standard</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">KfW 40 / Passiv</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#request-form"
                  className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <span>Request Similar Model (24–48h)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Presentation Mode Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-slate-500">Presentation Mode:</span>
              <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button
                  onClick={() => setViewMode('roll')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    viewMode === 'roll'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Layers size={13} />
                  <span>Behance Project Feed (Continuous)</span>
                </button>

                <button
                  onClick={() => setViewMode('deck')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    viewMode === 'deck'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText size={13} />
                  <span>Drawing Sheets Deck (A1/A3)</span>
                </button>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-500">
              Showing {boards.length} High-Resolution Architectural Boards
            </div>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* MODE A: CONTINUOUS BEHANCE PROJECT ROLL                             */}
        {/* ==================================================================== */}
        {viewMode === 'roll' && (
          <div className="space-y-16">
            {boards.map((board, index) => (
              <article
                key={board.id}
                id={board.id}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Board Top Architectural Header */}
                <div className="px-6 py-4 bg-slate-950 text-white flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-md bg-blue-600 text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                      SHEET {board.number}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      DWG NO: <strong className="text-white">{board.code}</strong>
                    </span>
                    <span className="text-xs font-mono text-slate-500 hidden sm:inline">&bull;</span>
                    <span className="text-xs font-bold text-slate-200 hidden sm:inline">
                      {board.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono font-bold text-blue-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                      {board.badge}
                    </span>

                    <button
                      onClick={() => setLightboxImage(board)}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      title="Inspect Board in Fullscreen"
                    >
                      <Maximize2 size={14} />
                    </button>
                  </div>
                </div>

                {/* High-Resolution Board Graphic Container */}
                <div 
                  onClick={() => setLightboxImage(board)}
                  className="relative group bg-[#0F172A] overflow-hidden cursor-zoom-in flex items-center justify-center p-2 sm:p-4"
                >
                  <img
                    src={board.image}
                    alt={board.title}
                    className="w-full h-auto max-h-[850px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>

                  {/* Zoom Badge on Hover */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/90 text-white px-3 py-1.5 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-lg pointer-events-none">
                    <Maximize2 size={13} />
                    <span>Click to Zoom Board</span>
                  </div>
                </div>

                {/* Board Specification & Technical Caption */}
                <div className="p-6 sm:p-8 bg-white border-t border-slate-200 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-1 max-w-3xl">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">
                        {board.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {board.caption}
                      </p>
                    </div>

                    <button
                      onClick={() => setLightboxImage(board)}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono font-bold flex items-center gap-2 self-start transition-colors cursor-pointer"
                    >
                      <Maximize2 size={13} />
                      <span>Full Resolution View</span>
                    </button>
                  </div>

                  {/* 4 Technical Data Badges */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-slate-100">
                    {board.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                          {spec.label}
                        </div>
                        <div className="text-xs font-mono font-bold text-slate-900 mt-0.5 truncate" title={spec.value}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ==================================================================== */}
        {/* MODE B: SLIDE-BY-SLIDE DRAWING SHEETS DECK (A1/A3)                  */}
        {/* ==================================================================== */}
        {viewMode === 'deck' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Navigation Strip */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span>DRAWING SHEET {currentSheetIdx + 1} OF {boards.length}:</span>
                <span className="text-blue-700">{boards[currentSheetIdx].title}</span>
              </div>

              {/* Sheet Fast Jump Buttons */}
              <div className="hidden md:flex items-center gap-1 text-xs font-mono">
                {boards.map((b, i) => (
                  <button
                    key={b.id}
                    onClick={() => setCurrentSheetIdx(i)}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      currentSheetIdx === i
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {b.code}
                  </button>
                ))}
              </div>

              {/* Prev / Next Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSheet}
                  disabled={currentSheetIdx === 0}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                  title="Previous Sheet"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSheet}
                  disabled={currentSheetIdx === boards.length - 1}
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                  title="Next Sheet"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Active Drawing Sheet Board */}
            <div className="bg-white border-2 border-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
              <div className="flex flex-wrap items-center justify-between border-b-2 border-slate-900 pb-4 gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold block">
                    THE RIBHUS ARCHITECTURAL BIM REPOSITORY &bull; DWG {boards[currentSheetIdx].code}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                    {boards[currentSheetIdx].title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-blue-700 block">
                    {boards[currentSheetIdx].badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    Format: A1 Architectural Presentation
                  </span>
                </div>
              </div>

              {/* Full Sheet View */}
              <div 
                onClick={() => setLightboxImage(boards[currentSheetIdx])}
                className="relative bg-slate-950 rounded-2xl overflow-hidden p-3 cursor-zoom-in flex items-center justify-center max-h-[750px]"
              >
                <img
                  src={boards[currentSheetIdx].image}
                  alt={boards[currentSheetIdx].title}
                  className="w-full h-auto max-h-[700px] object-contain rounded-xl"
                />
              </div>

              {/* Sheet Titleblock & Quantities */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-slate-200 items-center">
                <div className="lg:col-span-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {boards[currentSheetIdx].caption}
                </div>

                <div className="lg:col-span-4 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setLightboxImage(boards[currentSheetIdx])}
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-mono font-bold flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Maximize2 size={14} />
                    <span>Zoom In Fullscreen</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================== */}
        {/* FULLSCREEN LIGHTBOX MODAL                                           */}
        {/* ==================================================================== */}
        {lightboxImage && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex flex-col p-4 sm:p-8 animate-fadeIn">
            {/* Lightbox Controls */}
            <div className="flex items-center justify-between text-white pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md bg-blue-600 text-xs font-mono font-bold uppercase">
                  {lightboxImage.code}
                </span>
                <span className="text-sm font-bold tracking-tight">
                  {lightboxImage.title}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={lightboxImage.image}
                  download={`TheRibhus_${lightboxImage.code}.jpg`}
                  className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors"
                  title="Download Image"
                >
                  <Download size={14} />
                  <span>Download</span>
                </a>

                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-red-600 text-white transition-colors cursor-pointer"
                  title="Close Lightbox"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Lightbox Image Viewport */}
            <div className="flex-1 overflow-auto flex items-center justify-center p-4">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-w-full max-h-[88vh] object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Lightbox Bottom Info */}
            <div className="pt-3 border-t border-slate-800 text-center text-xs font-mono text-slate-400">
              {lightboxImage.caption}
            </div>
          </div>
        )}

        {/* Project Call to Action Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-bold">
              Production Inquiry &bull; 24–48h Turnaround
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              Have 2D Drawings for a Similar Project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Send your PDF plans, sketches, or AutoCAD DWGs. We will produce a complete Autodesk Revit or ArchiCAD 3D architectural BIM model with clean schedules in 24–48 hours.
            </p>
          </div>

          <a
            href="#request-form"
            className="px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 transition-all shrink-0 cursor-pointer"
          >
            Submit 2D Plans for Fast Quote &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
