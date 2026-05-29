import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeUp from './FadeUp';

const contactItems = [
  { label: 'Info@ghazal.me' },
  { label: 'Global, Remote-First Operations' },
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
    <section className="section section-navy" id="contact">
      <div className="contact-inner">
        <FadeUp>
          <div className="contact-left">
            <span className="section-eyebrow">Let's Talk</span>
            <h2>Ready to Apply or<br />Hire Exceptional Talent?</h2>
            <p>Whether you are a candidate seeking this extraordinary opportunity, or an organisation looking to partner with us, reach out and we will respond within 24 hours.</p>
            <div className="contact-items">
              {contactItems.map(c => (
                <div key={c.label} className="contact-item">
                  <div className="contact-item-icon">
                    <span style={{ color: 'var(--accent-lt)', fontSize: '0.7rem' }}>◆</span>
                  </div>
                  <div className="contact-item-text">
                    <p>{c.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <form className="contact-form-wrap" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><label>First Name</label><input type="text" placeholder="Alex" required /></div>
              <div className="form-group"><label>Last Name</label><input type="text" placeholder="Johnson" required /></div>
            </div>
            <div className="form-group"><label>Company / Organisation</label><input type="text" placeholder="Acme Corp" /></div>
            <div className="form-group"><label>Email Address</label><input type="email" placeholder="alex@acmecorp.com" required /></div>
            <div className="form-group">
              <label>I am enquiring about…</label>
              <select>
                <option value="">Select…</option>
                <option>Applying for a Role</option>
                <option>Executive Search</option>
                <option>Headhunting</option>
                <option>Contingency Recruitment</option>
                <option>Team Build</option>
                <option>General Enquiry</option>
              </select>
            </div>
            <div className="form-group"><label>Message</label><textarea rows="4" placeholder="Tell us about your role, background, or requirements…" /></div>

            <motion.button type="submit" className="btn-primary btn-full"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} disabled={loading}
            >
              {loading ? 'Sending…' : submitted ? 'Message Sent ✓' : 'Send Message'}
            </motion.button>

            <AnimatePresence>
              {submitted && (
                <motion.div className="form-success"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                >
                  <h3>Message Sent!</h3>
                  <p>Thank you, we will be in touch within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
