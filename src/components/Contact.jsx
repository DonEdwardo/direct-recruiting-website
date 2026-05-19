import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeUp from './FadeUp';

const contactItems = [
  { label: 'Info@ghazal.me', icon: <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="url(#cg1)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="cg1" x1="3" y1="5" x2="21" y2="19"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs></svg> },
  { label: '+1 (800) DIRECT-1', icon: <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.09 7a2 2 0 012-2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 12a16 16 0 006.29 6.29l.38-.38a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="url(#cg2)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="cg2" x1="3" y1="3" x2="21" y2="21"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs></svg> },
  { label: 'Global — Remote-First', icon: <svg viewBox="0 0 24 24" fill="none" width="22" height="22"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="url(#cg3)" strokeWidth="1.8"/><circle cx="12" cy="10" r="3" stroke="url(#cg3)" strokeWidth="1.8"/><defs><linearGradient id="cg3" x1="3" y1="3" x2="21" y2="21"><stop stopColor="#2070d0"/><stop offset="1" stopColor="#00c8e0"/></linearGradient></defs></svg> },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <section className="section section-contact" id="contact">
      <div className="container">
        <div className="contact-inner">
          <FadeUp>
            <div className="contact-text">
              <div className="section-tag">Let's Talk</div>
              <h2>Ready to Find Your <span className="gradient-text">Next Star?</span></h2>
              <p>Whether you're hiring a CEO or building an entire team from scratch, we're ready to move. Tell us what you need and we'll be in touch within 24 hours.</p>
              <div className="contact-details">
                {contactItems.map(c => (
                  <motion.div key={c.label} className="contact-item"
                    whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {c.icon}
                    <span>{c.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group"><label>First Name</label><input type="text" placeholder="Alex" required /></div>
                <div className="form-group"><label>Last Name</label><input type="text" placeholder="Johnson" required /></div>
              </div>
              <div className="form-group"><label>Company</label><input type="text" placeholder="Acme Corp" /></div>
              <div className="form-group"><label>Email Address</label><input type="email" placeholder="alex@acmecorp.com" required /></div>
              <div className="form-group">
                <label>What are you looking for?</label>
                <select>
                  <option value="">Select a service…</option>
                  <option>Executive Search</option>
                  <option>Headhunting</option>
                  <option>Contingency Recruitment</option>
                  <option>Team Build</option>
                  <option>RPO / Talent Strategy</option>
                  <option>I'm a Candidate</option>
                </select>
              </div>
              <div className="form-group"><label>Message</label><textarea rows="4" placeholder="Tell us about the role or team you're looking to build…" /></div>

              <motion.button type="submit" className="btn-primary btn-full"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,200,224,0.4)' }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
              >
                {loading ? 'Sending…' : submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {submitted && (
                  <motion.div className="form-success show"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" width="20"><path d="M5 13l4 4L19 7" stroke="#00c8e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Message received! We'll be in touch within 24 hours.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
