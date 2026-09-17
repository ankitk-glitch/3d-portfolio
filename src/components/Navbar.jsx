import React, { useState, useEffect } from 'react';
import { Box, Layers, Menu, X, ArrowUpRight, Clock, FileCheck, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'REVIT Modern House', href: '#behance-project', featured: true },
    { label: 'Portfolio Sheets', href: '#portfolio-deck' },
    { label: 'Model Showcase', href: '#showcase' },
    { label: 'Pricing (€180+)', href: '#pricing' },
    { label: 'Requirement Form', href: '#request-form' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:bg-blue-600 transition-colors">
            <Box size={20} />
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight text-slate-900 flex items-center gap-1.5">
              THE RIBHUS
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-300">
                BIM STUDIO
              </span>
            </div>
            <div className="text-[10px] font-mono text-slate-500">
              theribhus.com &bull; European Architectural 3D Modeling
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-colors tracking-wide flex items-center gap-1 ${
                link.featured
                  ? 'px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-bold hover:bg-blue-100'
                  : 'hover:text-blue-600'
              }`}
            >
              {link.featured && <Sparkles size={12} className="text-blue-600" />}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#request-form"
            className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-mono text-xs font-bold transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Send 2D Plans</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-sm font-semibold ${
                link.featured
                  ? 'bg-blue-50 text-blue-700 font-bold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#request-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center gap-2"
            >
              <span>Send 2D Plans &bull; 24h Turnaround</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
