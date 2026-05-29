import FadeUp from './FadeUp';

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

export default function WhyUs() {
  return (
    <section className="section section-white" id="why-us">
      <div className="why-inner">
        <div className="why-left">
          <FadeUp>
            <span className="section-eyebrow">Why Direct</span>
            <h2 className="why-title">Built on <span style={{ color: 'var(--accent)' }}>Trust</span> &amp; Results</h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--slate-500)', lineHeight: 1.8, marginBottom: '32px' }}>
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
                  <div className="why-point-text">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
        <div>
          <div className="metrics-grid">
            {metrics.map((m, i) => (
              <FadeUp key={m.label} delay={i * 0.1}>
                <div className="metric-card">
                  <span className="mc-number">{m.num}</span>
                  {m.unit && <span className="mc-unit">{m.unit}</span>}
                  <span className="mc-label">{m.label}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
