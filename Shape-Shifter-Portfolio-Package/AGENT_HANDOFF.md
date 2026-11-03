# Shape-shifter — Portfolio Integration Package & Agent Handoff Guide

## Overview for the Portfolio Agent
This package contains **Shape-shifter**, a mobile-first neon arcade polyomino deduction puzzle game designed by the user (originally prototyped in Excel and built in React + Tailwind CSS).

All 10 gameplay, layout, symmetry, and interchangeable-piece rules have been implemented and verified.

---

## Folder Structure

```text
Shape-Shifter-Portfolio-Package/
├── AGENT_HANDOFF.md                 # This integration guide for the portfolio AI agent
├── static-embed/
│   └── index.html                   # 100% self-contained, zero-dependency single-file build (~250 KB)
└── react-source/
    ├── ShapeShifterGame.jsx         # Exported React component (App / ShapeShifterGame) + level data
    └── shape-shifter.css            # Pre-compiled Tailwind + custom neon arcade styles
```

---

## Recommended Integration Methods

### Method 1: Static Sub-Route + `<iframe>` Embed (Recommended)
Because **Shape-shifter** locks viewport scrolling (`overflow: hidden; touch-action: manipulation; height: 100dvh`) for drag-and-drop polyomino touch controls and uses its own Tailwind CSS reset, isolating it inside its own document prevents any CSS collisions or scroll-trapping on your portfolio page.

1. **Copy the file:**
   Copy `static-embed/index.html` into your portfolio project's static/public folder:
   - **Next.js / Vite / Create React App / Astro:** `public/shape-shifter/index.html`
   - **Plain HTML / GitHub Pages:** `/shape-shifter/index.html`

2. **Option 1A — Link to Fullscreen Playable Route:**
   Link a **"Play Fullscreen"** button on your portfolio directly to `/shape-shifter/index.html` (or `/shape-shifter/`).

3. **Option 1B — Embed Inline on a Portfolio Project Page:**
   Render an `<iframe>` inside a responsive arcade/device container on your portfolio page:
   ```html
   <div style="
     width: 100%;
     max-width: 520px;
     height: min(860px, 88vh);
     margin: 0 auto;
     border-radius: 20px;
     overflow: hidden;
     border: 2px solid #2A2A4E;
     box-shadow: 0 0 35px rgba(0, 245, 212, 0.2);
     background: #0A0A12;
   ">
     <iframe
       src="/shape-shifter/index.html"
       title="Shape-shifter Playable Game"
       style="width: 100%; height: 100%; border: 0; display: block;"
       allow="clipboard-write"
       loading="lazy"
     ></iframe>
   </div>
   ```
   > **Note:** Keep `allow="clipboard-write"` on the `<iframe>` so the in-game **"SHARE RESULT"** button can copy the Wordle-style emoji grid (`🟩`, `🟥`, `⬛`) to the user's clipboard.

---

### Method 2: Direct React Component Import
If you prefer mounting the game directly as a React component without an `<iframe>`:
1. Copy `react-source/ShapeShifterGame.jsx` and `react-source/shape-shifter.css` into your portfolio components folder.
2. Load Google Fonts (`Orbitron`, `Rajdhani`, `Share Tech Mono`) and optionally `canvas-confetti` on `window.confetti`.
3. Note that the root `<div>` inside `ShapeShifterGame.jsx` uses `h-[100dvh]` by default; if mounting inside a smaller card on a scrollable page, change `h-[100dvh]` on the root wrapper in `ShapeShifterGame.jsx` to `h-full` and wrap it in a sized parent container.

---

## Game Summary (For Portfolio Case-Study Copy)
If the user asks you to write a project showcase section or case study around the game, here are the key details:
- **Title:** Shape-shifter
- **Genre:** Spatial Deduction / Polyomino Puzzle Game (Wordle meets Tangrams/Pentominoes)
- **Origin:** Designed and balanced in a custom spreadsheet prototype before being translated into a web/mobile interactive experience.
- **Core Mechanics:**
  - Players are given a $5 \times 5$ grid with pre-placed blocked tiles and a bank of **6 polyomino shapes**.
  - Goal: Fit the shapes onto the board in their true target positions within **3 attempts**.
  - Up to **1 shape may be rotated $90^\circ$ clockwise** and up to **1 shape may be flipped horizontally** across the Y-axis.
  - Players can submit a full board—or strategically submit a **partially filled board** (with a fail-safe confirmation prompt)—to receive cell-by-cell **Tick (`✓`)** and **Cross (`✗`)** clues on two mini $5 \times 5$ attempt history grids.
  - Shapes that are 100% correctly placed **lock onto the board** for subsequent attempts.
  - Features **23 handcrafted levels**, drag-and-drop + tap-to-place controls, interchangeable duplicate piece detection, and Wordle-style emoji result sharing.
