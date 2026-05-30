import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-gold-line" />
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Direct Recruiting & Headhunting" className="footer-logo" />
            <p>Connecting exceptional talent with prestigious institutions, globally.</p>
            <div className="social-links">
              <motion.a
                href="https://www.linkedin.com/company/direct-recruitment-headhunting/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ borderColor: '#c9a84c', color: '#c9a84c', scale: 1.1 }}
              >in</motion.a>
            </div>
          </div>

          {[
            { title: 'Open Roles', links: ['Housekeeping Staff', 'Laundry Supervisor', 'Spa Therapist', 'Digital Tailor', 'Executive Chef', 'Female Hairdresser'] },
            { title: 'Company', links: ['Why Direct', 'Our Process', 'For Candidates', 'Contact'] },
            { title: 'Location', links: ['Kingdom of Saudi Arabia', 'Remote-First Operations', 'Global Candidate Network'] },
          ].map(col => (
            <div key={col.title} className="footer-links">
              <h4>{col.title}</h4>
              {col.links.map(l => (
                <motion.a key={l} href="#roles"
                  whileHover={{ color: '#c9a84c', x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >{l}</motion.a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 Direct Recruitment & Headhunting. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
