import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BehanceProject from './components/BehanceRevitProject/BehanceProject';
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

      {/* Featured REVIT Modern House Full Project (Behance Style Portfolio Showcase) */}
      <BehanceProject />

      {/* Architectural Presentation Portfolio Sheets (A3/A4 Deck Mode with PDF Export) */}
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
