import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'REVIT Project', href: '#behance-project', featured: true },
    { label: 'Portfolio', href: '#portfolio-deck' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#06080F]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_40px_rgba(0,0,0,0.6)]'
          : 'bg-transparent border-b border-white/[0.04]'
      }`}
    >
      {/* Blueprint accent top bar */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            {/* Blueprint box mark */}
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-blue-500/20 border border-blue-500/40 group-hover:border-blue-400/60 transition-colors" />
              <div className="absolute inset-[3px] rounded-md bg-blue-500 flex items-center justify-center">
                <span className="text-white font-display font-black text-[10px] tracking-widest">R</span>
              </div>
            </div>
            <div className="leading-none">
              <div className="font-display font-black text-[13px] sm:text-sm tracking-[0.12em] text-white uppercase">
                The Ribhus
              </div>
              <div className="font-mono text-[9px] tracking-[0.18em] text-blue-400/70 uppercase mt-0.5">
                BIM Atelier · theribhus.com
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.12em] font-semibold transition-all group ${
                  link.featured
                    ? 'text-[#06080F] bg-blue-500 hover:bg-blue-400 rounded-lg ml-2'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.featured && <Sparkles size={9} className="inline mr-1 text-white/80" />}
                {link.label}
                {!link.featured && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-blue-400 group-hover:w-4/5 transition-all duration-300" />
                )}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#request-form"
              className="btn-glow flex items-center gap-1.5 px-4 py-2 rounded-lg border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white font-mono text-[10px] uppercase tracking-[0.1em] font-bold transition-all"
            >
              <span>Send 2D Plans</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0D15]/98 backdrop-blur-xl border-b border-white/[0.06] px-4 pt-2 pb-6 animate-fadeIn">
          <div className="blueprint-divider mb-4" />
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-3 rounded-lg font-mono text-[11px] uppercase tracking-wider font-semibold mb-1 ${
                link.featured
                  ? 'bg-blue-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#request-form"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl border border-blue-500/40 bg-blue-500/10 text-blue-300 font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Send 2D Plans · 24h Turnaround
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
