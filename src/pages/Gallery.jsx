import { useEffect, useRef, useState } from "react";
import { Icon, Photo } from "../assets.jsx";

const filters = [
  "All",
  "Clinic",
  "Pediatric Rehabilitation",
  "Physiotherapy",
  "Team",
  "Activities",
];

const photos = [
  {
    title: "Clinic gathering",
    category: "Clinic",
    image: "gallery-clinic-1.jpg",
    width: 1024,
    height: 768,
    alt: "Therapists and families gathered in the clinic beneath a motivational banner.",
    caption: "Families and the care team together in the clinic.",
  },
  {
    title: "Treatment room",
    category: "Clinic",
    image: "gallery-clinic-2.jpg",
    width: 710,
    height: 1024,
    alt: "A therapist seated beside a child during a session in the clinic treatment room.",
    caption: "A therapist supporting a child in the clinic treatment room.",
  },
  {
    title: "Standing support",
    category: "Pediatric Rehabilitation",
    image: "gallery-pediatric-1.jpg",
    width: 768,
    height: 1024,
    alt: "Families and therapists gathered around a child using a standing frame.",
    caption: "A child using a standing frame, with family and therapists nearby.",
  },
  {
    title: "Time with families",
    category: "Pediatric Rehabilitation",
    image: "gallery-pediatric-2.jpg",
    width: 768,
    height: 1024,
    alt: "Therapists standing with two children and a family member in the clinic.",
    caption: "Therapists with two children and a family member.",
  },
  {
    title: "Physiotherapy room",
    category: "Physiotherapy",
    image: "gallery-physio-room.jpg",
    width: 1024,
    height: 768,
    alt: "Families and therapists together in the physiotherapy room during a gathering.",
    caption: "Families and therapists gathered in the physiotherapy room.",
  },
  {
    title: "Our care team",
    category: "Team",
    image: "gallery-team-1.jpg",
    width: 1024,
    height: 647,
    alt: "The Paralysis Life Care team standing with a visitor in the clinic hall.",
    caption: "The care team with a visitor in the clinic hall.",
  },
  {
    title: "Team together",
    category: "Team",
    image: "gallery-team-2.jpg",
    width: 1024,
    height: 768,
    alt: "Members of the care team seated together in the clinic lounge.",
    caption: "Members of the care team together in the clinic lounge.",
  },
  {
    title: "Anniversary gathering",
    category: "Activities",
    image: "gallery-activity-1.jpg",
    width: 1024,
    height: 682,
    alt: "The Paralysis Life Care community gathered on stage for the 5th anniversary celebration.",
    caption: "The community gathered for the 5th anniversary celebration.",
  },
  {
    title: "Anniversary celebration",
    category: "Activities",
    image: "gallery-activity-2.jpg",
    width: 1024,
    height: 682,
    alt: "Children and therapists on stage during the 5th anniversary celebration.",
    caption: "Children and therapists on stage during the anniversary celebration.",
  },
];

const columns = [photos.slice(0, 3), photos.slice(3, 6), photos.slice(6, 9)];

function Tile({ photo, onOpen }) {
  return (
    <article className="gallery-tile">
      <button type="button" className="gallery-photo" onClick={onOpen}>
        <Photo file={photo.image} width={photo.width} height={photo.height} alt={photo.alt} />
      </button>
      <div className="gallery-meta">
        <span>{photo.category}</span>
        <button type="button" aria-label={`Preview ${photo.title}`} onClick={onOpen}>
          <Icon name="maximize" width={17} height={17} />
        </button>
      </div>
    </article>
  );
}

