import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const roles = ['Executive Chef', 'Spa Therapist', 'Butler', 'Hairdresser', 'Barista', 'Digital Tailor', 'Housekeeping', 'Laundry Supervisor'];
const roleColors = ['#C9A84C', '#00D4FF', '#C9A84C', '#00D4FF', '#C9A84C', '#00D4FF', '#C9A84C', '#00D4FF'];

function FloatingBadge({ role, color, delay, x, y }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: [0, 0.7, 0.5, 0.7], y: [0, -12, 0, 12, 0], scale: [0.9, 1, 0.95, 1] }}
      transition={{ delay, duration: 6 + Math.random() * 4, repeat: Infinity, ease: 'easeInOut' }}
      style={{
        position: 'absolute', left: x, top: y,
        padding: '6px 14px',
        background: 'rgba(6,11,24,0.8)',
        border: `1px solid ${color}40`,
        borderRadius: '100px',
        fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em',
        color: color, backdropFilter: 'blur(10px)',
        pointerEvents: 'none', whiteSpace: 'nowrap',
        boxShadow: `0 0 20px ${color}20`,
      }}
    >{role}</motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const badgePositions = [
    { x: '8%', y: '25%' }, { x: '75%', y: '18%' }, { x: '82%', y: '55%' },
    { x: '5%', y: '65%' }, { x: '60%', y: '72%' }, { x: '30%', y: '15%' },
    { x: '70%', y: '38%' }, { x: '15%', y: '80%' },
  ];

  return (
    <section ref={ref} id="home" style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #03060D 0%, #060B18 40%, #0A1628 70%, #060B18 100%)', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '80px' }}>

      {/* Dot grid background */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

      {/* Radial glow center */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Cyan accent glow bottom right */}
      <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Floating role badges */}
      {roles.map((role, i) => (
        <FloatingBadge key={role} role={role} color={roleColors[i]} delay={i * 0.4} x={badgePositions[i].x} y={badgePositions[i].y} />
      ))}

      {/* Main content */}
      <motion.div style={{ y: y1, opacity, position: 'relative', zIndex: 10, width: '100%', maxWidth: '900px', margin: '0 auto', padding: '0 5vw', textAlign: 'center' }}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '8px 20px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '100px', marginBottom: '40px' }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', boxShadow: '0 0 8px #C9A84C', display: 'inline-block' }} />
          <span style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Premium Hospitality Recruitment</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(52px, 8vw, 108px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-2px', marginBottom: '28px' }}
        >
          <span className="text-gradient-white">Where Exceptional</span><br />
          <span className="text-gradient-gold">Talent Meets</span><br />
          <span className="text-gradient-white">Extraordinary Opportunity</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontSize: '18px', color: '#8B9AAF', maxWidth: '580px', margin: '0 auto 48px', lineHeight: 1.7 }}
        >
          We source, screen and place world-class hospitality professionals for luxury hotels, royal estates and high-net-worth families across the globe.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a href="#contact" whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(201,168,76,0.4)' }} whileTap={{ scale: 0.97 }}
            style={{ padding: '16px 36px', background: 'linear-gradient(135deg, #C9A84C, #E8C96A)', color: '#060B18', fontWeight: 700, fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none', display: 'inline-block' }}
          >Hire Elite Talent</motion.a>
          <motion.a href="#talent" whileHover={{ scale: 1.05, borderColor: '#C9A84C', color: '#C9A84C' }} whileTap={{ scale: 0.97 }}
            style={{ padding: '16px 36px', border: '1px solid rgba(245,240,232,0.25)', color: '#F5F0E8', fontWeight: 600, fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: '4px', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s' }}
          >Explore Candidates</motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '48px', marginTop: '72px', flexWrap: 'wrap' }}
        >
          {[['500+','Placements'],['98%','Client Retention'],['50+','Countries'],['7 Days','Avg. Time to Hire']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '36px', fontWeight: 400, color: '#C9A84C' }}>{n}</div>
              <div style={{ fontSize: '11px', color: '#64748B', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>{l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.4 }}
      >
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase' }}>Scroll</span>
        <svg width="20" height="20" fill="none" stroke="#C9A84C" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </motion.div>
    </section>
  );
}
