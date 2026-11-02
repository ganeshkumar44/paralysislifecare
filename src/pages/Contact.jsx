import { useState } from "react";
import { Icon } from "../assets.jsx";
import { services } from "../content";

const details = [
  { icon: "mail", title: "Email address", text: "Awaiting PLC-confirmed email address" },
  { icon: "map-pin", title: "Clinic address", text: "Awaiting PLC-verified address and location" },
  { icon: "clock", title: "Opening hours", text: "Awaiting confirmed days and consultation hours" },
  { icon: "globe", title: "Social profiles", text: "Awaiting verified PLC social links" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="page-hero" aria-labelledby="contact-page-title">
        <div className="page-hero-copy">
          <p className="eyebrow">CONTACT PARALYSIS LIFE CARE</p>
          <h1 className="page-title" id="contact-page-title">
            Let’s talk about your next step.
          </h1>
          <p className="page-lead">
            Ask about rehabilitation services or how to make an enquiry. Share only the contact
            details and general information needed for the team to respond.
          </p>
        </div>
        <div className="page-note">
          <span className="accent-rule" />
          <p>
            This enquiry form is not an emergency channel. For urgent medical concerns, seek
            appropriate emergency care.
          </p>
          <p className="page-sign">PARALYSIS LIFE CARE</p>
        </div>
      </section>

      <section className="contact-layout" aria-labelledby="listen-title">
        <div className="contact-info">
          <div className="phone-block">
            <h2 id="listen-title">We’re here to listen.</h2>
            <p>
              Use these supplied phone details once confirmed, or leave a general enquiry for the
              team.
            </p>
            <div className="phone-card">
              <Icon name="phone" width={26} height={26} />
              <div>
                <a href="tel:6000511473">6000511473</a>
                <a href="tel:6003873792">6003873792</a>
                <p>Supplied numbers • Verify before publishing</p>
              </div>
            </div>
          </div>
          <div className="detail-list">
            {details.map((detail) => (
              <div className="detail" key={detail.title}>
                <Icon name={detail.icon} width={22} height={22} />
                <div>
                  <h3>{detail.title}</h3>
                  <p>{detail.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="map-placeholder">
            <Icon name="map-pin-lg" width={36} height={36} />
            <p>Verified map pending</p>
            <p>
              A map will be added after PLC confirms the address, location pin and embed privacy
              requirements.
            </p>
          </div>
        </div>

        <form className="enquiry" id="enquiry" onSubmit={submit}>
          <div className="enquiry-intro">
            <h2>Send an enquiry</h2>
            <p>
              Fields marked * are required in the proposed form. An enquiry is not a confirmed
              appointment; availability must be agreed with PLC.
            </p>
          </div>
          <label className="field">
            <span>Full Name *</span>
            <input name="name" type="text" required placeholder="Your full name" />
          </label>
          <div className="field-row">
            <label className="field">
              <span>Phone Number *</span>
              <input name="phone" type="tel" required placeholder="Your contact number" />
            </label>
            <label className="field">
              <span>Email Address</span>
              <input name="email" type="email" placeholder="Your email address" />
            </label>
          </div>
          <label className="field">
            <span>Service of Interest *</span>
            <select name="service" required defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
            <small>Listed care areas are pending PLC confirmation.</small>
          </label>
          <label className="field">
            <span>Preferred Location</span>
            <select name="location" defaultValue="" disabled>
              <option value="">Select a preferred location</option>
            </select>
            <small>Location options will be added after PLC verification.</small>
          </label>
          <label className="field">
            <span>Message</span>
            <textarea name="message" rows={5} placeholder="How can we help with your general enquiry?" />
          </label>
          <p className="notice">
            <Icon name="info" width={18} height={18} />
            <span>
              Protect your privacy • Please do not include diagnoses, medical records, test results
              or other sensitive medical information in this form.
            </span>
          </p>
          <label className="consent">
            <input name="privacy" type="checkbox" required />
            <span>I agree to be contacted about my enquiry and have read the Privacy Policy.</span>
          </label>
          <button className="btn btn-primary" type="submit">
            Submit Enquiry
            <Icon name="arrow-up-right" width={18} height={18} />
          </button>
          <p className="form-note">
            {sent
              ? "This preview keeps your enquiry in the browser only. Form processing is not connected until PLC confirms it."
              : "Static design only. Form processing, consent wording, required fields and the Privacy Policy must be confirmed before launch."}
          </p>
        </form>
      </section>

      <section className="guidance" aria-labelledby="guidance-title">
        <h2 id="guidance-title">A little guidance before you get in touch</h2>
        <div className="guidance-grid">
          <article>
            <h3>Keep it general</h3>
            <p>Tell us which service you are asking about and how you prefer to be contacted.</p>
          </article>
          <article>
            <h3>Wait for confirmation</h3>
            <p>Consultation arrangements, location and availability need to be confirmed by PLC.</p>
          </article>
          <article>
            <h3>For urgent concerns</h3>
            <p>Do not use an enquiry form for emergency help or time-sensitive medical advice.</p>
          </article>
        </div>
      </section>
    </>
  );
}
