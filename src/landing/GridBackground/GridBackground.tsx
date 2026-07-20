import { useEffect, useRef, useState } from "react";
import styles from "./GridBackground.module.css";
import Diamond from "./diamond";
import ThickLine from "./thick-line";
import ThickLineVertical from "./thick-line-vertical";

interface Traveler {
  id: number;
  axis: "x" | "y";
  trackIndex: number;
  progress: number;
  speed: number;
  length: number;
  opacity: number;
  delay: number;
}

interface FloatingCard {
  id: string;
  type: "diamond" | "thick-line" | "thick-line-vertical";
  x: number;
  y: number;
  floatSpeed: number;
  floatPhase: number;
  col?: number;
  row?: number;
  layoutAnchor?: "left-diamond" | "right-diamond";
}

const GRID_SIZE = 80;
const TRAVELER_COUNT = 18;

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function createTraveler(
  id: number,
  cols: number,
  rows: number,
  occupiedTracks: Set<string>,
): Traveler {
  let axis: "x" | "y" = "x";
  let trackIndex = 0;
  let attempts = 0;

  do {
    axis = Math.random() > 0.5 ? "x" : "y";
    trackIndex = Math.floor(Math.random() * (axis === "x" ? rows : cols));
    attempts++;
  } while (occupiedTracks.has(`${axis}-${trackIndex}`) && attempts < 50);

  // Mark the new track as occupied
  occupiedTracks.add(`${axis}-${trackIndex}`);

  return {
    id,
    axis,
    trackIndex,
    progress: Math.random(),
    speed: randomBetween(0.00015, 0.0004),
    length: randomBetween(0.02, 0.05),
    opacity: randomBetween(0.4, 0.85),
    delay: randomBetween(0, 5000),
  };
}

