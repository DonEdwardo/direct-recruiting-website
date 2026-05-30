import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMagnetic } from '../hooks/useMagnetic';

function MagneticLink({ href, children, className, onClick }) {
  const { ref, x, y, onMouseMove, onMouseLeave } = useMagnetic(0.22);
  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.a>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Roles',    href: '#roles' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Process',  href: '#process' },
    { label: 'Why Us',   href: '#why-us' },
  ];

  return (
    <motion.nav
      className={`nav ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <motion.a
          href="#hero"
          className="nav-logo"
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Direct Recruiting & Headhunting" />
        </motion.a>

        <ul className="nav-links">
          {links.map((l, i) => (
            <motion.li key={l.label}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 + i * 0.07, duration: 0.5 }}
            >
              <MagneticLink href={l.href}>{l.label}</MagneticLink>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.48, duration: 0.5 }}
          >
            <MagneticLink href="#contact" className="btn-nav">Get in Touch</MagneticLink>
          </motion.li>
        </ul>

        <motion.button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
          whileTap={{ scale: 0.9 }}
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </motion.button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            {[...links.map(l => l.label), 'Contact'].map((l, i) => (
              <motion.a
                key={l}
                href={`#${l.toLowerCase().replace(' ', '-')}`}
                className={`mobile-link ${l === 'Contact' ? 'cta' : ''}`}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
