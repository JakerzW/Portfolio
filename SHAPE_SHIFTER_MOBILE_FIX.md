# Shape-shifter — mobile layout fix (handoff for Claude Code)

## The bug
On mobile browsers (seen on Android at jakewalder.com/shape-shifter), the bottom button row
(ROTATE 90° / FLIP Y / recall / SUBMIT) is cut off below the screen.

**Cause:** the game's root `<div>` is `h-[100dvh]` with `overflow: hidden`, and the board and the two
attempt mini-grids are sized as fixed fractions of the viewport height in inline styles:

- board: `width/height: clamp(250px, min(88vw, 44dvh), 440px)`
- attempt grids: `width/height: clamp(112px, min(36vw, 17.5dvh), 175px)`

Nothing accounts for the height of the header, hint line, shape tray and button row. On narrow screens
the `SHAPE-SHIFTER` title also wraps onto two lines (making the header taller), and the hint line under the
board ("Attempt 1 of 3 • Drag or tap placed shapes to move/recall") wraps and spills over the tray. On a
412×750 viewport the content ends up ~25–40px taller than the screen, so the buttons are clipped.

## The fix
A self-contained `<style>` + `<script>` block, pasted **immediately before `</head>`**. It does not touch
the React code, so it's low-risk. It:

1. Sets the app height from `window.innerHeight` (CSS var `--ss-app-h`). This is more reliable than `100dvh` on some mobile browsers.
2. Keeps the header title on one line (`nowrap`, `font-size: min(18px, 3.6vw)`), and makes the header buttons
   slightly more compact under 420px wide.
3. Measures the header, banner, tray and button row after render. It then sizes the main board
   (`--ss-board`) and attempt grids (`--ss-mini`) to fill exactly the remaining height. Both are capped by
   width and by the original max sizes (440px / 175px).
