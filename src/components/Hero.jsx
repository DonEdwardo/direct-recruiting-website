import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import HeroSlideshow from './HeroSlideshow';
import { useMagnetic } from '../hooks/useMagnetic';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
};
const item = {
  hidden: { opacity: 0, y: 32, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

function MagneticBtn({ href, className, children }) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(0.3);
  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const yEyebrow = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const yTitle   = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const ySub     = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCtas    = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const yStats   = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

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
            Direct Recruitment &amp; Headhunting is exclusively retained to place
            world-class hospitality professionals at a prestigious 5-star Royal Palace
            in Saudi Arabia, across Housekeeping, Spa, Tailoring, Culinary &amp; more.
          </motion.p>

          <motion.div className="hero-ctas" variants={item} style={{ y: yCtas }}>
            <MagneticBtn href="#roles" className="btn-gold">Explore Open Roles</MagneticBtn>
            <MagneticBtn href="#contact" className="btn-ghost">Apply Now</MagneticBtn>
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

      <motion.div
        className="hero-scroll-hint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity: scrollOpacity }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
