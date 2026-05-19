import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeUp from './FadeUp';

const metrics = [
  { num: '5', unit: 'days', label: 'Avg. Time to Shortlist' },
  { num: '98%', label: 'Client Retention Rate' },
  { num: '500+', label: 'Successful Placements' },
  { num: '12+', label: 'Industries Covered' },
];

const points = [
  { title: 'Speed Without Compromise', desc: 'Typical shortlist delivered within 5 business days — vetted, briefed, and ready to interview.' },
  { title: 'Genuine Market Intelligence', desc: 'Real-time salary benchmarking, competitor mapping, and talent availability data.' },
  { title: 'Long-Term Partnership', desc: 'We build lasting relationships — not transactional ones. Your success is our benchmark.' },
  { title: 'Diversity & Inclusion First', desc: 'Every search is designed with D&I best practices — diverse shortlists, structured processes.' },
];

function MetricCard({ m, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  return (
    <motion.div ref={ref} className="metric-card"
      initial={{ opacity: 0, scale: 0.88 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -6, borderColor: 'rgba(0,200,224,0.35)' }}
    >
      <span className="mc-number">{m.num}</span>
      {m.unit && <span className="mc-unit">{m.unit}</span>}
      <span className="mc-label">{m.label}</span>
    </motion.div>
  );
}

export default function WhyUs() {
  return (
    <section className="section section-alt" id="why-us">
      <div className="container">
        <div className="why-inner">
          <div className="why-text">
            <FadeUp>
              <div className="section-tag">Why Direct</div>
              <h2>Built on <span className="gradient-text">Trust</span> &amp; Results</h2>
              <p className="why-lead">
                We don't just fill seats — we build careers and companies. Our consultants bring
                deep industry knowledge, a global network, and an obsession with quality.
              </p>
            </FadeUp>
            <div className="why-points">
              {points.map((p, i) => (
                <FadeUp key={p.title} delay={i * 0.1}>
                  <div className="why-point">
                    <motion.div className="why-icon"
                      whileHover={{ scale: 1.15, borderColor: 'rgba(0,200,224,0.6)' }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                        <path d="M5 13l4 4L19 7" stroke="url(#wg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <defs><linearGradient id="wg" x1="5" y1="7" x2="19" y2="17"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs>
                      </svg>
                    </motion.div>
                    <div>
                      <h4>{p.title}</h4>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <div className="why-visual">
            <div className="why-card-stack">
              {metrics.map((m, i) => <MetricCard key={m.label} m={m} index={i} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
