import { ToolPanel } from "../components/ToolPanel";
import { PreviewStage } from "../components/PreviewStage";

export function HomePage(props) {
  function scrollToTool() {
    document.getElementById("tool-panel")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  return (
    <>
      <section className="hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker" data-hero>
            Online Frame Preview
          </p>
          <h1 data-hero>Sube tus frames y visualiza la secuencia con control total.</h1>
          <p className="hero-text" data-hero>
            Visualiza animaciones frame a frame directamente en el navegador, ajusta
            la velocidad de reproduccion y revisa cada secuencia con claridad.
          </p>

          <div className="hero-actions" data-hero>
            <button className="demo-button" type="button" onClick={scrollToTool}>
              Abrir herramienta
            </button>
            <a className="ghost-button hero-link" href="#/about">
              Saber mas
            </a>
          </div>
        </div>

        <aside className="hero-note" data-hero>
          <p>Compatible con PNG, SVG, WEBP, JPG y JPEG.</p>
          <p>Control manual de FPS y reproduccion en bucle.</p>
        </aside>
      </section>

      <section id="tool-panel" className="tool-layout">
        <ToolPanel {...props} />
        <PreviewStage frameSrc={props.frames[props.frameIndex]} />
      </section>
    </>
  );
}
