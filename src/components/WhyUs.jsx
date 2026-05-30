import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function CountUp({ target, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target);
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) { setCount(num); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { num: 500, suffix: '+', label: 'Successful Placements', sublabel: 'Across luxury properties worldwide' },
  { num: 98, suffix: '%', label: 'Client Retention Rate', sublabel: 'Clients who return for every hire' },
  { num: 50, suffix: '+', label: 'Countries Sourced', sublabel: 'Global candidate network' },
  { num: 7, suffix: ' Days', label: 'Avg. Time to Shortlist', sublabel: 'From brief to curated candidates' },
];

const points = [
  { title: 'Speed Without Compromise', desc: 'Shortlist within 5 business days, fully vetted and briefed.' },
  { title: 'Market Intelligence', desc: 'Real-time salary benchmarking and talent mapping included.' },
  { title: 'Total Confidentiality', desc: 'Every search conducted with complete discretion and D&I best practices.' },
  { title: 'Long-Term Partnership', desc: 'We build lasting relationships. Your success is our only benchmark.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: '#03060D', padding: '120px 5vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Why Choose Us</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 400, marginTop: '16px', color: '#F5F0E8', lineHeight: 1.1 }}>
            Built on Trust<br /><span className="text-gradient-gold">& Results</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '80px' }}>
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                padding: '40px 32px', textAlign: 'center',
                background: 'rgba(201,168,76,0.04)',
                border: '1px solid rgba(201,168,76,0.12)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '56px', fontWeight: 400, color: '#C9A84C', lineHeight: 1 }}>
                <CountUp target={s.num} suffix={s.suffix} />
              </div>
              <div style={{ color: '#F5F0E8', fontWeight: 600, fontSize: '14px', marginTop: '12px' }}>{s.label}</div>
              <div style={{ color: '#4A5568', fontSize: '12px', marginTop: '6px' }}>{s.sublabel}</div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
          {points.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ display: 'flex', gap: '20px' }}
            >
              <div style={{ width: '2px', minHeight: '60px', background: 'linear-gradient(180deg, #C9A84C, transparent)', flexShrink: 0, marginTop: '4px' }} />
              <div>
                <h4 style={{ color: '#F5F0E8', fontWeight: 600, marginBottom: '8px', fontSize: '16px' }}>{p.title}</h4>
                <p style={{ color: '#4A5568', fontSize: '14px', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
