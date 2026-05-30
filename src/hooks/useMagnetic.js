import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const isTouch = typeof window !== 'undefined' && navigator.maxTouchPoints > 0;

export function useMagnetic(strength = 0.38) {
  const ref = useRef(null);
  const x   = useMotionValue(0);
  const y   = useMotionValue(0);

  const cfg = { stiffness: 180, damping: 14, mass: 0.4 };
  const sx  = useSpring(x, cfg);
  const sy  = useSpring(y, cfg);

  function onMouseMove(e) {
    if (isTouch || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width  / 2)) * strength);
    y.set((e.clientY - (r.top  + r.height / 2)) * strength);
  }
  function onMouseLeave() { x.set(0); y.set(0); }

  return { ref, x: sx, y: sy, onMouseMove, onMouseLeave };
}
