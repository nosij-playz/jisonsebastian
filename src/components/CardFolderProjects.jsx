import React, { useState } from 'react';
import { ALL_PROJECTS } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';
import ProjectArchitectureDiagram from './ProjectArchitectureDiagram';

/**
 * 3D Interactive Project Deck & Complete Catalog:
 * Featured projects fan out on hover and keyboard focus.
 */
export default function CardFolderProjects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCardIndex, setActiveCardIndex] = useState(0);

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
          INTERACTIVE 3D FANNING DECK
      ========================================================= */}
      <ScrollReveal direction="up" delay={100} className="mb-20 sm:mb-28">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-gold-primary"></span>
            <div>
              <h3 className="font-display text-base sm:text-xl font-bold text-white tracking-tight">
                Flagship Deck:
              </h3>
              <p className="text-white/55 text-xs sm:text-sm mt-1">
                A few standout projects from the full collection.
              </p>
            </div>
          </div>

        </div>

        {/* Quick Folder Switch Tabs */}
        <div className="w-full mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 w-full">
            {featuredProjects.map((project, idx) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveCardIndex(idx)}
              aria-pressed={activeCardIndex === idx}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl font-mono text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer ${
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
            <div
              className="project-deck-fan relative w-full max-w-lg h-[480px] sm:h-[520px]"
              role="group"
              aria-label="Featured project card fan"
            >
            {featuredProjects.map((project, idx) => {
              const isSelected = activeCardIndex === idx;
              const fanIndex = ((idx - activeCardIndex + featuredProjects.length + Math.floor(featuredProjects.length / 2)) % featuredProjects.length) - Math.floor(featuredProjects.length / 2);
              const fanLift = fanIndex * fanIndex * -2;

              return (
                <div
                  key={project.id}
                  className={`project-deck-card absolute inset-0 rounded-2xl glass-card p-6 sm:p-8 select-none ${
                    isSelected 
                      ? 'border-gold-primary shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(212,175,55,0.18)]' 
                      : 'border-white/15 hover:border-gold-primary/60 hover:shadow-lg'
                  }`}
                  style={{
                    '--n': fanIndex,
                    '--fan-rotation': `${fanIndex * 15}deg`,
                    '--fan-lift': `${fanLift}px`,
                    zIndex: 5 - Math.abs(fanIndex),
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
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
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

                  <ProjectArchitectureDiagram projectId={project.id} />

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
                onClick={() => setActiveCardIndex(idx)}
                aria-label={`Show project ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCardIndex === idx 
                    ? 'w-8 bg-gold-primary shadow-lg shadow-gold-primary/30' 
                    : 'w-2 bg-white/20 hover:bg-white/50'
                }`}
                title={`Show project ${idx + 1}`}
              />
            ))}
          </div>
          <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">
            Hover to fan · Tab to spread
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
              Complete Project Catalog
            </h3>
            <p className="text-white/50 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Includes some of my strongest work.
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
