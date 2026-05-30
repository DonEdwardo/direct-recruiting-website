import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: '01', title: 'Discovery', icon: '◎', desc: 'Deep brief session to understand your culture, standards and exact requirements.', color: '#C9A84C' },
  { num: '02', title: 'Global Search', icon: '◉', desc: 'Activate international networks to identify both active and passive candidates.', color: '#00D4FF' },
  { num: '03', title: 'Screening', icon: '◈', desc: 'Rigorous competency interviews, reference checks and cultural alignment assessments.', color: '#C9A84C' },
  { num: '04', title: 'Shortlist', icon: '◇', desc: 'Curated shortlist with detailed profiles delivered within 5 business days.', color: '#00D4FF' },
  { num: '05', title: 'Placement', icon: '◆', desc: 'Offer management, relocation support and onboarding coordination.', color: '#C9A84C' },
  { num: '06', title: 'Support', icon: '●', desc: '90-day post-placement follow-up to ensure a seamless integration.', color: '#00D4FF' },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="process" ref={ref} style={{ background: '#060B18', padding: '120px 5vw', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.3 }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>How It Works</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 400, marginTop: '16px', color: '#F5F0E8', lineHeight: 1.1 }}>
            The Recruitment<br /><span className="text-gradient-gold">Journey</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2px', position: 'relative' }}>
          {steps.map((s, i) => (
            <motion.div key={s.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{ padding: '48px 40px', background: i % 2 === 0 ? 'rgba(201,168,76,0.03)' : 'transparent', border: '1px solid rgba(255,255,255,0.04)', position: 'relative' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${s.color}30, ${s.color}10)`,
                  border: `1px solid ${s.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '20px', color: s.color,
                  boxShadow: `0 0 20px ${s.color}20`,
                }}>{s.icon}</div>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '48px', fontWeight: 300, color: `${s.color}20` }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '24px', color: '#F5F0E8', marginBottom: '12px' }}>{s.title}</h3>
              <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: 1.7 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
