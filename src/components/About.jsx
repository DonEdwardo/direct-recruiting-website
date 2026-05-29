import FadeUp from './FadeUp';

const credentials = [
  { num: '5★', title: 'Exclusively Retained', desc: 'Sole recruiting partner for a prestigious Royal Palace in the Kingdom of Saudi Arabia.' },
  { num: '45+', title: 'Countries Sourced', desc: 'A global talent network spanning five continents, from Indonesia to Europe and beyond.' },
  { num: '100%', title: 'Discreet Operations', desc: 'Every search is conducted with absolute confidentiality. No exceptions, no compromises.' },
  { num: '24h', title: 'Guaranteed Response', desc: 'Every application acknowledged and reviewed within 24 hours of submission.' },
];

const pillars = [
  { icon: '◈', title: 'Uncompromising Excellence', desc: 'Our standard is not the industry\'s best, it is the palace\'s finest. We present only the exceptional.' },
  { icon: '◈', title: 'Absolute Discretion', desc: 'Every search, every placement, every conversation conducted with complete confidentiality.' },
  { icon: '◈', title: 'Precision Placement', desc: 'We do not submit candidates. We curate, verify, and present world-class professionals.' },
];

export default function About() {
  return (
    <section className="section section-slate" id="about">
      <div className="about-inner">
        <FadeUp>
          <div>
            <div className="about-eyebrow">About Direct Recruiting</div>
            <h2 className="about-title">We Build <span style={{ color: 'var(--accent)' }}>Legacies.</span></h2>
            <p className="about-body">
              Direct Recruitment &amp; Headhunting operates at the intersection of luxury
              hospitality and exceptional human talent. We are exclusively retained to
              place world-class professionals inside one of the most prestigious private
              palaces in the Kingdom of Saudi Arabia, an environment where only the
              finest will do.
            </p>
            <p className="about-body">
              We don't operate like a traditional recruitment agency. We think like a
              luxury brand, act with the precision of a private concierge, and deliver
              with the discretion expected at the highest levels of royal service.
            </p>
            <div className="about-creds">
              {credentials.map((c) => (
                <div key={c.title} className="about-cred">
                  <div className="about-cred-num">{c.num}</div>
                  <div className="about-cred-text">
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        <div>
          <div className="about-pillars">
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.1}>
                <div className="about-pillar">
                  <div className="about-pillar-icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
