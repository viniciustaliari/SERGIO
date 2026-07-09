import { siteConfig } from "../siteConfig";

export function ContactPage() {
  return (
    <>
      <section className="editorial-hero editorial-hero-narrow">
        <p className="hero-kicker" data-hero>
          Contacto
        </p>
        <h1 data-hero>Contacta con SequenceLab para consultas, soporte o informacion sobre la herramienta.</h1>
        <p className="hero-text" data-hero>
          Si tienes dudas sobre el funcionamiento de la app, privacidad, publicidad o
          cualquier incidencia relacionada con el servicio, puedes escribirnos por email.
        </p>
      </section>

      <section className="simple-page" data-reveal>
        <article className="simple-block">
          <p className="section-eyebrow">Email</p>
          <p className="section-copy">
            Puedes contactar con SequenceLab en{" "}
            <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Consultas habituales</p>
          <ul className="detail-list">
            <li>Problemas al cargar o previsualizar una secuencia.</li>
            <li>Preguntas sobre privacidad, cookies o publicidad.</li>
            <li>Sugerencias para mejorar la herramienta.</li>
          </ul>
        </article>
      </section>
    </>
  );
}