function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = photos.length;
  const photo = photos[index];

  const go = (delta) => {
    setIndex((current) => (current + delta + count) % count);
  };

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion) return undefined;
    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % count);
    }, 5500);
    return () => window.clearTimeout(timer);
  }, [index, paused, count]);

  return (
    <section className="lightbox-specimen" aria-labelledby="lightbox-title" aria-roledescription="carousel">
      <p className="eyebrow">MOVE THROUGH THE PHOTOGRAPHS</p>
      <h2 id="lightbox-title">A closer look, with context.</h2>
      <p className="specimen-lead">Use the arrows to look through moments from the clinic, care and celebrations.</p>
      <div
        className="lightbox-frame"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            go(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(-1);
          }
        }}
      >
        <div className="lightbox-bar">
          <p>{photo.category.toUpperCase()}</p>
          <p>
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </p>
        </div>
        <div className="lightbox-viewer">
          <button type="button" className="lightbox-nav" onClick={() => go(-1)} aria-label="Previous photograph">
            <Icon name="arrow-left" width={24} height={24} />
          </button>
          <div className="lightbox-stage">
            <div className="carousel-photo">
              <Photo
                key={photo.image}
                file={photo.image}
                width={photo.width}
                height={photo.height}
                alt={photo.alt}
              />
            </div>
            <div className="lightbox-caption">
              <div>
                <h3>{photo.title}</h3>
                <p>{photo.caption}</p>
              </div>
              <span>{photo.category}</span>
            </div>
          </div>
          <button type="button" className="lightbox-nav" onClick={() => go(1)} aria-label="Next photograph">
            <Icon name="arrow-right" width={18} height={18} />
          </button>
        </div>
        <div className="carousel-dots" role="tablist" aria-label="Photographs">
          {photos.map((item, dotIndex) => (
            <button
              key={item.image}
              type="button"
              role="tab"
              aria-selected={dotIndex === index}
              aria-label={`Show ${item.title}`}
              className={dotIndex === index ? "is-selected" : undefined}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const wasOpen = useRef(false);
  const visible = filter === "All" ? photos : photos.filter((photo) => photo.category === filter);

  useEffect(() => {
    if (active == null) {
      wasOpen.current = false;
      return undefined;
    }
    if (!wasOpen.current) closeRef.current?.focus();
    wasOpen.current = true;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((index) => (index + 1) % visible.length);
      }
      if (event.key === "ArrowLeft") {
        setActive((index) => (index - 1 + visible.length) % visible.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, visible.length]);

  const open = (photo) => setActive(visible.indexOf(photo));
  const current = active == null ? null : visible[active];

  return (
    <>
      <section className="page-hero" aria-labelledby="gallery-page-title">
        <div className="page-hero-copy">
          <p className="eyebrow">OUR GALLERY</p>
          <h1 className="page-title" id="gallery-page-title">
            A glimpse into care, shared with permission.
          </h1>
          <p className="page-lead">
            Moments from the clinic, activities and the people who spend time here.
          </p>
        </div>
        <div className="page-note">
          <span className="accent-rule" />
          <p>Photographs from everyday care at Paralysis Life Care.</p>
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
              onClick={() => {
                setFilter(item);
                setActive(null);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        {filter === "All" ? (
          <div className="gallery-board">
            {columns.map((column, columnIndex) => (
              <div className="gallery-col" key={columnIndex}>
                {column.map((photo) => (
                  <Tile photo={photo} key={photo.image} onOpen={() => open(photo)} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-filtered">
            {visible.map((photo) => (
              <Tile photo={photo} key={photo.image} onOpen={() => open(photo)} />
            ))}
          </div>
        )}
      </section>

      <Carousel />

      <section className="consent-points" aria-label="Gallery consent principles">
        <article>
          <h2>Permission comes first</h2>
          <p>Photographs are shared with the permission of the people in them.</p>
        </article>
        <article>
          <h2>Privacy is respected</h2>
          <p>Care stays personal, and private details stay out of the pictures.</p>
        </article>
        <article>
          <h2>Context matters</h2>
          <p>Each photograph is shown with a short description of the moment.</p>
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
        <a className="btn btn-light" href="/contact">
          Get in Touch
          <Icon name="arrow-up-right-dark" width={18} height={18} />
        </a>
      </section>

      {current ? (
        <div className="lightbox-overlay" onMouseDown={() => setActive(null)}>
          <div
            className="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="lightbox-dialog-top">
              <div>
                <p className="lightbox-dialog-kicker">{current.category}</p>
                <h2>{current.title}</h2>
              </div>
              <button ref={closeRef} className="lightbox-dismiss" type="button" onClick={() => setActive(null)}>
                Close
                <Icon name="close" width={18} height={18} />
              </button>
            </div>
            <div className="lightbox-dialog-photo">
              <Photo file={current.image} width={current.width} height={current.height} alt={current.alt} />
            </div>
            <p>{current.caption}</p>
            <div className="lightbox-dialog-nav">
              <button type="button" onClick={() => setActive((index) => (index - 1 + visible.length) % visible.length)}>
                Previous
              </button>
              <button type="button" onClick={() => setActive((index) => (index + 1) % visible.length)}>
                Next
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
