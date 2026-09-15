import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./Header.style.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const savedTheme = window.localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    window.localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <nav className="site-nav" aria-label="Navegação principal">
      <div className="nav-inner">
        <div className="nav-brand">
          <a href="#" className="nav-logo" aria-label="builtbyariane">
            built<em>by</em>ariane
          </a>
        </div>
        <ul
          id="main-menu"
          className={isMenuOpen ? "nav-links nav-links-open" : "nav-links"}
        >
          <li>
            <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
              Início
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={() => setIsMenuOpen(false)}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#contato" onClick={() => setIsMenuOpen(false)}>
              Contato
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
            aria-pressed={isDarkMode}
            onClick={() => setIsDarkMode((currentTheme) => !currentTheme)}
            title={isDarkMode ? "Modo claro" : "Modo escuro"}
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={`${import.meta.env.BASE_URL}Ariane-Carvalho-CV.pdf`}
            className="nav-cv"
            download
          >
            <Download size={14} />
            <span>Baixar currículo</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="main-menu"
            onClick={() => setIsMenuOpen((currentState) => !currentState)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
