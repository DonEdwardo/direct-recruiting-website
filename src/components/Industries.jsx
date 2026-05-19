import { motion } from 'framer-motion';
import FadeUp from './FadeUp';

const industries = [
  'Technology & SaaS', 'Financial Services', 'Healthcare & Life Sciences',
  'Private Equity & VC', 'Professional Services', 'E-Commerce & Retail',
  'Logistics & Supply Chain', 'Real Estate & Construction', 'Media & Creative',
  'Energy & Sustainability', 'Manufacturing', 'Legal & Compliance',
];

export default function Industries() {
  return (
    <section className="section section-alt" id="industries">
      <div className="container">
        <FadeUp>
          <div className="section-header">
            <div className="section-tag">Sectors</div>
            <h2>Industries We <span className="gradient-text">Serve</span></h2>
            <p>Deep sector expertise across the most dynamic corners of the global economy.</p>
          </div>
        </FadeUp>
        <div className="industries-grid">
          {industries.map((ind, i) => (
            <motion.div key={ind} className="industry-chip"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.06, background: 'rgba(0,200,224,0.12)', borderColor: '#00c8e0', color: '#00c8e0', y: -3 }}
            >
              {ind}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
