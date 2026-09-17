import React, { useState, useEffect } from 'react';
import { Box, Layers, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_8px_rgba(0,0,0,0.04)] py-3'
          : 'bg-[#FAFAFA]/90 backdrop-blur-sm border-b border-slate-200/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Studio Logo & Identity */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#0F172A] flex items-center justify-center text-white shadow-sm group-hover:bg-[#1E3A8A] transition-colors">
            <Box size={19} className="stroke-[2.2]" />
          </div>
          <div>
            <div className="font-display font-black text-sm sm:text-base tracking-tight text-[#0F172A] flex items-center gap-2">
              THE RIBHUS
              <span className="text-[9px] font-mono font-bold tracking-widest px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                BIM ATELIER
              </span>
            </div>
            <div className="text-[10px] font-mono tracking-tight text-slate-500">
              theribhus.com &bull; European Architectural 3D Modeling
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition-all flex items-center gap-1.5 ${
                link.featured
                  ? 'px-3 py-1.5 rounded-lg bg-[#0F172A] text-white font-mono text-[11px] font-bold tracking-wider uppercase shadow-sm hover:bg-[#1E3A8A]'
                  : 'font-mono text-[11px] uppercase tracking-wider font-semibold text-slate-600 hover:text-[#0F172A]'
              }`}
            >
              {link.featured && <Sparkles size={11} className="text-amber-300" />}
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Action CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#request-form"
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-[#0F172A] border border-slate-300 font-mono text-[11px] font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>Send 2D Plans</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
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
              className={`block px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold ${
                link.featured
                  ? 'bg-[#0F172A] text-white font-bold'
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
              className="w-full py-2.5 rounded-xl bg-[#0F172A] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
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
