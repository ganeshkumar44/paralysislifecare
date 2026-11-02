import { Icon } from "../assets.jsx";
import { contactEmail, exploreLinks, services, weeklyOff } from "../content";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <p className="brand-mark">PLC</p>
          <p className="org-name">Paralysis Life Care</p>
          <p>Compassionate physiotherapy and neuro-rehabilitation support for children and adults.</p>
          <a className="btn btn-primary footer-cta" href="/contact">
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
                <a href={`/services/${service.id}`}>{service.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact" id="footer-contact">
          <h2>Let’s connect</h2>
          <ul className="connect-list">
            <li>
              <span className="connect-icon">
                <Icon name="phone" width={18} height={18} />
              </span>
              <a href="tel:6000511473">60005 11473</a>
            </li>
            <li>
              <span className="connect-icon">
                <Icon name="phone" width={18} height={18} />
              </span>
              <a href="tel:6003873792">60038 73792</a>
            </li>
            <li>
              <span className="connect-icon">
                <Icon name="mail" width={18} height={18} />
              </span>
              <a href={`mailto:${contactEmail}`}>Email</a>
            </li>
            <li className="connect-hours">
              <span className="connect-icon">
                <Icon name="clock" width={18} height={18} />
              </span>
              <span>
                <strong>Monday – Saturday</strong>
                <span>9:00 AM – 6:00 PM</span>
                <span>{weeklyOff} off</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-rule" />
      <div className="legal" id="legal">
        <p>© 2026 Paralysis Life Care. All rights reserved.</p>
        <div className="legal-links">
          <a href="/terms">Terms &amp; Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
