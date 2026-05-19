import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeUp from './FadeUp';

const roles = [
  {
    title: 'Housekeeping Staff',
    category: 'Accommodation',
    level: 'Mid–Senior Level',
    desc: 'Maintain the highest standards of cleanliness and presentation across royal suites, private chambers, and grand reception rooms. Discretion and precision are essential.',
    requirements: ['3+ years luxury hotel or palace experience', 'Impeccable attention to detail', 'Knowledge of luxury fabrics & surfaces'],
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&fit=crop',
    tag: 'Multiple Openings',
  },
  {
    title: 'Laundry Supervisor',
    category: 'Housekeeping Operations',
    level: 'Supervisor',
    desc: 'Oversee the care and laundering of royal linens, garments, and textiles. Lead a team ensuring all items meet the palace\'s exacting presentation standards.',
    requirements: ['5+ years laundry management', 'Expert knowledge of luxury textiles', 'Team leadership experience'],
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80&fit=crop',
    tag: 'Urgent Hire',
  },
  {
    title: 'Spa Therapist',
    category: 'Wellness & Beauty',
    level: 'Senior Level',
    desc: 'Deliver world-class spa and wellness treatments in a stunning palace spa. Expertise in holistic therapies, body treatments, and advanced facial protocols required.',
    requirements: ['Certified in multiple therapy disciplines', '4+ years luxury spa experience', 'Arabic or English speaking'],
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&q=80&fit=crop',
    tag: 'Multiple Openings',
  },
  {
    title: 'Digital Tailor',
    category: 'Fashion & Haute Couture',
    level: 'Expert Level',
    desc: 'Blend traditional tailoring mastery with digital tools to create bespoke garments for royal clients. Work with the finest silk, brocade, and embroidered textiles.',
    requirements: ['Expert in bespoke tailoring', 'CAD / digital pattern-cutting skills', 'Experience with luxury fabrics'],
    img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&q=80&fit=crop',
    tag: 'Specialist Role',
  },
  {
    title: 'Butler / Personal Attendant',
    category: 'Guest Services',
    level: 'Senior Level',
    desc: 'Provide discreet, personalised service to royal family members and distinguished guests. Anticipate needs before they arise and deliver seamless, invisible service.',
    requirements: ['Formal butler training preferred', '5+ years UHNWI private service', 'Absolute discretion & professionalism'],
    img: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&q=80&fit=crop',
    tag: 'Confidential',
  },
  {
    title: 'Executive Chef',
    category: 'Culinary Arts',
    level: 'Executive Level',
    desc: 'Lead a brigade of chefs delivering exceptional culinary experiences across multiple palace dining venues — from intimate private dining to grand ceremonial banquets.',
    requirements: ['Michelin-starred or equivalent background', 'Middle Eastern cuisine knowledge', 'Team management at scale'],
    img: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&q=80&fit=crop',
    tag: 'Senior Appointment',
  },
  {
    title: 'Florist & Floral Designer',
    category: 'Décor & Aesthetics',
    level: 'Specialist',
    desc: 'Create breathtaking floral arrangements and living displays that enhance the palace\'s magnificent interiors and ceremonial spaces throughout the year.',
    requirements: ['Professional floral design training', '3+ years luxury or event floristry', 'Knowledge of exotic & rare blooms'],
    img: 'https://images.unsplash.com/photo-1487530811015-780c2aab71f8?w=700&q=80&fit=crop',
    tag: 'Creative Role',
  },
  {
    title: 'Head of Security',
    category: 'Security & Safety',
    level: 'Director Level',
    desc: 'Lead and manage comprehensive security operations for the palace estate. Develop protocols, oversee personnel, and ensure the absolute safety of all residents and guests.',
    requirements: ['Military or law enforcement background', 'VIP / UHNWI protection experience', 'Arabic language a strong advantage'],
    img: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=700&q=80&fit=crop',
    tag: 'Leadership Role',
  },
];

function RoleCard({ role, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
  return (
    <motion.div ref={ref} className="role-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div className="role-img-wrap">
        <img src={role.img} alt={role.title} className="role-img" loading="lazy" />
        <div className="role-img-overlay" />
        <div className="role-tag">{role.tag}</div>
        <div className="role-category">{role.category}</div>
      </div>
      <div className="role-body">
        <div className="role-level">{role.level}</div>
        <h3>{role.title}</h3>
        <p>{role.desc}</p>
        <ul className="role-reqs">
          {role.requirements.map(r => <li key={r}>{r}</li>)}
        </ul>
        <motion.a href="#contact" className="btn-gold btn-sm"
          whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
        >Apply for This Role</motion.a>
      </div>
    </motion.div>
  );
}

export default function Roles() {
  return (
    <section className="section" id="roles">
      <div className="container">
        <FadeUp>
          <div className="section-header">
            <div className="section-eyebrow"><span className="gold-line-sm"/>Open Positions<span className="gold-line-sm"/></div>
            <h2>Roles at the <span className="gold-text">Royal Palace</span></h2>
            <p>
              We are exclusively retained to place world-class professionals at a prestigious
              5-star Royal Palace in Saudi Arabia. All positions offer exceptional, tax-free
              remuneration with full accommodation and benefits.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="palace-banner">
            <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1400&q=85&fit=crop&crop=center" alt="5-Star Palace Saudi Arabia" className="palace-banner-img" />
            <div className="palace-banner-overlay">
              <div className="palace-banner-content">
                <span className="palace-stars">★ ★ ★ ★ ★</span>
                <h3>Royal Palace — Kingdom of Saudi Arabia</h3>
                <p>An extraordinary opportunity at one of the most prestigious private residences in the world.</p>
                <div className="palace-perks">
                  {['Tax-Free Salary','Full Accommodation','Return Flights','Medical Insurance'].map(p => (
                    <span key={p} className="palace-perk">{p}</span>
                  ))}
                </div>
              </div>
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
