import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { SKILLS_GALAXY } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const SKILL_WORKFLOWS = {
  'Scikit-Learn': ['Prepare and split the data', 'Train a baseline, then tune it', 'Check results on unseen data'],
  'CNNs & GANs': ['Prepare and augment image data', 'Train the model and inspect outputs', 'Evaluate quality and refine the pipeline'],
  'AI Chatbots': ['Identify the user task and source material', 'Connect the model to a clear conversation flow', 'Test responses for usefulness and failure cases'],
  'Supervised & Unsupervised': ['Define the question and available labels', 'Choose prediction or clustering methods', 'Review metrics and patterns before using results'],
  'Feature Engineering': ['Inspect raw fields and missing values', 'Create and transform useful features', 'Check for leakage and compare model results'],
  'Pandas & NumPy': ['Load and inspect the dataset', 'Clean, reshape, and calculate the data', 'Pass consistent arrays or tables into analysis'],
  Python: ['Break the task into clear modules', 'Implement the logic and handle edge cases', 'Test the pieces and connect the workflow'],
  Flask: ['Define routes and request formats', 'Validate input and call the application logic', 'Return clear responses and handle errors'],
  'REST APIs': ['Model resources and endpoint contracts', 'Validate requests and apply access rules', 'Return consistent status codes and responses'],
  React: ['Break the interface into reusable components', 'Connect state and user actions', 'Check responsive behavior and accessibility'],
  'Node.js': ['Define the service and its routes', 'Handle async work and data access', 'Add error handling and verify API behavior'],
  'HTML5 & CSS3': ['Structure content with semantic markup', 'Build responsive layouts and states', 'Check keyboard access and browser behavior'],
  'SAP ABAP': ['Understand the business process and data', 'Implement the required ABAP logic', 'Test against expected SAP scenarios'],
  'SAP Tech Consultant': ['Gather requirements from users', 'Map needs to SAP capabilities', 'Configure, integrate, and validate the solution'],
  'SAP Fiori & Automation': ['Map the user task and approval flow', 'Build the Fiori interaction or automation', 'Test the flow with realistic scenarios'],
  Docker: ['Define the application image and dependencies', 'Build and run the container consistently', 'Configure deployment and inspect runtime behavior'],
  'Google Cloud (GCP)': ['Choose services for the application needs', 'Configure and deploy the workload', 'Monitor access, reliability, and usage'],
  'Git & GitHub': ['Create a focused branch for the change', 'Commit work in reviewable steps', 'Review, merge, and keep the history clear'],
  SQLite: ['Design tables and relationships', 'Use queries and transactions for app data', 'Check constraints and persistence behavior'],
  SQL: ['Model the data and relationships', 'Write queries for the application needs', 'Check results, indexes, and transaction behavior'],
  MySQL: ['Design tables and constraints', 'Build queries and transactions', 'Review performance and data integrity'],
  PostgreSQL: ['Define relational tables and constraints', 'Write queries and use transactions', 'Validate data integrity and query performance'],
  MongoDB: ['Shape documents around access patterns', 'Query and update collections', 'Validate indexes and consistency needs'],
  Firebase: ['Choose the right Firebase services', 'Model data and configure access rules', 'Connect the app and verify live updates'],
};

const findSkill = (name, ...groups) => groups.flat().find((skill) => skill.name === name);

/**
 * The Neural Skills Galaxy - Perfectly Aligned Celestial Oval Matrix:
 * - 3 concentric, counter-rotating oval orbital rings (36+ CV-verified skills).
 * - Mathematically locked: Skills and glowing orbit tracks share the exact same ellipse geometry.
 * - Skills stay 100% on their respective orbit tracks at all times (no skewed tilt or drifting).
 * - Optical depth attenuation: Skills in back pass behind the core with lower opacity/scale;
 *   skills in front pass in front of the core with full brightness and z-index.
 * - Interactive horizontal spin drag with kinetic momentum.
 * - Central Holographic Core with live telemetry HUD on hover/tap.
 * - Preserves the verified 3-card mastery decks below.
 */
