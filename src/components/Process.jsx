import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeUp from './FadeUp';

const steps = [
  { num: '01', title: 'Discovery Brief', desc: 'We invest time understanding your business, culture, team dynamics, and the exact profile you need — not just a job description.' },
  { num: '02', title: 'Market Search', desc: 'Our consultants activate their networks and use advanced sourcing to identify both active and passive candidates across the market.' },
  { num: '03', title: 'Deep Screening', desc: 'Rigorous competency interviews, reference checks, and cultural fit assessments before a single CV lands in your inbox.' },
  { num: '04', title: 'Shortlist Delivery', desc: 'A curated shortlist of 3–5 exceptional candidates with detailed profiles, interview guides, and salary expectations.' },
  { num: '05', title: 'Offer & Onboarding', desc: 'We manage offer negotiations, handle counteroffers, and stay engaged through the first 90 days to ensure a successful start.' },
];

function Step({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });

  return (
    <motion.div ref={ref} className="step"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div className="step-num"
        whileHover={{ background: 'linear-gradient(135deg,#2070d0,#00c8e0)', color: '#060d1a' }}
        transition={{ duration: 0.2 }}
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
  return (
    <section className="section" id="process">
      <div className="container">
        <FadeUp>
          <div className="section-header">
            <div className="section-tag">How It Works</div>
            <h2>Our <span className="gradient-text">Process</span></h2>
            <p>A transparent, structured approach that keeps you informed at every step.</p>
          </div>
        </FadeUp>
        <div className="process-steps">
          <div className="process-line" />
          {steps.map((s, i) => <Step key={s.num} step={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
