import { useEffect, useState } from "react";

function readRoute() {
  const hash = window.location.hash.replace(/^#/, "");
  if (hash === "about" || hash === "team") return { page: hash, hash };
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
    if (route.page === "home" && route.hash && route.hash !== "top") {
      document.getElementById(route.hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
    scrolling.style.scrollBehavior = previous;
    document.title =
      route.page === "about"
        ? "About Us • Paralysis Life Care"
        : route.page === "team"
          ? "Our Team • Paralysis Life Care"
          : "Paralysis Life Care";
  }, [route]);

  return route;
}
