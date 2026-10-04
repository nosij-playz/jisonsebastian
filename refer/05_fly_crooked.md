# Reference Study 05: Fly Crooked (https://flycrooked.com/)
*Awarded Awwwards Site of the Day & Developer Award*

## 1. Overview & Positioning
- **Product:** Crow — iPhone travel companion app finding unexpected alternate flight routes.
- **Tone:** Cinematic, mysterious, noir travel thriller, high-stakes storytelling, visceral and cinematic.
- **Architecture:** Next.js with multi-sequence HTML5 Canvas frame scrubbing pinned across a multi-thousand `svh` viewport timeline (`--film-stage-height: 5417.5svh`).
- **Direct Relevance:** **This is the exact gold-standard architectural model for our 30fps scroll-driven video frame portfolio!**

---

## 2. Visual Style & Aesthetic System
- **Color Palette:**
  - **Background:** Deep Cinema Black (`#050507`).
  - **Signature Hot Accent:** Electric Neon Magenta / Hot Pink (`#FF3D81`) used surgically on punchline keywords (e.g. *feel like it.*, *$5,901.*, *the starting line.*, *the fine print.*).
  - **Foreground Typography:** Brilliant White and Pale Silver Fog (`rgba(255, 255, 255, 0.75)`).
- **Typography:**
  - Giant expressive editorial serif / condensed grotesque headers: `clamp(46px, 6.4vw, 124px)` with ultra-tight line height (`0.93`).
  - Monospaced flight telemetry and status notes (`f-mono fnote`: `DFW → IAH → FCO`, `fare watch · business class`).
- **Cinematic Framing & Atmosphere:**
  - Perimeter film vignette shadow (`.vignette`) darkening the borders of the screen.
  - Flash exposure overlays (`.scene-exposure`) simulating camera flashes between narrative chapters.

---

## 3. Signature Animations & Technical Architecture
1. **Pinned Multi-Sequence Canvas Scrubbing (`.film-motion-stage`):**
   - The stage is pinned at `sticky top-0 h-screen overflow-clip`.
   - The scroll track is given an explicit proportional height (e.g. `5000svh`), allowing the user's scroll speed to dictate the exact video frame rendering on the canvas.
   - Dual canvas architecture supporting both landscape and portrait aspect ratios seamlessly.
2. **Text Motion Engine (`data-text-motion`):**
   - Headings don't just fade in; each line has a bespoke typographic choreography:
     - `rise`: Text lifts up from an invisible clipping baseline.
     - `slide-left` / `slide-right`: Cinematic horizontal sweep matching camera pan.
     - `focus` / `settle`: Text blurs from 10px down to crisp 0px with elastic scale deceleration.
     - `scan`: Monospaced data lines reveal letter-by-letter like a radar teletype.
     - `mist-char`: Atmospheric smoke/mist particle dissipation where individual letters dissolve into air.
3. **Story Beat Synchronization:**
   - Text overlays appear at exact frame indices to create synchronicity between what the video shows and what the typography says.
4. **Scene Flash Transitions:**
   - White / warm exposure flashes (`.scene-exposure`) triggered when the video sequence cuts from one camera angle to another, hiding any sudden frame transitions.
5. **Magnetic Floating CTAs:**
   - Magnetic App Store button and interactive replay pill (`Watch it again`) at the end of the film.

---

## 4. Integration Blueprint for Our Portfolio
- **Direct Architectural Match:** We already have our 452 frames extracted at 30fps. We can adopt Fly Crooked’s exact stage formula:
  - Sticky full-screen `<canvas>` with subtle edge vignette and dark overlay (`brightness(0.3)` or CSS overlay gradient).
- **Keyword Color Accents:** Highlight core punchlines in our portfolio text with an electric accent color (like FlyCrooked's `#FF3D81` or Curtis's `#39FF14`).
- **Phase-Based Typography (Chapters):**
  - **Frames 0001 - 0100:** Hero Intro & Hook (`data-text-motion="rise"`).
  - **Frames 0101 - 0220:** Core Specialties & Capabilities (`data-text-motion="slide-left"`).
  - **Frames 0221 - 0350:** Featured Projects & Case Studies (`data-text-motion="focus"`).
  - **Frames 0351 - 0452:** Contact & Interactive Finale (`data-text-motion="settle"`).
- **Blur & Depth-of-Field Text Transitions:** Apply `filter: blur()` alongside opacity fades to make text feel physically embedded in the cinematic lighting of the video.