export default function DnaSkillsCarousel() {
  // Rotational Angles for the 3 Rings
  const [ringAngles, setRingAngles] = useState({ inner: 0, mid: 0, outer: 0 });
  const [dragAngleOffset, setDragAngleOffset] = useState(0);

  // Oval Aspect Ratio (height / width): keeps orbits in a crisp, elegant oval
  const [tiltAspect, setTiltAspect] = useState(0.48);

  // Playback & Interaction States
  const [isPlaying, setIsPlaying] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);
  const [reverseDirection, setReverseDirection] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'outer' | 'mid' | 'inner'
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [flippedSkills, setFlippedSkills] = useState({});

  // Drag & Inertia Tracking
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef(0);
  const lastPosRef = useRef({ x: 0, time: 0 });
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  // Responsive Base Radii (Horizontal Radius Rx) & Tilt Aspect
  const [radii, setRadii] = useState({ inner: 200, mid: 345, outer: 495 });

  useEffect(() => {
    const updateRadii = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadii({ inner: 75, mid: 125, outer: 175 });
        setTiltAspect(0.55);
      } else if (width < 1024) {
        setRadii({ inner: 135, mid: 235, outer: 340 });
        setTiltAspect(0.50);
      } else {
        setRadii({ inner: 200, mid: 345, outer: 495 });
        setTiltAspect(0.50);
      }
    };

    updateRadii();
    window.addEventListener('resize', updateRadii);
    return () => window.removeEventListener('resize', updateRadii);
  }, []);

  // Concentric Ring Skill Distribution (Curated with vast non-overlapping clearance)
  const outerRingSkills = useMemo(() => [
    { name: "PyTorch", level: "Advanced", domain: "Deep Learning", color: "emerald" },
    { name: "TensorFlow", level: "Advanced", domain: "Deep Learning", color: "emerald" },
    { name: "Scikit-Learn", level: "Expert", domain: "Machine Learning", color: "emerald" },
    { name: "OpenCV", level: "Advanced", domain: "Computer Vision", color: "emerald" },
    { name: "CNNs & GANs", level: "Advanced", domain: "Generative Vision", color: "emerald" },
    { name: "Face Recognition", level: "Advanced", domain: "Vision AI", color: "emerald" },
    { name: "XGBoost & SMOTE", level: "Advanced", domain: "Ensemble ML", color: "emerald" },
    { name: "Pandas & NumPy", level: "Expert", domain: "Data Analytics", color: "emerald" },
    { name: "SAP ABAP", level: "Certified", domain: "Enterprise ERP", color: "emerald" },
    { name: "Google Cloud", level: "Certified", domain: "Cloud & AI", color: "emerald" }
  ], []);

  const midRingSkills = useMemo(() => [
    { name: "LLMs & Prompts", level: "Advanced", domain: "Generative AI", color: "gold" },
    { name: "RAG Arch", level: "Advanced", domain: "Retrieval AI", color: "gold" },
    { name: "Agentic AI", level: "Advanced", domain: "Autonomous Agents", color: "gold" },
    { name: "LangChain", level: "Advanced", domain: "Agent Workflows", color: "gold" },
    { name: "React", level: "Advanced", domain: "Frontend UI", color: "gold" },
    { name: "Node.js", level: "Advanced", domain: "Backend Runtime", color: "gold" },
    { name: "FastAPI", level: "Advanced", domain: "Microservices", color: "gold" },
    { name: "WebSockets", level: "Advanced", domain: "Real-Time Comms", color: "gold" }
  ], []);

  const innerRingSkills = useMemo(() => [
    { name: "Python", level: "Expert", domain: "Core Systems", color: "cyan" },
    { name: "Java", level: "Proficient", domain: "OOP Architecture", color: "cyan" },
    { name: "C", level: "Proficient", domain: "Low-Level Systems", color: "cyan" },
    { name: "SQL", level: "Advanced", domain: "Relational Queries", color: "cyan" },
    { name: "DSA Core", level: "GATE '26", domain: "Algorithms & Structs", color: "cyan" },
    { name: "System Design", level: "Advanced", domain: "Scalable Systems", color: "cyan" }
  ], []);

  // Continuous Orbital Animation Engine with Smooth Momentum
  useEffect(() => {
    const loop = (currentTime) => {
      const dt = Math.min((currentTime - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = currentTime;

      // Inertial spin decay when user releases drag
      if (!isDraggingRef.current && Math.abs(velocityRef.current) > 0.02) {
        setDragAngleOffset((prev) => (prev + velocityRef.current) % 360);
        velocityRef.current *= 0.93; // Smooth kinetic friction
      }

      // Orbital rotation update
      if (isPlaying) {
        // Slow down smoothly when hovering an item for effortless reading
        const hoverFactor = hoveredSkill ? 0.15 : 1.0;
        const dir = reverseDirection ? -1 : 1;
        const baseSpeed = speedMultiplier * hoverFactor * dt * 36;

        setRingAngles((prev) => ({
          inner: (prev.inner + baseSpeed * 1.35 * dir) % 360,
          mid: (prev.mid - baseSpeed * 0.95 * dir) % 360,     // Counter-rotating
          outer: (prev.outer + baseSpeed * 0.65 * dir) % 360
        }));
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPlaying, speedMultiplier, reverseDirection, hoveredSkill]);

  // Horizontal Drag Handlers (Smoothly spins the orbits along their exact oval paths)
  const handleDragStart = useCallback((clientX, clientY) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: clientX, y: clientY };
    lastPosRef.current = { x: clientX, time: performance.now() };
    velocityRef.current = 0;
  }, []);

  const handleDragMove = useCallback((clientX, clientY) => {
    if (!isDraggingRef.current) return;

    const deltaX = clientX - dragStartRef.current.x;
    setDragAngleOffset((prev) => (prev + deltaX * 0.42) % 360);

    // Track instantaneous velocity for kinetic release
    const now = performance.now();
    const dt = Math.max(now - lastPosRef.current.time, 1);
    velocityRef.current = ((clientX - lastPosRef.current.x) / dt) * 7.5;

    dragStartRef.current = { x: clientX, y: clientY };
    lastPosRef.current = { x: clientX, time: now };
  }, []);

  const handleDragEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  // Reset Orbit View
  const handleResetOrbit = () => {
    setDragAngleOffset(0);
    velocityRef.current = 0;
    const width = window.innerWidth;
    setTiltAspect(width < 640 ? 0.52 : 0.47);
  };

  // Render skills along the EXACT SAME mathematical ellipse as the orbit track
  const renderOrbitalRing = (skills, rx, ringAngle, ringKey) => {
    const total = skills.length;
    const isRingDimmed = activeFilter !== 'all' && activeFilter !== ringKey;
    const ry = rx * tiltAspect;

    return skills.map((skill, index) => {
      // Calculate angle along the oval
      const angleDeg = (ringAngle + dragAngleOffset + (index / total) * 360) % 360;
      const rad = (angleDeg * Math.PI) / 180;

      // Exact mathematical coordinates on the oval track:
      // x = rx * cos(rad), y = ry * sin(rad)
      const x = rx * Math.cos(rad);
      const y = ry * Math.sin(rad);

      // Depth perception along Z (sin(rad) < 0 is back half, sin(rad) > 0 is front half)
      const sinVal = Math.sin(rad); // [-1, 1]
      const isHovered = hoveredSkill?.name === skill.name;

      // Optical depth cues:
      // Front nodes: scale up to 1.12, opacity 1.0, z-index up to 90 (above central core).
      // Back nodes: scale down to 0.88, opacity down to 0.55, z-index down to 25 (behind central core).
      let depthScale = 0.88 + 0.12 * ((sinVal + 1) / 2);
      let depthOpacity = isRingDimmed ? 0.15 : 0.55 + 0.45 * ((sinVal + 1) / 2);
      let zIndex = Math.round(25 + ((sinVal + 1) / 2) * 55);

      if (isHovered) {
        depthScale = 1.25;
        depthOpacity = 1.0;
        zIndex = 120;
      }

      // Color scheme styles
      const badgeStyle = {
        emerald: {
          border: isHovered ? 'border-cyber-emerald shadow-[0_0_20px_rgba(16,185,129,0.55)]' : 'border-cyber-emerald/35',
          dot: 'bg-cyber-emerald',
          text: 'text-white'
        },
        gold: {
          border: isHovered ? 'border-gold-primary shadow-[0_0_20px_rgba(212,175,55,0.55)]' : 'border-gold-primary/35',
          dot: 'bg-gold-primary',
          text: 'text-white'
        },
        cyan: {
          border: isHovered ? 'border-cyber-cyan shadow-[0_0_20px_rgba(6,182,212,0.55)]' : 'border-cyber-cyan/35',
          dot: 'bg-cyber-cyan',
          text: 'text-white'
        }
      }[skill.color] || {
        border: 'border-white/20',
        dot: 'bg-white',
        text: 'text-white'
      };

      return (
        <div
          key={skill.name}
          onMouseEnter={() => setHoveredSkill(skill)}
          onMouseLeave={() => setHoveredSkill(null)}
          onClick={(e) => {
            e.stopPropagation();
            setHoveredSkill((prev) => (prev?.name === skill.name ? null : skill));
          }}
          className={`absolute top-1/2 left-1/2 select-none cursor-pointer transition-colors duration-150 rounded-xl px-2 sm:px-3.5 py-1 sm:py-1.5 glass-card border flex items-center gap-1.5 sm:gap-2 shadow-xl ${badgeStyle.border}`}
          style={{
            transform: `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${depthScale})`,
            opacity: depthOpacity,
            zIndex: zIndex,
            pointerEvents: isRingDimmed ? 'none' : 'auto'
          }}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${badgeStyle.dot} ${isHovered ? 'animate-ping' : ''}`} />
          <span className={`font-mono text-[9px] sm:text-xs font-bold whitespace-nowrap ${badgeStyle.text}`}>
            {skill.name}
          </span>
          <span className="font-mono text-[8px] sm:text-[9px] text-white/50 hidden md:inline">
            {skill.level}
          </span>
        </div>
      );
    });
  };

  // Orbit Track Configs (Exact same Rx and Ry as the orbiting skills)
  const orbitTracks = [
    {
      rx: radii.outer,
      ry: radii.outer * tiltAspect,
      borderColor: 'rgba(16, 185, 129, 0.28)',
      glowColor: 'rgba(16, 185, 129, 0.15)',
      active: activeFilter === 'all' || activeFilter === 'outer'
    },
    {
      rx: radii.mid,
      ry: radii.mid * tiltAspect,
      borderColor: 'rgba(212, 175, 55, 0.30)',
      glowColor: 'rgba(212, 175, 55, 0.15)',
      active: activeFilter === 'all' || activeFilter === 'mid'
    },
    {
      rx: radii.inner,
      ry: radii.inner * tiltAspect,
      borderColor: 'rgba(6, 182, 212, 0.32)',
      glowColor: 'rgba(6, 182, 212, 0.15)',
      active: activeFilter === 'all' || activeFilter === 'inner'
    }
  ];

  // Four balanced groups of six featured skills.
  const strands = [
    {
      id: 'ai', title: 'AI & Machine Learning', color: 'border-cyber-emerald text-cyber-emerald',
      skills: [
        findSkill('Scikit-Learn', SKILLS_GALAXY.ai_ml),
        findSkill('Supervised & Unsupervised', SKILLS_GALAXY.ai_ml),
        findSkill('Feature Engineering', SKILLS_GALAXY.ai_ml),
        findSkill('Pandas & NumPy', SKILLS_GALAXY.ai_ml),
        findSkill('AI Chatbots', SKILLS_GALAXY.gen_ai_nlp),
        findSkill('CNNs & GANs', SKILLS_GALAXY.ai_ml),
      ],
    },
    {
      id: 'web', title: 'Full Stack & APIs', color: 'border-gold-primary text-gold-light',
      skills: [
        findSkill('Python', SKILLS_GALAXY.development),
        findSkill('React', SKILLS_GALAXY.development),
        findSkill('Node.js', SKILLS_GALAXY.development),
        findSkill('Flask', SKILLS_GALAXY.development),
        findSkill('REST APIs', SKILLS_GALAXY.development),
        findSkill('HTML5 & CSS3', SKILLS_GALAXY.development),
      ],
    },
    {
      id: 'databases', title: 'Databases & Storage', color: 'border-cyber-cyan text-cyber-cyan',
      skills: [
        { name: 'SQL', level: 'Advanced', category: 'Relational Queries' },
        { name: 'MySQL', level: 'Advanced', category: 'Relational Database' },
        { name: 'PostgreSQL', level: 'Advanced', category: 'Relational Database' },
        findSkill('MongoDB', SKILLS_GALAXY.development),
        findSkill('Firebase', SKILLS_GALAXY.enterprise_cloud),
        findSkill('SQLite', SKILLS_GALAXY.enterprise_cloud),
      ],
    },
    {
      id: 'enterprise', title: 'Enterprise & DevOps', color: 'border-gold-primary text-gold-light',
      skills: [
        findSkill('SAP ABAP', SKILLS_GALAXY.enterprise_cloud),
        findSkill('SAP Tech Consultant', SKILLS_GALAXY.enterprise_cloud),
        findSkill('Git & GitHub', SKILLS_GALAXY.enterprise_cloud),
        findSkill('Google Cloud (GCP)', SKILLS_GALAXY.enterprise_cloud),
        findSkill('Docker', SKILLS_GALAXY.enterprise_cloud),
        findSkill('SAP Fiori & Automation', SKILLS_GALAXY.enterprise_cloud),
      ],
    },
  ];

  return (
    <section id="skills" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Section Header */}
      <ScrollReveal direction="down" className="text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-primary/10 border border-gold-primary/20 text-xs font-mono text-gold-light mb-4">
          <span>04 // CELESTIAL OVAL ORBIT</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          The Neural <span className="gold-gradient-text">Skills Galaxy</span>
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Explore the full range of technologies I work with, from AI and full-stack development to core systems and cloud.
        </p>
      </ScrollReveal>

      {/* Orbit Filter & Playback Tactical Toolbar */}
      <ScrollReveal direction="up" delay={100} className="flex flex-wrap items-center justify-between gap-3 max-w-4xl mx-auto mb-6 px-2">
        {/* Ring Focus Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {[
            { id: 'all', label: 'ALL ORBITS (36+)', color: 'border-gold-primary text-gold-light' },
            { id: 'outer', label: 'AI & VISION', color: 'border-cyber-emerald text-cyber-emerald' },
            { id: 'mid', label: 'GENAI & WEB', color: 'border-gold-primary text-gold-light' },
            { id: 'inner', label: 'CORE CS & SAP', color: 'border-cyber-cyan text-cyber-cyan' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-2.5 sm:px-3 py-1 rounded-lg font-mono text-[10px] sm:text-xs transition-all duration-200 border ${
                activeFilter === tab.id
                  ? 'bg-white/10 border-gold-primary text-gold-light shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                  : 'bg-white/[0.02] border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Orbit Motion Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-[10px] sm:text-xs">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:border-gold-primary/50 transition-colors"
            title={isPlaying ? "Pause Orbit" : "Play Orbit"}
          >
            {isPlaying ? "⏸ PAUSE" : "▶ PLAY"}
          </button>
          <button
            onClick={() => setSpeedMultiplier((s) => (s === 1 ? 1.5 : s === 1.5 ? 2 : 1))}
            className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:border-gold-primary/50 transition-colors"
            title="Cycle Speed"
          >
            {speedMultiplier}X SPEED
          </button>
          <button
            onClick={() => setReverseDirection((r) => !r)}
            className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:border-gold-primary/50 transition-colors"
            title="Reverse Orbital Direction"
          >
            ⇄ REVERSE
          </button>
          <button
            onClick={handleResetOrbit}
            className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-white/70 hover:text-white hover:border-gold-primary/50 transition-colors"
            title="Reset Perspective"
          >
            ⟲ RESET
          </button>
        </div>
      </ScrollReveal>

      {/* Perfectly Aligned Celestial Oval Viewport */}
      <ScrollReveal direction="scale" delay={150} className="relative w-full min-h-[520px] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[680px] flex items-center justify-center my-4 select-none cursor-grab active:cursor-grabbing overflow-visible">
        {/* Interaction Surface */}
        <div
          onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
          onMouseMove={(e) => handleDragMove(e.clientX, e.clientY)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX, e.touches[0].clientY)}
          onTouchEnd={handleDragEnd}
          onClick={() => setHoveredSkill(null)}
          className="relative w-full w-full max-w-[1120px] h-[480px] sm:h-[540px] md:h-[600px] lg:h-[640px] flex items-center justify-center"
        >
          {/* Luminous Oval Orbit Tracks (Mathematically identical Rx and Ry to skills) */}
          {orbitTracks.map((track, idx) => (
            <div
              key={idx}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed pointer-events-none transition-all duration-300"
              style={{
                width: `${track.rx * 2}px`,
                height: `${track.ry * 2}px`,
                borderColor: track.borderColor,
                boxShadow: track.active ? `0 0 25px ${track.glowColor}` : 'none',
                opacity: track.active ? 0.8 : 0.15,
                zIndex: 10
              }}
            />
          ))}

          {/* Central skills indicator */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center justify-center"
            style={{ zIndex: 50 }}
          >
            {/* Pulsing Core Sphere */}
            <div className={`relative w-22 h-22 sm:w-26 sm:h-26 md:w-28 md:h-28 rounded-full bg-gradient-to-tr from-gold-primary/20 via-cyber-cyan/15 to-gold-primary/30 border backdrop-blur-md flex flex-col items-center justify-center transition-all duration-300 ${
              hoveredSkill
                ? hoveredSkill.color === 'emerald'
                  ? 'border-cyber-emerald/70 shadow-[0_0_40px_rgba(16,185,129,0.45)]'
                  : hoveredSkill.color === 'cyan'
                    ? 'border-cyber-cyan/70 shadow-[0_0_40px_rgba(6,182,212,0.45)]'
                    : 'border-gold-primary/70 shadow-[0_0_40px_rgba(212,175,55,0.45)]'
                : 'border-gold-primary/40 shadow-[0_0_40px_rgba(212,175,55,0.25)]'
            }`}>
              {/* Spinning Orbital Core Gimbal */}
              <div className="absolute inset-[-6px] rounded-full border border-dashed border-gold-primary/30 animate-spin-slow pointer-events-none" />
              <div className="absolute inset-[-14px] rounded-full border border-dotted border-cyber-cyan/20 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse' }} />

              {hoveredSkill ? (
                <div className="text-center px-2 animate-fadeIn">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-gold-light font-bold">
                    {hoveredSkill.domain}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white truncate max-w-[90px]">
                    {hoveredSkill.name}
                  </div>
                  <div className="text-[8px] font-mono text-cyber-emerald mt-0.5">
                    [{hoveredSkill.level}]
                  </div>
                </div>
              ) : (
                <div className="text-center px-1">
                  <div className="w-2 h-2 rounded-full bg-gold-primary mx-auto mb-1 animate-pulse" />
                  <div className="text-[10px] sm:text-[11px] font-mono font-bold text-white tracking-wider">
                    SKILLS HUB
                  </div>
                  <div className="text-[8px] font-mono text-gold-light/70 tracking-widest mt-0.5">
                    GATE &apos;26 • 36+
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Render All 3 Concentric Planetary Orbital Rings */}
          {renderOrbitalRing(outerRingSkills, radii.outer, ringAngles.outer, 'outer')}
          {renderOrbitalRing(midRingSkills, radii.mid, ringAngles.mid, 'mid')}
          {renderOrbitalRing(innerRingSkills, radii.inner, ringAngles.inner, 'inner')}
        </div>
      </ScrollReveal>

      {/* Tactile Interaction Hint */}
      <div className="text-center font-mono text-[10px] sm:text-[11px] text-white/40 -mt-2 mb-14 uppercase tracking-widest flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-gold-primary animate-ping" />
        DRAG TO SPIN OVAL ORBITS // HOVER OR TAP SKILL TO INSPECT TELEMETRY
      </div>

      {/* Featured skills in four balanced groups, with a practical workflow on each card. */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-6">
        {strands.map((strand, sIdx) => (
          <ScrollReveal key={strand.id} direction={['up', 'down', 'right', 'left'][sIdx]} distance={80} delay={sIdx * 100}>
            <div className="h-full rounded-xl border border-white/10 bg-white/[0.03] p-5 text-white shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-gold-primary/45 hover:bg-white/[0.05] hover:shadow-[0_0_28px_rgba(212,175,55,0.14)] focus-within:border-gold-primary/45 focus-within:shadow-[0_0_28px_rgba(212,175,55,0.14)] sm:p-6">
              <div>
                <div className="flex min-h-[96px] items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <h4 className="font-display text-lg font-bold text-white">
                    {strand.title}
                  </h4>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${strand.color}`}>
                    FEATURED
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {strand.skills.map((skill) => (
                    <article
                      key={skill.name}
                      role="button"
                      tabIndex={0}
                      aria-label={`${skill.name}: flip for workflow`}
                      aria-pressed={Boolean(flippedSkills[skill.name])}
                      onClick={() => setFlippedSkills((current) => ({ ...current, [skill.name]: !current[skill.name] }))}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setFlippedSkills((current) => ({ ...current, [skill.name]: !current[skill.name] }));
                        }
                      }}
                      className={`skill-flip-card cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-primary ${flippedSkills[skill.name] ? 'is-flipped' : ''}`}
                    >
                      <div className="skill-flip-inner">
                        <div className="skill-flip-face rounded-lg border border-white/10 bg-[#11131a] p-4 flex flex-col justify-between transition-colors">
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <span className="text-sm font-semibold leading-snug text-white">{skill.name}</span>
                              <span className={`shrink-0 text-[9px] font-mono uppercase tracking-wide ${skill.level === 'Certified' ? 'text-cyber-cyan' : 'text-gold-light'}`}>
                                {skill.level}
                              </span>
                            </div>
                            <p className="text-xs text-white/45 mt-2">{skill.category}</p>
                          </div>
                          <span className="text-[10px] text-white/40 mt-4">Hover or focus to see workflow ↗</span>
                        </div>
                        <div className="skill-flip-face skill-flip-back rounded-lg border border-gold-primary/30 bg-[#11131a] p-3.5">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-gold-light mb-2">Typical workflow</div>
                          <ol className="space-y-1.5">
                            {(SKILL_WORKFLOWS[skill.name] || []).map((step, stepIndex) => (
                              <li key={step} className="flex gap-2 text-[10px] leading-snug text-white/75">
                                <span className="font-mono text-gold-primary">0{stepIndex + 1}</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 font-mono text-[10px] text-white/40 flex justify-between">
                <span>HIGHLIGHTED SKILLS</span>
                <span className="text-white/60">{strand.skills.length} listed</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
