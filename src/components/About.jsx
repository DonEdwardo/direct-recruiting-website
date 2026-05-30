import { motion } from 'framer-motion';

const services = [
  {
    icon: '◈',
    title: 'Executive Search',
    subtitle: 'For C-Suite & Director Level',
    desc: 'Confidential, targeted headhunting for senior hospitality leaders. We map the market, identify passive candidates and deliver the exceptional.',
    color: '#C9A84C',
  },
  {
    icon: '◇',
    title: 'Contingency Recruitment',
    subtitle: 'For Specialist Roles',
    desc: 'Fast, quality-driven placement for specialist hospitality positions. You only pay on successful placement — zero risk, premium results.',
    color: '#00D4FF',
  },
  {
    icon: '◉',
    title: 'Team Build',
    subtitle: 'For Full Department Staffing',
    desc: 'Build entire hospitality teams from scratch. From pre-opening hotels to private estates, we staff complete operations with vetted talent.',
    color: '#C9A84C',
  },
];

export default function About() {
  return (
    <section id="services" style={{ background: '#060B18', padding: '120px 5vw' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Our Services</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 400, marginTop: '16px', color: '#F5F0E8', lineHeight: 1.1 }}>
            Recruitment Excellence<br /><span className="text-gradient-gold">Across Every Level</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              style={{
                padding: '48px 40px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                cursor: 'default',
                transition: 'border-color 0.3s',
              }}
            >
              <div style={{ fontSize: '36px', color: s.color, marginBottom: '24px' }}>{s.icon}</div>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: s.color, textTransform: 'uppercase', marginBottom: '12px' }}>{s.subtitle}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 500, color: '#F5F0E8', marginBottom: '16px' }}>{s.title}</h3>
              <p style={{ color: '#64748B', lineHeight: 1.7, fontSize: '15px' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
