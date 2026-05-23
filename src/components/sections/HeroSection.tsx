import { ArrowRight, Download } from "lucide-react";
import "./HeroSection.style.css";

function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="dot-live" />
              Disponível para projetos freelance
            </div>

            <h1>
              Dev & product <em>builder</em>
              <br />
              <span className="serif-light hero-kicker">
                Código, produto e design para tirar ideias do papel.
              </span>
            </h1>

            <p className="hero-desc">
              Desenvolvedora FullStack & Mobile com olhar de produto e design.
              Crio{" "}
              <strong>
                sistemas funcionais, bem construídos e com identidade
              </strong>
              , para negócios, instituições e produtos digitais que precisam
              mais do que uma ideia bonita: precisam funcionar.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="btn-dark">
                Ver projetos <ArrowRight size={14} strokeWidth={2.5} />
              </a>

              <a href="#contato" className="btn-outline">
                Entrar em contato
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Ariane-Carvalho-CV.pdf`}
                className="btn-cv"
                download
              >
                <Download size={14} />
                Baixar currículo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;