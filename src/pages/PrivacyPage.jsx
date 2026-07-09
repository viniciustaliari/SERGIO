import { siteConfig } from "../siteConfig";

export function PrivacyPage() {
  return (
    <>
      <section className="editorial-hero editorial-hero-narrow">
        <p className="hero-kicker" data-hero>
          Privacidad
        </p>
        <h1 data-hero>La privacidad de los archivos y el uso transparente de cookies forman parte del funcionamiento de SequenceLab.</h1>
        <p className="hero-text" data-hero>
          Esta politica explica como se tratan los archivos cargados por el usuario,
          que datos pueden utilizarse y como se aplican las cookies relacionadas con
          publicidad y servicios de terceros.
        </p>
      </section>

      <section className="simple-page" data-reveal>
        <article className="simple-block">
          <p className="section-eyebrow">Uso de archivos</p>
          <p className="section-copy">
            Los archivos seleccionados se utilizan para generar una previsualizacion
            temporal de la secuencia dentro del navegador. La reproduccion se crea a
            partir de los archivos elegidos por el usuario en su propio dispositivo.
          </p>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Almacenamiento</p>
          <p className="section-copy">
            SequenceLab no requiere crear una cuenta para usar la herramienta. Los
            archivos cargados no se incorporan a una biblioteca publica ni se guardan
            como una coleccion permanente dentro de la aplicacion.
          </p>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Publicidad y cookies</p>
          <p className="section-copy">
            SequenceLab puede mostrar publicidad proporcionada por Google. Google y
            otros proveedores publicitarios pueden utilizar cookies o tecnologias
            similares para publicar anuncios, medir su rendimiento y, cuando proceda,
            personalizar el contenido publicitario en funcion de visitas anteriores a
            este u otros sitios web.
          </p>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Gestion de consentimiento</p>
          <p className="section-copy">
            Cuando sea necesario, se solicitara consentimiento para el uso de cookies
            publicitarias o de personalizacion. El usuario puede aceptar, rechazar o
            configurar sus preferencias segun las opciones disponibles en el aviso de
            consentimiento.
          </p>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Opciones del usuario</p>
          <p className="section-copy">
            El usuario puede desactivar la publicidad personalizada desde la
            configuracion de anuncios de Google. Tambien puede gestionar o eliminar
            cookies desde la configuracion de su navegador.
          </p>
        </article>

        <article className="simple-block">
          <p className="section-eyebrow">Contacto</p>
          <p className="section-copy">
            Para consultas relacionadas con privacidad, cookies o el uso de la
            herramienta, puedes escribir a{" "}
            <a className="text-link" href={`mailto:${siteConfig.contactEmail}`}>
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </article>
      </section>
    </>
  );
}
