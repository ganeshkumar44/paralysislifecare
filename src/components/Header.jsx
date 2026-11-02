import { useState } from "react";
import { Icon } from "../assets.jsx";
import { navLinks } from "../content";

export default function Header({ page }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-bar">
        <a className="brand" href="/" onClick={close}>
          <span className="brand-mark">PLC</span>
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-name">Paralysis Life Care</span>
        </a>
        <nav
          className={open ? "primary-nav is-open" : "primary-nav"}
          id="primary-nav"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const active = link.pages ? link.pages.includes(page) : link.page === page;
            const item = (
              <a
                className={active ? "nav-link is-active" : "nav-link"}
                href={link.href}
                onClick={close}
              >
                <span className="nav-label">
                  {link.label}
                  {link.icon ? (
                    <Icon name={link.icon} width={link.iconSize} height={link.iconSize} />
                  ) : null}
                </span>
                <span className="nav-indicator" />
              </a>
            );

            if (!link.children) {
              return (
                <a
                  key={link.href}
                  className={active ? "nav-link is-active" : "nav-link"}
                  href={link.href}
                  onClick={close}
                >
                  <span className="nav-label">{link.label}</span>
                  <span className="nav-indicator" />
                </a>
              );
            }

            return (
              <div className="nav-group" key={link.href}>
                {item}
                <div className="nav-menu">
                  {link.children.map((child) => (
                    <a key={child.href} href={child.href} onClick={close}>
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
          <a className="btn btn-primary mobile-cta" href="/contact" onClick={close}>
            Book a Consultation
          </a>
        </nav>
        <div className="header-actions">
          <a className="btn btn-primary header-cta" href="/contact">
            Book a Consultation
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label="Menu"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name="menu" width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
