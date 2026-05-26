import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HeroSlideshow from './HeroSlideshow';

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.18 } } };
const item = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25,0.1,0.25,1] } } };

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Each layer moves at a different depth — creates cinematic parallax
  const yEyebrow = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const yTitle   = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const ySub     = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCtas    = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const yStats   = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const opacity  = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <HeroSlideshow />

      <div className="hero-inner">
        <motion.div className="hero-content" variants={container} initial="hidden" animate="visible">

          <motion.div className="hero-eyebrow" variants={item} style={{ y: yEyebrow }}>
            <span className="gold-line" />
            Exclusive Royal Palace &nbsp;·&nbsp; Kingdom of Saudi Arabia
            <span className="gold-line" />
          </motion.div>

          <motion.h1 className="hero-title" variants={item} style={{ y: yTitle }}>
            Where <em>Exceptional</em> Talent<br />Meets Royal Excellence
          </motion.h1>

          <motion.p className="hero-sub" variants={item} style={{ y: ySub }}>
            Direct Recruitment & Headhunting is exclusively retained to place
            world-class hospitality professionals at a prestigious 5-star Royal Palace
            in Saudi Arabia, across Housekeeping, Spa, Tailoring, Culinary &amp; more.
          </motion.p>

          <motion.div className="hero-ctas" variants={item} style={{ y: yCtas }}>
            <motion.a href="#roles" className="btn-gold"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            >Explore Open Roles</motion.a>
            <motion.a href="#contact" className="btn-ghost"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            >Apply Now</motion.a>
          </motion.div>

          <motion.div className="hero-divider" variants={item} style={{ y: yStats }} />

          <motion.div className="hero-stats" variants={item} style={{ y: yStats }}>
            {[
              { num: '5★', label: 'Royal Palace' },
              { num: 'KSA', label: 'Saudi Arabia' },
              { num: '10+', label: 'Open Positions' },
              { num: '24h', label: 'Response Time' },
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
      </div>

      <motion.div className="hero-scroll-hint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
