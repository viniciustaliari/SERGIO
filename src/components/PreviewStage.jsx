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
        { y: 16, rotate: -1.4, scale: 0.97 },
        {
          y: -10,
          rotate: 1.4,
          scale: 1,
          duration: 1.7,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        }
      );

      gsap.fromTo(
        ".scene-glow",
        { scale: 0.9, opacity: 0.32 },
        {
          scale: 1.06,
          opacity: 0.66,
          duration: 2.1,
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
      <div className="scene-glow" aria-hidden="true" />
      <div className="ground-shadow" aria-hidden="true" />
      <figure className="character-shell" ref={figureRef}>
        <img className="character-frame" src={frameSrc} alt="Preview del personaje animado" />
      </figure>
    </section>
  );
}
