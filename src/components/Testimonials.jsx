import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeUp from './FadeUp';

const testimonials = [
  { initials: 'JM', name: 'James Morrison', role: 'CEO, ScaleUp Ventures', text: 'Direct found us a CFO within three weeks who had precisely the private equity experience we needed. The briefing process was thorough and the shortlist was outstanding — no filler candidates.' },
  { initials: 'SR', name: 'Sofia Ramirez', role: 'CPO, TechBridge Ltd', text: 'We\'ve used many recruiters, but Direct operates at a completely different level. They understood our culture, moved with remarkable speed, and the VP they placed has been transformative.', featured: true },
  { initials: 'AK', name: 'Alexander Kowalski', role: 'MD, Meridian Capital', text: 'Exceptional service from start to finish. The market intelligence alone was worth its weight in gold — we realigned our entire compensation structure before even opening the role.' },
];

function TestimonialCard({ t, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  return (
    <motion.div ref={ref} className={`testimonial ${t.featured ? 'testimonial-featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -5 }}
    >
      <div className="quote-mark">"</div>
      <p>{t.text}</p>
      <div className="testimonial-author">
        <div className="author-avatar">{t.initials}</div>
        <div>
          <strong>{t.name}</strong>
          <span>{t.role}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <FadeUp>
          <div className="section-header">
            <div className="section-eyebrow"><span className="gold-line-sm"/>Testimonials<span className="gold-line-sm"/></div>
            <h2>What Our <span className="gold-text">Clients Say</span></h2>
          </div>
        </FadeUp>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => <TestimonialCard key={t.name} t={t} index={i} />)}
        </div>
      </div>
    </section>
  );
}
