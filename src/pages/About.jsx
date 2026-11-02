import { Icon, Photo } from "../assets.jsx";
import ProfileCard from "../components/ProfileCard";
import { teamMembers } from "../content";

const steps = [
  {
    title: "Listen first",
    text: "Understand the person’s routines, priorities and concerns, alongside the perspectives of their family or support network.",
  },
  {
    title: "Plan together",
    text: "Discuss realistic, individual goals and the support that may be appropriate after assessment.",
  },
  {
    title: "Support participation",
    text: "Keep everyday activities and meaningful participation at the heart of rehabilitation.",
  },
  {
    title: "Review and adapt",
    text: "Revisit the plan as needs change, with space for questions and shared decisions.",
  },
];

const values = [
  {
    icon: "heart-handshake",
    title: "Compassion",
    text: "Care should feel respectful, patient and human.",
  },
  {
    icon: "fingerprint",
    title: "Individuality",
    text: "No two people or rehabilitation journeys are the same.",
  },
  {
    icon: "messages-square",
    title: "Collaboration",
    text: "Listening and clear communication help people take part in decisions.",
  },
  {
    icon: "sprout",
    title: "Everyday purpose",
    text: "Meaningful goals begin with what matters in daily life.",
  },
];

export default function About() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-page-title">
        <div className="page-hero-copy">
          <p className="eyebrow">ABOUT PARALYSIS LIFE CARE</p>
          <h1 className="page-title" id="about-page-title">
            People first. Care with purpose.
          </h1>
          <p className="page-lead">
            A compassionate approach to physiotherapy and neuro-rehabilitation, shaped around the
            lives of children, adults and the people who care for them.
          </p>
        </div>
        <aside className="page-note">
          <span className="accent-rule" aria-hidden="true" />
          <p>Thoughtful support. Individual journeys. Care that puts people first.</p>
          <p className="page-sign">PARALYSIS LIFE CARE</p>
        </aside>
      </section>

      <section className="story" aria-labelledby="who-title">
        <div className="story-media">
          <figure className="photo-block">
            <div className="photo-frame photo-frame--about">
              <Photo
                file="about-rehabilitation.png"
                width={1024}
                height={1024}
                alt="Clinician seated with an adult during a rehabilitation conversation."
              />
            </div>
          </figure>
        </div>
        <div className="story-copy">
          <div className="section-intro">
            <p className="eyebrow">WHO WE ARE</p>
            <h2 id="who-title">Care That Understands Every Journey</h2>
            <p>
              Paralysis Life Care is presented as a pediatric and adult physiotherapy and
              neuro-rehabilitation care organization. This website brings its proposed areas of
              support together in one clear, welcoming place.
            </p>
          </div>
          <p>
            Our care philosophy looks beyond a condition to the person living with it. The aim is
            to make conversations about rehabilitation more approachable, helping individuals and
            families understand their options and ask informed questions.
          </p>
        </div>
      </section>

      <section className="purpose-grid" aria-label="Mission and vision">
        <article className="purpose-card purpose-card--mission">
          <p className="eyebrow">OUR MISSION</p>
          <h2>Support that begins with understanding.</h2>
          <p>
            To offer an individual-centered approach to rehabilitation, with compassion, clear
            communication and respect for the goals of each person and family.
          </p>
        </article>
        <article className="purpose-card purpose-card--vision">
          <p className="eyebrow">OUR VISION</p>
          <h2>A more supported everyday life.</h2>
          <p>
            To work towards a care environment where children and adults feel heard, supported and
            able to explore meaningful possibilities in daily life.
          </p>
        </article>
      </section>

      <section className="approach-layout" aria-labelledby="approach-page-title">
        <div className="approach-intro">
          <div className="section-intro">
            <p className="eyebrow">OUR APPROACH</p>
            <h2 id="approach-page-title">A conversation, not a one-size-fits-all plan.</h2>
            <p>
              Rehabilitation needs can change over time. A thoughtful care process leaves room to
              listen, reflect and adapt.
            </p>
          </div>
        </div>
        <ol className="steps">
          {steps.map((step, index) => (
            <li className="step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="values" aria-labelledby="values-title">
        <div className="section-intro">
          <p className="eyebrow">WHAT GUIDES US</p>
          <h2 id="values-title">Values that make care feel human</h2>
        </div>
        <div className="value-grid">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <Icon name={value.icon} width={28} height={28} />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-preview" aria-labelledby="about-team-title">
        <div className="section-head">
          <div className="section-intro">
            <p className="eyebrow">OUR TEAM</p>
            <h2 id="about-team-title">The people behind the care</h2>
            <p>
              Meet the physiotherapists who support children and adults at Paralysis Life Care.
            </p>
          </div>
          <a className="btn btn-outline" href="/team">
            Meet Our Team
            <Icon name="arrow-up-right-dark" width={18} height={18} />
          </a>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <ProfileCard member={member} key={member.name} />
          ))}
        </div>
      </section>

      <section className="cta" aria-labelledby="about-contact-title">
        <div className="cta-copy">
          <p className="eyebrow">HERE FOR YOUR NEXT STEP</p>
          <h2 id="about-contact-title">Every Journey Deserves the Right Support</h2>
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
