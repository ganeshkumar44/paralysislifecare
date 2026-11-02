import { Icon } from "../assets.jsx";

export default function LegalPage({
  basePath,
  eyebrow,
  title,
  titleId,
  lead,
  note,
  sections,
}) {
  return (
    <>
      <section className="page-hero" aria-labelledby={titleId}>
        <div className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title" id={titleId}>
            {title}
          </h1>
          <p className="page-lead">{lead}</p>
        </div>
        <div className="page-note">
          <span className="accent-rule" />
          <p>{note}</p>
          <p className="page-sign">PARALYSIS LIFE CARE</p>
        </div>
      </section>
      <section className="legal-layout">
        <div className="legal-board">
          <nav className="legal-nav" aria-label="On this page">
            <p>ON THIS PAGE</p>
            {sections.map((section) => (
              <a href={`${basePath}/${section.id.replace(/^(terms|privacy)-/, "")}`} key={section.id}>
                {section.number} {section.title}
              </a>
            ))}
          </nav>
          <div className="legal-doc">
            {sections.map((section) => (
              <article id={section.id} key={section.id}>
                <p>SECTION {section.number}</p>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
            <aside className="legal-close">
              <h2>Questions about this information?</h2>
              <p>
                Contact PLC through a verified channel. Official legal and privacy contact details
                will be added after confirmation.
              </p>
              <a className="btn btn-outline" href="/contact">
                Contact Us
                <Icon name="arrow-up-right-dark" width={18} height={18} />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
