import { useEffect, useState } from "react";

const pages = new Set(["about", "team", "services", "gallery", "contact", "faq", "terms", "privacy"]);
const serviceIds = new Set([
  "pediatric",
  "cerebral-palsy",
  "stroke",
  "neurological",
  "spinal",
  "speech",
]);

function legacyPath(hash) {
  if (!hash || hash === "top" || hash === "main") return "/";
  if (pages.has(hash)) return `/${hash}`;
  if (serviceIds.has(hash)) return `/services/${hash}`;
  if (hash.startsWith("faq-")) return `/faq/${hash.slice(4)}`;
  if (hash.startsWith("terms-")) return `/terms/${hash.slice(6)}`;
  if (hash.startsWith("privacy-")) return `/privacy/${hash.slice(8)}`;
  return "/";
}

if (window.location.hash) {
  window.history.replaceState(null, "", legacyPath(window.location.hash.replace(/^#/, "")));
}

function readRoute() {
  const [head, rest] = window.location.pathname.split("/").filter(Boolean);
  if (!head || !pages.has(head)) return { page: "home", section: null };
  if (!rest) return { page: head, section: null };
  if (head === "services" && serviceIds.has(rest)) return { page: "services", section: rest };
  if (head === "faq") return { page: "faq", section: `faq-${rest}` };
  if (head === "terms") return { page: "terms", section: `terms-${rest}` };
  if (head === "privacy") return { page: "privacy", section: `privacy-${rest}` };
  return { page: head, section: null };
}

function expectedPath(route) {
  if (route.page === "home") return "/";
  if (!route.section) return `/${route.page}`;
  if (route.page === "faq") return `/faq/${route.section.slice(4)}`;
  if (route.page === "terms") return `/terms/${route.section.slice(6)}`;
  if (route.page === "privacy") return `/privacy/${route.section.slice(8)}`;
  return `/${route.page}/${route.section}`;
}

export function useRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener("popstate", onChange);
    return () => window.removeEventListener("popstate", onChange);
  }, []);

  useEffect(() => {
    const onClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const link = event.target.closest("a");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const href = link.getAttribute("href") || "";
      if (!href.startsWith("/") && href !== "#main") return;
      if (href === "#main") {
        event.preventDefault();
        const main = document.getElementById("main");
        if (main) {
          main.tabIndex = -1;
          main.focus();
        }
        return;
      }
      const url = new URL(link.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      event.preventDefault();
      if (url.pathname !== window.location.pathname) {
        window.history.pushState(null, "", url.pathname);
        window.dispatchEvent(new PopStateEvent("popstate"));
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const nextPath = expectedPath(route);
    if (window.location.pathname !== nextPath) {
      window.history.replaceState(null, "", nextPath);
    }
    const scrolling = document.documentElement;
    const previous = scrolling.style.scrollBehavior;
    scrolling.style.scrollBehavior = "auto";
    const section = route.section ? document.getElementById(route.section) : null;
    if (section) section.scrollIntoView();
    else window.scrollTo(0, 0);
    scrolling.style.scrollBehavior = previous;
    const titles = {
      about: "About Us • Paralysis Life Care",
      team: "Our Team • Paralysis Life Care",
      services: "Services • Paralysis Life Care",
      gallery: "Gallery • Paralysis Life Care",
      contact: "Contact Us • Paralysis Life Care",
      faq: "FAQ • Paralysis Life Care",
      terms: "Terms & Conditions • Paralysis Life Care",
      privacy: "Privacy Policy • Paralysis Life Care",
    };
    document.title = titles[route.page] || "Paralysis Life Care";
  }, [route]);

  return route;
}
