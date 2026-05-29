import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={`${import.meta.env.BASE_URL}logo-new.png`} alt="Direct Recruiting & Headhunting" className="footer-logo" />
          <p className="footer-tagline">Connecting exceptional talent with prestigious institutions, globally.</p>
          <div className="footer-social">
            <motion.a
              href="https://www.linkedin.com/company/direct-recruitment-headhunting/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ borderColor: '#3B82F6', color: '#3B82F6' }}
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
            <ul>
              {col.links.map(l => (
                <li key={l}><a href="#roles">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Direct Recruitment &amp; Headhunting. All rights reserved.</span>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
