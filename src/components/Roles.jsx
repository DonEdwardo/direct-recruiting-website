import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeUp from './FadeUp';

const roles = [
  {
    title: 'Housekeeping Staff',
    category: 'Accommodation',
    level: 'Mid–Senior Level',
    requirements: ['3+ years luxury hotel or palace experience', 'Impeccable attention to detail'],
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=85&fit=crop',
    tag: 'Multiple Openings',
  },
  {
    title: 'Laundry Supervisor',
    category: 'Housekeeping Operations',
    level: 'Supervisor',
    requirements: ['5+ years laundry management', 'Expert knowledge of luxury textiles'],
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=85&fit=crop',
    tag: 'Urgent Hire',
  },
  {
    title: 'Spa Therapist',
    category: 'Wellness & Beauty',
    level: 'Senior Level',
    requirements: ['Certified in multiple therapy disciplines', '4+ years luxury spa experience'],
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=85&fit=crop',
    tag: 'Multiple Openings',
  },
  {
    title: 'Digital Tailor',
    category: 'Fashion & Haute Couture',
    level: 'Expert Level',
    requirements: ['Expert in bespoke tailoring', 'CAD / digital pattern-cutting skills'],
    img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=85&fit=crop',
    tag: 'Specialist Role',
  },
  {
    title: 'Butler / Personal Attendant',
    category: 'Guest Services',
    level: 'Senior Level',
    requirements: ['Formal butler training preferred', '5+ years UHNWI private service'],
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=85&fit=crop',
    tag: 'Confidential',
  },
  {
    title: 'Executive Chef',
    category: 'Culinary Arts',
    level: 'Executive Level',
    requirements: ['Michelin-starred or equivalent background', 'Middle Eastern cuisine knowledge'],
    img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=85&fit=crop',
    tag: 'Senior Appointment',
  },
  {
    title: 'Female Hairdresser',
    category: 'Beauty & Wellness',
    level: 'Senior Level',
    requirements: ['Professional cosmetology certification', '4+ years luxury salon experience'],
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=85&fit=crop',
    tag: 'Multiple Openings',
  },
  {
    title: 'Barista',
    category: 'Food & Beverage',
    level: 'Mid–Senior Level',
    requirements: ['Barista certification or equivalent', '3+ years specialty coffee experience'],
    img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=85&fit=crop',
    tag: 'Specialist Role',
  },
];

const perks = ['Tax-Free Salary', 'Full Accommodation', 'Return Flights', 'Medical Insurance'];

function RoleCard({ role, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  return (
    <motion.div ref={ref} className="role-card"
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -5 }}
    >
      <div className="role-img-wrap">
        <img src={role.img} alt={role.title} className="role-img" loading="lazy" />
        <div className="role-img-overlay" />
        <div className="role-tag">{role.tag}</div>
        <div className="role-img-title">
          <div className="role-category-sm">{role.category}</div>
          <h3>{role.title}</h3>
        </div>
      </div>
      <div className="role-body">
        <div className="role-level">{role.level}</div>
        <ul className="role-reqs">
          {role.requirements.map(r => <li key={r}>{r}</li>)}
        </ul>
        <motion.a href="#contact" className="btn-gold btn-sm btn-full"
          whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
        >Apply Now</motion.a>
      </div>
    </motion.div>
  );
}

export default function Roles() {
  return (
    <section className="section section-dark" id="roles">
      <div className="container">

        <FadeUp>
          <div className="section-header">
            <div className="section-eyebrow"><span className="gold-line-sm"/>Open Positions<span className="gold-line-sm"/></div>
            <h2>Roles at the <span className="gold-text">Royal Palace</span></h2>
            <p>Exclusively retained to place world-class professionals at a prestigious
              5-star Royal Palace in Saudi Arabia, with exceptional tax-free packages.</p>
          </div>
        </FadeUp>

        {/* Compact perks strip */}
        <FadeUp delay={0.08}>
          <div className="perks-strip">
            <div className="perks-strip-bg">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1400&q=80&fit=crop&crop=center" alt="Palace" />
            </div>
            <div className="perks-strip-inner">
              <div className="perks-strip-label">
                <span className="palace-stars-sm">★★★★★</span>
                <span>Royal Palace, Kingdom of Saudi Arabia</span>
              </div>
              <div className="perks-strip-items">
                {perks.map(p => (
                  <div key={p} className="perks-strip-item">
                    <span className="perks-strip-dot">◆</span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Application notice */}
        <FadeUp delay={0.1}>
          <div className="candidate-notice">
            <div className="candidate-notice-icon">◈</div>
            <div>
              <h4>Application Requirements</h4>
              <p>All candidates must provide <strong>letters of experience from previous employers</strong>. Any relevant <strong>certificates or diplomas</strong> are a strong advantage.</p>
            </div>
          </div>
        </FadeUp>

        <div className="roles-grid">
          {roles.map((role, i) => <RoleCard key={role.title} role={role} index={i} />)}
        </div>

      </div>
    </section>
  );
}
