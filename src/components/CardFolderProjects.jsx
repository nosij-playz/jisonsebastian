import React, { useState, useEffect } from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

/**
 * 3D Interactive Project Deck & Complete Catalog:
 * Tactile 3D card deck shuffle on click (dealing & stacking animations, no flip).
 */
export default function CardFolderProjects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [shufflingIdx, setShufflingIdx] = useState(null);
  const [shuffleDirection, setShuffleDirection] = useState('next'); // 'next' | 'prev'
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects (15)' },
    { id: 'ai', label: '🤖 AI & Deep Learning (8)' },
    { id: 'web', label: '🌐 Full Stack Web (4)' },
    { id: 'desktop', label: '💻 Desktop Tools (2)' },
    { id: 'mobile', label: '📱 Mobile Health (1)' }
  ];

  const featuredProjects = ALL_PROJECTS.filter((p) => p.featured); // 5 projects
  const filteredProjects = activeCategory === 'all' 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter((p) => p.category === activeCategory);

  const handleShuffleTo = (targetIdx = null, direction = 'next') => {
    if (isShuffling) return;

    let nextIndex;
    if (targetIdx !== null) {
      nextIndex = targetIdx;
    } else if (direction === 'prev') {
      nextIndex = (activeCardIndex - 1 + featuredProjects.length) % featuredProjects.length;
    } else {
      nextIndex = (activeCardIndex + 1) % featuredProjects.length;
    }

    if (nextIndex === activeCardIndex) {
      nextIndex = (activeCardIndex + 1) % featuredProjects.length;
    }

    setIsShuffling(true);
    setShufflingIdx(activeCardIndex);
    setShuffleDirection(direction);

    // Eject phase: card peels out sideways/upwards
    setTimeout(() => {
      setActiveCardIndex(nextIndex);

      // Settle phase: card inserts into back of deck
      setTimeout(() => {
        setIsShuffling(false);
        setShufflingIdx(null);
      }, 360);
    }, 220);
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-8 w-full max-w-6xl mx-auto overflow-hidden">
      {/* Section Header */}
      <ScrollReveal direction="down" className="text-center mb-14 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20 text-xs font-mono text-gold-light mb-4">
          <span>03 // PORTFOLIO WORKS</span>
        </div>
        <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Flagship Engineering <span className="gold-gradient-text">&amp; Projects</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-xs sm:text-base leading-relaxed px-2">
          From award-winning multi-modal climate systems to agentic waste intelligence and low-latency WebSockets. Explore all 15 real-world platforms built by Jison.
        </p>
      </ScrollReveal>

      {/* =========================================================
          INTERACTIVE 3D FANNING DECK (Click to switch, natural scroll)
      ========================================================= */}
      <ScrollReveal direction="up" delay={100} className="mb-20 sm:mb-28">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-gold-primary"></span>
            <h3 className="font-display text-base sm:text-xl font-bold text-white tracking-tight">
              3D Interactive Folder Deck <span className="hidden sm:inline">(Top 5 Flagships)</span>
            </h3>
          </div>
          
          {/* Deck Controls: Prev, Next, Counter */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => handleShuffleTo(null, 'prev')}
                disabled={isShuffling}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-gold-primary/20 border border-white/10 hover:border-gold-primary/50 text-white hover:text-gold-light text-xs font-mono transition-all flex items-center gap-1.5 disabled:opacity-50 cursor-pointer active:scale-95"
                title="Shuffle Previous"
              >
                <span>←</span>
                <span className="hidden sm:inline">PREV</span>
              </button>

              <button
                type="button"
                onClick={() => handleShuffleTo(null, 'next')}
                disabled={isShuffling}
                className="px-3 py-1.5 rounded-lg bg-gold-primary/15 hover:bg-gold-primary/30 border border-gold-primary/40 text-gold-light text-xs font-mono transition-all flex items-center gap-1.5 disabled:opacity-50 cursor-pointer active:scale-95 group"
                title="Shuffle Next"
              >
                <span className="group-hover:rotate-180 transition-transform duration-500">🔀</span>
                <span>SHUFFLE NEXT</span>
                <span>→</span>
              </button>
            </div>

            <span className="font-mono text-xs text-white/50 border-l border-white/10 pl-3">
              [0{activeCardIndex + 1} // 05]
            </span>
          </div>
        </div>

        {/* Quick Folder Switch Tabs */}
        <div className="w-full overflow-hidden mb-6">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none w-full">
            {featuredProjects.map((project, idx) => (
            <button
              key={project.id}
              type="button"
              onClick={() => handleShuffleTo(idx, idx > activeCardIndex ? 'next' : 'prev')}
              disabled={isShuffling}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer flex-shrink-0 ${
                activeCardIndex === idx
                  ? 'bg-gold-gradient text-obsidian-base font-bold shadow-lg shadow-gold-primary/25 scale-[1.02]'
                  : 'bg-white/[0.04] text-white/70 hover:text-white hover:bg-white/10 border border-white/10 hover:border-gold-primary/40'
              }`}
            >
              <span className={activeCardIndex === idx ? 'text-obsidian-base font-black' : 'text-gold-primary'}>
                [0{idx + 1}]
              </span>
              <span>{project.title.split(' ')[0]}</span>
              {activeCardIndex === idx && (
                <span className="w-1.5 h-1.5 rounded-full bg-obsidian-base animate-pulse" />
              )}
            </button>
          ))}
          </div>
        </div>

        {/* 3D Fanning Deck Stage */}
        <div className="w-full overflow-hidden relative z-10">
          <div className="relative min-h-[500px] sm:min-h-[560px] flex items-center justify-center perspective-[1200px] pt-10 pb-6 select-none w-full">
            <div className="relative w-full max-w-4xl h-[400px] sm:h-[460px]">
            {featuredProjects.map((project, idx) => {
              const isSelected = activeCardIndex === idx;
              const isEjecting = isShuffling && shufflingIdx === idx;
              const pos = (idx - activeCardIndex + featuredProjects.length) % featuredProjects.length;

              // Compute stack offsets
              const offsetX = isMobile ? pos * 8 : pos * 15;
              const offsetY = isMobile ? -pos * 10 : -pos * 18;
              const offsetZ = isSelected ? 45 : (20 - pos * 25);
              const rotateZ = pos * (isMobile ? 1.0 : 1.8);
              const scale = 1 - pos * 0.03;

              // Compute eject trajectory
              const ejectX = isMobile 
                ? (shuffleDirection === 'prev' ? -70 : 70) 
                : (shuffleDirection === 'prev' ? -140 : 140);
              const ejectY = -35;
              const ejectZ = 95;
              const ejectRotate = shuffleDirection === 'prev' ? -9 : 9;
              const ejectScale = 0.96;

              const transformStyle = isEjecting
                ? `translateX(${ejectX}px) translateY(${ejectY}px) translateZ(${ejectZ}px) rotateZ(${ejectRotate}deg) scale(${ejectScale})`
                : `translateX(${offsetX}px) translateY(${offsetY}px) translateZ(${offsetZ}px) rotateZ(${rotateZ}deg) scale(${scale})`;

              const zIndex = isEjecting ? 40 : (isSelected ? 30 : Math.max(1, 25 - pos * 5));
              const opacity = isEjecting ? 0.95 : Math.max(0.35, 1 - pos * 0.15);

              return (
                <div
                  key={project.id}
                  onClick={() => {
                    if (isSelected) {
                      handleShuffleTo(null, 'next');
                    } else {
                      handleShuffleTo(idx, idx > activeCardIndex ? 'next' : 'prev');
                    }
                  }}
                  className={`absolute inset-0 rounded-2xl glass-card p-6 sm:p-8 cursor-pointer select-none transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isSelected 
                      ? 'border-gold-primary shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.18)]' 
                      : 'border-white/15 hover:border-gold-primary/60 hover:shadow-lg'
                  }`}
                  style={{
                    transform: transformStyle,
                    zIndex,
                    opacity,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Top Bar: Title, Badges & Action */}
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs text-gold-primary font-bold">
                          [0{idx + 1} // 05]
                        </span>
                        {project.award && (
                          <span className="px-2.5 py-0.5 rounded-full bg-gold-primary/20 border border-gold-primary/40 text-[10px] font-mono text-gold-light">
                            🏆 {project.award}
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider hidden sm:inline">
                          {project.category.toUpperCase()} PIPELINE
                        </span>
                      </div>

                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1.5">
                        {project.title}
                      </h3>
                      <p className="text-gold-light/80 text-xs sm:text-sm font-mono mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {isSelected && (
                        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/30 text-[10px] font-mono text-gold-light group hover:border-gold-primary transition-all">
                          <span className="text-gold-primary animate-spin-slow">🔀</span>
                          <span>CLICK TO SHUFFLE</span>
                        </div>
                      )}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2.5 sm:p-3 rounded-xl bg-white/[0.05] hover:bg-gold-primary/25 border border-white/10 hover:border-gold-primary text-white hover:text-gold-light transition-all"
                        title="View on GitHub"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Body Description */}
                  <p className="text-white/75 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 mb-5">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/10">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] sm:text-xs font-mono text-white/90"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>

        {/* Deck Navigation Dots */}
        <div className="flex flex-col items-center gap-2 mt-6">
          <div className="flex items-center gap-2">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleShuffleTo(idx, idx > activeCardIndex ? 'next' : 'prev')}
                disabled={isShuffling}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCardIndex === idx 
                    ? 'w-8 bg-gold-primary shadow-lg shadow-gold-primary/30' 
                    : 'w-2 bg-white/20 hover:bg-white/50'
                }`}
                title={`Shuffle to project ${idx + 1}`}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">
            ACTIVE: [0{activeCardIndex + 1} // 05] · CLICK ANY CARD OR TAB TO SHUFFLE DECK
          </span>
        </div>
      </ScrollReveal>

      {/* =========================================================
          FULL 15-PROJECT CATALOG WITH CATEGORY FILTER PILLS
      ========================================================= */}
      <div className="mt-16 sm:mt-24">
        <ScrollReveal direction="up" className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h3 className="font-display text-lg sm:text-2xl font-bold text-white leading-snug">
              Complete Project Catalog <span className="block sm:inline sm:text-white/70">(All 15 Verified Repos)</span>
            </h3>
            <p className="text-white/50 text-[10px] sm:text-xs font-mono mt-1.5 sm:mt-1 leading-relaxed">
              EVERY PRODUCTION REPO, ML PIPELINE, AND UTILITY PRESERVED FROM OLD PORTFOLIO
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gold-primary text-obsidian-base font-bold shadow-lg scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={(idx % 6) * 60}>
              <div className="glass-card p-6 rounded-xl flex flex-col justify-between group h-full">
                <div>
                  <div className="flex items-start justify-between mb-2.5 gap-2">
                    <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-gold-light transition-colors break-words">
                      {project.title}
                    </h4>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-gold-primary transition-colors p-1"
                      title="View GitHub repository"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-gold-light/70 font-mono text-xs mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/10">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-[10px] font-mono text-white/75"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