4. Gives the hint line under the board a fixed 30px height with centred, wrapping 11px text.
5. Adds `env(safe-area-inset-bottom)` padding under the button row.
6. Re-measures on resize, orientation change, visualViewport resize, fonts loading, pointerup, and when
   the warning banner is added or removed (a MutationObserver on the root's direct children).

The CSS overrides the inline styles with `!important` and targets elements by their existing class names:
- board: `.square-grid-5x5.touch-none`
- attempt grids: `.square-grid-5x5.gap-[3px]` (the result-modal mini grids use `gap-[2px]` and are unaffected)
- hint line: `.h-5.mt-1.5`
- controls wrapper: `.max-w-[540px]`

If any of these class names have changed in the file, update the selectors (in both the CSS and the JS).

**Tested** in headless Chrome against a replica of the layout. Before the fix, the buttons were cut off at
390×664, 360×640 and 375×560. After the fix, the buttons were fully visible at 412×750, 390×664, 360×640,
375×560, 412×900 and 1280×800. It hasn't yet been tested on the real page.

## Files to apply it to
- The live page: `shape-shifter/index.html` (served at jakewalder.com/shape-shifter/)
- Also keep in sync if present: `Shape-Shifter-Portfolio-Package/static-embed/index.html`
- Optional: in `Shape-Shifter-Portfolio-Package/react-source/`, the same idea could be applied natively.
  Replace the inline `clamp(...dvh...)` sizes with measured sizes in the component. This isn't required for
  the live site.

## The code to insert (immediately before `</head>`)

```html
  <!-- ===== Shape-shifter mobile layout fix (paste just before </head>) ===== -->
  <style id="ss-mobile-fix">
    html, body { height: 100%; }
    /* App fills the real visible screen height (set by the script below) */
    #root > div { height: var(--ss-app-h, 100dvh) !important; }

    /* Header: keep the title on one line so it doesn't push everything down */
    #root > div > header { gap: 8px; }
    #root > div > header h1 {
      white-space: nowrap;
      font-size: min(18px, 3.6vw) !important;
      line-height: 1.25 !important;
      letter-spacing: 0.06em !important;
    }
    #root > div > header > div:last-child { flex-shrink: 0; gap: 6px !important; }
    @media (max-width: 420px) {
      #root > div > header { padding-left: 10px !important; padding-right: 10px !important; }
      #root > div > header > div:last-child > button:first-child { padding: 6px 8px !important; gap: 4px !important; }
      #root > div > header > div:last-child > button:first-child span { font-size: 11px !important; }
    }

    /* Main board + attempt grids are sized to whatever space is left */
    #root .square-grid-5x5.touch-none {
      width: var(--ss-board, clamp(250px, min(88vw, 44dvh), 440px)) !important;
      height: var(--ss-board, clamp(250px, min(88vw, 44dvh), 440px)) !important;
    }
    #root .square-grid-5x5.gap-\[3px\] {
      width: var(--ss-mini, clamp(112px, min(36vw, 17.5dvh), 175px)) !important;
      height: var(--ss-mini, clamp(112px, min(36vw, 17.5dvh), 175px)) !important;
    }

    /* Hint line under the board: fixed height, wraps neatly instead of spilling over the tray */
    #root .h-5.mt-1\.5 { height: 30px !important; padding: 0 4px; text-align: center; overflow: hidden; }
    #root .h-5.mt-1\.5 > span { font-size: 11px !important; line-height: 14px !important; }

    /* Keep the buttons clear of gesture bars / home indicators */
    #root .max-w-\[540px\] { padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px)) !important; }
  </style>
  <script id="ss-mobile-fix-js">
  (function () {
    var de = document.documentElement;
    var scheduled = false;

    function layout() {
      scheduled = false;
      var vh = window.innerHeight;
      de.style.setProperty('--ss-app-h', vh + 'px');

      var app = document.querySelector('#root > div');
      if (!app) return false;
      var board = app.querySelector('.square-grid-5x5.touch-none');
      var mini = app.querySelector('.square-grid-5x5.gap-\\[3px\\]');
      if (!board || !mini) return false;

      var boardSection = board.parentElement;
      var attemptsRow = mini.parentElement && mini.parentElement.parentElement;
      if (!boardSection || !attemptsRow) return false;

      // Height used by everything except the board and the attempt grids
      var used = 0;
      for (var i = 0; i < app.children.length; i++) {
        var el = app.children[i];
        if (el === boardSection || el === attemptsRow) continue;
        var pos = getComputedStyle(el).position;
        if (pos === 'fixed' || pos === 'absolute') continue;
        used += el.getBoundingClientRect().height;
      }
      var attemptsExtra = attemptsRow.getBoundingClientRect().height - mini.getBoundingClientRect().height;
      var boardExtra = boardSection.getBoundingClientRect().height - board.getBoundingClientRect().height;

      var free = vh - used - attemptsExtra - boardExtra - 10; // 10px breathing room
      var w = app.clientWidth;

      // Attempt grids take ~29% of the free height, capped by width and original max
      var miniMaxW = (w - 24 - 16 - 2 * 18) / 2;
      var miniSize = Math.max(64, Math.min(175, miniMaxW, free * 0.29));
      var boardSize = Math.min(440, w - 24, free - miniSize);
      if (boardSize < 200) {
        // Very short screens: shrink the attempt grids further before the board
        miniSize = Math.max(56, free - 200);
        boardSize = Math.max(160, Math.min(440, w - 24, free - miniSize));
      }

      de.style.setProperty('--ss-mini', Math.floor(miniSize) + 'px');
      de.style.setProperty('--ss-board', Math.floor(boardSize) + 'px');
      return true;
    }

    function schedule() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(layout);
    }

    function start() {
      var tries = 0;
      (function waitForApp() {
        if (layout()) {
          var app = document.querySelector('#root > div');
          // Re-measure when the warning banner appears/disappears
          new MutationObserver(schedule).observe(app, { childList: true });
          return;
        }
        if (++tries < 300) requestAnimationFrame(waitForApp);
      })();
    }

    window.addEventListener('resize', schedule);
    window.addEventListener('orientationchange', function () { setTimeout(schedule, 150); });
    if (window.visualViewport) window.visualViewport.addEventListener('resize', schedule);
    document.addEventListener('pointerup', function () { setTimeout(schedule, 50); }, true);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
    else start();
  })();
  </script>
  <!-- ===== end Shape-shifter mobile layout fix ===== -->
```

## How to verify
1. Open the page in Chrome DevTools device mode at 412×750, 390×664, 360×640 and 375×560.
2. Check that the SUBMIT / ROTATE / FLIP buttons are fully visible, with nothing clipped at the bottom and no page scroll.
3. Check that the title "SHAPE-SHIFTER" stays on one line.
4. Check that drag-and-drop from the tray onto the board still places shapes in the right cells.
5. Submit a partial board and confirm the "BOARD NOT FULL" modal and the attempt grids still look right.
6. Check desktop (e.g. 1280×800): the layout should look essentially the same as before.
