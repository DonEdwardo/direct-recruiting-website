import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/logo.png" alt="Direct Recruitment & Headhunting" className="footer-logo" />
            <p>Connecting exceptional talent with visionary companies — globally.</p>
            <div className="social-links">
              {[
                <svg key="li" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.8"/></svg>,
                <svg key="tw" viewBox="0 0 24 24" fill="none"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
              ].map((icon, i) => (
                <motion.a key={i} href="#" className="social-link"
                  whileHover={{ scale: 1.15, borderColor: '#00c8e0', color: '#00c8e0' }}
                  whileTap={{ scale: 0.9 }}
                >{icon}</motion.a>
              ))}
            </div>
          </div>

          {[
            { title: 'Services', links: ['Executive Search','Headhunting','Contingency Recruitment','RPO & Talent Strategy','Team Builds'] },
            { title: 'Company',  links: ['Why Direct','Our Process','Industries','Contact'] },
            { title: 'For Candidates', links: ['Submit Your CV','Career Advice','Salary Guide'] },
          ].map(col => (
            <div key={col.title} className="footer-links">
              <h4>{col.title}</h4>
              {col.links.map(l => (
                <motion.a key={l} href="#" whileHover={{ color: '#00c8e0', x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >{l}</motion.a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Direct Recruitment & Headhunting. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
