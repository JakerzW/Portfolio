/**
 * Shape-shifter — Self-Contained React Component Module
 * Can be imported into any React 18+ / Next.js / Vite portfolio project.
 * Note: Import './shape-shifter.css' alongside this component, or prefer embedding
 * 'static-embed/index.html' via an <iframe> for complete CSS & touch-scroll isolation.
 */
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

const {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef
} = React;

// ==========================================
// 1. INLINE SVG ICONS (0 External Dependencies)
// ==========================================
const Icon = ({
  path,
  className = "w-4 h-4",
  viewBox = "0 0 24 24",
  strokeWidth = 2,
  fill = "none"
}) => /*#__PURE__*/React.createElement("svg", {
  className: className,
  viewBox: viewBox,
  fill: fill,
  stroke: "currentColor",
  strokeWidth: strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, path);
const LockIcon = ({
  className = "w-3.5 h-3.5"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2",
    ry: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }))
});
const RotateCwIcon = ({
  className = "w-3.5 h-3.5"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 3v5h-5"
  }))
});
const FlipIcon = ({
  className = "w-3.5 h-3.5"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m3 7 5 5-5 5V7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 7-5 5 5 5V7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 20v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 14v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2"
  }))
});
const SendIcon = ({
  className = "w-4 h-4"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m22 2-7 20-4-9-9-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 11 13"
  }))
});
const RefreshIcon = ({
  className = "w-3.5 h-3.5"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 3v5h-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 16H3v5"
  }))
});
const GridIcon = ({
  className = "w-3.5 h-3.5"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "3",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "14",
    width: "7",
    height: "7"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "14",
    width: "7",
    height: "7"
  }))
});
const HelpIcon = ({
  className = "w-3.5 h-3.5"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }))
});
const TrophyIcon = ({
  className = "w-8 h-8"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 22h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
  }))
});
const AlertIcon = ({
  className = "w-8 h-8"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }))
});
const ShareIcon = ({
  className = "w-3.5 h-3.5"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8.59",
    y1: "13.51",
    x2: "15.42",
    y2: "17.49"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15.41",
    y1: "6.51",
    x2: "8.59",
    y2: "10.49"
  }))
});
const EyeIcon = ({
  className = "w-3.5 h-3.5"
}) => /*#__PURE__*/React.createElement(Icon, {
  className: className,
  path: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }))
});

// ==========================================
// 2. GEOMETRY & MATRIX TRANSFORMATIONS
// ==========================================
function normalizeCells(cells) {
  if (!cells || cells.length === 0) return [];
  const minR = Math.min(...cells.map(([r]) => r));
  const minC = Math.min(...cells.map(([, c]) => c));
  return cells.map(([r, c]) => [r - minR, c - minC]).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
}
function rotate90CW(cells) {
  return normalizeCells(cells.map(([r, c]) => [c, -r]));
}
function flipY(cells) {
  return normalizeCells(cells.map(([r, c]) => [r, -c]));
}
function rotate90CCW(cells) {
  return normalizeCells(cells.map(([r, c]) => [-c, r]));
}
function getTransformedCells(baseCells, transform) {
  if (transform === 'rotated') return rotate90CW(baseCells);
  if (transform === 'flipped') return flipY(baseCells);
  return normalizeCells(baseCells);
}
function areCellSetsEqual(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  const setA = new Set(a.map(([r, c]) => `${r},${c}`));
  return b.every(([r, c]) => setA.has(`${r},${c}`));
}
function getBoundingBox(cells) {
  if (!cells || cells.length === 0) return [0, 0];
  const maxR = Math.max(...cells.map(([r]) => r));
  const maxC = Math.max(...cells.map(([, c]) => c));
  return [maxR + 1, maxC + 1];
}

/**
 * Evaluates a board submission against a level definition, supporting:
 * - Interchangeable shapes (any two shapes with identical starting trayCells can occupy each other's target slots)
 * - Symmetric shapes (evaluates purely by geometric cell coordinates, never failing on redundant/unneeded flips/rotates)
 * - Partial (half-filled) board submissions
 */
function evaluateBoardSubmission(level, shapesState, getShapeOccupiedCellsFn) {
  const attemptGrid = Array(5).fill(null).map(() => Array(5).fill(null).map(() => ({
    shapeId: null,
    color: null,
    status: 'empty'
  })));
  for (const [br, bc] of level.blockedCells) {
    attemptGrid[br][bc] = {
      shapeId: null,
      color: null,
      status: 'blocked'
    };
  }

  // Group shapes by identical starting trayCells geometry
  const visited = new Set();
  const equivalenceGroups = [];
  for (const defA of level.shapes) {
    if (visited.has(defA.id)) continue;
    const group = [defA];
    visited.add(defA.id);
    for (const defB of level.shapes) {
      if (!visited.has(defB.id) && areCellSetsEqual(defA.trayCells, defB.trayCells)) {
        group.push(defB);
        visited.add(defB.id);
      }
    }
    equivalenceGroups.push(group);
  }

  // Generate all permutations of an array
  const getPermutations = arr => {
    if (arr.length <= 1) return [arr];
    const perms = [];
    for (let i = 0; i < arr.length; i++) {
      const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
      for (const p of getPermutations(rest)) {
        perms.push([arr[i], ...p]);
      }
    }
    return perms;
  };
  const assignedSlotByShapeId = {};
  const shapeCorrectness = {};
  for (const group of equivalenceGroups) {
    // Target slots are the shape definitions in this equivalence group
    const slotDefs = [...group];
    const placedShapesInGroup = group.filter(d => shapesState[d.id] && shapesState[d.id].anchor !== null);

    // Find the 1-to-1 assignment of placedShapesInGroup -> slotDefs that maximizes:
    // 1. Locked shapes staying on their exact matched slot (+100000)
    // 2. 100% exact cell set match (+1000)
    // 3. Number of overlapping cells (+1 per cell)
    const allSlotPerms = getPermutations(slotDefs);
    let bestPerm = allSlotPerms[0];
    let bestScore = -1;
    for (const perm of allSlotPerms) {
      let score = 0;
      for (let i = 0; i < placedShapesInGroup.length; i++) {
        const shapeDef = placedShapesInGroup[i];
        const targetSlotDef = perm[i];
        const occupied = getShapeOccupiedCellsFn(shapeDef.id);
        const isExact = areCellSetsEqual(occupied, targetSlotDef.answerCells);
        if (shapesState[shapeDef.id].locked && isExact) {
          score += 100000;
        }
        if (isExact) {
          score += 1000;
        }
        const targetSet = new Set(targetSlotDef.answerCells.map(([r, c]) => `${r},${c}`));
        for (const [r, c] of occupied) {
          if (targetSet.has(`${r},${c}`)) score += 1;
        }
      }
      if (score > bestScore) {
        bestScore = score;
        bestPerm = perm;
      }
    }
    for (let i = 0; i < placedShapesInGroup.length; i++) {
      assignedSlotByShapeId[placedShapesInGroup[i].id] = bestPerm[i];
    }

    // Also Collect all unclaimed target cells in this equivalence group for partial overlap hints
    const exactMatchedSlotIds = new Set();
    for (let i = 0; i < placedShapesInGroup.length; i++) {
      const sDef = placedShapesInGroup[i];
      const tSlot = bestPerm[i];
      if (areCellSetsEqual(getShapeOccupiedCellsFn(sDef.id), tSlot.answerCells)) {
        exactMatchedSlotIds.add(tSlot.id);
      }
    }
    const unclaimedGroupCells = new Set();
    for (const sDef of slotDefs) {
      if (!exactMatchedSlotIds.has(sDef.id)) {
        for (const [r, c] of sDef.answerCells) {
          unclaimedGroupCells.add(`${r},${c}`);
        }
      }
    }

    // Evaluate each shape in the group
    for (const shapeDef of group) {
      const runtime = shapesState[shapeDef.id];
      if (!runtime || runtime.anchor === null) {
        shapeCorrectness[shapeDef.id] = {
          is100Percent: false,
          effectiveTransform: 'none'
        };
        continue;
      }
      const occupied = getShapeOccupiedCellsFn(shapeDef.id);
      const targetSlotDef = assignedSlotByShapeId[shapeDef.id];
      const isExactMatch = areCellSetsEqual(occupied, targetSlotDef.answerCells);
      for (const [r, c] of occupied) {
        const isCellTick = isExactMatch || unclaimedGroupCells.has(`${r},${c}`);
        attemptGrid[r][c] = {
          shapeId: shapeDef.id,
          color: shapeDef.color,
          status: isCellTick ? 'tick' : 'cross'
        };
      }

      // Determine what transform is actually needed by this locked slot so symmetric shapes
      // never lock out the player's Rotate or Flip button!
      let effectiveTransform = 'none';
      if (isExactMatch) {
        const normTarget = normalizeCells(targetSlotDef.answerCells);
        if (areCellSetsEqual(shapeDef.trayCells, normTarget)) {
          effectiveTransform = 'none';
        } else if (areCellSetsEqual(rotate90CW(shapeDef.trayCells), normTarget)) {
          effectiveTransform = 'rotated';
        } else if (areCellSetsEqual(flipY(shapeDef.trayCells), normTarget)) {
          effectiveTransform = 'flipped';
        } else {
          effectiveTransform = runtime.transform;
        }
      }
      shapeCorrectness[shapeDef.id] = {
        is100Percent: isExactMatch,
        effectiveTransform
      };
    }
  }
  const allSolved = [1, 2, 3, 4, 5, 6].every(id => shapeCorrectness[id] && shapeCorrectness[id].is100Percent);
  return {
    attemptGrid,
    shapeCorrectness,
    allSolved
  };
}

