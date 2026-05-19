import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    for (let i = 0; i < 35; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      const size = (Math.random() * 3 + 1) + 'px';
      p.style.width = size; p.style.height = size;
      p.style.animationDuration = (Math.random() * 15 + 10) + 's';
      p.style.animationDelay = (Math.random() * 15) + 's';
      if (Math.random() > 0.7) p.style.background = '#2070d0';
      el.appendChild(p);
    }
    return () => { el.innerHTML = ''; };
  }, []);
  return <div className="particles" ref={ref} />;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <Particles />

      <motion.div className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={itemVariants}>
          🏰 Exclusive Hospitality Recruitment — Saudi Arabia
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Placing World-Class Talent in a<br />
          <span className="gradient-text">5-Star Royal Palace</span>
        </motion.h1>

        <motion.p className="hero-sub" variants={itemVariants}>
          Direct Recruitment & Headhunting is sourcing elite hospitality professionals
          for an exclusive Royal Palace in Saudi Arabia. Roles in Housekeeping, Spa,
          Tailoring, Laundry & more — exceptional candidates only.
        </motion.p>

        <motion.div className="hero-ctas" variants={itemVariants}>
          <motion.a href="#roles" className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,200,224,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >View Open Roles</motion.a>
          <motion.a href="#contact" className="btn-outline"
            whileHover={{ scale: 1.04, background: 'rgba(0,200,224,0.08)' }}
            whileTap={{ scale: 0.97 }}
          >Apply Now</motion.a>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          {[
            { num: '5★', label: 'Royal Palace' },
            { num: 'KSA', label: 'Saudi Arabia' },
            { num: '10+', label: 'Open Positions' },
          ].map((s, i) => (
            <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
              {i > 0 && <div className="stat-divider" />}
              <div className="stat">
                <span className="stat-number">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="hero-logo-wrap">
          <div className="hero-palace-img">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80&fit=crop"
              alt="Luxury Palace"
            />
            <div className="palace-overlay" />
          </div>
          {[300, 350, 400].map((size, i) => (
            <motion.div key={size} className={`glow-ring ring${i + 1}`}
              animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.6 }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
