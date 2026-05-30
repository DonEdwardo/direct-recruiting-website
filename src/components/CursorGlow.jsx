import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const x  = useSpring(mx, { stiffness: 500, damping: 45 });
  const y  = useSpring(my, { stiffness: 500, damping: 45 });

  useEffect(() => {
    const move = (e) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <motion.div
      className="cursor-glow"
      style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      aria-hidden="true"
    />
  );
}