// ==========================================
// 3. LEVEL DEFINITIONS (23 Verified Levels)
// ==========================================
const NEON_PALETTE = {
  1: {
    color: '#FF6B00',
    glow: 'rgba(255, 107, 0, 0.7)',
    name: 'Neon Orange'
  },
  2: {
    color: '#FEE440',
    glow: 'rgba(254, 228, 64, 0.7)',
    name: 'Cyber Yellow'
  },
  3: {
    color: '#00F5D4',
    glow: 'rgba(0, 245, 212, 0.7)',
    name: 'Laser Cyan'
  },
  4: {
    color: '#B5179E',
    glow: 'rgba(181, 23, 158, 0.7)',
    name: 'Ultraviolet'
  },
  5: {
    color: '#FF2A85',
    glow: 'rgba(255, 42, 133, 0.7)',
    name: 'Hot Magenta'
  },
  6: {
    color: '#38B000',
    glow: 'rgba(56, 176, 0, 0.7)',
    name: 'Matrix Green'
  }
};
const RAW_LEVELS = [{
  id: 1,
  title: 'Level 1',
  category: 'Initial',
  rotatedId: 4,
  flippedId: 6,
  grid: [[1, 1, 1, 2, 2], [3, 1, 4, 4, 2], [0, 3, 0, 4, 0], [5, 5, 3, 4, 6], [5, 5, 6, 6, 6]]
}, {
  id: 2,
  title: 'Level 2',
  category: 'Initial',
  rotatedId: 3,
  flippedId: 4,
  grid: [[0, 3, 5, 5, 5], [4, 0, 3, 5, 6], [4, 4, 2, 3, 6], [4, 1, 2, 0, 6], [1, 1, 2, 2, 6]]
}, {
  id: 3,
  title: 'Level 3',
  category: 'Initial',
  rotatedId: 4,
  flippedId: 2,
  grid: [[1, 1, 6, 4, 4], [1, 6, 6, 6, 4], [1, 1, 0, 2, 4], [3, 3, 2, 2, 2], [3, 3, 5, 5, 5]]
}, {
  id: 4,
  title: 'Level 4',
  category: 'Initial',
  rotatedId: 2,
  flippedId: 4,
  grid: [[2, 5, 5, 5, 1], [2, 0, 5, 1, 1], [6, 6, 4, 1, 3], [6, 6, 4, 0, 3], [0, 4, 4, 4, 3]]
}, {
  id: 5,
  title: 'Level 5',
  category: 'Initial',
  rotatedId: 1,
  flippedId: 6,
  grid: [[2, 3, 3, 5, 6], [2, 3, 3, 6, 6], [2, 0, 0, 6, 4], [2, 1, 1, 1, 4], [2, 1, 4, 4, 4]]
}, {
  id: 6,
  title: 'Level 6',
  category: 'Initial',
  rotatedId: 3,
  flippedId: 4,
  grid: [[6, 6, 4, 4, 4], [3, 6, 6, 4, 0], [3, 1, 1, 4, 0], [3, 3, 3, 2, 0], [5, 5, 2, 2, 2]]
}, {
  id: 7,
  title: 'Level 7',
  category: 'Initial',
  rotatedId: 5,
  flippedId: 3,
  grid: [[2, 2, 0, 3, 3], [2, 2, 0, 4, 3], [6, 1, 0, 5, 3], [6, 1, 0, 5, 5], [6, 1, 1, 1, 5]]
}, {
  id: 8,
  title: 'Level 8',
  category: 'Initial',
  rotatedId: 5,
  flippedId: 2,
  grid: [[0, 5, 5, 5, 4], [1, 0, 6, 4, 0], [1, 1, 1, 6, 0], [0, 3, 3, 2, 6], [3, 3, 2, 2, 2]]
}, {
  id: 9,
  title: 'Level 9 (W30 #2)',
  category: 'Woodle 30',
  rotatedId: 1,
  flippedId: 5,
  grid: [[3, 3, 3, 0, 4], [0, 1, 3, 1, 4], [5, 1, 1, 1, 4], [2, 5, 6, 6, 4], [2, 0, 5, 6, 6]]
}, {
  id: 10,
  title: 'Level 10 (W30 #3)',
  category: 'Woodle 30',
  rotatedId: 3,
  flippedId: 4,
  grid: [[5, 5, 5, 2, 2], [0, 6, 3, 2, 0], [6, 6, 3, 4, 4], [6, 1, 3, 3, 4], [1, 1, 1, 4, 4]]
}, {
  id: 11,
  title: 'Level 11 (W30 #5)',
  category: 'Woodle 30',
  rotatedId: 4,
  flippedId: 6,
  grid: [[5, 3, 3, 3, 3], [5, 0, 1, 1, 1], [5, 4, 1, 6, 1], [2, 2, 4, 6, 6], [2, 2, 0, 4, 6]]
}, {
  id: 12,
  title: 'Level 12 (W30 #8)',
  category: 'Woodle 30',
  rotatedId: 1,
  flippedId: 6,
  grid: [[0, 1, 4, 4, 4], [1, 1, 1, 5, 5], [6, 6, 0, 5, 5], [3, 6, 6, 2, 2], [3, 3, 3, 2, 0]]
}, {
  id: 13,
  title: 'Level 13 (W30 #11)',
  category: 'Woodle 30',
  rotatedId: 4,
  flippedId: 6,
  grid: [[0, 3, 3, 3, 3], [4, 4, 4, 5, 5], [4, 1, 1, 1, 5], [6, 1, 2, 1, 5], [6, 6, 6, 2, 0]]
}, {
  id: 14,
  title: 'Level 14 (W30 #14)',
  category: 'Woodle 30',
  rotatedId: 3,
  flippedId: 6,
  grid: [[5, 5, 1, 1, 1], [3, 3, 4, 0, 4], [3, 0, 4, 4, 4], [3, 6, 6, 0, 2], [6, 6, 2, 2, 2]]
}, {
  id: 15,
  title: 'Level 15 (W30 #15)',
  category: 'Woodle 30',
  rotatedId: 1,
  flippedId: 6,
  grid: [[1, 1, 6, 6, 0], [1, 6, 6, 3, 3], [1, 1, 0, 0, 3], [2, 5, 5, 4, 3], [2, 2, 5, 5, 4]]
}, {
  id: 16,
  title: 'Level 16 (W30 #16)',
  category: 'Woodle 30',
  rotatedId: 3,
  flippedId: 6,
  grid: [[3, 3, 3, 6, 2], [3, 0, 6, 6, 2], [4, 0, 6, 5, 2], [4, 0, 5, 1, 2], [4, 4, 1, 1, 1]]
}, {
  id: 17,
  title: 'Level 17 (W30 #17)',
  category: 'Woodle 30',
  rotatedId: 1,
  flippedId: 6,
  grid: [[3, 3, 3, 3, 5], [1, 0, 6, 0, 5], [1, 1, 6, 6, 4], [1, 2, 2, 6, 4], [2, 2, 0, 4, 4]]
}, {
  id: 18,
  title: 'Level 18 (W30 #19)',
  category: 'Woodle 30',
  rotatedId: 3,
  flippedId: 1,
  grid: [[2, 0, 3, 3, 3], [2, 5, 5, 5, 3], [2, 0, 1, 1, 1], [2, 6, 4, 1, 4], [6, 6, 4, 4, 4]]
}, {
  id: 19,
  title: 'Level 19 (W30 #21)',
  category: 'Woodle 30',
  rotatedId: 1,
  flippedId: 4,
  grid: [[1, 1, 1, 6, 6], [1, 0, 6, 6, 4], [5, 5, 0, 4, 3], [5, 5, 4, 0, 3], [2, 2, 2, 3, 3]]
}, {
  id: 20,
  title: 'Level 20 (W30 #23)',
  category: 'Woodle 30',
  rotatedId: 1,
  flippedId: 6,
  grid: [[5, 4, 4, 4, 3], [5, 4, 6, 4, 3], [1, 0, 6, 6, 3], [1, 1, 0, 6, 3], [1, 2, 2, 2, 0]]
}, {
  id: 21,
  title: 'Level 21 (W30 #24)',
  category: 'Woodle 30',
  rotatedId: 3,
  flippedId: 6,
  grid: [[5, 5, 3, 2, 2], [5, 5, 3, 0, 6], [1, 3, 3, 6, 6], [1, 0, 4, 6, 4], [1, 1, 4, 4, 4]]
}, {
  id: 22,
  title: 'Level 22 (W30 #28)',
  category: 'Woodle 30',
  rotatedId: 2,
  flippedId: 6,
  grid: [[2, 2, 0, 3, 3], [5, 2, 2, 0, 3], [5, 4, 0, 6, 3], [5, 1, 4, 6, 6], [1, 1, 1, 4, 6]]
}, {
  id: 23,
  title: 'Level 23 (W30 #30)',
  category: 'Woodle 30',
  rotatedId: 1,
  flippedId: 2,
  grid: [[5, 5, 5, 4, 4], [1, 2, 2, 0, 4], [1, 1, 2, 4, 4], [1, 6, 6, 0, 3], [6, 6, 3, 3, 3]]
}];
const LEVELS = RAW_LEVELS.map(raw => {
  const blockedCells = [];
  const answerMap = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  };
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      const val = raw.grid[r][c];
      if (val === 0) blockedCells.push([r, c]);else answerMap[val].push([r, c]);
    }
  }
  const shapes = [1, 2, 3, 4, 5, 6].map(id => {
    const answerCells = answerMap[id];
    const requiredTransform = id === raw.rotatedId ? 'rotated' : id === raw.flippedId ? 'flipped' : 'none';
    let trayCells;
    if (requiredTransform === 'rotated') {
      trayCells = rotate90CCW(answerCells);
    } else if (requiredTransform === 'flipped') {
      trayCells = flipY(answerCells);
    } else {
      trayCells = normalizeCells(answerCells);
    }
    const pal = NEON_PALETTE[id];
    return {
      id,
      color: pal.color,
      glowColor: pal.glow,
      name: pal.name,
      trayCells,
      answerCells,
      requiredTransform
    };
  });
  return {
    id: raw.id,
    title: `Level #${raw.id}`,
    category: raw.category,
    blockedCells,
    shapes,
    solutionGrid: raw.grid
  };
});

