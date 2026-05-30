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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const yEyebrow = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const yTitle   = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const ySub     = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const yCtas    = useTransform(scrollYProgress, [0, 1], [0, -65]);
  const yStats   = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const opacity  = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} id="home" style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #03060D 0%, #060B18 40%, #0A1628 70%, #060B18 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>

      {/* Dot grid background */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Radial glow center */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Cyan accent glow bottom right */}
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

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

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '100px', marginBottom: '40px' }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', boxShadow: '0 0 8px #C9A84C', display: 'inline-block' }} />
          <span style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Premium Hospitality Recruitment</span>
        </motion.div>

      <motion.div
        className="hero-scroll-hint"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ opacity }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="20" height="20" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </motion.div>
    </section>
  );
}
