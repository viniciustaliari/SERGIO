export function AboutPage() {
  return (
    <>
      <section className="editorial-hero editorial-hero-narrow">
        <p className="hero-kicker" data-hero>
          Sobre la herramienta
        </p>
        <h1 data-hero>SequenceLab ayuda a revisar secuencias de animacion frame a frame de forma rapida y clara.</h1>
        <p className="hero-text" data-hero>
          Es una herramienta online para cargar imagenes locales, reproducirlas como
          una secuencia y ajustar la velocidad hasta encontrar el ritmo correcto.
        </p>
      </section>

      <section className="simple-page" data-reveal>
        <article className="simple-block">
          <p className="section-eyebrow">Para que sirve</p>
          <p className="section-copy">
            SequenceLab esta pensado para artistas, animadores, disenadores y equipos
            creativos que necesitan comprobar el movimiento de una serie de frames
            antes de integrarla en una pieza final.
          </p>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Funciones principales</p>
          <ul className="detail-list">
            <li>Carga de imagenes desde el dispositivo del usuario.</li>
            <li>Orden automatico por nombre numerico de archivo.</li>
            <li>Control manual de frames por segundo.</li>
            <li>Reproduccion, pausa y avance frame a frame.</li>
            <li>Previsualizacion continua en el navegador.</li>
          </ul>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Como preparar los archivos</p>
          <p className="section-copy">
            Para obtener una reproduccion correcta, los frames deben estar nombrados
            en orden numerico, por ejemplo frame_01, frame_02, frame_03. La herramienta
            utiliza ese nombre para ordenar la secuencia antes de reproducirla.
          </p>
        </article>
      </section>
    </>
  );
}
