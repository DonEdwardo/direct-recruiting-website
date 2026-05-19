import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

const benefits = [
  { icon: '◈', title: 'Tax-Free Salary', desc: 'Highly competitive, tax-free compensation benchmarked against the top 1% of hospitality roles globally.' },
  { icon: '◈', title: 'Accommodation', desc: 'Fully furnished, comfortable staff accommodation provided on or near the palace estate at no cost.' },
  { icon: '◈', title: 'Return Flights', desc: 'Annual return flights to your home country fully covered as part of your employment contract.' },
  { icon: '◈', title: 'Medical Insurance', desc: 'Comprehensive private medical and dental cover for you and, in senior roles, your immediate family.' },
  { icon: '◈', title: 'Cultural Experience', desc: 'A once-in-a-lifetime opportunity to live and work in one of the world\'s most fascinating kingdoms.' },
  { icon: '◈', title: 'Career Elevation', desc: 'Work alongside the world\'s finest hospitality professionals in an environment that demands excellence.' },
];

export default function Benefits() {
  return (
    <section className="section section-dark" id="benefits">
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
            <FadeUp key={b.title} delay={i * 0.08}>
              <motion.div className="benefit-card"
                whileHover={{ y: -5, borderColor: 'rgba(201,168,76,0.5)' }}
              >
                <div className="benefit-icon">◈</div>
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
