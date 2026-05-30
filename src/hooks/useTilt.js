import { useRef } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

const isTouch = typeof window !== 'undefined' && navigator.maxTouchPoints > 0;

export function useTilt(maxTilt = 10) {
  const ref = useRef(null);
  const x   = useMotionValue(0);
  const y   = useMotionValue(0);

  const cfg = { stiffness: 300, damping: 24, mass: 0.5 };
  const sx  = useSpring(x, cfg);
  const sy  = useSpring(y, cfg);

  const rotateY = useTransform(sx, [-0.5, 0.5], [-maxTilt, maxTilt]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [ maxTilt, -maxTilt]);

  function onMouseMove(e) {
    if (isTouch || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width  - 0.5);
    y.set((e.clientY - r.top)  / r.height - 0.5);
  }
  function onMouseLeave() { x.set(0); y.set(0); }

  const tiltStyle = isTouch ? {} : {
    rotateX, rotateY,
    transformPerspective: 900,
    transformStyle: 'preserve-3d',
  };

  return { ref, tiltStyle, onMouseMove, onMouseLeave };
}
