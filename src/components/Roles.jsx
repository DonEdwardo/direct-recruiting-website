import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeUp from './FadeUp';

const roles = [
  {
    title: 'Housekeeping Staff',
    category: 'Accommodation',
    level: 'Mid–Senior Level',
    tag: 'Multiple Openings',
  },
  {
    title: 'Laundry Supervisor',
    category: 'Housekeeping Operations',
    level: 'Supervisor',
    tag: 'Urgent Hire',
  },
  {
    title: 'Spa Therapist',
    category: 'Wellness & Beauty',
    level: 'Senior Level',
    tag: 'Multiple Openings',
  },
  {
    title: 'Digital Tailor',
    category: 'Fashion & Haute Couture',
    level: 'Expert Level',
    tag: 'Specialist Role',
  },
  {
    title: 'Butler / Personal Attendant',
    category: 'Guest Services',
    level: 'Senior Level',
    tag: 'Confidential',
  },
  {
    title: 'Executive Chef',
    category: 'Culinary Arts',
    level: 'Executive Level',
    tag: 'Senior Appointment',
  },
  {
    title: 'Female Hairdresser',
    category: 'Beauty & Wellness',
    level: 'Senior Level',
    tag: 'Multiple Openings',
  },
  {
    title: 'Barista',
    category: 'Food & Beverage',
    level: 'Mid–Senior Level',
    tag: 'Specialist Role',
  },
];

function RoleCard({ role, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  return (
    <motion.div
      ref={ref}
      className="role-card"
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <div className="role-card-left">
        <div className="role-card-title">{role.title}</div>
        <div className="role-card-meta">
          <span className="role-tag">{role.tag || role.category}</span>
          {role.level && <span className="role-tag-neutral">{role.level}</span>}
          <span className="role-location">Saudi Arabia · On-site</span>
        </div>
      </div>
      <div className="role-card-right">
        <a href="#contact" className="btn-primary btn-sm">Apply Now →</a>
      </div>
    </motion.div>
  );
}

export default function Roles() {
  return (
    <section className="section section-white" id="roles">
      <div className="roles-section-inner">

        <FadeUp>
          <div className="section-header">
            <span className="section-eyebrow">Open Positions</span>
            <h2>Roles at the <span style={{ color: 'var(--accent)' }}>Royal Palace</span></h2>
            <p>Exclusively retained to place world-class professionals at a prestigious
              5-star Royal Palace in Saudi Arabia, with exceptional tax-free packages.</p>
          </div>
        </FadeUp>

        <div className="info-banner">
          <strong>Application note:</strong> All candidates must provide letters of experience from previous employers. Certificates or diplomas are a strong advantage.
        </div>

        <div className="roles-list">
          {roles.map((role, i) => <RoleCard key={role.title} role={role} index={i} />)}
        </div>

      </div>
    </section>
  );
}
