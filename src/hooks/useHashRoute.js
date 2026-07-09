import { useEffect, useState } from "react";

const validRoutes = new Set(["home", "privacy", "about", "contact"]);

function readRoute() {
  const hash = window.location.hash.replace(/^#\/?/, "").trim().toLowerCase();
  return validRoutes.has(hash) ? hash : "home";
}

export function useHashRoute() {
  const [route, setRoute] = useState(() => readRoute());

  useEffect(() => {
    function handleHashChange() {
      setRoute(readRoute());
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  function navigate(nextRoute) {
    const targetRoute = validRoutes.has(nextRoute) ? nextRoute : "home";
    const nextHash = targetRoute === "home" ? "#/" : `#/${targetRoute}`;

    if (window.location.hash === nextHash) {
      setRoute(targetRoute);
      return;
    }

    window.location.hash = nextHash;
  }

  return { route, navigate };
}
