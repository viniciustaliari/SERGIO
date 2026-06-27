const navItems = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre la herramienta" },
  { id: "privacy", label: "Privacidad" }
];

export function AppHeader({ route, onNavigate }) {
  return (
    <header className="site-header" data-hero>
      <a
        className="brand-lockup"
        href="#/"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("home");
        }}
      >
        <span className="brand-kicker">Online Frame Preview</span>
        <strong className="brand-name">FrameFlow</strong>
      </a>

      <nav className="site-nav" aria-label="Principal">
        {navItems.map((item) => (
          <a
            key={item.id}
            className={`site-nav-link${route === item.id ? " is-active" : ""}`}
            href={item.id === "home" ? "#/" : `#/${item.id}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
