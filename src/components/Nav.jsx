import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Services', 'Talent', 'Process', 'Why Us', 'Contact'];

  return (
    <motion.nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(6,11,24,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 5vw',
        height: scrolled ? '64px' : '80px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        <div style={{
          width: '40px', height: '40px',
          background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 600, fontSize: '18px', color: '#060B18',
        }}>DR</div>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '16px', fontWeight: 600, color: '#F5F0E8', letterSpacing: '0.05em' }}>DIRECT RECRUITING</div>
          <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#C9A84C', textTransform: 'uppercase' }}>Executive Headhunting</div>
        </div>
      </a>

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="hidden md:flex">
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
            style={{ color: '#C8C0B0', fontSize: '13px', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#C9A84C'}
            onMouseLeave={e => e.target.style.color = '#C8C0B0'}
          >{l}</a>
        ))}
        <motion.a href="#contact"
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          style={{
            padding: '10px 24px',
            background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
            color: '#060B18', fontWeight: 700, fontSize: '12px',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            borderRadius: '4px', textDecoration: 'none',
          }}
        >Hire Talent</motion.a>
      </div>

      {/* Mobile burger */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', color: '#C9A84C', cursor: 'pointer', padding: '8px', display: 'none' }}
        className="flex md:hidden"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
          {menuOpen ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
        </svg>
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute', top: '100%', left: 0, right: 0,
              background: 'rgba(6,11,24,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(201,168,76,0.2)',
              padding: '24px 5vw', display: 'flex', flexDirection: 'column', gap: '20px',
            }}
          >
            {links.map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMenuOpen(false)}
                style={{ color: '#F5F0E8', fontSize: '18px', textDecoration: 'none', fontFamily: "'Cormorant Garamond', serif" }}
              >{l}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
