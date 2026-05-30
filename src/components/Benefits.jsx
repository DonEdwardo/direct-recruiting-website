import { motion } from 'framer-motion';
import FadeUp from './FadeUp';
import { useTilt } from '../hooks/useTilt';

const benefits = [
  { icon: '◈', title: 'Tax-Free Salary', desc: 'Highly competitive, tax-free compensation benchmarked against the top 1% of hospitality roles globally.' },
  { icon: '◈', title: 'Accommodation', desc: 'Fully furnished, comfortable staff accommodation provided on or near the palace estate at no cost.' },
  { icon: '◈', title: 'Return Flights', desc: 'Annual return flights to your home country fully covered as part of your employment contract.' },
  { icon: '◈', title: 'Medical Insurance', desc: 'Comprehensive private medical and dental cover for you and, in senior roles, your immediate family.' },
  { icon: '◈', title: 'Cultural Experience', desc: 'A once-in-a-lifetime opportunity to live and work in one of the world\'s most fascinating kingdoms.' },
  { icon: '◈', title: 'Career Elevation', desc: 'Work alongside the world\'s finest hospitality professionals in an environment that demands excellence.' },
];

function BenefitCard({ b, i }) {
  const { ref, tiltStyle, onMouseMove, onMouseLeave } = useTilt(6);
  return (
    <FadeUp delay={i * 0.08} className="benefit-fadeup">
      <motion.div
        ref={ref}
        className="benefit-card"
        style={tiltStyle}
        whileHover={{ borderColor: 'rgba(196,150,48,0.4)' }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="card-shine" />
        <div className="benefit-icon">◈</div>
        <h4>{b.title}</h4>
        <p>{b.desc}</p>
      </motion.div>
    </FadeUp>
  );
}

export default function Benefits() {
  return (
    <section className="section section-linen" id="benefits">
      <div className="container">
        <FadeUp>
          <div className="section-header">
            <div className="section-eyebrow"><span className="gold-line-sm"/>Why Join<span className="gold-line-sm"/></div>
            <h2>An <span className="gold-text">Exceptional Package</span></h2>
            <p>Working at a Royal Palace in Saudi Arabia offers rewards that go far beyond any standard hospitality role.</p>
          </div>
        </FadeUp>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <BenefitCard key={b.title} b={b} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
