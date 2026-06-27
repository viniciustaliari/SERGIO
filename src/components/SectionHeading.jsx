export function SectionHeading({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`section-heading section-heading-${align}`} data-reveal>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
