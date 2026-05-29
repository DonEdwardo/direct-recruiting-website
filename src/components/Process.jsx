import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeUp from './FadeUp';

const steps = [
  { num: '01', title: 'Discovery Brief', desc: 'We invest time understanding the palace\'s culture, standards, team dynamics, and the precise profile required, far beyond a standard job description.' },
  { num: '02', title: 'Global Search', desc: 'Our consultants activate an international network to identify both active and passive candidates, people your competitors don\'t know exist.' },
  { num: '03', title: 'Rigorous Screening', desc: 'In-depth competency interviews, reference verification, and cultural alignment assessments before a single profile is presented.' },
  { num: '04', title: 'Curated Shortlist', desc: 'A refined shortlist of exceptional candidates with detailed profiles, interview guides, and salary benchmarks delivered within 5 business days.' },
  { num: '05', title: 'Placement & Beyond', desc: 'We manage offer negotiations, relocation logistics, and remain engaged through the first 90 days to ensure a flawless start.' },
];

function Step({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  return (
    <motion.div ref={ref} className="step"
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="step-num">{step.num}</div>
      <div className="step-content">
        <h3>{step.title}</h3>
        <p>{step.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section className="section section-navy" id="process">
      <div className="process-inner">
        <FadeUp>
          <div className="section-header">
            <span className="section-eyebrow">How It Works</span>
            <h2>Our <span style={{ color: 'var(--accent-lt)' }}>Process</span></h2>
            <p>A transparent, structured approach that keeps you informed and in control at every step.</p>
          </div>
        </FadeUp>
        <div className="process-steps">
          {steps.map((s, i) => <Step key={s.num} step={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
