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
    <section className="section section-dark" id="contact">
      <div className="container">
        <div className="contact-inner">
          <FadeUp>
            <div className="contact-text">
              <div className="section-eyebrow left"><span className="gold-line-sm"/>Let's Talk</div>
              <h2>Ready to Apply or<br /><span className="gold-text">Hire Exceptional Talent?</span></h2>
              <p>Whether you are a candidate seeking this extraordinary opportunity, or an organisation looking to partner with us, reach out and we will respond within 24 hours.</p>
              <div className="contact-details">
                {contactItems.map(c => (
                  <motion.div key={c.label} className="contact-item"
                    whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="contact-diamond">◆</span>
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

              <motion.button type="submit" className="btn-gold btn-full"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} disabled={loading}
              >
                {loading ? 'Sending…' : submitted ? 'Message Sent ✓' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {submitted && (
                  <motion.div className="form-success"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  >
                    ✓ &nbsp; Thank you, we will be in touch within 24 hours.
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