export default function GridBackground({
  children,
}: {
  children?: React.ReactNode;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const travelersRef = useRef<Traveler[]>([]);
  const [cards, setCards] = useState<FloatingCard[]>([]);
  const cardsDataRef = useRef<FloatingCard[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let offsetX = 0;

    const initializeCards = () => {
      // Prevent regenerating cards if they already exist (so they don't jump around on resize)
      if (cardsDataRef.current.length > 0) return;

      const newCards: FloatingCard[] = [];
      const maskCx = width / 2;
      const maskCy = height * 0.48;
      const solidW = Math.min(width * 0.9, 900);
      const solidH = Math.min(height * 0.75, 600);

      // Helper to check if a point is inside the central text mask
      const isInsideMask = (x: number, y: number) => {
        const padding = 20; // Extra buffer
        return (
          x > maskCx - solidW / 2 - padding &&
          x < maskCx + solidW / 2 + padding &&
          y > maskCy - solidH / 2 - padding &&
          y < maskCy + solidH / 2 + padding
        );
      };

      // 1. Exactly 2 Diamonds placed perfectly symmetrically on a specific horizontal line
      // Calculate a target X coordinate that is roughly 480px left of the center (outside the 900px mask)
      const targetLeftX = width / 2 - 480;
      // Snap this target to the nearest actual grid column
      const leftCol = Math.round((targetLeftX - offsetX) / GRID_SIZE);
      // Mathematically mirror this column to the right side of the screen
      const rightCol = Math.floor(width / GRID_SIZE) - leftCol;

      const centerRow = Math.round((height * 0.48) / GRID_SIZE);
      const diamondRow = Math.max(0, centerRow - 1.95); // 2 cells above center

      newCards.push({
        id: `diamond-left`,
        type: "diamond",
        x: leftCol * GRID_SIZE + offsetX,
        y: diamondRow * GRID_SIZE, // removed offsetY
        floatSpeed: 0,
        floatPhase: 0,
        layoutAnchor: "left-diamond",
      });

      newCards.push({
        id: `diamond-right`,
        type: "diamond",
        x: rightCol * GRID_SIZE + offsetX,
        y: diamondRow * GRID_SIZE, // removed offsetY
        floatSpeed: 0,
        floatPhase: 0,
        layoutAnchor: "right-diamond",
      });

      // 2. Random number of thick lines placed horizontally or vertically *between* grid lines
      const numLines = Math.floor((cols * rows) / 40); // Same sparse density as before
      let linesPlaced = 0;
      let attempts = 0;
      while (linesPlaced < numLines && attempts < 2000) {
        attempts++;
        
        const isVertical = Math.random() > 0.5;
        let x, y;
        
        if (isVertical) {
          // Vertical lines sit on vertical grid lines, offset by half a row
          const col = Math.floor(randomBetween(-1, cols));
          const row = Math.floor(randomBetween(-1, rows));
          x = col * GRID_SIZE + offsetX;
          y = row * GRID_SIZE + GRID_SIZE / 2;
          
          if (!isInsideMask(x, y)) {
            newCards.push({
              id: `line-${linesPlaced}`,
              type: "thick-line-vertical",
              x,
              y,
              col,
              row,
              floatSpeed: randomBetween(0.001, 0.0025),
              floatPhase: randomBetween(0, Math.PI * 2),
            });
            linesPlaced++;
          }
        } else {
          // Horizontal lines sit on horizontal grid lines, offset by half a column
          const col = Math.floor(randomBetween(-1, cols));
          const row = Math.floor(randomBetween(1, rows - 1));
          x = col * GRID_SIZE + GRID_SIZE / 2 + offsetX;
          y = row * GRID_SIZE;
          
          if (!isInsideMask(x, y)) {
            newCards.push({
              id: `line-${linesPlaced}`,
              type: "thick-line",
              x,
              y,
              col,
              row,
              floatSpeed: randomBetween(0.001, 0.0025),
              floatPhase: randomBetween(0, Math.PI * 2),
            });
            linesPlaced++;
          }
        }
      }

      cardsDataRef.current = newCards;
      setCards(newCards);
    };

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      // Calculate horizontal offset to perfectly center the vertical lines
      offsetX = (width % GRID_SIZE) / 2;

      cols = Math.ceil(width / GRID_SIZE) + 1;
      rows = Math.ceil(height / GRID_SIZE) + 1;

      const occupied = new Set<string>();
      travelersRef.current = Array.from({ length: TRAVELER_COUNT }, (_, i) =>
        createTraveler(i, cols, rows, occupied),
      );

      // Initialize React-based cards only once
      initializeCards();

      // Update positions of existing cards using refs for high-performance resize
      if (cardsDataRef.current.length > 0) {
        cardsDataRef.current.forEach((card, index) => {
          let newX = card.x;
          let newY = card.y;

          if (card.layoutAnchor === "left-diamond" || card.layoutAnchor === "right-diamond") {
            const targetLeftX = width / 2 - 480;
            const leftCol = Math.round((targetLeftX - offsetX) / GRID_SIZE);
            const centerRow = Math.round((height * 0.48) / GRID_SIZE);
            const diamondRow = Math.max(0, centerRow - 1.95);
            
            newY = diamondRow * GRID_SIZE;
            
            if (card.layoutAnchor === "left-diamond") {
               newX = leftCol * GRID_SIZE + offsetX;
            } else {
               const rightCol = Math.floor(width / GRID_SIZE) - leftCol;
               newX = rightCol * GRID_SIZE + offsetX;
            }
          } else if (card.type === "thick-line-vertical" && card.col !== undefined && card.row !== undefined) {
             newX = card.col * GRID_SIZE + offsetX;
             newY = card.row * GRID_SIZE + GRID_SIZE / 2;
          } else if (card.type === "thick-line" && card.col !== undefined && card.row !== undefined) {
             newX = card.col * GRID_SIZE + GRID_SIZE / 2 + offsetX;
             newY = card.row * GRID_SIZE;
          }

          // Update the ref data so it stays current
          card.x = newX;
          card.y = newY;

          // Directly mutate the DOM node to avoid React state reconciliation lag
          const el = cardRefs.current[index];
          if (el) {
            el.style.left = `${newX}px`;
            el.style.top = `${newY}px`;
          }
        });
      }
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.strokeStyle = "rgba(0,0,0,0.06)";
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = -1; x <= cols; x++) {
        const px = x * GRID_SIZE + offsetX;
        ctx.moveTo(px, 0);
        ctx.lineTo(px, height);
      }

      // Draw horizontal lines (no vertical offset)
      for (let y = 0; y <= rows; y++) {
        const py = y * GRID_SIZE;
        ctx.moveTo(0, py);
        ctx.lineTo(width, py);
      }

      ctx.stroke();
    };

    const drawTravelers = (elapsed: number) => {
      travelersRef.current.forEach((t) => {
        if (elapsed < t.delay) return;

        t.progress += t.speed;
        if (t.progress > 1 + t.length) {
          const occupied = new Set<string>();
          travelersRef.current.forEach((other) => {
            if (other.id !== t.id) {
              occupied.add(`${other.axis}-${other.trackIndex}`);
            }
          });
          const newT = createTraveler(t.id, cols, rows, occupied);
          newT.progress = 0;
          newT.delay = 0;
          Object.assign(t, newT);
          return;
        }

        const trackPx =
          t.trackIndex * GRID_SIZE + (t.axis === "x" ? 0 : offsetX);
        const totalLength = t.axis === "x" ? width : height;
        const headPos = t.progress * totalLength;
        const tailPos = (t.progress - t.length) * totalLength;

        const gradient =
          t.axis === "x"
            ? ctx.createLinearGradient(tailPos, trackPx, headPos, trackPx)
            : ctx.createLinearGradient(trackPx, tailPos, trackPx, headPos);

        gradient.addColorStop(0, `rgba(59, 130, 246, 0)`);
        gradient.addColorStop(0.4, `rgba(59, 130, 246, ${t.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, ${t.opacity})`);

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;

        if (t.axis === "x") {
          ctx.moveTo(Math.max(0, tailPos), trackPx);
          ctx.lineTo(Math.min(width, headPos), trackPx);
        } else {
          ctx.moveTo(trackPx, Math.max(0, tailPos));
          ctx.lineTo(trackPx, Math.min(height, headPos));
        }
        ctx.stroke();

        if (headPos >= 0 && headPos <= totalLength) {
          ctx.beginPath();
          const dotX = t.axis === "x" ? headPos : trackPx;
          const dotY = t.axis === "x" ? trackPx : headPos;
          ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99, 160, 255, ${t.opacity})`;
          ctx.fill();
        }
      });
    };

    const loop = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;

      drawGrid();
      drawTravelers(elapsed);

      // --- Apply Center Mask ---
      // Use destination-out to cleanly erase everything (grid, travelers) behind the hero text
      const maskCx = width / 2;
      const maskCy = height * 0.48; // Shift slightly down to cover the button better

      // Calculate rectangular dimensions
      const solidW = Math.min(width * 0.9, 900); // Tightly frame the text width
      const solidH = Math.min(height * 0.75, 600);
      const fadeWidth = 120; // The blur radius (distance from outer edge to inner edge)

      ctx.save();
      ctx.globalCompositeOperation = "destination-out";

      // Draw solid rectangle with shadow for the fade
      ctx.fillStyle = "black";
      ctx.shadowColor = "black";
      ctx.shadowBlur = fadeWidth;

      ctx.beginPath();
      ctx.roundRect(
        maskCx - solidW / 2,
        maskCy - solidH / 2,
        solidW,
        solidH,
        32,
      );
      ctx.fill();
      ctx.fill(); // double fill for a slightly stronger inner edge

      ctx.restore(); // Restores globalCompositeOperation and shadows

      rafRef.current = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <canvas ref={canvasRef} className={styles.canvas} />
      {cards.map((card, index) => (
        <div
          key={card.id}
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
          style={{
            position: "absolute",
            left: card.x,
            top: card.y,
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
            zIndex: 1, // Ensure it floats above the canvas but behind the content
          }}
        >
          {card.type === "diamond" ? (
            <Diamond />
          ) : card.type === "thick-line-vertical" ? (
            <ThickLineVertical />
          ) : (
            <ThickLine />
          )}
        </div>
      ))}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
