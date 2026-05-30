export default function Marquee() {
  const brands = ['Ritz-Carlton', 'Four Seasons', 'Mandarin Oriental', 'Burj Al Arab', 'Aman Resorts', 'Rosewood Hotels', 'The Peninsula', 'St. Regis', 'Waldorf Astoria', 'Raffles Hotels', 'One&Only', 'Belmond'];

  return (
    <div style={{ background: '#0A1628', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)', padding: '20px 0', overflow: 'hidden' }}>
      <div style={{ display: 'flex', gap: '64px', width: 'max-content' }} className="marquee-track">
        {[...brands, ...brands].map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', whiteSpace: 'nowrap' }}>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C9A84C', display: 'inline-block' }} />
            <span style={{ color: '#4A5568', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
