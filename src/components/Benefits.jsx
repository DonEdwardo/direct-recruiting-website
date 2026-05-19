import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

const benefits = [
  { icon: '💰', title: 'Tax-Free Salary', desc: 'Highly competitive, tax-free compensation packages benchmarked against the top 1% of hospitality roles globally.' },
  { icon: '🏠', title: 'Accommodation Provided', desc: 'Comfortable, fully furnished staff accommodation provided on or near the palace estate.' },
  { icon: '✈️', title: 'Return Flights', desc: 'Annual return flights to your home country fully covered as part of your employment package.' },
  { icon: '🏥', title: 'Medical Insurance', desc: 'Comprehensive private medical and dental insurance for you and, in senior roles, your family.' },
  { icon: '🌙', title: 'Cultural Experience', desc: 'A once-in-a-lifetime opportunity to live and work in one of the world\'s most fascinating countries.' },
  { icon: '📈', title: 'Career Growth', desc: 'Work alongside world-class professionals in an environment that demands and rewards excellence.' },
];

export default function Benefits() {
  return (
    <section className="section section-alt" id="benefits">
      <div className="container">
        <FadeUp>
          <div className="section-header">
            <div className="section-tag">Why Join</div>
            <h2>An <span className="gradient-text">Exceptional Package</span></h2>
            <p>Working at a Royal Palace in Saudi Arabia comes with benefits that go far beyond a standard hospitality role.</p>
          </div>
        </FadeUp>
        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <FadeUp key={b.title} delay={i * 0.08}>
              <motion.div className="benefit-card"
                whileHover={{ y: -6, borderColor: 'rgba(0,200,224,0.35)', boxShadow: '0 20px 50px rgba(0,200,224,0.1)' }}
              >
                <div className="benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
