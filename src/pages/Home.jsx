import { Icon, Photo } from "../assets.jsx";
import {
  featureRows,
  galleryItems,
  photoCaption,
  principles,
  services,
  stories,
} from "../content";
export default function Home() {
  return (
    <>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">COMPASSIONATE NEURO-REHABILITATION CARE</p>
            <h1 id="hero-title">Helping Every Individual Move Towards a Better Tomorrow.</h1>
            <p className="hero-lead">
              Personalized physiotherapy and neuro-rehabilitation support for children and adults,
              delivered with compassion, care, and a commitment to individual progress.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#services">
                Explore Our Services
                <Icon name="arrow-up-right" width={18} height={18} />
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact Our Team
                <Icon name="arrow-up-right-dark" width={18} height={18} />
              </a>
            </div>
            <p className="care-promise">
              <Icon name="heart-handshake" width={22} height={22} />
              Care-focused rehabilitation for children and adults.
            </p>
          </div>
          <div className="hero-visual">
            <figure className="photo-block">
              <div className="photo-frame photo-frame--hero">
                <Photo
                  file="hero-rehabilitation.png"
                  width={1152}
                  height={928}
                  alt="Adult and child sitting with a clinician on a therapy mat."
                />
              </div>
              <figcaption className="photo-caption">{photoCaption}</figcaption>
            </figure>
            <aside className="care-note">
              <Icon name="sprout" width={28} height={28} />
              <p>
                <strong>Small steps. Meaningful possibilities.</strong>
                <span>Support shaped around the person, at their pace.</span>
              </p>
            </aside>
          </div>
        </section>

        <section className="intro" id="welcome" aria-labelledby="about-title">
          <div className="intro-media">
            <figure className="photo-block">
              <div className="photo-frame photo-frame--intro">
                <Photo
                  file="intro-rehabilitation.png"
                  width={1024}
                  height={1024}
                  alt="Clinician seated with an adult during a rehabilitation conversation."
                />
              </div>
              <figcaption className="photo-caption">{photoCaption}</figcaption>
            </figure>
          </div>
          <div className="intro-copy">
            <div className="section-intro">
              <p className="eyebrow">WELCOME TO PARALYSIS LIFE CARE</p>
              <h2 id="about-title">Care That Understands Every Journey</h2>
              <p>
                Every person brings a different story, set of needs and hopes for daily life. At
                PLC, our care philosophy begins with listening and making space for what matters to
                the individual and their family.
              </p>
            </div>
            <ul className="principles">
              {principles.map((item) => (
                <li key={item}>
                  <Icon name="circle-check" width={20} height={20} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="notice">
              <Icon name="info" width={18} height={18} />
              <span>
                Care philosophy draft • Team experience and service details require PLC
                verification.
              </span>
            </p>
            <a className="btn btn-outline" href="#about">
              Learn More About Us
              <Icon name="arrow-up-right-dark" width={18} height={18} />
            </a>
          </div>
        </section>

        <section className="services" aria-labelledby="services-title">
          <div className="section-head">
            <div className="section-intro">
              <p className="eyebrow">SUPPORT FOR DIFFERENT NEEDS</p>
              <h2 id="services-title">Specialized Rehabilitation Services</h2>
              <p>
                Explore areas of rehabilitation support for children and adults. Individual needs
                and suitability should be discussed with the care team.
              </p>
            </div>
            <a className="text-action" href="#services">
              Explore all services
              <Icon name="arrow-right" width={18} height={18} />
            </a>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.id}>
                <div className="service-symbol">
                  <Icon name={service.icon} width={25} height={25} />
                </div>
                <div className="service-summary">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <a className="text-action" href={`#${service.id}`}>
                  Learn More
                  <Icon name="arrow-right" width={18} height={18} />
                </a>
              </article>
            ))}
          </div>
          <p className="notice">
            <Icon name="info" width={18} height={18} />
            <span>
              Service list and descriptions are draft and pending PLC confirmation. Availability
              and suitability require individual discussion.
            </span>
          </p>
        </section>

        <section className="philosophy" id="approach" aria-labelledby="approach-title">
          <div className="philosophy-copy">
            <div className="section-intro">
              <p className="eyebrow">OUR CARE PHILOSOPHY</p>
              <h2 id="approach-title">Care Built Around People, Not Just Conditions</h2>
              <p>
                Thoughtful rehabilitation considers the whole person: their routines, relationships,
                priorities and the everyday activities they want to work towards.
              </p>
            </div>
            <div className="features">
              {featureRows.map((row) => (
                <div className="feature-row" key={row[0]}>
                  {row.map((feature) => (
                    <p key={feature}>
                      <Icon name="check" width={19} height={19} />
                      {feature}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <p className="approach-note">
              Our proposed care approach is subject to PLC review. Specific disciplines and care
              plans depend on individual assessment and availability.
            </p>
          </div>
          <div className="philosophy-media">
            <figure className="photo-block">
              <div className="photo-frame photo-frame--care">
                <Photo
                  file="care-rehabilitation.png"
                  width={1024}
                  height={1024}
                  alt="Two people seated together during a rehabilitation session, one using a wheelchair."
                />
              </div>
              <figcaption className="photo-caption">{photoCaption}</figcaption>
            </figure>
          </div>
        </section>

        <section className="team" id="team-preview" aria-labelledby="team-title">
          <div className="section-head">
            <div className="section-intro">
              <p className="eyebrow">THE HUMAN SIDE OF CARE</p>
              <h2 id="team-title">Meet the People Behind the Care</h2>
              <p>
                A place to introduce the professionals who will support your journey. Verified team
                profiles are being prepared for publication.
              </p>
            </div>
            <a className="btn btn-outline" href="#team">
              Meet Our Team
              <Icon name="arrow-up-right-dark" width={18} height={18} />
            </a>
          </div>
          <div className="team-grid">
            {[0, 1, 2].map((slot) => (
              <article className="team-card" key={slot}>
                <div className="portrait">
                  <p className="portrait-status">APPROVAL REQUIRED</p>
                  <div className="portrait-body">
                    <Icon name="user-round" width={40} height={40} />
                    <strong>Portrait awaiting approval</strong>
                    <span>PLC-verified portrait to be supplied</span>
                  </div>
                  <p className="portrait-foot">No stock identity used</p>
                </div>
                <div className="profile-details">
                  <p className="profile-kicker">PLC VERIFICATION PENDING</p>
                  <h3>Full name awaiting approval</h3>
                  <p>Designation to be confirmed by PLC</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="gallery" aria-labelledby="gallery-title">
          <div className="section-head">
            <div className="section-intro">
              <p className="eyebrow">SPACES, CONNECTIONS &amp; EVERYDAY MOMENTS</p>
              <h2 id="gallery-title">A Glimpse Into Our Care</h2>
              <p>
                A future collection of consented photographs from PLC. Images will be shared only
                after permission and content approval.
              </p>
            </div>
            <a className="text-action" href="#gallery">
              View Full Gallery
              <Icon name="arrow-right" width={18} height={18} />
            </a>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article className={`gallery-card gallery-card--${item.variant}`} key={item.title}>
                <p className="portrait-status">APPROVAL REQUIRED</p>
                <div className="portrait-body">
                  <Icon name="image" width={40} height={40} />
                  <strong>{item.title}</strong>
                  <span>Consented PLC image to be supplied</span>
                </div>
                <p className="portrait-foot">Consent, caption &amp; alt text pending</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stories" id="stories" aria-labelledby="stories-title">
          <div className="section-intro">
            <p className="eyebrow">VOICES TO BE SHARED WITH PERMISSION</p>
            <h2 id="stories-title">Stories of Care and Progress</h2>
            <p>
              Every experience is personal. This space is reserved for stories shared voluntarily
              and approved for publication.
            </p>
          </div>
          <div className="stories-grid">
            {stories.map((story) => (
              <article className="story-card" key={story.title}>
                <Icon name="message-square-heart" width={30} height={30} />
                <div>
                  <h3>{story.title}</h3>
                  <p>{story.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" aria-labelledby="contact-title">
          <div className="cta-copy">
            <p className="eyebrow">HERE FOR YOUR NEXT STEP</p>
            <h2 id="contact-title">Every Journey Deserves the Right Support</h2>
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
    </>
  );
}
