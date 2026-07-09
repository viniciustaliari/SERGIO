import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function PreviewStage({ frameSrc }) {
  const stageRef = useRef(null);
  const figureRef = useRef(null);

  useLayoutEffect(() => {
    if (!stageRef.current || !figureRef.current) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        figureRef.current,
        { y: 10, rotate: -0.8, scale: 0.98 },
        {
          y: -8,
          rotate: 0.8,
          scale: 1,
          duration: 1.8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        }
      );
    }, stageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="preview-stage" ref={stageRef} data-reveal>
      <div className="stage-grid" aria-hidden="true">
        <span data-band />
        <span data-band />
        <span data-band />
        <span data-band />
      </div>
      <figure className="character-shell" ref={figureRef}>
        <img className="character-frame" src={frameSrc} alt="Preview del personaje animado" />
      </figure>
    </section>
  );
}
