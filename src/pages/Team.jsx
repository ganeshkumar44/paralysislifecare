import { Icon } from "../assets.jsx";
import ProfileCard from "../components/ProfileCard";

const prompts = [
  {
    icon: "user-round-check",
    title: "Who might be involved in my care?",
    text: "Ask which professional or discipline may be appropriate for your needs.",
  },
  {
    icon: "badge-check",
    title: "What professional information is available?",
    text: "Ask about verified qualifications, relevant experience and the scope of the service.",
  },
  {
    icon: "messages-square-24",
    title: "How can my family be involved?",
    text: "Discuss your preferences for communication and family or caregiver participation.",
  },
];

export default function Team() {
  return (
    <>
      <section className="page-hero" aria-labelledby="team-page-title">
        <div className="page-hero-copy">
          <p className="eyebrow">ABOUT US / OUR TEAM</p>
          <h1 className="page-title" id="team-page-title">
            Meet the people who will support your journey.
          </h1>
          <p className="page-lead">
            Care begins with a human connection. This page is reserved for verified introductions
            to the people behind Paralysis Life Care.
          </p>
        </div>
        <aside className="page-note">
          <span className="accent-rule" aria-hidden="true" />
          <p>
            Names, portraits and professional details are awaiting PLC approval. No staff
            identities or credentials have been invented.
          </p>
          <p className="page-sign">PARALYSIS LIFE CARE</p>
        </aside>
      </section>

      <section className="profiles" aria-labelledby="profiles-title">
        <div className="section-intro">
          <p className="eyebrow">OUR CARE TEAM</p>
          <h2 id="profiles-title">Real people. Verified introductions.</h2>
          <p>
            The following are structured profile placeholders, not current staff listings. Each
            profile will be completed with PLC-approved information and a consented portrait.
          </p>
        </div>
        <p className="notice">
          <Icon name="info" width={18} height={18} />
          <span>
            Publication hold • All profile photographs, names, designations, qualifications,
            specializations and biographies must be supplied and verified by PLC.
          </span>
        </p>
        <div className="team-grid">
          {[0, 1, 2].map((slot) => (
            <ProfileCard detailed key={slot} />
          ))}
        </div>
      </section>

      <section className="questions" aria-labelledby="questions-title">
        <div className="questions-copy section-intro">
          <p className="eyebrow">A MORE INFORMED CONVERSATION</p>
          <h2 id="questions-title">It’s okay to ask questions about your care.</h2>
          <p>
            Understanding who may support you is an important part of choosing a service. The PLC
            team can help clarify details once verified information is available.
          </p>
        </div>
        <div className="prompt-list">
          {prompts.map((prompt) => (
            <article className="prompt" key={prompt.title}>
              <Icon name={prompt.icon} width={24} height={24} />
              <div>
                <h3>{prompt.title}</h3>
                <p>{prompt.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="transparency">
        <h2>A note on transparency</h2>
        <p>
          Team composition, professional registrations where applicable, availability and
          individual service responsibilities are not yet confirmed for this design. Please
          contact PLC for verified information before making care decisions.
        </p>
      </section>

      <section className="cta" aria-labelledby="team-contact-title">
        <div className="cta-copy">
          <p className="eyebrow">HERE FOR YOUR NEXT STEP</p>
          <h2 id="team-contact-title">Every Journey Deserves the Right Support</h2>
          <p>
            Connect with our team to learn more about rehabilitation services and available
            support.
          </p>
        </div>
        <a className="btn btn-light" href="#footer-contact">
          Get in Touch
          <Icon name="arrow-up-right-dark" width={18} height={18} />
        </a>
      </section>
    </>
  );
}
