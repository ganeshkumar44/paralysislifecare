import { useEffect, useState } from "react";

const pages = new Set(["about", "team", "services", "gallery", "contact"]);
const serviceIds = new Set([
  "pediatric",
  "cerebral-palsy",
  "stroke",
  "neurological",
  "spinal",
  "speech",
]);

function readRoute() {
  const hash = window.location.hash.replace(/^#/, "");
  if (pages.has(hash)) return { page: hash, hash };
  if (serviceIds.has(hash)) return { page: "services", hash };
  return { page: "home", hash: hash || "top" };
}

export function useRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const onChange = () => setRoute(readRoute());
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  useEffect(() => {
    const scrolling = document.documentElement;
    const previous = scrolling.style.scrollBehavior;
    scrolling.style.scrollBehavior = "auto";
    const section =
      route.page === "services" && route.hash !== "services"
        ? document.getElementById(route.hash)
        : route.page === "home" && route.hash && route.hash !== "top"
          ? document.getElementById(route.hash)
          : null;
    if (section) section.scrollIntoView();
    else window.scrollTo(0, 0);
    scrolling.style.scrollBehavior = previous;
    const titles = {
      about: "About Us • Paralysis Life Care",
      team: "Our Team • Paralysis Life Care",
      services: "Services • Paralysis Life Care",
      gallery: "Gallery • Paralysis Life Care",
      contact: "Contact Us • Paralysis Life Care",
    };
    document.title = titles[route.page] || "Paralysis Life Care";
  }, [route]);

  return route;
}
