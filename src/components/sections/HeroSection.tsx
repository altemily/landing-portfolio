import { ArrowRight, Download, Linkedin } from "lucide-react";
import "./HeroSection.style.css";

function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-eyebrow">Olá, eu sou a Ariane</div>

            <h1>
              Mobile Engineer
              <span className="hero-kicker">Apps que chegam às mãos de pessoas reais.</span>
            </h1>

            <p className="hero-desc">
              Construo aplicações Android e iOS com React Native e Expo — da
              arquitetura às APIs, integrações e publicação.
            </p>

            <div className="hero-actions">
              <a href="#projetos" className="btn-dark">
                Ver projetos <ArrowRight size={14} strokeWidth={2.5} />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}Ariane-Carvalho-CV.pdf`}
                className="btn-cv"
                download
              >
                <Download size={14} />
                Baixar currículo
              </a>
              <a
                href="https://www.linkedin.com/in/arianebcarvalho/"
                target="_blank"
                rel="noreferrer"
                className="btn-linkedin"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Área reservada para screenshots de aplicativos">
            <div className="phone phone-back" aria-hidden="true">
              <span className="phone-bar" />
              <div className="screen-label">APP / 02</div>
              <div className="screen-lines">
                <i /><i /><i />
              </div>
            </div>
            <div className="phone phone-front" aria-hidden="true">
              <span className="phone-bar" />
              <div className="screen-mark">AC</div>
              <div className="screen-copy">
                <strong>Mobile,</strong>
                <span>by design.</span>
              </div>
              <div className="screen-action">01 — EXPLORE</div>
            </div>
            <div className="visual-note">screens reais<br />em breve</div>
          </div>
        </div>

        <div className="hero-proof" aria-label="Áreas de atuação">
          <span><b>01</b> Projetos reais</span>
          <span><b>02</b> Android &amp; iOS</span>
          <span><b>03</b> Arquitetura mobile</span>
          <span><b>04</b> APIs &amp; integrações</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
