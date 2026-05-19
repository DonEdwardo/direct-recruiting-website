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
  const stats = [
    { num: '500+', label: 'Placements Made' },
    { num: '98%', label: 'Client Satisfaction' },
    { num: '12+', label: 'Industries Served' },
  ];

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
          Executive Search & Talent Acquisition
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          Connecting <span className="gradient-text">Exceptional Talent</span><br />
          with Visionary Companies
        </motion.h1>

        <motion.p className="hero-sub" variants={itemVariants}>
          Direct Recruitment & Headhunting bridges the gap between outstanding professionals
          and forward-thinking organizations — with precision, integrity, and speed.
        </motion.p>

        <motion.div className="hero-ctas" variants={itemVariants}>
          <motion.a href="#contact" className="btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,200,224,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >Find Your Next Hire</motion.a>
          <motion.a href="#services" className="btn-outline"
            whileHover={{ scale: 1.04, background: 'rgba(0,200,224,0.08)' }}
            whileTap={{ scale: 0.97 }}
          >Explore Services</motion.a>
        </motion.div>

        <motion.div className="hero-stats" variants={itemVariants}>
          {stats.map((s, i) => (
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
          <motion.img src="/logo.png" alt="Direct" className="hero-logo-img"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          {[300, 350, 400].map((size, i) => (
            <motion.div key={size} className={`glow-ring ring${i + 1}`}
              animate={{ scale: [1, 1.04, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
