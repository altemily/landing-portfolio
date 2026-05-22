import { ArrowRight, Download } from "lucide-react";

function HeroSection() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-inner">
          <div>
            <div className="hero-eyebrow">
              <span className="dot-live" />
        
            </div>
            <h1>
              Dev & product <em>builder</em>
              <br />
              <br />
              <span className="serif-light hero-kicker">
                Código, produto e design para tirar ideias do papel.
              </span>
            </h1>
            <p className="hero-desc">
              Desenvolvedora FullStack & Mobile com olhar de produto e design.
              Crio{" "}
              <strong>sistemas funcionais, bem construídos e com identidade, </strong> 
              para negócios, instituições e produtos digitais que precisam mais do que uma ideia bonita: precisam funcionar.
            </p>
            <div className="hero-actions">
              <a href="#projetos" className="btn-dark">
                Ver projetos <ArrowRight size={14} strokeWidth={2.5} />
              </a>
              <a href="#contato" className="btn-outline">
                Entrar em contato
              </a>
              <a href="/Ariane-Carvalho-CV.pdf" className="btn-cv" download>
                <Download size={14} />
                Baixar currículo
              </a>
            </div>
          </div>

          <div className="hero-side" aria-label="Resumo profissional">
            <MetricCard value="8+" label="produtos entregues" accent />
            <MetricCard value="4+" label="anos de experiência" />
            <MetricCard value="Alt. & Tangerina" label="ecossistemas próprios" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className={accent ? "hero-tag accent" : "hero-tag"}>
      <strong>{value}</strong>
      {label}
    </div>
  );
}

export default HeroSection;
