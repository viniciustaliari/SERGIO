export function AppFooter({ onNavigate }) {
  return (
    <footer className="site-footer" data-reveal>
      <div>
        <p className="footer-title">SequenceLab</p>
        <p className="footer-copy">
          Herramienta para previsualizar secuencias frame a frame con control de carga
          de archivos y velocidad de reproduccion.
        </p>
      </div>

      <div className="footer-links">
        <a
          href="#/"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("home");
          }}
        >
          Inicio
        </a>
        <a
          href="#/about"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("about");
          }}
        >
          Sobre la herramienta
        </a>
        <a
          href="#/privacy"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("privacy");
          }}
        >
          Privacidad
        </a>
        <a
          href="#/contact"
          onClick={(event) => {
            event.preventDefault();
            onNavigate("contact");
          }}
        >
          Contacto
        </a>
      </div>
    </footer>
  );
}
