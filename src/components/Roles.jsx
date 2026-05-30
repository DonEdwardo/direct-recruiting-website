import { motion } from 'framer-motion';

const roles = [
  { icon: '🛏', title: 'Housekeeping Staff', desc: 'Meticulous room attendants and housekeeping supervisors trained to 5-star standards.', color: '#C9A84C' },
  { icon: '👔', title: 'Laundry Supervisor', desc: 'Expert textile care professionals managing luxury linen and garment operations.', color: '#00D4FF' },
  { icon: '💆', title: 'Spa Therapist', desc: 'Certified wellness professionals delivering transformative luxury spa experiences.', color: '#C9A84C' },
  { icon: '✂️', title: 'Digital Tailor', desc: 'Precision tailoring specialists blending traditional craftsmanship with modern techniques.', color: '#00D4FF' },
  { icon: '🎩', title: 'Butler / Personal Assistant', desc: 'Elite personal service professionals providing seamless, discreet concierge excellence.', color: '#C9A84C' },
  { icon: '👨‍🍳', title: 'Executive Chef', desc: 'Culinary directors creating extraordinary dining experiences for discerning guests.', color: '#00D4FF' },
  { icon: '💇', title: 'Female Hairdresser', desc: 'Expert stylists and colourists delivering bespoke beauty and grooming services.', color: '#C9A84C' },
  { icon: '☕', title: 'Barista', desc: 'Specialty coffee artisans crafting world-class beverage experiences.', color: '#00D4FF' },
];

function RoleCard({ role, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -12, rotateX: 4, rotateY: 4, scale: 1.02 }}
      style={{
        padding: '40px 32px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '12px',
        cursor: 'pointer',
        transformStyle: 'preserve-3d',
        transition: 'border-color 0.3s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onHoverStart={e => { e.currentTarget.style.borderColor = role.color + '40'; e.currentTarget.style.boxShadow = `0 20px 60px ${role.color}15`; }}
      onHoverEnd={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {/* Background glow */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: `radial-gradient(circle, ${role.color}10 0%, transparent 70%)`, pointerEvents: 'none' }} />

      <div style={{ fontSize: '40px', marginBottom: '20px' }}>{role.icon}</div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '22px', fontWeight: 500, color: '#F5F0E8', marginBottom: '12px' }}>{role.title}</h3>
      <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: 1.7 }}>{role.desc}</p>

      <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '8px', color: role.color, fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
        <span>View Candidates</span>
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    </motion.div>
  );
}

export default function Roles() {
  return (
    <section id="talent" style={{ background: '#03060D', padding: '120px 5vw' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Talent Categories</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 400, marginTop: '16px', color: '#F5F0E8', lineHeight: 1.1 }}>
            Premium Professionals<br /><span className="text-gradient-gold">For Every Role</span>
          </h2>
          <p style={{ color: '#64748B', marginTop: '20px', maxWidth: '500px', margin: '20px auto 0', fontSize: '16px', lineHeight: 1.7 }}>
            Every candidate is personally vetted, interviewed and briefed before being presented to you.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', perspective: '1000px' }}>
          {roles.map((r, i) => <RoleCard key={r.title} role={r} index={i} />)}
        </div>
      </div>
    </section>
  );
}
