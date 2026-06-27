export function PrivacyPage() {
  return (
    <>
      <section className="editorial-hero editorial-hero-narrow">
        <p className="hero-kicker" data-hero>
          Privacidad
        </p>
        <h1 data-hero>La herramienta usa los archivos seleccionados solo para generar la preview en el navegador.</h1>
        <p className="hero-text" data-hero>
          Esta pagina resume de forma clara como se utilizan los archivos cargados y
          que comportamiento mantiene actualmente el servicio.
        </p>
      </section>

      <section className="simple-page" data-reveal>
        <article className="simple-block">
          <p className="section-eyebrow">Uso de archivos</p>
          <p className="section-copy">
            Los archivos seleccionados se utilizan para generar una previsualizacion
            temporal de la secuencia dentro del navegador.
          </p>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Almacenamiento</p>
          <p className="section-copy">
            La herramienta no requiere crear una cuenta y no guarda automaticamente
            una biblioteca permanente de archivos cargados por el usuario.
          </p>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Nota legal</p>
          <p className="section-copy">
            Si mas adelante integras publicidad, analitica o formularios, conviene
            actualizar esta pagina con ese uso real de cookies, terceros y datos de contacto.
          </p>
        </article>
      </section>
    </>
  );
}
