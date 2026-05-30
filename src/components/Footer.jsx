import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer style={{ background: '#03060D', borderTop: '1px solid rgba(201,168,76,0.1)', padding: '80px 5vw 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '60px' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #C9A84C, #E8C96A)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: '18px', color: '#060B18' }}>DR</div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '15px', fontWeight: 600, color: '#F5F0E8' }}>DIRECT RECRUITING</div>
                <div style={{ fontSize: '9px', letterSpacing: '0.2em', color: '#C9A84C' }}>EXECUTIVE HEADHUNTING</div>
              </div>
            </div>
            <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: 1.7, maxWidth: '280px', marginBottom: '24px' }}>
              Connecting exceptional hospitality talent with the world's most prestigious institutions.
            </p>
            <motion.a href="https://www.linkedin.com/company/direct-recruitment-headhunting/" target="_blank" rel="noopener noreferrer"
              whileHover={{ borderColor: '#C9A84C', color: '#C9A84C' }}
              style={{ width: '36px', height: '36px', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', fontSize: '13px', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s' }}
            >in</motion.a>
          </div>

          {/* Links */}
          {[
            { title: 'Services', links: ['Executive Search', 'Contingency', 'Team Build'] },
            { title: 'Talent', links: ['Executive Chef', 'Spa Therapist', 'Butler', 'Housekeeping', 'Barista'] },
            { title: 'Company', links: ['Why Direct', 'Our Process', 'Contact', 'Kingdom of Saudi Arabia'] },
          ].map(col => (
            <div key={col.title}>
              <h4 style={{ color: '#F5F0E8', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '20px' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(l => (
                  <li key={l}><a href="#" style={{ color: '#4A5568', fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#C9A84C'} onMouseLeave={e => e.target.style.color = '#4A5568'}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ color: '#2D3347', fontSize: '13px' }}>© 2026 Direct Recruitment & Headhunting. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ color: '#2D3347', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = '#C9A84C'} onMouseLeave={e => e.target.style.color = '#2D3347'}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
