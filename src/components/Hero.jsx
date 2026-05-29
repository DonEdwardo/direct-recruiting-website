import { motion } from 'framer-motion';

const stats = [
  { num: '10+', label: 'Open Positions' },
  { num: '24h', label: 'Response Time' },
  { num: '5★', label: 'Royal Palace' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={item} className="hero-badge">
            Exclusively Retained · Royal Palace KSA
          </motion.span>
          <motion.h1 variants={item} className="hero-title">
            Where <span className="accent-text" style={{ color: 'var(--accent-lt)' }}>Exceptional</span> Talent<br />
            Meets Royal Excellence
          </motion.h1>
          <motion.p variants={item} className="hero-sub">
            Direct Recruitment &amp; Headhunting places world-class hospitality
            professionals at a prestigious 5-star Royal Palace in Saudi Arabia.
          </motion.p>
          <motion.div variants={item} className="hero-ctas">
            <a href="#roles" className="btn-primary">Explore Open Roles</a>
            <a href="#contact" className="btn-outline-white">Apply Now</a>
          </motion.div>
          <motion.div variants={item} className="hero-stats">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero-visual-card">
            <img
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=85&fit=crop"
              alt="Luxury hospitality"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
