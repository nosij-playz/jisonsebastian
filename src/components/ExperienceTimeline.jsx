import React from 'react';
import { INTERNSHIPS, AWARDS_AND_EDUCATION } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

/**
 * Experience Timeline & Leadership:
 * Responsive layout with ScrollReveal entrance motions for every card.
 */
export default function ExperienceTimeline() {
  return (
    <section id="experience" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 max-w-5xl mx-auto">
      {/* Section Header */}
      <ScrollReveal direction="down" className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20 text-xs font-mono text-gold-light mb-4">
          <span>05 // INDUSTRY TRAJECTORY</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Professional <span className="gold-gradient-text">Experience &amp; Internships</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Four remote software engineering and machine learning internships delivering tangible data pipelines, model optimization, and full-stack architectures.
        </p>
      </ScrollReveal>

      {/* Chronological Timeline Cards */}
      <div className="relative w-full border-l border-white/10 ml-2 sm:ml-8 pl-5 sm:pl-10 space-y-8 sm:space-y-12">
        {INTERNSHIPS.map((item, index) => (
          <ScrollReveal key={item.company} direction="left" delay={index * 100} className="relative w-full group">
            {/* Timeline Node Indicator */}
            <div className="absolute -left-[27px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-obsidian-base border-2 border-gold-primary group-hover:scale-125 group-hover:bg-gold-primary transition-all flex items-center justify-center">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gold-light" />
            </div>

            {/* Card Content */}
            <div className="glass-card p-5 sm:p-8 rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 mb-4">
                <div>
                  <span className="font-mono text-xs text-gold-primary uppercase tracking-wider font-semibold">
                    {item.company} · {item.type}
                  </span>
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-white mt-0.5">
                    {item.role}
                  </h3>
                </div>

                <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono text-white/70 self-start sm:self-auto">
                  {item.timeline}
                </span>
              </div>

              {/* Bulleted Achievements */}
              <ul className="space-y-2 sm:space-y-2.5">
                {item.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="text-white/75 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                    <span className="text-gold-primary text-xs mt-1">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Leadership & Activities Box */}
      <ScrollReveal direction="up" delay={200} className="mt-16 sm:mt-20">
        <div className="glass-card p-6 sm:p-8 rounded-2xl">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span>⚡</span>
            <span>Leadership, Activities &amp; Languages</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leadership Roles */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-gold-light mb-3 font-semibold">
                Leadership &amp; Community
              </h4>
              <div className="space-y-2">
                {AWARDS_AND_EDUCATION.leadership.map((role) => (
                  <div key={role} className="flex items-center gap-2 text-xs sm:text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-gold-light mb-3 font-semibold">
                Languages
              </h4>
              <div className="space-y-2">
                {AWARDS_AND_EDUCATION.languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between text-xs sm:text-sm text-white/80 p-2 rounded-lg bg-white/[0.02]">
                    <span className="font-medium">{lang.name}</span>
                    <span className="font-mono text-xs text-white/40">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
