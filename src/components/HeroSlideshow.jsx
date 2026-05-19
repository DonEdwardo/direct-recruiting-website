import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1800&q=90&fit=crop&crop=center',
    position: 'center 40%',
    label: 'Royal Suite',
  },
  {
    url: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1800&q=90&fit=crop&crop=center',
    position: 'center 50%',
    label: 'Grand Lobby',
  },
  {
    url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1800&q=90&fit=crop&crop=center',
    position: 'center 35%',
    label: 'Palace Exterior',
  },
  {
    url: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1800&q=90&fit=crop&crop=center',
    position: 'center 45%',
    label: 'Luxury Estate',
  },
  {
    url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1800&q=90&fit=crop&crop=center',
    position: 'center 30%',
    label: 'Prestige Grounds',
  },
  {
    url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=90&fit=crop&crop=center',
    position: 'center 40%',
    label: 'Heritage Palace',
  },
];

// Each slide gets a unique Ken Burns movement
const kenBurns = [
  { initial: { scale: 1.12, x: '2%',  y: '1%'  }, animate: { scale: 1,    x: '-1%', y: '-1%' } },
  { initial: { scale: 1,    x: '-2%', y: '0%'  }, animate: { scale: 1.1,  x: '1%',  y: '-1%' } },
  { initial: { scale: 1.08, x: '0%',  y: '-1%' }, animate: { scale: 1,    x: '2%',  y: '1%'  } },
  { initial: { scale: 1,    x: '1%',  y: '2%'  }, animate: { scale: 1.12, x: '-1%', y: '-1%' } },
  { initial: { scale: 1.1,  x: '-1%', y: '1%'  }, animate: { scale: 1,    x: '2%',  y: '0%'  } },
  { initial: { scale: 1,    x: '2%',  y: '-1%' }, animate: { scale: 1.1,  x: '-2%', y: '1%'  } },
];

const SLIDE_DURATION = 6000;   // ms each slide is visible
const FADE_DURATION  = 1.6;    // seconds for crossfade

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded]   = useState(new Set([0]));

  // Preload next image ahead of time
  useEffect(() => {
    const next = (current + 1) % slides.length;
    if (!loaded.has(next)) {
      const img = new Image();
      img.src = slides[next].url;
      img.onload = () => setLoaded(prev => new Set([...prev, next]));
    }
    const timer = setTimeout(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="slideshow">
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: FADE_DURATION, ease: 'easeInOut' }}
        >
          <motion.img
            src={slides[current].url}
            alt={slides[current].label}
            className="slide-img"
            style={{ objectPosition: slides[current].position }}
            initial={kenBurns[current].initial}
            animate={kenBurns[current].animate}
            transition={{ duration: SLIDE_DURATION / 1000 + FADE_DURATION, ease: 'linear' }}
          />
          <div className="slide-overlay" />
        </motion.div>
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="slide-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slide-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="slide-progress">
        <motion.div
          className="slide-progress-fill"
          key={current}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
        />
      </div>
    </div>
  );
}
