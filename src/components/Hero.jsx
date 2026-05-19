import { motion } from 'framer-motion';
import HeroSlideshow from './HeroSlideshow';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25,0.1,0.25,1] } } };

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <HeroSlideshow />

      <div className="hero-inner">
        <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">
          <motion.div className="hero-eyebrow" variants={item}>
            <span className="gold-line" />
            Exclusive Royal Palace — Kingdom of Saudi Arabia
            <span className="gold-line" />
          </motion.div>

          <motion.h1 className="hero-title" variants={item}>
            Where <em>Exceptional</em> Talent<br />Meets Royal Excellence
          </motion.h1>

          <motion.p className="hero-sub" variants={item}>
            Direct Recruitment & Headhunting is exclusively retained to place
            world-class hospitality professionals at a prestigious 5-star Royal Palace
            in Saudi Arabia. Roles across Housekeeping, Spa, Tailoring, Culinary &amp; more.
          </motion.p>

          <motion.div className="hero-ctas" variants={item}>
            <motion.a href="#roles" className="btn-gold"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            >Explore Open Roles</motion.a>
            <motion.a href="#contact" className="btn-ghost"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            >Apply Now</motion.a>
          </motion.div>

          <motion.div className="hero-stats" variants={item}>
            {[
              { num: '5★', label: 'Royal Palace' },
              { num: 'KSA', label: 'Saudi Arabia' },
              { num: '10+', label: 'Open Positions' },
            ].map((s, i) => (
              <div key={s.label} style={{ display:'flex', alignItems:'center' }}>
                {i > 0 && <div className="stat-divider" />}
                <div className="stat">
                  <span className="stat-number">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="hero-logo-panel"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25,0.1,0.25,1] }}
        >
          <div className="logo-frame">
            <img src={`${import.meta.env.BASE_URL}logo-new.svg`} alt="Direct Recruiting & Headhunting" />
            <div className="logo-frame-corner tl" />
            <div className="logo-frame-corner tr" />
            <div className="logo-frame-corner bl" />
            <div className="logo-frame-corner br" />
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-scroll-hint"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
