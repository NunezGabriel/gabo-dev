"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

const PREVIEW_WIDTH = 400; // floating panel outer width (px)
const PREVIEW_HEIGHT = 245; // approx height: 16:9 video + frame padding

// Wraps any card/row: hovering it shows a cursor-following floating panel
// with the app's video inside a theme-colored frame (canvas bg + hairline).
export default function HoverVideoPreview({
  video,
  children,
  className,
}: {
  video?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 160, damping: 20, mass: 0.5 });

  const positionFromEvent = (e: React.MouseEvent) => {
    const px = Math.min(e.clientX + 32, window.innerWidth - PREVIEW_WIDTH - 16);
    const py = Math.min(
      Math.max(16, e.clientY - PREVIEW_HEIGHT / 2),
      window.innerHeight - PREVIEW_HEIGHT - 16,
    );
    return { px, py };
  };

  const handleEnter = (e: React.MouseEvent) => {
    const { px, py } = positionFromEvent(e);
    x.set(px);
    y.set(py);
    springX.jump(px);
    springY.jump(py);
    setHovered(true);
  };

  const handleMove = (e: React.MouseEvent) => {
    const { px, py } = positionFromEvent(e);
    x.set(px);
    y.set(py);
  };

  return (
    <div
      className={className}
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={() => setHovered(false)}
    >
      {children}

      <AnimatePresence>
        {hovered && video && (
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-30 hidden border hairline bg-canvas p-2 md:block"
            style={{ x: springX, y: springY, width: PREVIEW_WIDTH }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <video
              src={video}
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
