import { Icon, Photo } from "../assets.jsx";
import { services } from "../content";

export default function Services() {
  return (
    <>
      <section className="page-hero" aria-labelledby="services-page-title">
        <div className="page-hero-copy">
          <p className="eyebrow">OUR SERVICES</p>
          <h1 className="page-title" id="services-page-title">
            Rehabilitation support, shaped around you.
          </h1>
          <p className="page-lead">
            Explore proposed areas of pediatric and adult rehabilitation care. Start with a
            conversation about your needs, your priorities and the support that may be
            appropriate.
          </p>
        </div>
        <div className="page-note">
          <span className="accent-rule" />
          <p>Talk with the care team about the support that may be appropriate for you.</p>
          <p className="page-sign">PARALYSIS LIFE CARE</p>
        </div>
      </section>

      <section className="service-overview" aria-labelledby="service-overview-title">
        <div className="section-intro service-overview-copy">
          <p className="eyebrow">UNDERSTANDING YOUR OPTIONS</p>
          <h2 id="service-overview-title">Different needs. One people-first philosophy.</h2>
          <p>
            Rehabilitation is personal. These introductions are a starting point, not a diagnosis
            or a promise of progress. Ask the care team about assessment and the support that may
            be appropriate.
          </p>
        </div>
        <div className="directory">
          {services.map((service) => (
            <a className="directory-item" href={`/services/${service.id}`} key={service.id}>
              <Icon name={service.icon} width={25} height={25} />
              <span>{service.title}</span>
            </a>
          ))}
        </div>
      </section>

      {services.map((service, index) => (
        <article
          className={index % 2 ? "service-band is-flip" : "service-band"}
          id={service.id}
          key={service.id}
        >
          <div className="service-copy">
            <div className="service-kicker">
              <Icon name={service.icon} width={25} height={25} />
              <p>CARE AREA 0{index + 1}</p>
            </div>
            <h2>{service.title}</h2>
            <p className="service-lead">{service.text}</p>
            <div className="service-point">
              <h3>What the service involves</h3>
              <p>{service.involves}</p>
            </div>
            <div className="service-point">
              <h3>Who may benefit</h3>
              <p>{service.benefit}</p>
            </div>
            <a className="text-action" href="/contact">
              Ask about this service
              <Icon name="arrow-right" width={18} height={18} />
            </a>
          </div>
          <div className="service-visual">
            <figure className="photo-block">
              <div className="photo-frame photo-frame--service">
                <Photo file={service.image} width={510} height={408} alt="" />
              </div>
            </figure>
            <aside className="service-guidance">
              <p>A THOUGHTFUL NEXT STEP</p>
              <p>{service.next}</p>
            </aside>
          </div>
        </article>
      ))}

      <section className="disclaimer">
        <h2>Information to support a conversation, not replace clinical advice.</h2>
        <p>
          These descriptions support a conversation with the care team. They do not replace clinical
          advice, and outcomes vary. For urgent medical concerns, contact an appropriate emergency
          service.
        </p>
      </section>

      <section className="cta" aria-labelledby="services-contact-title">
        <div className="cta-copy">
          <p className="eyebrow">HERE FOR YOUR NEXT STEP</p>
          <h2 id="services-contact-title">Every Journey Deserves the Right Support</h2>
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
    </>
  );
}
