import { exploreLinks, services } from "../content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="brand-mark">PLC</p>
          <p className="org-name">Paralysis Life Care</p>
          <p>Compassionate physiotherapy and neuro-rehabilitation support for children and adults.</p>
          <p>Social profiles: awaiting verified links</p>
          <a className="btn btn-primary footer-cta" href="#contact">
            Book a Consultation
          </a>
        </div>
        <div className="footer-explore">
          <h2>Explore</h2>
          <ul className="footer-list">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-services">
          <h2>Our services</h2>
          <ul className="footer-list">
            {services.map((service) => (
              <li key={service.id}>
                <a href={`#${service.id}`}>{service.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact" id="footer-contact">
          <h2>Let’s connect</h2>
          <a className="phone-link" href="tel:6000511473">
            6000511473
          </a>
          <a className="phone-link" href="tel:6003873792">
            6003873792
          </a>
          <p className="fine-print">Phone numbers supplied by PLC. Verify before publishing.</p>
          <p className="fine-print">Email, address &amp; hours awaiting confirmation.</p>
        </div>
      </div>
      <hr className="footer-rule" />
      <div className="legal" id="legal">
        <p>© 2026 Paralysis Life Care. All rights reserved.</p>
        <div className="legal-links">
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <p className="legal-note">Design concept • Content approval pending</p>
      </div>
    </footer>
  );
}
