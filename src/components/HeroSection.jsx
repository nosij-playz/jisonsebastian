import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

/**
 * Enhanced Hero Section:
 * 1. 🧲 3D Magnetic Parallax & Hologram Tilt on Profile Image
 * 2. ⚡ Cyber Text Decryption / Scramble for Rotating Roles
 * 3. 💡 Interactive Liquid Gold Mouse Spotlight
 * 4. ⬇️ Curtis-Style Animated Scroll Cue with Live Telemetry
 */
export default function HeroSection() {
  // ==========================================
  // 1. CYBER TEXT SCRAMBLE / DECRYPTION ENGINE
  // ==========================================
  const roles = [
    "AI/ML Engineer",
    "Generative AI & LLMs",
    "Agentic Systems Architect",
    "Full Stack Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(roles[0]);
  const chars = "!<>-_\\/[]{}—=+*^?#01λ";

  useEffect(() => {
    let intervalId;
    let iteration = 0;
    const targetText = roles[currentRoleIndex];

    const scrambleInterval = setInterval(() => {
      setDisplayText(
        targetText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(scrambleInterval);
      }
      iteration += 1 / 2;
    }, 35);

    // Switch role every 3.2 seconds
    intervalId = setTimeout(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(intervalId);
    };
  }, [currentRoleIndex]);

  // ==========================================
  // 2. 3D MAGNETIC HOLOGRAM TILT & SPOTLIGHT
  // ==========================================
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleProfileMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate tilt angles (capped at 16 degrees)
    setTilt({
      x: -(y / (rect.height / 2)) * 14,
      y: (x / (rect.width / 2)) * 14,
    });
  };

  const handleProfileMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="hero" 
      onMouseMove={handleHeroMouseMove}
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 pt-28 sm:pt-36 pb-20 overflow-hidden"
    >
      {/* 3. Liquid Gold Cursor Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-60 sm:opacity-90"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.12), rgba(16, 185, 129, 0.04) 40%, transparent 70%)`
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14 lg:gap-16">
        
        {/* =========================================================
            LEFT: 3D MAGNETIC PROFILE HOLOGRAM
        ========================================================= */}
        <ScrollReveal direction="scale" delay={100} className="flex flex-col items-center flex-shrink-0 order-1 lg:order-1">
          <div 
            ref={cardRef}
            onMouseMove={handleProfileMouseMove}
            onMouseLeave={handleProfileMouseLeave}
            className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center cursor-pointer transition-transform duration-200 ease-out perspective-[1000px]"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Ambient Background Gold Glint */}
            <div 
              className="absolute inset-0 rounded-full bg-gold-primary/20 blur-2xl transform scale-110 transition-transform duration-300"
              style={{ transform: `translateZ(-20px)` }}
            />
            
            {/* Rotating Outer Dashed Gold Ring */}
            <div 
              className="absolute inset-0 rounded-full border border-dashed border-gold-primary/50 animate-spin-slow transition-transform duration-300"
              style={{ transform: `translateZ(10px)` }}
            />
            
            {/* Inner Precision Ring */}
            <div 
              className="absolute inset-2.5 rounded-full border border-gold-primary/30"
              style={{ transform: `translateZ(20px)` }}
            />

            {/* Profile Image with Golden Border & Light Glint */}
            <div 
              className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-gold-primary shadow-2xl transition-all duration-300"
              style={{ transform: `translateZ(30px)` }}
            >
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                }}
              />
              
              {/* Dynamic 3D Glint Sheen across photo */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay transition-opacity duration-300"
                style={{
                  background: `linear-gradient(${tilt.y * 10 + 45}deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)`
                }}
              />
            </div>

            {/* Live Status Badge */}
            <div 
              className="absolute bottom-1 sm:bottom-2 right-2 sm:right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-card border border-cyber-emerald/50 shadow-xl"
              style={{ transform: `translateZ(45px)` }}
            >
              <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse"></span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-cyber-emerald font-semibold">
                Available
              </span>
            </div>
          </div>

          {/* Quick Accolade Badges */}
          <div className="flex flex-col gap-2 mt-5 sm:mt-6 w-full max-w-xs">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gold-primary/10 border border-gold-primary/30 text-gold-light text-xs font-mono shadow-md hover:border-gold-primary/60 transition-colors">
              <span>🏆</span>
              <span className="truncate">SRISHTI 2026 Best Project Award</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald text-xs font-mono shadow-md hover:border-cyber-emerald/60 transition-colors">
              <span>🎓</span>
              <span className="truncate">GATE 2026 Qualified · B.Tech CSE</span>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================
            RIGHT: KINETIC NARRATIVE & CYBER SCRAMBLE EFFECT
        ========================================================= */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-2">
          
          {/* Eyebrow with Live Neural Pulse Visualizer */}
          <ScrollReveal direction="down" delay={150}>
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-[11px] sm:text-xs font-mono text-white/80 mb-5">
              <span className="flex items-center gap-1">
                <span className="w-1 h-2.5 bg-cyber-emerald animate-pulse"></span>
                <span className="w-1 h-4 bg-cyber-emerald animate-pulse delay-75"></span>
                <span className="w-1 h-3 bg-cyber-emerald animate-pulse delay-150"></span>
              </span>
              <span className="text-white/40">//</span>
              <span>SYSTEM ARCHITECT &amp; RESEARCHER</span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="up" delay={200}>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4 sm:mb-5">
              Building the Future <br />
              with <span className="gold-gradient-text">Code &amp; Curiosity.</span>
            </h1>
          </ScrollReveal>

          {/* 2. CYBER TEXT DECRYPTION ROLE DISPLAY */}
          <ScrollReveal direction="up" delay={250}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-gold-primary/20 mb-6">
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                FOCUS:
              </span>
              <span className="font-mono text-sm sm:text-base font-bold text-gold-light tracking-wide min-w-[210px] text-left">
                {displayText}
              </span>
              <span className="w-1.5 h-4 bg-gold-primary animate-pulse" />
            </div>
          </ScrollReveal>

          {/* Subtitle / Professional Summary */}
          <ScrollReveal direction="up" delay={300}>
            <p className="text-white/80 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-7">
              I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a Computer Science graduate specializing in <span className="text-gold-light font-medium">Computer Vision, Deep Learning, Agentic AI, and RAG</span>. Transforming complex algorithms into scalable, real-world platforms.
            </p>
          </ScrollReveal>

          {/* Metric Stats Pills */}
          <ScrollReveal direction="up" delay={350}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-10">
              {PERSONAL_INFO.stats.map((stat) => (
                <div 
                  key={stat.label}
                  className="p-3 rounded-xl glass-card text-center lg:text-left hover:border-gold-primary/50"
                >
                  <div className="font-display text-lg sm:text-2xl font-bold text-gold-light">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Direct CTA Buttons */}
          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
              <a
                href="#projects"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gold-gradient text-obsidian-base font-display text-sm font-bold tracking-wide shadow-xl hover:shadow-gold-primary/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore 15 Projects</span>
                <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-display text-sm font-semibold tracking-wide hover:border-gold-primary/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Start Conversation</span>
                <svg className="w-4 h-4 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>

      {/* =========================================================
          4. CURTIS-STYLE ANIMATED SCROLL INDICATOR (BOTTOM CUE)
      ========================================================= */}
      <div className="mt-14 sm:mt-16 flex flex-col items-center gap-2 font-mono text-[10px] text-white/40 uppercase tracking-widest select-none pointer-events-none animate-bounce">
        <span>SCROLL TO EXPLORE WORKSPACE</span>
        <svg className="w-4 h-4 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
