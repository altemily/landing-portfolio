function Header() {
  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <div className="nav-inner">
        <div className="nav-brand">
          <a href="#" className="nav-logo" aria-label="builtbyariane">
            built<em>by</em>ariane
          </a>
          <span className="dot-live nav-status-dot" aria-hidden="true" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato" className="nav-cta">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
