import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1800&q=90&fit=crop&crop=center',
    position: 'center 40%',
    role: 'Spa Therapists',
    category: 'Wellness & Beauty',
  },
  {
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=90&fit=crop&crop=center',
    position: 'center 50%',
    role: 'Barista',
    category: 'Food & Beverage',
  },
  {
    url: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1800&q=90&fit=crop&crop=center',
    position: 'center 35%',
    role: 'Housekeeping Staff',
    category: 'Accommodation',
  },
  {
    url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1800&q=90&fit=crop&crop=center',
    position: 'center 45%',
    role: 'Laundry Supervisor',
    category: 'Housekeeping Operations',
  },
  {
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=90&fit=crop&crop=center',
    position: 'center 40%',
    role: 'Digital Tailor',
    category: 'Fashion & Haute Couture',
  },
  {
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1800&q=90&fit=crop&crop=center',
    position: 'center 30%',
    role: 'Executive Chef',
    category: 'Culinary Arts',
  },
];

const kenBurns = [
  { initial: { scale: 1.12, x: '2%',  y: '1%'  }, animate: { scale: 1,    x: '-1%', y: '-1%' } },
  { initial: { scale: 1,    x: '-2%', y: '0%'  }, animate: { scale: 1.1,  x: '1%',  y: '-1%' } },
  { initial: { scale: 1.08, x: '0%',  y: '-1%' }, animate: { scale: 1,    x: '2%',  y: '1%'  } },
  { initial: { scale: 1,    x: '1%',  y: '2%'  }, animate: { scale: 1.12, x: '-1%', y: '-1%' } },
  { initial: { scale: 1.1,  x: '-1%', y: '1%'  }, animate: { scale: 1,    x: '2%',  y: '0%'  } },
  { initial: { scale: 1,    x: '2%',  y: '-1%' }, animate: { scale: 1.1,  x: '-2%', y: '1%'  } },
];

const SLIDE_DURATION = 6000;
const FADE_DURATION  = 1.6;

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded]   = useState(new Set([0]));

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
            alt={slides[current].role}
            className="slide-img"
            style={{ objectPosition: slides[current].position }}
            initial={kenBurns[current].initial}
            animate={kenBurns[current].animate}
            transition={{ duration: SLIDE_DURATION / 1000 + FADE_DURATION, ease: 'linear' }}
          />
          <div className="slide-overlay" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="slide-caption"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="slide-caption-category">Now Recruiting</span>
          <span className="slide-caption-role">{slides[current].role}</span>
          <span className="slide-caption-dept">{slides[current].category}</span>
        </motion.div>
      </AnimatePresence>

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
