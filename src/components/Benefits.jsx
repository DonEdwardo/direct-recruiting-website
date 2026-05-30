import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Direct Recruiting found us a world-class Executive Chef within 6 days. The calibre of candidates was extraordinary — exactly what our royal estate required.",
    name: "Estate Manager",
    title: "Royal Private Estate, Riyadh",
    rating: 5,
  },
  {
    quote: "The team's understanding of luxury hospitality standards is unmatched. Every placement they've made for our resort has exceeded expectations.",
    name: "General Manager",
    title: "Luxury Resort, Dubai",
    rating: 5,
  },
  {
    quote: "Professional, discreet and incredibly effective. They staffed our entire spa team in under three weeks. Remarkable service.",
    name: "Wellness Director",
    title: "Five-Star Hotel Group, Jeddah",
    rating: 5,
  },
];

export default function Benefits() {
  return (
    <section id="testimonials" style={{ background: '#060B18', padding: '120px 5vw', position: 'relative', overflow: 'hidden' }}>
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Client Testimonials</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(42px, 5vw, 68px)', fontWeight: 400, marginTop: '16px', color: '#F5F0E8', lineHeight: 1.1 }}>
            Trusted by the<br /><span className="text-gradient-gold">World's Finest</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              style={{
                padding: '48px 40px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.1)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                position: 'relative',
              }}
            >
              <div style={{ fontFamily: 'Georgia, serif', fontSize: '80px', color: 'rgba(201,168,76,0.15)', lineHeight: 0.8, marginBottom: '24px', display: 'block' }}>"</div>

              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} style={{ color: '#C9A84C', fontSize: '14px' }}>★</span>
                ))}
              </div>

              <p style={{ color: '#94A3B8', lineHeight: 1.8, fontSize: '15px', fontStyle: 'italic', marginBottom: '32px' }}>"{t.quote}"</p>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px' }}>
                <div style={{ color: '#F5F0E8', fontWeight: 600, fontSize: '15px' }}>{t.name}</div>
                <div style={{ color: '#C9A84C', fontSize: '12px', letterSpacing: '0.05em', marginTop: '4px' }}>{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