// ==========================================
// 4. MAIN APP COMPONENT
// ==========================================
function App() {
  const [levelIndex, setLevelIndex] = useState(0);
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [bannerMessage, setBannerMessage] = useState(null);

  // Modals
  const [showRules, setShowRules] = useState(false);
  const [showLevelSelect, setShowLevelSelect] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [showPartialConfirm, setShowPartialConfirm] = useState(false);
  const [copied, setCopied] = useState(false);
  const level = LEVELS[levelIndex] || LEVELS[0];

  // Runtime shapes: id -> { id, transform: 'none'|'rotated'|'flipped', anchor: [r,c]|null, locked: bool }
  const [shapesState, setShapesState] = useState(() => {
    const init = {};
    for (let i = 1; i <= 6; i++) init[i] = {
      id: i,
      transform: 'none',
      anchor: null,
      locked: false
    };
    return init;
  });

  // Reset level
  const resetToLevel = useCallback(idx => {
    const init = {};
    for (let i = 1; i <= 6; i++) init[i] = {
      id: i,
      transform: 'none',
      anchor: null,
      locked: false
    };
    setShapesState(init);
    setSelectedShapeId(null);
    setAttempts([]);
    setGameStatus('playing');
    setBannerMessage(null);
    setShowResultModal(false);
    setShowPartialConfirm(false);
    setLevelIndex(idx);
  }, []);

  // Occupied cells helper
  const getShapeOccupiedCells = useCallback((shapeId, stateOverride) => {
    const def = level.shapes.find(s => s.id === shapeId);
    const runtime = {
      ...shapesState[shapeId],
      ...stateOverride
    };
    if (!def || !runtime.anchor) return [];
    const transformed = getTransformedCells(def.trayCells, runtime.transform);
    const [ar, ac] = runtime.anchor;
    return transformed.map(([dr, dc]) => [ar + dr, ac + dc]);
  }, [level, shapesState]);

  // 5x5 board occupancy matrix
  const boardOccupancy = useMemo(() => {
    const matrix = Array(5).fill(null).map(() => Array(5).fill(null));
    for (const [br, bc] of level.blockedCells) matrix[br][bc] = 'blocked';
    for (let id = 1; id <= 6; id++) {
      const cells = getShapeOccupiedCells(id);
      for (const [r, c] of cells) {
        if (r >= 0 && r < 5 && c >= 0 && c < 5) matrix[r][c] = id;
      }
    }
    return matrix;
  }, [level, getShapeOccupiedCells]);

  // Can place check (ignores cells currently occupied by shapeId itself so board-dragging works)
  const canPlaceShape = useCallback((shapeId, anchor, transform) => {
    const def = level.shapes.find(s => s.id === shapeId);
    if (!def) return false;
    const transformed = getTransformedCells(def.trayCells, transform);
    const [ar, ac] = anchor;
    for (const [dr, dc] of transformed) {
      const r = ar + dr;
      const c = ac + dc;
      if (r < 0 || r >= 5 || c < 0 || c >= 5) return false;
      const occ = boardOccupancy[r][c];
      if (occ === 'blocked') return false;
      if (occ !== null && occ !== shapeId) return false;
    }
    return true;
  }, [level, boardOccupancy]);

  // Track whether Rotate or Flip is locked on the board OR currently placed on the board
  const isRotateLocked = useMemo(() => {
    return Object.values(shapesState).some(s => s.locked && s.transform === 'rotated');
  }, [shapesState]);
  const isRotateOnBoard = useMemo(() => {
    return Object.values(shapesState).some(s => !s.locked && s.anchor !== null && s.transform === 'rotated');
  }, [shapesState]);
  const isFlipLocked = useMemo(() => {
    return Object.values(shapesState).some(s => s.locked && s.transform === 'flipped');
  }, [shapesState]);
  const isFlipOnBoard = useMemo(() => {
    return Object.values(shapesState).some(s => !s.locked && s.anchor !== null && s.transform === 'flipped');
  }, [shapesState]);

  // Statistics
  const stats = useMemo(() => {
    const placedCount = Object.values(shapesState).filter(s => s.anchor !== null).length;
    const unlockedPlacedCount = Object.values(shapesState).filter(s => s.anchor !== null && !s.locked).length;
    const rotatedCount = Object.values(shapesState).filter(s => s.transform === 'rotated').length;
    const flippedCount = Object.values(shapesState).filter(s => s.transform === 'flipped').length;
    return {
      placedCount,
      unlockedPlacedCount,
      rotatedCount,
      flippedCount
    };
  }, [shapesState]);

  // Can submit whenever playing and at least 1 unlocked shape is placed (or all 6 placed)
  const canSubmit = useMemo(() => {
    return gameStatus === 'playing' && (stats.unlockedPlacedCount >= 1 || stats.placedCount === 6);
  }, [gameStatus, stats]);

  // Place shape on board -> immediately deselects shape so Rotate/Flip cannot alter placed shapes!
  const placeShape = useCallback((shapeId, anchor) => {
    if (gameStatus !== 'playing') return false;
    const current = shapesState[shapeId];
    if (!current || current.locked) return false;
    if (!canPlaceShape(shapeId, anchor, current.transform)) return false;
    setShapesState(prev => ({
      ...prev,
      [shapeId]: {
        ...prev[shapeId],
        anchor
      }
    }));
    setSelectedShapeId(null);
    setBannerMessage(null);
    return true;
  }, [gameStatus, shapesState, canPlaceShape]);

  // Return shape to tray -> also leaves selectedShapeId null unless clicked in tray
  const returnShapeToTray = useCallback(shapeId => {
    if (gameStatus !== 'playing') return;
    const current = shapesState[shapeId];
    if (!current || current.locked) return;
    setShapesState(prev => ({
      ...prev,
      [shapeId]: {
        ...prev[shapeId],
        anchor: null
      }
    }));
    setSelectedShapeId(null);
  }, [gameStatus, shapesState]);

  // Clear unlocked shapes
  const clearUnlockedShapes = useCallback(() => {
    if (gameStatus !== 'playing') return;
    setShapesState(prev => {
      const next = {
        ...prev
      };
      for (let i = 1; i <= 6; i++) {
        if (!next[i].locked) {
          next[i] = {
            ...next[i],
            anchor: null,
            transform: 'none'
          };
        }
      }
      return next;
    });
    setSelectedShapeId(null);
    setBannerMessage(null);
  }, [gameStatus]);

  // Toggle Rotate 90 CW (ONLY works on unplaced shapes in the tray!)
  const toggleRotate = useCallback(() => {
    if (gameStatus !== 'playing' || !selectedShapeId || isRotateLocked || isRotateOnBoard) return;
    const current = shapesState[selectedShapeId];
    if (!current || current.locked || current.anchor !== null) return;
    const newTransform = current.transform === 'rotated' ? 'none' : 'rotated';
    setShapesState(prev => {
      const next = {
        ...prev
      };
      if (newTransform === 'rotated') {
        for (let i = 1; i <= 6; i++) {
          if (i !== selectedShapeId && !next[i].locked && next[i].anchor === null && next[i].transform === 'rotated') {
            next[i] = {
              ...next[i],
              transform: 'none'
            };
          }
        }
      }
      next[selectedShapeId] = {
        ...next[selectedShapeId],
        transform: newTransform
      };
      return next;
    });
  }, [gameStatus, selectedShapeId, isRotateLocked, isRotateOnBoard, shapesState]);

  // Toggle Flip Y (ONLY works on unplaced shapes in the tray!)
  const toggleFlip = useCallback(() => {
    if (gameStatus !== 'playing' || !selectedShapeId || isFlipLocked || isFlipOnBoard) return;
    const current = shapesState[selectedShapeId];
    if (!current || current.locked || current.anchor !== null) return;
    const newTransform = current.transform === 'flipped' ? 'none' : 'flipped';
    setShapesState(prev => {
      const next = {
        ...prev
      };
      if (newTransform === 'flipped') {
        for (let i = 1; i <= 6; i++) {
          if (i !== selectedShapeId && !next[i].locked && next[i].anchor === null && next[i].transform === 'flipped') {
            next[i] = {
              ...next[i],
              transform: 'none'
            };
          }
        }
      }
      next[selectedShapeId] = {
        ...next[selectedShapeId],
        transform: newTransform
      };
      return next;
    });
  }, [gameStatus, selectedShapeId, isFlipLocked, isFlipOnBoard, shapesState]);

  // Execute submission evaluation (after full board or confirmed partial board)
  const executeSubmit = useCallback(() => {
    setShowPartialConfirm(false);
    setBannerMessage(null);
    const {
      attemptGrid,
      shapeCorrectness,
      allSolved
    } = evaluateBoardSubmission(level, shapesState, getShapeOccupiedCells);
    const newRecord = {
      grid: attemptGrid,
      allCorrect: allSolved
    };
    const nextAttempts = [...attempts, newRecord];
    setAttempts(nextAttempts);
    if (allSolved) {
      setGameStatus('won');
      setShapesState(prev => {
        const next = {
          ...prev
        };
        for (let i = 1; i <= 6; i++) {
          next[i] = {
            ...next[i],
            locked: true,
            transform: shapeCorrectness[i].effectiveTransform
          };
        }
        return next;
      });
      setSelectedShapeId(null);
      setShowResultModal(true);
      try {
        if (window.confetti) {
          window.confetti({
            particleCount: 80,
            spread: 70,
            origin: {
              y: 0.6
            },
            colors: ['#00F5D4', '#FF2A85', '#FEE440', '#B5179E', '#38B000']
          });
        }
      } catch (e) {}
      return;
    }
    if (nextAttempts.length >= 3) {
      setGameStatus('lost');
      setSelectedShapeId(null);
      setShowResultModal(true);
      return;
    }

    // Attempts 1 or 2: Lock 100% correct shapes, recall others to tray
    setShapesState(prev => {
      const next = {
        ...prev
      };
      for (let id = 1; id <= 6; id++) {
        if (shapeCorrectness[id] && shapeCorrectness[id].is100Percent) {
          next[id] = {
            ...next[id],
            locked: true,
            transform: shapeCorrectness[id].effectiveTransform
          };
        } else {
          next[id] = {
            ...next[id],
            anchor: null,
            transform: 'none',
            locked: false
          };
        }
      }
      return next;
    });
    setSelectedShapeId(null);
  }, [level, shapesState, getShapeOccupiedCells, attempts]);

  // Handle Submit button click (checks for partial board warning)
  const handleSubmitClick = useCallback(() => {
    if (!canSubmit) {
      setBannerMessage('Place at least 1 shape on the board to submit');
      return;
    }
    if (stats.placedCount < 6) {
      setShowPartialConfirm(true);
      return;
    }
    executeSubmit();
  }, [canSubmit, stats.placedCount, executeSubmit]);

  // Reveal solution
  const revealSolution = useCallback(() => {
    setShapesState(() => {
      const sol = {};
      for (const def of level.shapes) {
        const minR = Math.min(...def.answerCells.map(([r]) => r));
        const minC = Math.min(...def.answerCells.map(([, c]) => c));
        sol[def.id] = {
          id: def.id,
          transform: def.requiredTransform,
          anchor: [minR, minC],
          locked: true
        };
      }
      return sol;
    });
    setSelectedShapeId(null);
    setShowResultModal(false);
  }, [level]);

  // ==========================================
  // UNIFIED DRAG & DROP (TRAY + BOARD SHAPES)
  // ==========================================
  // dragState: { shapeId, source: 'tray'|'board', grabOffset: [dr, dc], clientX, clientY, hoverAnchor: [r,c]|null, isValid: bool }
  const [dragState, setDragState] = useState(null);
  const boardRef = useRef(null);

  // Compute board hover anchor given pointer coordinates & grabOffset
  const computeBoardHover = useCallback((shapeId, clientX, clientY, grabOffset) => {
    if (!boardRef.current) return {
      insideBoard: false,
      hoverAnchor: null,
      isValid: false
    };
    const rect = boardRef.current.getBoundingClientRect();
    if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
      const cellW = rect.width / 5;
      const cellH = rect.height / 5;
      const col = Math.floor((clientX - rect.left) / cellW);
      const row = Math.floor((clientY - rect.top) / cellH);
      const candAnchor = [row - grabOffset[0], col - grabOffset[1]];
      const runtime = shapesState[shapeId];
      const isValid = runtime && !runtime.locked ? canPlaceShape(shapeId, candAnchor, runtime.transform) : false;
      return {
        insideBoard: true,
        hoverAnchor: candAnchor,
        isValid
      };
    }
    return {
      insideBoard: false,
      hoverAnchor: null,
      isValid: false
    };
  }, [shapesState, canPlaceShape]);

  // Ghost drag preview cells on board
  const ghostCells = useMemo(() => {
    if (!dragState || !dragState.hoverAnchor) return [];
    const def = level.shapes.find(s => s.id === dragState.shapeId);
    if (!def) return [];
    const runtime = shapesState[dragState.shapeId];
    const transformed = getTransformedCells(def.trayCells, runtime.transform);
    const [ar, ac] = dragState.hoverAnchor;
    return transformed.map(([dr, dc]) => [ar + dr, ac + dc]);
  }, [dragState, level, shapesState]);

  // Cell occupants map
  const cellOccupants = useMemo(() => {
    const map = {};
    for (let id = 1; id <= 6; id++) {
      const runtime = shapesState[id];
      if (runtime.anchor !== null) {
        const def = level.shapes.find(s => s.id === id);
        if (def) {
          const cells = getShapeOccupiedCells(id);
          for (const [r, c] of cells) {
            map[`${r},${c}`] = {
              shapeId: id,
              locked: runtime.locked,
              color: def.color,
              glow: def.glowColor
            };
          }
        }
      }
    }
    return map;
  }, [shapesState, level, getShapeOccupiedCells]);

  // Pointer down on a board cell (handles dragging placed shapes OR clicking empty cells to place a selected tray shape)
  const handleBoardCellPointerDown = (e, r, c) => {
    if (gameStatus !== 'playing') return;
    const key = `${r},${c}`;
    const occ = cellOccupants[key];

    // Case 1: Clicked on an occupied cell on the board
    if (occ) {
      if (occ.locked) return; // Locked shapes cannot be moved
      const shapeId = occ.shapeId;
      const runtime = shapesState[shapeId];
      if (!runtime || !runtime.anchor) return;
      e.preventDefault();
      const grabOffset = [r - runtime.anchor[0], c - runtime.anchor[1]];
      const startX = e.clientX;
      const startY = e.clientY;
      const isTouch = e.pointerType === 'touch';
      let hasMoved = false;
      const target = e.currentTarget;
      try {
        target.setPointerCapture(e.pointerId);
      } catch (err) {}
      const onMove = me => {
        const dist = Math.hypot(me.clientX - startX, me.clientY - startY);
        if (dist > 6) hasMoved = true;
        if (!hasMoved) return;
        const effY = isTouch ? me.clientY - 45 : me.clientY;
        const {
          hoverAnchor,
          isValid
        } = computeBoardHover(shapeId, me.clientX, effY, grabOffset);
        setDragState({
          shapeId,
          source: 'board',
          grabOffset,
          clientX: me.clientX,
          clientY: effY,
          hoverAnchor,
          isValid
        });
      };
      const onUp = ue => {
        target.removeEventListener('pointermove', onMove);
        target.removeEventListener('pointerup', onUp);
        target.removeEventListener('pointercancel', onUp);
        if (!hasMoved) {
          // Single click/tap on placed shape without dragging -> return it to the tray!
          setDragState(null);
          returnShapeToTray(shapeId);
          return;
        }
        const effY = isTouch ? ue.clientY - 45 : ue.clientY;
        const {
          insideBoard,
          hoverAnchor,
          isValid
        } = computeBoardHover(shapeId, ue.clientX, effY, grabOffset);
        setDragState(null);
        if (insideBoard) {
          if (hoverAnchor && isValid) {
            placeShape(shapeId, hoverAnchor);
          } else {
            // Invalid drop inside board -> stays at original board position, deselected
            setSelectedShapeId(null);
          }
        } else {
          // Dragged outside the board -> return shape to the bottom tray!
          returnShapeToTray(shapeId);
        }
      };
      target.addEventListener('pointermove', onMove);
      target.addEventListener('pointerup', onUp);
      target.addEventListener('pointercancel', onUp);
      return;
    }

    // Case 2: Clicked on an empty, non-blocked cell while a tray shape is selected -> place it!
    const isBlocked = level.blockedCells.some(([br, bc]) => br === r && bc === c);
    if (!isBlocked && selectedShapeId) {
      const runtime = shapesState[selectedShapeId];
      if (runtime && !runtime.locked && runtime.anchor === null) {
        if (!placeShape(selectedShapeId, [r, c])) {
          const def = level.shapes.find(s => s.id === selectedShapeId);
          if (def) {
            const cells = getTransformedCells(def.trayCells, runtime.transform);
            for (const [dr, dc] of cells) {
              if (placeShape(selectedShapeId, [r - dr, c - dc])) break;
            }
          }
        }
      }
    }
  };

  // Pointer down on a shape in the bottom tray
  const handleTrayShapePointerDown = (e, shapeId) => {
    if (gameStatus !== 'playing') return;
    const runtime = shapesState[shapeId];
    if (!runtime || runtime.locked) return;

    // If the shape is already placed on the board, clicking its tray slot recalls it to tray
    if (runtime.anchor !== null) {
      returnShapeToTray(shapeId);
      return;
    }

    // Select this unplaced tray shape so Rotate/Flip or tap-to-place can be used
    setSelectedShapeId(shapeId);
    const startX = e.clientX;
    const startY = e.clientY;
    const isTouch = e.pointerType === 'touch';
    const grabOffset = [0, 0];
    let hasMoved = false;
    const target = e.currentTarget;
    try {
      target.setPointerCapture(e.pointerId);
    } catch (err) {}
    const onMove = me => {
      const dist = Math.hypot(me.clientX - startX, me.clientY - startY);
      if (dist > 6) hasMoved = true;
      if (!hasMoved) return;
      const effY = isTouch ? me.clientY - 55 : me.clientY;
      const {
        hoverAnchor,
        isValid
      } = computeBoardHover(shapeId, me.clientX, effY, grabOffset);
      setDragState({
        shapeId,
        source: 'tray',
        grabOffset,
        clientX: me.clientX,
        clientY: effY,
        hoverAnchor,
        isValid
      });
    };
    const onUp = ue => {
      target.removeEventListener('pointermove', onMove);
      target.removeEventListener('pointerup', onUp);
      target.removeEventListener('pointercancel', onUp);
      if (!hasMoved) {
        setDragState(null);
        return;
      }
      const effY = isTouch ? ue.clientY - 55 : ue.clientY;
      const {
        insideBoard,
        hoverAnchor,
        isValid
      } = computeBoardHover(shapeId, ue.clientX, effY, grabOffset);
      setDragState(null);
      if (insideBoard && hoverAnchor && isValid) {
        placeShape(shapeId, hoverAnchor);
      }
    };
    target.addEventListener('pointermove', onMove);
    target.addEventListener('pointerup', onUp);
    target.addEventListener('pointercancel', onUp);
  };

  // Share result
  const handleShare = () => {
    const header = `Shape-shifter ${level.title} — ${gameStatus === 'won' ? attempts.length : 'X'}/3\n`;
    const rows = attempts.map(att => {
      let rowStr = '';
      for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
          const cell = att.grid[r][c];
          if (cell.status === 'blocked') rowStr += '⬛';else if (cell.status === 'tick') rowStr += '🟩';else if (cell.status === 'cross') rowStr += '🟥';else rowStr += '⬜';
        }
        rowStr += '\n';
      }
      return rowStr;
    }).join('\n');
    const shareText = `${header}\n${rows}Play Shape-shifter!`;
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  // Only unplaced shapes in tray can be selected for Rotate / Flip
  const currentSelected = selectedShapeId && shapesState[selectedShapeId]?.anchor === null && !shapesState[selectedShapeId]?.locked ? shapesState[selectedShapeId] : null;
  const isSelectedRotated = currentSelected?.transform === 'rotated';
  const isSelectedFlipped = currentSelected?.transform === 'flipped';

  // Floating dragged shape definition for visual cursor preview
  const draggedDef = dragState ? level.shapes.find(s => s.id === dragState.shapeId) : null;
  const draggedRuntime = dragState ? shapesState[dragState.shapeId] : null;
  const draggedCells = draggedDef && draggedRuntime ? getTransformedCells(draggedDef.trayCells, draggedRuntime.transform) : [];
  const [dragRows, dragCols] = getBoundingBox(draggedCells);
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-between h-[100dvh] w-full max-w-[600px] mx-auto bg-arcade-bg text-white overflow-hidden relative scanlines select-none"
  }, /*#__PURE__*/React.createElement("header", {
    className: "flex items-center justify-between px-4 py-2.5 border-b border-arcade-border/50 bg-arcade-surface/90 backdrop-blur-md z-10 shrink-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "font-arcade text-base sm:text-lg font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-arcade-cyan via-white to-arcade-magenta drop-shadow-[0_0_12px_rgba(0,245,212,0.6)]"
  }, "SHAPE-SHIFTER"), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs font-mono-tech text-gray-400 tracking-wider"
  }, level.title)), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowLevelSelect(true),
    className: "flex items-center gap-1.5 py-1.5 px-3 rounded-xl bg-arcade-card/80 border border-arcade-border/60 hover:border-arcade-cyan text-xs font-arcade text-gray-200 hover:text-white transition-all active:scale-95",
    title: "Select Level"
  }, /*#__PURE__*/React.createElement(GridIcon, {
    className: "w-4 h-4 text-arcade-cyan"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-bold"
  }, "LEVEL #", level.id)), /*#__PURE__*/React.createElement("button", {
    onClick: () => resetToLevel(levelIndex),
    className: "p-2 rounded-xl bg-arcade-card/80 border border-arcade-border/60 text-gray-400 hover:text-white transition-all active:scale-95",
    title: "Restart Level"
  }, /*#__PURE__*/React.createElement(RefreshIcon, {
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowRules(true),
    className: "p-2 rounded-xl bg-arcade-card/80 border border-arcade-border/60 text-gray-400 hover:text-white transition-all active:scale-95",
    title: "Rules & Instructions"
  }, /*#__PURE__*/React.createElement(HelpIcon, {
    className: "w-4 h-4"
  })))), bannerMessage && /*#__PURE__*/React.createElement("div", {
    className: "bg-arcade-magenta/20 border-b border-arcade-magenta/40 px-4 py-1.5 flex items-center justify-between z-10 shrink-0"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono-tech text-arcade-magenta tracking-wide"
  }, bannerMessage), /*#__PURE__*/React.createElement("button", {
    onClick: () => setBannerMessage(null),
    className: "text-arcade-magenta text-xs font-bold px-1"
  }, "✕")), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-center gap-4 sm:gap-6 w-full px-3 py-1 shrink-0 z-10"
  }, [0, 1].map(attemptIdx => {
    const attempt = attempts[attemptIdx];
    const isRecorded = !!attempt;
    return /*#__PURE__*/React.createElement("div", {
      key: attemptIdx,
      className: `flex flex-col items-center bg-arcade-surface/90 rounded-2xl p-2 sm:p-2.5 border transition-all duration-300 ${isRecorded ? 'border-arcade-border shadow-lg' : 'border-arcade-border/40 opacity-75'}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between w-full mb-1.5 px-1 gap-2"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[10px] sm:text-xs font-arcade font-bold tracking-wider text-gray-300"
    }, "ATTEMPT ", attemptIdx + 1), /*#__PURE__*/React.createElement("span", {
      className: `text-[9px] sm:text-[10px] font-mono-tech px-1.5 py-0.5 rounded ${isRecorded ? 'bg-purple-900/60 text-purple-300 border border-purple-500/40' : 'text-gray-500'}`
    }, isRecorded ? 'RECORDED' : 'PENDING')), /*#__PURE__*/React.createElement("div", {
      className: "square-grid-5x5 gap-[3px] bg-arcade-bg/95 p-1.5 rounded-xl border border-arcade-border/60",
      style: {
        width: 'clamp(112px, min(36vw, 17.5dvh), 175px)',
        height: 'clamp(112px, min(36vw, 17.5dvh), 175px)'
      }
    }, Array.from({
      length: 5
    }).map((_, r) => Array.from({
      length: 5
    }).map((_, c) => {
      const cell = isRecorded ? attempt.grid[r][c] : null;
      if (!cell || cell.status === 'empty') {
        return /*#__PURE__*/React.createElement("div", {
          key: `${r}-${c}`,
          className: "square-cell rounded-[4px] bg-arcade-card/40 border border-arcade-border/30"
        });
      }
      if (cell.status === 'blocked') {
        return /*#__PURE__*/React.createElement("div", {
          key: `${r}-${c}`,
          className: "square-cell rounded-[4px] bg-[#0d0d1a] border border-gray-800 flex items-center justify-center"
        }, /*#__PURE__*/React.createElement("div", {
          className: "w-1.5 h-1.5 rounded-full bg-gray-700/60"
        }));
      }
      const isTick = cell.status === 'tick';
      return /*#__PURE__*/React.createElement("div", {
        key: `${r}-${c}`,
        className: "square-cell rounded-[4px] flex items-center justify-center relative overflow-hidden",
        style: {
          backgroundColor: cell.color || '#333',
          boxShadow: `0 0 6px ${cell.color}66`
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "absolute inset-0 bg-black/25 flex items-center justify-center"
      }, isTick ? /*#__PURE__*/React.createElement("span", {
        className: "text-white font-bold text-xs sm:text-sm leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
      }, "✓") : /*#__PURE__*/React.createElement("span", {
        className: "text-black font-extrabold text-xs sm:text-sm leading-none drop-shadow-[0_1px_2px_rgba(255,255,255,0.4)]"
      }, "✗")));
    }))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col items-center justify-center px-3 min-h-0 shrink-0 z-10"
  }, /*#__PURE__*/React.createElement("div", {
    ref: boardRef,
    className: "square-grid-5x5 relative gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 bg-arcade-surface rounded-2xl border-2 border-arcade-border/80 shadow-[0_0_35px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(0,0,0,0.5)] touch-none select-none",
    style: {
      width: 'clamp(250px, min(88vw, 44dvh), 440px)',
      height: 'clamp(250px, min(88vw, 44dvh), 440px)'
    }
  }, Array.from({
    length: 5
  }).map((_, r) => Array.from({
    length: 5
  }).map((_, c) => {
    const key = `${r},${c}`;
    const isBlocked = level.blockedCells.some(([br, bc]) => br === r && bc === c);
    const occ = cellOccupants[key];
    const isBeingDraggedFromBoard = dragState && dragState.source === 'board' && occ && occ.shapeId === dragState.shapeId;
    const isGhost = ghostCells.some(([gr, gc]) => gr === r && gc === c);
    const isGhostValid = dragState?.isValid;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      onPointerDown: e => handleBoardCellPointerDown(e, r, c),
      className: `square-cell relative rounded-xl flex items-center justify-center transition-all duration-100 overflow-hidden ${isBlocked ? 'bg-[#08080f] border border-gray-800/80 cursor-not-allowed shadow-inner' : occ ? occ.locked ? 'cursor-not-allowed' : isBeingDraggedFromBoard ? 'opacity-35 cursor-grabbing scale-95' : 'cursor-grab hover:brightness-110 active:scale-95' : 'bg-arcade-card/60 border border-arcade-border/40 hover:border-arcade-border hover:bg-arcade-card/90 cursor-pointer'}`,
      style: {
        backgroundColor: occ ? occ.color : undefined,
        boxShadow: occ ? `0 0 14px ${occ.glow}, inset 0 2px 4px rgba(255,255,255,0.35)` : undefined
      }
    }, isBlocked && /*#__PURE__*/React.createElement("div", {
      className: "w-3 h-3 rotate-45 border border-gray-600 bg-gray-900 opacity-40 pointer-events-none"
    }), occ && occ.locked && /*#__PURE__*/React.createElement("div", {
      className: "absolute top-1 right-1 bg-black/60 rounded-full p-0.5 border border-white/40 shadow-sm pointer-events-none"
    }, /*#__PURE__*/React.createElement(LockIcon, {
      className: "w-3 h-3 text-yellow-300 stroke-[2.5]"
    })), isGhost && /*#__PURE__*/React.createElement("div", {
      className: `absolute inset-0 rounded-xl transition-all duration-75 flex items-center justify-center pointer-events-none ${isGhostValid ? 'bg-arcade-cyan/45 border-2 border-arcade-cyan shadow-neon-cyan' : 'bg-red-500/45 border-2 border-red-500'}`
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "h-5 flex items-center justify-center mt-1.5"
  }, currentSelected ? /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono-tech tracking-wider text-arcade-cyan animate-pulse"
  }, "Shape #", selectedShapeId, " selected in bank — Rotate/Flip, or drag/tap board to place") : /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-mono-tech text-gray-400"
  }, "Attempt ", Math.min(attempts.length + 1, 3), " of 3 • Drag or tap placed shapes to move/recall"))), /*#__PURE__*/React.createElement("div", {
    className: "w-full max-w-[540px] mx-auto px-3 pb-3 shrink-0 z-10 flex flex-col gap-2.5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-6 gap-2 bg-arcade-surface/90 p-2.5 rounded-2xl border border-arcade-border/80 shadow-lg"
  }, level.shapes.map(def => {
    const runtime = shapesState[def.id];
    const isPlaced = runtime.anchor !== null;
    const isSelected = selectedShapeId === def.id && !isPlaced && !runtime.locked;
    const isLocked = runtime.locked;
    const transformedCells = getTransformedCells(def.trayCells, runtime.transform);
    const [rows, cols] = getBoundingBox(transformedCells);
    return /*#__PURE__*/React.createElement("div", {
      key: def.id,
      onPointerDown: e => handleTrayShapePointerDown(e, def.id),
      className: `square-cell relative flex flex-col items-center justify-center p-1.5 rounded-xl transition-all duration-150 select-none touch-none ${isLocked ? 'bg-arcade-card/30 border border-yellow-500/40 opacity-60 cursor-not-allowed' : isPlaced ? 'bg-arcade-card/40 border border-arcade-border/50 opacity-60 cursor-pointer hover:opacity-80' : isSelected ? 'bg-arcade-card border-2 border-white shadow-[0_0_14px_rgba(255,255,255,0.45)] scale-105 cursor-grab' : 'bg-arcade-card/80 border border-arcade-border/70 hover:border-arcade-border hover:brightness-110 cursor-grab'}`,
      title: isPlaced && !isLocked ? 'Click to return shape to tray' : `Shape #${def.id}`
    }, isLocked ? /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center gap-0.5 pointer-events-none"
    }, /*#__PURE__*/React.createElement(LockIcon, {
      className: "w-4 h-4 text-yellow-400 stroke-[2.5]"
    }), /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] font-mono-tech text-yellow-400 font-bold"
    }, "LOCKED")) : isPlaced ? /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center opacity-80 pointer-events-none"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] sm:text-[10px] font-mono-tech text-gray-300 font-bold"
    }, "ON BOARD"), /*#__PURE__*/React.createElement("span", {
      className: "text-[8px] font-mono-tech text-gray-400"
    }, "TAP TO RECALL")) : /*#__PURE__*/React.createElement("div", {
      className: "grid gap-[2px] pointer-events-none",
      style: {
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`
      }
    }, Array.from({
      length: rows
    }).map((_, r) => Array.from({
      length: cols
    }).map((_, c) => {
      const isFilled = transformedCells.some(([cr, cc]) => cr === r && cc === c);
      return /*#__PURE__*/React.createElement("div", {
        key: `${r}-${c}`,
        className: `rounded-[2px] ${isFilled ? '' : 'opacity-0'}`,
        style: {
          width: 'clamp(9px, 1.45dvh, 14px)',
          height: 'clamp(9px, 1.45dvh, 14px)',
          backgroundColor: isFilled ? def.color : 'transparent',
          boxShadow: isFilled ? `0 0 4px ${def.glowColor}` : 'none'
        }
      });
    }))), runtime.transform === 'rotated' && !isLocked && /*#__PURE__*/React.createElement("div", {
      className: "absolute -top-1 -right-1 bg-arcade-cyan text-black rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold shadow-neon-cyan pointer-events-none"
    }, "↻"), runtime.transform === 'flipped' && !isLocked && /*#__PURE__*/React.createElement("div", {
      className: "absolute -top-1 -right-1 bg-arcade-magenta text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px] font-bold shadow-neon-magenta pointer-events-none"
    }, "⇄"));
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between gap-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggleRotate,
    disabled: isRotateLocked || isRotateOnBoard || !currentSelected,
    className: `flex-1 flex items-center justify-center gap-1.5 py-2.5 sm:py-3 px-2 rounded-xl text-xs font-arcade tracking-wider transition-all duration-150 border select-none active:scale-95 ${isRotateLocked || isRotateOnBoard ? 'bg-gray-900/50 text-gray-500 border-gray-800 cursor-not-allowed opacity-60' : isSelectedRotated ? 'bg-arcade-cyan/20 text-arcade-cyan border-arcade-cyan shadow-neon-cyan font-bold' : currentSelected ? 'bg-arcade-surface text-gray-200 border-arcade-border hover:border-arcade-cyan hover:text-arcade-cyan' : 'bg-arcade-surface/40 text-gray-600 border-arcade-border/40 cursor-not-allowed'}`
  }, isRotateLocked ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LockIcon, {
    className: "w-3.5 h-3.5 text-yellow-400"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs"
  }, "ROTATED ✓")) : isRotateOnBoard ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RotateCwIcon, {
    className: "w-3.5 h-3.5 text-arcade-cyan/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs"
  }, "ROTATE USED")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(RotateCwIcon, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs"
  }, "ROTATE 90°"))), /*#__PURE__*/React.createElement("button", {
    onClick: toggleFlip,
    disabled: isFlipLocked || isFlipOnBoard || !currentSelected,
    className: `flex-1 flex items-center justify-center gap-1.5 py-2.5 sm:py-3 px-2 rounded-xl text-xs font-arcade tracking-wider transition-all duration-150 border select-none active:scale-95 ${isFlipLocked || isFlipOnBoard ? 'bg-gray-900/50 text-gray-500 border-gray-800 cursor-not-allowed opacity-60' : isSelectedFlipped ? 'bg-arcade-magenta/20 text-arcade-magenta border-arcade-magenta shadow-neon-magenta font-bold' : currentSelected ? 'bg-arcade-surface text-gray-200 border-arcade-border hover:border-arcade-magenta hover:text-arcade-magenta' : 'bg-arcade-surface/40 text-gray-600 border-arcade-border/40 cursor-not-allowed'}`
  }, isFlipLocked ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LockIcon, {
    className: "w-3.5 h-3.5 text-yellow-400"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs"
  }, "FLIPPED ✓")) : isFlipOnBoard ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FlipIcon, {
    className: "w-3.5 h-3.5 text-arcade-magenta/60"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs"
  }, "FLIP USED")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FlipIcon, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[10px] sm:text-xs"
  }, "FLIP Y"))), /*#__PURE__*/React.createElement("button", {
    onClick: clearUnlockedShapes,
    className: "p-2.5 sm:p-3 rounded-xl bg-arcade-surface text-gray-400 border border-arcade-border hover:text-white hover:border-gray-500 transition-all active:scale-95",
    title: "Recall All Unlocked Shapes to Bank"
  }, /*#__PURE__*/React.createElement(RefreshIcon, {
    className: "w-4 h-4"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmitClick,
    className: `flex-1 flex items-center justify-center gap-1.5 py-2.5 sm:py-3 px-3 rounded-xl text-xs font-arcade tracking-wider font-extrabold transition-all duration-200 border select-none active:scale-95 ${canSubmit ? 'bg-gradient-to-r from-arcade-cyan to-arcade-green text-black border-transparent shadow-[0_0_15px_rgba(0,245,212,0.8)] cursor-pointer' : 'bg-arcade-card/60 text-gray-500 border-arcade-border/50 cursor-not-allowed'}`
  }, /*#__PURE__*/React.createElement(SendIcon, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", {
    className: "text-[11px] sm:text-xs"
  }, "SUBMIT")))), dragState && draggedDef && /*#__PURE__*/React.createElement("div", {
    className: "fixed pointer-events-none z-50 opacity-85",
    style: {
      left: dragState.clientX,
      top: dragState.clientY,
      transform: 'translate(-20%, -20%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid gap-1",
    style: {
      gridTemplateRows: `repeat(${dragRows}, 28px)`,
      gridTemplateColumns: `repeat(${dragCols}, 28px)`
    }
  }, Array.from({
    length: dragRows
  }).map((_, r) => Array.from({
    length: dragCols
  }).map((_, c) => {
    const isFilled = draggedCells.some(([cr, cc]) => cr === r && cc === c);
    return /*#__PURE__*/React.createElement("div", {
      key: `${r}-${c}`,
      className: `w-7 h-7 rounded-md ${isFilled ? 'border border-white/60' : 'opacity-0'}`,
      style: {
        backgroundColor: isFilled ? draggedDef.color : 'transparent',
        boxShadow: isFilled ? `0 0 12px ${draggedDef.glowColor}` : 'none'
      }
    });
  })))), showPartialConfirm && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-sm bg-arcade-surface rounded-2xl border-2 border-arcade-yellow/80 p-5 shadow-[0_0_40px_rgba(254,228,64,0.25)] flex flex-col items-center text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-12 h-12 rounded-2xl bg-arcade-yellow/20 border-2 border-arcade-yellow text-arcade-yellow flex items-center justify-center mb-3 shadow-neon-yellow"
  }, /*#__PURE__*/React.createElement(AlertIcon, {
    className: "w-7 h-7"
  })), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-arcade font-extrabold tracking-wider text-white"
  }, "BOARD NOT FULL"), /*#__PURE__*/React.createElement("p", {
    className: "text-xs sm:text-sm font-mono-tech text-gray-300 mt-2 leading-relaxed"
  }, "You have only placed ", /*#__PURE__*/React.createElement("strong", {
    className: "text-arcade-yellow"
  }, stats.placedCount, " of 6"), " shapes on the board."), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-mono-tech text-gray-400 mt-1"
  }, "Are you sure you want to use ", /*#__PURE__*/React.createElement("strong", {
    className: "text-white"
  }, "Attempt ", attempts.length + 1, " of 3"), " to get clues on these shapes?"), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2.5 w-full mt-5"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowPartialConfirm(false),
    className: "flex-1 py-2.5 px-3 rounded-xl bg-arcade-card hover:bg-arcade-card/80 border border-arcade-border text-xs font-arcade text-gray-300 hover:text-white active:scale-95 transition-all"
  }, "CANCEL"), /*#__PURE__*/React.createElement("button", {
    onClick: executeSubmit,
    className: "flex-1 py-2.5 px-3 rounded-xl bg-arcade-yellow hover:bg-arcade-yellow/90 text-black text-xs font-arcade font-bold shadow-neon-yellow active:scale-95 transition-all"
  }, "SUBMIT ANYWAY")))), showResultModal && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-sm bg-arcade-surface rounded-2xl border-2 border-arcade-border p-5 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col items-center text-center"
  }, /*#__PURE__*/React.createElement("div", {
    className: `w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg ${gameStatus === 'won' ? 'bg-arcade-cyan/20 border-2 border-arcade-cyan shadow-neon-cyan text-arcade-cyan' : 'bg-red-500/20 border-2 border-red-500 text-red-400'}`
  }, gameStatus === 'won' ? /*#__PURE__*/React.createElement(TrophyIcon, {
    className: "w-8 h-8"
  }) : /*#__PURE__*/React.createElement(AlertIcon, {
    className: "w-8 h-8"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "text-xl font-arcade font-extrabold tracking-wider text-white"
  }, gameStatus === 'won' ? 'LEVEL SOLVED!' : 'ATTEMPTS EXHAUSTED'), /*#__PURE__*/React.createElement("p", {
    className: "text-xs font-mono-tech text-gray-400 mt-1"
  }, gameStatus === 'won' ? `Solved in ${attempts.length} of 3 attempt${attempts.length > 1 ? 's' : ''}` : 'You used all 3 attempts without completing the exact grid.'), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2.5 my-4 p-2.5 bg-arcade-bg/80 rounded-xl border border-arcade-border/50"
  }, attempts.map((att, idx) => /*#__PURE__*/React.createElement("div", {
    key: idx,
    className: "flex flex-col items-center"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-[8px] font-mono-tech text-gray-400 mb-1"
  }, "ATTEMPT ", idx + 1), /*#__PURE__*/React.createElement("div", {
    className: "square-grid-5x5 gap-[2px] bg-black p-1 rounded border border-arcade-border/40 w-16 h-16"
  }, Array.from({
    length: 5
  }).map((_, r) => Array.from({
    length: 5
  }).map((_, c) => {
    const cell = att.grid[r][c];
    let bg = '#1a1a2e';
    if (cell.status === 'blocked') bg = '#000000';else if (cell.status === 'tick') bg = '#38B000';else if (cell.status === 'cross') bg = '#E63946';
    return /*#__PURE__*/React.createElement("div", {
      key: `${r}-${c}`,
      className: "square-cell rounded-[1px]",
      style: {
        backgroundColor: bg
      }
    });
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col gap-2 w-full mt-1"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handleShare,
    className: "flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-arcade-magenta hover:bg-arcade-magenta/90 text-white font-arcade text-xs tracking-wider font-bold shadow-neon-magenta active:scale-95 transition-all"
  }, /*#__PURE__*/React.createElement(ShareIcon, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, copied ? 'COPIED TO CLIPBOARD!' : 'SHARE RESULT')), /*#__PURE__*/React.createElement("div", {
    className: "flex gap-2 w-full"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => resetToLevel(levelIndex),
    className: "flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-arcade-card hover:bg-arcade-card/80 border border-arcade-border text-xs font-arcade text-gray-300 hover:text-white active:scale-95 transition-all"
  }, /*#__PURE__*/React.createElement(RefreshIcon, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "RETRY")), gameStatus === 'won' ? /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const nextIdx = (levelIndex + 1) % LEVELS.length;
      resetToLevel(nextIdx);
    },
    className: "flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-arcade-cyan hover:bg-arcade-cyan/90 text-black text-xs font-arcade font-bold shadow-neon-cyan active:scale-95 transition-all"
  }, /*#__PURE__*/React.createElement("span", null, "NEXT"), /*#__PURE__*/React.createElement("span", null, "→")) : /*#__PURE__*/React.createElement("button", {
    onClick: revealSolution,
    className: "flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-purple-900/40 hover:bg-purple-900/60 border border-purple-500/50 text-xs font-arcade text-purple-300 hover:text-white active:scale-95 transition-all"
  }, /*#__PURE__*/React.createElement(EyeIcon, {
    className: "w-3.5 h-3.5"
  }), /*#__PURE__*/React.createElement("span", null, "SOLUTION")))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowResultModal(false),
    className: "mt-3 text-xs font-mono-tech text-gray-400 hover:text-white"
  }, "Close & View Board"))), showLevelSelect && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-sm max-h-[85vh] bg-arcade-surface rounded-2xl border-2 border-arcade-border p-4 shadow-2xl flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-arcade-border/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(GridIcon, {
    className: "w-4 h-4 text-arcade-cyan"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-arcade text-sm font-bold tracking-wider text-white"
  }, "SELECT LEVEL")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowLevelSelect(false),
    className: "text-gray-400 hover:text-white text-base px-2"
  }, "✕")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-y-auto flex-1 py-3 grid grid-cols-4 gap-2 pr-1"
  }, LEVELS.map((lvl, idx) => /*#__PURE__*/React.createElement("button", {
    key: lvl.id,
    onClick: () => {
      resetToLevel(idx);
      setShowLevelSelect(false);
    },
    className: `flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all active:scale-95 ${idx === levelIndex ? 'bg-arcade-cyan/20 border-arcade-cyan text-arcade-cyan shadow-neon-cyan font-bold' : 'bg-arcade-card/70 border-arcade-border/60 text-gray-300 hover:border-gray-500 hover:text-white'}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-xs font-arcade font-bold"
  }, "#", lvl.id)))))), showRules && /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-full max-w-sm max-h-[85vh] bg-arcade-surface rounded-2xl border-2 border-arcade-border p-4 shadow-2xl flex flex-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center justify-between pb-3 border-b border-arcade-border/50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex items-center gap-2"
  }, /*#__PURE__*/React.createElement(HelpIcon, {
    className: "w-4 h-4 text-arcade-cyan"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "font-arcade text-sm font-bold tracking-wider text-white"
  }, "HOW TO PLAY")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowRules(false),
    className: "text-gray-400 hover:text-white text-base px-2"
  }, "✕")), /*#__PURE__*/React.createElement("div", {
    className: "overflow-y-auto flex-1 py-3 space-y-3 text-xs font-mono-tech text-gray-300 pr-1"
  }, /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 rounded-xl bg-arcade-card/60 border border-arcade-border/40"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-arcade-cyan font-arcade font-bold mb-1"
  }, "1. THE OBJECTIVE"), /*#__PURE__*/React.createElement("p", null, "Place all 6 polyomino shapes onto the 5x5 board in as few attempts as possible (maximum 3 attempts). You can also submit a partially filled board to gather clues!")), /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 rounded-xl bg-arcade-card/60 border border-arcade-border/40"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-arcade-magenta font-arcade font-bold mb-1"
  }, "2. ROTATE & FLIP"), /*#__PURE__*/React.createElement("p", null, "You may ", /*#__PURE__*/React.createElement("strong", {
    className: "text-arcade-cyan"
  }, "Rotate 90° clockwise"), " up to one shape and ", /*#__PURE__*/React.createElement("strong", {
    className: "text-arcade-magenta"
  }, "Flip horizontally"), " up to one shape while they are in the bottom bank. Identical shapes can be placed in each other's locations!")), /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 rounded-xl bg-arcade-card/60 border border-arcade-border/40"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-arcade-yellow font-arcade font-bold mb-1"
  }, "3. FEEDBACK & LOCKING"), /*#__PURE__*/React.createElement("p", null, "When you submit, feedback appears on the mini attempt grids:"), /*#__PURE__*/React.createElement("ul", {
    className: "list-disc list-inside mt-1 space-y-0.5 text-gray-400"
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-white"
  }, "✓ (Tick)"), " = cell is on the correct shape position."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", {
    className: "text-white"
  }, "✗ (Cross)"), " = cell is incorrect.")), /*#__PURE__*/React.createElement("p", {
    className: "mt-1"
  }, "Shapes that are ", /*#__PURE__*/React.createElement("strong", {
    className: "text-yellow-400"
  }, "100% correct"), " lock in place on the board. Incorrect shapes return to your tray.")), /*#__PURE__*/React.createElement("div", {
    className: "p-2.5 rounded-xl bg-arcade-card/60 border border-arcade-border/40"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "text-arcade-green font-arcade font-bold mb-1"
  }, "4. CONTROLS"), /*#__PURE__*/React.createElement("p", null, "• ", /*#__PURE__*/React.createElement("strong", null, "Drag & Drop"), " shapes from the bank or reposition them directly on the board."), /*#__PURE__*/React.createElement("p", null, "• ", /*#__PURE__*/React.createElement("strong", null, "Tap shape"), " in bank, then ", /*#__PURE__*/React.createElement("strong", null, "tap cell"), " to place."), /*#__PURE__*/React.createElement("p", null, "• ", /*#__PURE__*/React.createElement("strong", null, "Tap or drag off board"), " to return a placed shape to the bank."))), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowRules(false),
    className: "w-full py-2.5 mt-2 rounded-xl bg-arcade-cyan text-black font-arcade font-bold text-xs tracking-wider shadow-neon-cyan active:scale-95 transition-all"
  }, "GOT IT, LET'S PLAY!"))));
}

export default App;
export { App as ShapeShifterGame, LEVELS, evaluateBoardSubmission };

