import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeUp from './FadeUp';

const services = [
  {
    title: 'Executive Search',
    desc: 'Identifying C-suite, VP, and Director-level leaders who drive transformation and deliver measurable results.',
    points: ['CEO / COO / CFO Searches', 'Board-level appointments', 'Succession planning'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="16" r="8" stroke="url(#s1)" strokeWidth="2.5"/><path d="M8 40c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="url(#s1)" strokeWidth="2.5" strokeLinecap="round"/><defs><linearGradient id="s1" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs></svg>
    ),
  },
  {
    title: 'Headhunting',
    desc: 'Proactively targeting passive candidates who aren\'t on the open market — the professionals your competitors wish they had.',
    points: ['Passive talent sourcing', 'Competitive mapping', 'Discreet outreach'],
    featured: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><path d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4z" stroke="url(#s2)" strokeWidth="2.5"/><path d="M16 24l6 6 10-12" stroke="url(#s2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="s2" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs></svg>
    ),
  },
  {
    title: 'Contingency Recruitment',
    desc: 'Fast, results-driven placement for mid-level professionals — you only pay when we deliver the right hire.',
    points: ['No-hire, no-fee model', '48-hour candidate shortlist', 'All seniority levels'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><rect x="6" y="12" width="36" height="28" rx="3" stroke="url(#s3)" strokeWidth="2.5"/><path d="M16 12V10a8 8 0 0116 0v2" stroke="url(#s3)" strokeWidth="2.5" strokeLinecap="round"/><path d="M14 26h20M14 32h12" stroke="url(#s3)" strokeWidth="2.5" strokeLinecap="round"/><defs><linearGradient id="s3" x1="6" y1="10" x2="42" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs></svg>
    ),
  },
  {
    title: 'RPO & Talent Strategy',
    desc: 'Embedded recruitment solutions and strategic talent advisory for high-growth companies scaling rapidly.',
    points: ['Recruitment process outsourcing', 'Employer branding', 'Talent pipeline building'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><path d="M6 24h8l6-12 8 24 6-16 4 4h10" stroke="url(#s4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="s4" x1="6" y1="12" x2="42" y2="36" gradientUnits="userSpaceOnUse"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs></svg>
    ),
  },
  {
    title: 'Team Builds',
    desc: 'Assembling entire functional teams from scratch — from founding engineers to full commercial departments.',
    points: ['Startup team formation', 'Department buildouts', 'Bulk hiring campaigns'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><circle cx="18" cy="20" r="7" stroke="url(#s5)" strokeWidth="2.5"/><circle cx="32" cy="16" r="5" stroke="url(#s5)" strokeWidth="2.5"/><path d="M4 38c0-7.18 6.268-13 14-13" stroke="url(#s5)" strokeWidth="2.5" strokeLinecap="round"/><path d="M32 26c5.523 0 10 4.477 10 10" stroke="url(#s5)" strokeWidth="2.5" strokeLinecap="round"/><defs><linearGradient id="s5" x1="4" y1="10" x2="44" y2="44" gradientUnits="userSpaceOnUse"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs></svg>
    ),
  },
  {
    title: 'Interview & Assessment',
    desc: 'Structured competency-based assessments, psychometric profiling, and final-round interview management.',
    points: ['Competency frameworks', 'Psychometric testing', 'Reference management'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none"><path d="M24 6l4.5 9.5L40 17l-8 8 2 11.5L24 31l-10 5.5L16 25l-8-8 11.5-1.5L24 6z" stroke="url(#s6)" strokeWidth="2.5" strokeLinejoin="round"/><defs><linearGradient id="s6" x1="8" y1="6" x2="40" y2="42" gradientUnits="userSpaceOnUse"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs></svg>
    ),
  },
];

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });

  return (
    <motion.div ref={ref} className={`card ${service.featured ? 'card-featured' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -8, borderColor: 'rgba(0,200,224,0.4)', boxShadow: '0 24px 60px rgba(0,200,224,0.12)' }}
    >
      {service.featured && <div className="card-badge">Most Popular</div>}
      <div className="card-icon">{service.icon}</div>
      <h3>{service.title}</h3>
      <p>{service.desc}</p>
      <ul className="card-list">
        {service.points.map(p => <li key={p}>{p}</li>)}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <FadeUp>
          <div className="section-header">
            <div className="section-tag">What We Do</div>
            <h2>Our <span className="gradient-text">Services</span></h2>
            <p>End-to-end talent solutions tailored to your organization's unique needs.</p>
          </div>
        </FadeUp>
        <div className="cards-grid">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
