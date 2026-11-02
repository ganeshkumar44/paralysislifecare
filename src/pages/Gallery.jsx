import { useEffect, useState } from "react";
import { Icon } from "../assets.jsx";

const filters = [
  "All",
  "Clinic",
  "Pediatric Rehabilitation",
  "Physiotherapy",
  "Team",
  "Activities",
];

const photos = [
  { title: "Clinic photograph", category: "Clinic", height: 390 },
  { title: "Team photograph", category: "Team", height: 310 },
  { title: "Activities photograph", category: "Activities", height: 350 },
  { title: "Pediatric Rehabilitation photograph", category: "Pediatric Rehabilitation", height: 300 },
  { title: "Physiotherapy photograph", category: "Physiotherapy", height: 420 },
  { title: "Clinic photograph", category: "Clinic", height: 330 },
  { title: "Activities photograph", category: "Activities", height: 350 },
  { title: "Pediatric Rehabilitation photograph", category: "Pediatric Rehabilitation", height: 320 },
  { title: "Team photograph", category: "Team", height: 380 },
];

const columns = [photos.slice(0, 3), photos.slice(3, 6), photos.slice(6, 9)];

function Tile({ photo, onOpen }) {
  return (
    <article className="gallery-tile">
      <div className="gallery-placeholder" style={{ height: photo.height }}>
        <p className="approval">APPROVAL REQUIRED</p>
        <div className="gallery-waiting">
          <Icon name="image" width={40} height={40} />
          <p>{photo.title}</p>
          <p>Consented PLC image to be supplied</p>
        </div>
        <p className="pending-note">Consent, caption &amp; alt text pending</p>
      </div>
      <div className="gallery-meta">
        <span>{photo.category}</span>
        <button type="button" aria-label={`Preview ${photo.title}`} onClick={onOpen}>
          <Icon name="maximize" width={17} height={17} />
        </button>
      </div>
    </article>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const visible = filter === "All" ? photos : photos.filter((photo) => photo.category === filter);

  useEffect(() => {
    if (active == null) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((index) => (index + 1) % visible.length);
      if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + visible.length) % visible.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, visible.length]);

  const open = (photo) => setActive(visible.indexOf(photo));

  return (
    <>
      <section className="page-hero" aria-labelledby="gallery-page-title">
        <div className="page-hero-copy">
          <p className="eyebrow">OUR GALLERY</p>
          <h1 className="page-title" id="gallery-page-title">
            A glimpse into care, shared with permission.
          </h1>
          <p className="page-lead">
            A space for moments from PLC’s care environment, activities and team. Every photograph
            will need consent and approval before it becomes part of this collection.
          </p>
        </div>
        <div className="page-note">
          <span className="accent-rule" />
          <p>
            No PLC photographs have been supplied. All gallery tiles are explicit
            approval-required placeholders.
          </p>
          <p className="page-sign">PARALYSIS LIFE CARE</p>
        </div>
      </section>

      <section className="collection" aria-labelledby="collection-title">
        <h2 className="visually-hidden" id="collection-title">
          Photo collection
        </h2>
        <div className="filters" role="group" aria-label="Gallery categories">
          {filters.map((item) => (
            <button
              className={item === filter ? "filter is-selected" : "filter"}
              type="button"
              aria-pressed={item === filter}
              key={item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="notice">
          <Icon name="info" width={18} height={18} />
          <span>
            Photo approval required • Use only consented PLC images. Verify subject permissions,
            captions, alt text and the intended use of each image before publication.
          </span>
        </p>
        {filter === "All" ? (
          <div className="gallery-board">
            {columns.map((column, columnIndex) => (
              <div className="gallery-col" key={columnIndex}>
                {column.map((photo, index) => (
                  <Tile photo={photo} key={`${columnIndex}-${index}`} onOpen={() => open(photo)} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-filtered">
            {visible.map((photo, index) => (
              <Tile photo={photo} key={`${photo.category}-${index}`} onOpen={() => open(photo)} />
            ))}
          </div>
        )}
      </section>

      <section className="lightbox-specimen" aria-labelledby="lightbox-title">
        <p className="eyebrow">IMAGE VIEWING / STATIC STATE</p>
        <h2 id="lightbox-title">A closer look, with context.</h2>
        <p className="specimen-lead">
          The specimen below shows the intended open-gallery state. It does not open or navigate in
          this static design.
        </p>
        <div className="lightbox-frame">
          <div className="lightbox-bar">
            <p>STATIC LIGHTBOX PREVIEW</p>
            <span className="lightbox-close" aria-hidden="true">
              <Icon name="close" width={22} height={22} />
            </span>
          </div>
          <div className="lightbox-viewer">
            <span className="lightbox-nav" aria-hidden="true">
              <Icon name="arrow-left" width={24} height={24} />
            </span>
            <div className="lightbox-stage">
              <div className="gallery-placeholder" style={{ height: 330 }}>
                <p className="approval">APPROVAL REQUIRED</p>
                <div className="gallery-waiting">
                  <Icon name="image" width={40} height={40} />
                  <p>Clinic photograph</p>
                  <p>Consented PLC image to be supplied</p>
                </div>
                <p className="pending-note">Consent, caption &amp; alt text pending</p>
              </div>
              <div className="lightbox-caption">
                <div>
                  <h3>PLC image caption awaiting approval</h3>
                  <p>
                    Consented photograph, descriptive alt text and publication permission to be
                    supplied.
                  </p>
                </div>
                <span>Preview only</span>
              </div>
            </div>
            <span className="lightbox-nav" aria-hidden="true">
              <Icon name="arrow-right" width={18} height={18} />
            </span>
          </div>
          <p className="lightbox-hint">
            Implementation: Escape closes • Arrow keys navigate • Focus stays within the dialog
          </p>
        </div>
      </section>

      <section className="consent-points" aria-label="Gallery consent principles">
        <article>
          <h2>Permission comes first</h2>
          <p>Only images with appropriate consent and approved usage should be published.</p>
        </article>
        <article>
          <h2>Privacy is respected</h2>
          <p>Avoid visible records, identifying details or sensitive information in the background.</p>
        </article>
        <article>
          <h2>Context matters</h2>
          <p>Use descriptive captions and alt text without identifying people unless expressly approved.</p>
        </article>
      </section>

      <section className="cta" aria-labelledby="gallery-contact-title">
        <div className="cta-copy">
          <p className="eyebrow">HERE FOR YOUR NEXT STEP</p>
          <h2 id="gallery-contact-title">Every Journey Deserves the Right Support</h2>
          <p>
            Connect with our team to learn more about rehabilitation services and available
            support.
          </p>
        </div>
        <a className="btn btn-light" href="#contact">
          Get in Touch
          <Icon name="arrow-up-right-dark" width={18} height={18} />
        </a>
      </section>

      {active != null ? (
        <div className="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Gallery preview">
          <button className="lightbox-dismiss" type="button" onClick={() => setActive(null)}>
            Close preview
            <Icon name="close" width={22} height={22} />
          </button>
          <p className="lightbox-dialog-kicker">APPROVAL REQUIRED</p>
          <h2>{visible[active].title}</h2>
          <p>Consented PLC image to be supplied. This preview does not publish a photograph.</p>
          <div className="lightbox-dialog-nav">
            <button
              type="button"
              onClick={() => setActive((index) => (index - 1 + visible.length) % visible.length)}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setActive((index) => (index + 1) % visible.length)}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
