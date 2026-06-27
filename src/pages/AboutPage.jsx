export function AboutPage() {
  return (
    <>
      <section className="editorial-hero editorial-hero-narrow">
        <p className="hero-kicker" data-hero>
          Sobre la herramienta
        </p>
        <h1 data-hero>FrameFlow sirve para probar una secuencia de frames de forma rapida y ordenada.</h1>
        <p className="hero-text" data-hero>
          FrameFlow esta pensado para artistas, disenadores y equipos que necesitan
          revisar una secuencia visual con rapidez, orden y control.
        </p>
      </section>

      <section className="simple-page" data-reveal>
        <article className="simple-block">
          <p className="section-eyebrow">Que ofrece</p>
          <ul className="detail-list">
            <li>Carga de secuencias desde archivos locales.</li>
            <li>Control manual de frames por segundo.</li>
            <li>Previsualizacion continua en una escena limpia.</li>
            <li>Interfaz sencilla para revisar orden y ritmo de animacion.</li>
          </ul>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Uso recomendado</p>
          <p className="section-copy">
            FrameFlow es util para validar una secuencia antes de integrarla en una
            pieza final, comparar distintas velocidades de reproduccion o revisar si el
            orden de los archivos produce el movimiento esperado.
          </p>
        </article>
      </section>
    </>
  );
}
