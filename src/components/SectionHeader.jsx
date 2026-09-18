export const SectionHeader = ({ number, label, title, copy }) => (
  <header className="section-header">
    <div className="section-kicker">
      <span>[{number}]</span>
      <span>{label}</span>
      <span className="section-kicker-line" aria-hidden="true" />
    </div>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </header>
);
