import { motion } from 'framer-motion';
import FadeUp from './FadeUp';
import { useTilt } from '../hooks/useTilt';

const metrics = [
  { num: '7', unit: 'days', label: 'Avg. Time to Shortlist' },
  { num: '98%', label: 'Client Retention Rate' },
  { num: '500+', label: 'Successful Placements' },
  { num: '12+', label: 'Industries Covered' },
];

const points = [
  { title: 'Speed Without Compromise', desc: 'Typical shortlist delivered within 5 business days, vetted, briefed, and ready to interview.' },
  { title: 'Genuine Market Intelligence', desc: 'Real-time salary benchmarking, talent mapping, and competitor intelligence to inform your decisions.' },
  { title: 'Long-Term Partnership', desc: 'We build lasting relationships, not transactional ones. Your success is our only benchmark.' },
  { title: 'Diversity & Discretion', desc: 'Every search conducted with complete confidentiality, D&I best practices, and zero compromise on quality.' },
];

function MetricCard({ m, i }) {
  const { ref, tiltStyle, onMouseMove, onMouseLeave } = useTilt(7);
  return (
    <FadeUp delay={i * 0.1}>
      <motion.div
        ref={ref}
        className="metric-card"
        style={tiltStyle}
        whileHover={{ borderColor: 'rgba(201,168,76,0.5)' }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="card-shine" />
        <span className="mc-number">{m.num}</span>
        {m.unit && <span className="mc-unit">{m.unit}</span>}
        <span className="mc-label">{m.label}</span>
      </motion.div>
    </FadeUp>
  );
}

export default function WhyUs() {
  return (
    <section className="section section-light" id="why-us">
      <div className="container">
        <div className="why-inner">
          <div className="why-text">
            <FadeUp>
              <div className="section-eyebrow left"><span className="gold-line-sm"/>Why Direct</div>
              <h2>Built on <span className="gold-text">Trust</span> & Results</h2>
              <p className="why-lead">
                We don't simply fill vacancies, we build careers and institutions.
                Our consultants bring deep sector knowledge, a global network,
                and an obsession with placing the right person in the right role.
              </p>
            </FadeUp>
            <div className="why-points">
              {points.map((p, i) => (
                <FadeUp key={p.title} delay={i * 0.1}>
                  <div className="why-point">
                    <div className="why-diamond">◆</div>
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
              {metrics.map((m, i) => (
                <MetricCard key={m.label} m={m} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
