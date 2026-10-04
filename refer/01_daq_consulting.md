# Reference Study 01: DAQ Consulting (https://daqconsulting.com/)

## 1. Overview & Positioning
- **Industry:** Enterprise Data & AI Engineering Consulting.
- **Tone:** Hyper-technical, authoritative, sleek enterprise minimalism, cutting-edge engineering precision.
- **Tech Stack:** Next.js (Turbopack, Next 14/15), Tailwind CSS, Inter variable font, SVG SVG path-length stroke animation engines.

---

## 2. Visual Style & Aesthetic System
- **Color Palette:**
  - **Background:** Deep pure black (`#000000`).
  - **Text & Foreground:** Crisp pure white (`#FFFFFF`) with muted secondary gray (`rgba(255, 255, 255, 0.65)`).
  - **Text Selection:** `selection:bg-white/25` for a refined monochromatic glow.
  - **Borders & Dividers:** Ultra-subtle hairline borders (`rgba(255, 255, 255, 0.08)` to `0.12`).
- **Typography:**
  - Font: `Inter` variable font with tabular numbers and tight character tracking (`tracking-tight` on headings, uppercase wide tracking `tracking-[0.24em]` on micro-labels).
  - Monospaced technical tags and system badges.
- **Grid & Layout:**
  - Architectural 12-column layout with vertical hairline guide lines (`shared-v-line`) providing a blueprint aesthetic.
  - Generous negative space that gives content immense breathing room.

---

## 3. Signature Animations & Micro-Interactions
1. **SVG BrandMark Path-Length Trace:**
   - On initial page load (and hover), the intricate vector logo paths animate using SVG stroke-dasharray/stroke-dashoffset (`pathLength="1000"`).
   - Gives the feeling of an engineering schematic being drawn live by a laser.
2. **Adaptive Floating Glass Navbar:**
   - Fixed header with floating pill container (`max-w-[1240px] h-24`).
   - On scroll, it transitions smoothly with a custom cubic bezier: `ease-[cubic-bezier(0.19,1,0.22,1)] will-change-[max-width,height,background-color]`.
   - Shrinks in height, darkens with backdrop-blur, and tightens border radius as the user scrolls down.
3. **Staggered Metric Counters & Data Badges:**
   - KPI metrics and stats animate into view with staggered opacity and subtle vertical displacement.
4. **Interactive Card Elevation:**
   - Subtle radial gradient glow that follows the cursor over border surfaces to simulate light reflecting off polished obsidian glass.

---

## 4. Integration Blueprint for Our Portfolio
- **Adaptive Floating Navbar:** Build a floating glassmorphic header that floats over our dimmed 30fps video background, shrinking and increasing backdrop-blur as the user scrolls down.
- **Vertical Blueprint Grid Lines:** Add subtle vertical lines (`rgba(255,255,255,0.05)`) over the video canvas to give the entire portfolio a high-end architectural/engineering feel.
- **Laser-Drawn Monogram / Logo:** Use SVG stroke animation (`stroke-dashoffset`) in the hero section before the scroll begins.
- **Monospaced Technical Tags:** Display project metadata (e.g. `[FRAME 0142 // 30FPS]`, `TECH: REACT / GLSL / GSAP`) in crisp monospace labels with wide letter spacing.
