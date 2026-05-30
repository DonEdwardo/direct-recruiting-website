import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { num: '01', title: 'Discovery Brief', desc: 'We invest time understanding the palace\'s culture, standards, team dynamics, and the precise profile required, far beyond a standard job description.' },
  { num: '02', title: 'Global Search', desc: 'Our consultants activate an international network to identify both active and passive candidates, people your competitors don\'t know exist.' },
  { num: '03', title: 'Rigorous Screening', desc: 'In-depth competency interviews, reference verification, and cultural alignment assessments before a single profile is presented.' },
  { num: '04', title: 'Curated Shortlist', desc: 'A refined shortlist of exceptional candidates with detailed profiles, interview guides, and salary benchmarks delivered within 7 business days.' },
  { num: '05', title: 'Placement & Beyond', desc: 'We manage offer negotiations, relocation logistics, and remain engaged through the first 90 days to ensure a flawless start.' },
];

function Step({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  return (
    <motion.div
      ref={ref}
      className="step"
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="step-num"
        whileHover={{ borderColor: 'rgba(196,150,48,0.8)', color: 'var(--gold-light)', background: 'rgba(196,150,48,0.08)' }}
        transition={{ duration: 0.25 }}
      >
        {step.num}
      </motion.div>
      <div className="step-content">
        <h3>{step.title}</h3>
        <p>{step.desc}</p>
      </div>
    </motion.div>
  );
}

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
