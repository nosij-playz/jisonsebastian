# Reference Study 08: Shadcn UI & Scrolltide Animation Systems

## 1. Scrolltide Signature Interactions (https://www.scrolltide.co/)

### A. Card Folder (`#c-card-folder`)
- **Concept:** Interactive 3D expanding/collapsing card stack resembling an Apple Wallet or physical document binder.
- **Scroll Behavior:**
  - Cards begin in a tightly nested deck with negative vertical margins and overlapping z-indexes.
  - As scroll progress enters the viewport, cards peel away or fan out vertically with 3D perspective (`transform: rotateX(15deg) translateY(...) scale(...)`).
  - Active/focused card snaps to front with full elevation and reveals case study metrics.
- **Integration Role in Jison's Portfolio:**
  - **Ideal for:** The **Featured Projects** or **Experience Timeline** section.
  - Allows Jison's 4 major projects (*SustainAI*, *NeuroWave*, *RetraceAI*, *TalkHub*) to live in a single luxury folder deck that unfolds seamlessly as the user scrolls over the workshop video.

---

### B. DNA Carousel (`#c-dna-carousel`)
- **Concept:** Double-helix / 3D cylindrical rotating orbit carousel.
- **Scroll Behavior:**
  - Interactive nodes rotate along a 3D helical path (`transform-style: preserve-3d; perspective: 1200px`).
  - Items in the foreground scale up with 100% opacity and neon border glow; background items shrink, blur, and dim.
  - Driven by scroll velocity with momentum dampening or continuous ambient rotation.
- **Integration Role in Jison's Portfolio:**
  - **Ideal for:** The **AI/ML & Engineering Skills Galaxy** (PyTorch, TensorFlow, LLMs/RAG, Agentic AI, OpenCV, React, Flask, Docker, SAP).
  - Turns a standard skills list into a futuristic, rotating neural network / DNA strand.

---

### C. Apogee Template (`#t-apogee`)
- **Concept:** Aerospace-grade, high-end mission narrative.
- **Visual Tone:** Obsidian `#050507`, hairline gold/cyan telemetry, cinematic chapter headings, high precision metric counters.
- **Scroll Behavior:**
  - Full-screen pinned canvas/stages with large atmospheric typographic reveals.
  - Coordinated telemetry badges (`MISSION PHASE // 01`, `TARGET ACQUIRED: GATE 2026 QUALIFIED`).
- **Integration Role in Jison's Portfolio:**
  - **Ideal for:** The overall **Hero & Narrative Spine** of the site. Pairs naturally with the engineer workshop video frame sequence.

---

## 2. Shadcn UI & Modern Component Primitives
We can borrow the most striking primitives from the modern Shadcn & Aceternity design systems:

1. **Bento Grid Architecture:**
   - Modular asymmetric cards (2x2, 2x1, 1x1) for Education, GATE 2026, SRISHTI Best Project Award, and Certifications.
2. **Spotlight / Glowing Border Cards:**
   - Cards that dynamically highlight their borders based on the user's cursor position (`radial-gradient` tracking `mouseX, mouseY`).
3. **Floating Glass Dock Navigation:**
   - Minimalist bottom/top pill with blurred glassmorphism (`backdrop-blur-xl bg-black/40 border border-white/10`).
4. **Shimmer Action Buttons:**
   - Buttons with a continuous diagonal light shimmer passing across their gradient border.
5. **Noise & Vignette Overlays:**
   - Micro-grain noise texture layered over the video canvas for a tactile, cinematic film finish.
