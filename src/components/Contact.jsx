import { useState } from 'react';
import { motion } from 'framer-motion';

const inputStyle = {
  width: '100%', padding: '14px 16px',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px', color: '#F5F0E8',
  fontSize: '14px', outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
    setTimeout(() => setSubmitted(false), 6000);
  }

  return (
    <section id="contact" style={{ background: '#03060D', padding: '120px 5vw', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', right: '-200px', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start', position: 'relative', zIndex: 1 }}>

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 600 }}>Contact Us</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(36px, 4vw, 56px)', fontWeight: 400, marginTop: '16px', color: '#F5F0E8', lineHeight: 1.1, marginBottom: '24px' }}>
            Ready to Hire<br /><span className="text-gradient-gold">Elite Talent?</span>
          </h2>
          <p style={{ color: '#4A5568', lineHeight: 1.8, fontSize: '15px', marginBottom: '48px' }}>
            Whether you're a client seeking world-class talent or a candidate pursuing extraordinary opportunities, we respond within 24 hours.
          </p>

          {[
            { label: 'Email', value: 'Info@ghazal.me', icon: '◎' },
            { label: 'Operations', value: 'Global, Remote-First', icon: '◉' },
            { label: 'Response Time', value: 'Within 24 Hours', icon: '◈' },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', gap: '16px', marginBottom: '24px', alignItems: 'center' }}>
              <div style={{ width: '40px', height: '40px', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A84C', fontSize: '16px', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#4A5568', textTransform: 'uppercase', marginBottom: '2px' }}>{item.label}</div>
                <div style={{ color: '#F5F0E8', fontSize: '14px', fontWeight: 500 }}>{item.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          onSubmit={handleSubmit}
          style={{ padding: '48px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', backdropFilter: 'blur(20px)' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            {['First Name', 'Last Name'].map(p => (
              <div key={p}>
                <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.1em', color: '#4A5568', textTransform: 'uppercase', marginBottom: '8px' }}>{p}</label>
                <input type="text" placeholder={p === 'First Name' ? 'Alex' : 'Johnson'} required style={inputStyle} />
              </div>
            ))}
          </div>
          {[
            { label: 'Email Address', type: 'email', placeholder: 'alex@company.com', required: true },
            { label: 'Company / Organisation', type: 'text', placeholder: 'Luxury Hotel Group', required: false },
          ].map(f => (
            <div key={f.label} style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.1em', color: '#4A5568', textTransform: 'uppercase', marginBottom: '8px' }}>{f.label}</label>
              <input type={f.type} placeholder={f.placeholder} required={f.required} style={inputStyle} />
            </div>
          ))}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.1em', color: '#4A5568', textTransform: 'uppercase', marginBottom: '8px' }}>Enquiry Type</label>
            <select style={{ ...inputStyle, appearance: 'none' }}>
              <option value="">Select…</option>
              {['Hiring Talent', 'Executive Search', 'Team Build', 'Candidate Application', 'General Enquiry'].map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '11px', letterSpacing: '0.1em', color: '#4A5568', textTransform: 'uppercase', marginBottom: '8px' }}>Message</label>
            <textarea rows="4" placeholder="Tell us about your requirements…" style={{ ...inputStyle, resize: 'vertical' }} />
          </div>

          <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(201,168,76,0.4)' }} whileTap={{ scale: 0.97 }}
            style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #C9A84C, #E8C96A)', color: '#060B18', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer' }}
          >
            {loading ? 'Sending…' : submitted ? 'Message Sent ✓' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
