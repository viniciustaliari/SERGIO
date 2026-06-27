import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapPage(containerRef, pageKey) {
  useLayoutEffect(() => {
    if (!containerRef.current) {
      return undefined;
    }

    window.scrollTo({ top: 0, behavior: "auto" });

    const ctx = gsap.context(() => {
      const heroItems = gsap.utils.toArray("[data-hero]");
      const revealItems = gsap.utils.toArray("[data-reveal]");
      const bands = gsap.utils.toArray("[data-band]");

      gsap.set(revealItems, { opacity: 0, y: 38 });
      gsap.set(bands, { scaleX: 0, transformOrigin: "left center" });

      gsap.fromTo(
        ".page-shell",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }
      );

      gsap.fromTo(
        heroItems,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.08
        }
      );

      revealItems.forEach((item) => {
        gsap.to(item, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 82%"
          }
        });
      });

      bands.forEach((item, index) => {
        gsap.to(item, {
          scaleX: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.05 * index,
          scrollTrigger: {
            trigger: item,
            start: "top 86%"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, pageKey]);
}
