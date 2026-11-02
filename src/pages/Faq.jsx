import { useState } from "react";
import { Icon } from "../assets.jsx";

const pending = "Contact Paralysis Life Care and the team will help with this question.";

const topics = [
  {
    id: "faq-general",
    number: "01",
    label: "General Information",
    questions: [
      {
        question: "What is Paralysis Life Care?",
        answer:
          "Paralysis Life Care offers physiotherapy and neuro-rehabilitation support for children and adults. Contact the team to talk about the support that may be appropriate.",
      },
      { question: "Where is PLC located?", answer: pending },
      { question: "Is this website a source of medical advice?", answer: pending },
    ],
  },
  {
    id: "faq-services",
    number: "02",
    label: "Rehabilitation Services",
    questions: [
      {
        question: "How do I know which service may be appropriate?",
        answer:
          "Start by discussing your concerns and any existing clinical advice with the team. An appropriate professional should assess individual needs before recommending a service.",
      },
      { question: "How long might rehabilitation take?", answer: pending },
      { question: "Can I ask about a service that is not listed?", answer: pending },
    ],
  },
  {
    id: "faq-appointments",
    number: "03",
    label: "Appointments",
    questions: [
      {
        question: "How can I enquire about a consultation?",
        answer:
          "Use the proposed contact form for a general enquiry, or the supplied phone numbers once verified. An enquiry does not reserve a slot or confirm an appointment. Ask PLC to confirm availability, location, charges and any preparation needed.",
      },
      { question: "What should I prepare before a first visit?", answer: pending },
      { question: "How do I change or cancel an appointment?", answer: pending },
    ],
  },
  {
    id: "faq-pediatric",
    number: "04",
    label: "Pediatric Rehabilitation",
    questions: [
      {
        question: "Can I enquire about support for my child?",
        answer:
          "You may make a general enquiry about your child’s movement or communication needs. The appropriate service and next steps depend on assessment, clinical advice and verified availability. Avoid sharing identifiable medical details through the website form.",
      },
      { question: "Can a parent or caregiver be involved?", answer: pending },
      { question: "Will every child have the same care plan?", answer: pending },
    ],
  },
  {
    id: "faq-adult",
    number: "05",
    label: "Adult Rehabilitation",
    questions: [
      {
        question: "Can adults enquire about neurological rehabilitation?",
        answer:
          "Adults may ask about neurological, stroke and spinal cord injury rehabilitation. The right support depends on an assessment, and existing medical advice should continue to guide care.",
      },
      { question: "Can rehabilitation support everyday activities?", answer: pending },
      { question: "Can a family member help with my enquiry?", answer: pending },
    ],
  },
];

const firstOpen = topics.map((topic) => `${topic.id}-0`);

export default function Faq() {
  const [open, setOpen] = useState(() => new Set(firstOpen));
  const topicSlug = window.location.pathname.split("/").filter(Boolean)[1];
  const active = topicSlug ? `faq-${topicSlug}` : "faq-general";

  const toggle = (id) => {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <section className="page-hero" aria-labelledby="faq-title">
        <div className="page-hero-copy">
          <p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p>
          <h1 className="page-title" id="faq-title">
            A little clarity for the journey ahead.
          </h1>
          <p className="page-lead">
            Find general guidance about rehabilitation enquiries, appointments and care for
            children and adults.
          </p>
        </div>
        <div className="page-note">
          <span className="accent-rule" />
          <p>
            Have a question specific to your needs? Speak with an appropriate healthcare
            professional and confirm service details with PLC.
          </p>
          <p className="page-sign">PARALYSIS LIFE CARE</p>
        </div>
      </section>

      <section className="faq-layout" aria-labelledby="faq-topics">
        <h2 className="visually-hidden" id="faq-topics">
          Questions by topic
        </h2>
        <div className="faq-board">
          <nav className="faq-nav" aria-label="FAQ topics">
            <p>BROWSE BY TOPIC</p>
            {topics.map((topic) => (
              <a
                className={active === topic.id ? "topic-link is-active" : "topic-link"}
                href={`/faq/${topic.id.replace(/^faq-/, "")}`}
                key={topic.id}
              >
                <span>{topic.label}</span>
                {active === topic.id ? <Icon name="arrow-right" width={18} height={18} /> : null}
              </a>
            ))}
            <div className="topic-help">
              <h2>Need more guidance?</h2>
              <p>Our contact page is the place to ask a general question about available support.</p>
              <a className="btn btn-outline" href="/contact">
                Contact Our Team
              </a>
            </div>
          </nav>
          <div className="faq-groups">
            {topics.map((topic) => (
              <section id={topic.id} key={topic.id} aria-labelledby={`${topic.id}-title`}>
                <div className="faq-heading">
                  <span>{topic.number}</span>
                  <h2 id={`${topic.id}-title`}>{topic.label}</h2>
                </div>
                {topic.questions.map((item, index) => {
                  const id = `${topic.id}-${index}`;
                  const expanded = open.has(id);
                  return (
                    <article className={expanded ? "faq-item is-open" : "faq-item"} key={id}>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => toggle(id)}
                      >
                        <span>{item.question}</span>
                        <Icon name={expanded ? "minus" : "plus"} width={20} height={20} />
                      </button>
                      {expanded ? <p>{item.answer}</p> : null}
                    </article>
                  );
                })}
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="disclaimer faq-urgent">
        <h2>For urgent medical concerns, seek appropriate emergency care.</h2>
        <p>
          This website and its enquiry form are not emergency services. Do not wait for a website
          response if urgent assessment or treatment may be needed.
        </p>
      </section>

      <section className="cta" aria-labelledby="faq-contact-title">
        <div className="cta-copy">
          <p className="eyebrow">HERE FOR YOUR NEXT STEP</p>
          <h2 id="faq-contact-title">Every Journey Deserves the Right Support</h2>
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
