import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

/**
 * Tactical HUD & Responsive Floating Glass Nav.
 * Fully optimized for mobile, tablet, and desktop viewports.
 */
export default function TacticalHUD({ currentFrame, totalFrames, scrollProgress }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Overview", href: "#hero" },
    { label: "Credentials", href: "#bento" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* =========================================================
          TOP FLOATING GLASS PILL NAVBAR
      ========================================================= */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pt-3 sm:pt-5 pointer-events-none transition-all duration-500">
        <div 
          className={`pointer-events-auto flex items-center justify-between glass-pill rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled 
              ? 'py-2 px-4 sm:px-6 max-w-4xl lg:max-w-5xl border-gold-primary/30 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_20px_rgba(212,175,55,0.12)]' 
              : 'py-2.5 sm:py-3.5 px-4 sm:px-8 max-w-6xl border-white/10'
          } w-full`}
        >
          {/* Brand Favicon Image Emblem */}
          <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0 mr-4 sm:mr-8">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden border border-gold-primary/50 bg-black/60 shadow-[0_0_12px_rgba(212,175,55,0.25)] group-hover:border-gold-light group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] group-hover:scale-105 transition-all duration-300 flex items-center justify-center p-0.5">
              <img 
                src="/apple-touch-icon.png" 
                alt="JS Favicon" 
                className="w-full h-full object-contain rounded-lg group-hover:brightness-110 transition-all duration-300 select-none" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-gold-light transition-colors whitespace-nowrap">
                {isScrolled ? 'Jison' : 'Jison Sebastian'}
              </span>
              {!isScrolled && (
                <span className="font-mono text-[8px] sm:text-[9px] text-white/40 tracking-widest hidden xs:inline-block animate-fadeIn whitespace-nowrap">
                  AI/ML · FULL STACK
                </span>
              )}
            </div>
          </a>

          {/* Desktop Nav Links with Clean Luxury Gold Underline Highlight */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 mx-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap group"
              >
                <span className="relative z-10 transition-colors duration-200 group-hover:text-gold-light font-medium">
                  {link.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary rounded-full transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              </a>
            ))}
          </nav>

          {/* Right Action Cluster: Resume Download & Mobile Menu (SFX Removed) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto lg:ml-0">
            {/* Direct Resume Download */}
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 sm:px-4 py-1.5 rounded-full bg-gold-primary/10 hover:bg-gold-primary/25 border border-gold-primary/40 text-gold-light hover:text-white text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
            >
              <span>CV</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-white/10 text-white/80 hover:text-white bg-white/5 transition-all"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Navigation Menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto absolute top-20 inset-x-4 max-w-sm mx-auto glass-card p-5 rounded-2xl border border-gold-primary/30 shadow-2xl flex flex-col gap-3 lg:hidden z-50 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-[10px] text-gold-primary uppercase tracking-wider">
                NAVIGATION MATRIX
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/60 hover:text-white text-xs font-mono"
              >
                CLOSE [✕]
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-white/5 font-mono text-xs uppercase tracking-wider text-white/80 hover:text-gold-light flex items-center justify-between transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-gold-primary text-xs">→</span>
              </a>
            ))}
          </div>
        )}
      </header>

      {/* =========================================================
          PERIPHERAL TELEMETRY & HUD ACCENTS
      ========================================================= */}
      
      {/* Top-Right Coordinates & Live Status (Hidden on smaller viewports) */}
      <aside aria-label="Status Telemetry" className="fixed top-24 right-6 z-40 hidden 2xl:flex flex-col items-end gap-1 font-mono text-[10px] text-white/40 pointer-events-none select-none">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald animate-ping" />
          <span className="text-cyber-emerald font-semibold uppercase tracking-wider">
            {PERSONAL_INFO.status}
          </span>
        </div>
        <p className="tracking-widest">LOC: {PERSONAL_INFO.coordinates}</p>
        <p className="text-white/20">WORKSHOP SCRUB V3.0</p>
      </aside>



      {/* Bottom-Right Circular Scroll Progress Ring */}
      <aside aria-label="Scroll Progress Indicator" className="fixed bottom-4 sm:bottom-6 right-3 sm:right-6 z-40 flex items-center justify-center glass-pill p-1.5 sm:p-2 rounded-full pointer-events-none select-none">
        <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              className="text-white/10 stroke-current"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              className="text-gold-primary stroke-current transition-all duration-150"
              strokeWidth="2.5"
              strokeDasharray={2 * Math.PI * 20}
              strokeDashoffset={2 * Math.PI * 20 * (1 - scrollProgress)}
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
          <span className="absolute font-mono text-[8px] sm:text-[9px] font-bold text-gold-light">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>
      </aside>
    </>
  );
}
