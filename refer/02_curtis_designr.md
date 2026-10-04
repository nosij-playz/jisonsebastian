# Reference Study 02: CURTIS.DESIGNR (https://curtisdesignr.me/)

## 1. Overview & Positioning
- **Author:** Curtis Nguyen (Senior Product Designer, Sky Mavis, OPSWAT, Ho Chi Minh City).
- **Tone:** Cyberpunk, tactical UI, high-tech military HUD / sci-fi brutalism, meticulous craftsmanship.
- **Tech Stack:** Next.js, Turbopack, Tailwind CSS, Web Audio API sound effects, custom Canvas pixel reveal shader.

---

## 2. Visual Style & Aesthetic System
- **Color System:**
  - **Background:** Tactical Obsidian (`#0A0A0A`).
  - **Primary Neon Accent:** Electric Acid Green (`--primary-green-neon: #39FF14` / `#48FF26`).
  - **Secondary Accent:** Hazard Orange (`--accent: #FF3B00`).
  - **Foreground Text:** Warm Bone White (`#F5F0EB`) and Tactical Slate Gray (`--text-grey-1`).
  - **Borders & Strokes:** `--background-stroke-1: rgba(255, 255, 255, 0.08)`.
- **Corner Notches & Clip Paths:**
  - Distinct chamfered / angled corner cutouts on buttons, menus, and card badges using CSS `clip-path`:
    `polygon(0% 4px, 4px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%)`.
- **HUD Metadata & Precision Accents:**
  - Live coordinates display in header (`10°48'32.0"N 106°46'55.2"E`).
  - Crosshair cross-lines (`+`), bracketed indices (`01`, `02`), and audio toggles.

---

## 3. Signature Animations & Micro-Interactions
1. **Interactive SFX (Sound Design):**
   - Interactive buttons have `data-sfx="true"`. On hover and click, subtle high-frequency synthetic clicks/blips trigger using the Web Audio API.
   - Includes a persistent ambient/SFX toggle (`Sound - On / Off`) in the top nav.
2. **Circular Scroll Progress Cursor:**
   - Custom floating cursor with a progress ring (`.cursor-progress-ring` with SVG `<circle>` and `stroke-dashoffset`) tracking user scroll depth in real-time.
3. **Text Mask Split-Line Reveals:**
   - Every headline character/word is wrapped in masks (`.home-badge-char-mask`, `.split-line-inner`).
   - Words slide up from beneath an invisible clipping boundary with high spring tension.
4. **Interactive Pixel Shader Reveal:**
   - Section transitions feature a custom HTML5 canvas pixelation shader (`.home-pixel-reveal`) that pixelates content into coarse blocks before resolving into crisp focus.
5. **Magnetic Tactical Menu:**
   - Fullscreen HUD flyout drawer with chamfered geometry, numeric bullet lists (`01`, `02`), and neon green corner brackets that illuminate on hover.

---

## 4. Integration Blueprint for Our Portfolio
- **Tactical HUD Frame & Crosshairs:** Add delicate corner bracket accents (`+` or chamfered border lines) around our portfolio viewport to give the video backdrop an interactive viewfinder feel.
- **Scroll Progress Ring or Monospace Progress Indicator:** Show a circular scroll progress ring or a technical read-out (`FRAME: 0124 / 0452 | PROGRESS: 27.4%`) fixed in a corner.
- **Interactive UI Sound Effects (Optional SFX):** Add subtle, optional synthesized audio clicks on section buttons or menu open/close toggles.
- **Split-Line Kinetic Typography:** Animate portfolio project titles and headings using nested mask overflow-hidden reveals so letters slide up as each video chapter arrives.
