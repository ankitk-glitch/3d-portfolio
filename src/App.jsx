import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioBook from './components/PortfolioBook/PortfolioBook';
import Showcase from './components/Showcase';
import Pricing from './components/Pricing';
import RequirementForm from './components/RequirementForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-slate-900 selection:text-white font-sans antialiased">
      {/* Top Architectural Navigation Bar */}
      <Navbar />

      {/* Hero: Every 2D plan becomes an accurate 3D BIM model */}
      <Hero />

      {/* Multi-Page Architectural Portfolio Book (Matches Template Layout) */}
      <PortfolioBook />

      {/* Selected Architectural Showcase (3 Items from User's MD with Real Images) */}
      <Showcase />

      {/* Transparent Complexity-Based Pricing */}
      <Pricing />

      {/* Production Requirement Form with Exact 5 Dropdown Scope Options */}
      <RequirementForm />

      {/* Architectural Studio Footer */}
      <Footer />
    </div>
  );
}

export default App;
