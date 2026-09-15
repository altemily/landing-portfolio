import "./AboutSection.style.css";

function AboutSection() {
  return (
    <section className="sec about-section" id="sobre">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-main">
            <span className="sec-num">04 / Sobre</span>
            <h2 className="sec-title">Engenharia mobile do começo ao fim.</h2>
            <div className="about-text">
              <p>
                Sou <strong>Ariane Carvalho, Mobile Engineer</strong>. Construo
                aplicações para problemas reais, pensando na arquitetura, na
                experiência e no caminho até a publicação.
              </p>
              <p>
                Minha experiência Full-stack amplia essa atuação: conecto o app
                a APIs, dados e integrações, com visão do fluxo completo e das
                decisões que sustentam o produto.
              </p>
            </div>
          </div>

          <div className="about-aside" aria-label="Formação e experiência">
            <div className="about-fact"><span>Atuação</span><strong>Senac Labs EduTech</strong></div>
            <div className="about-fact"><span>Formação</span><strong>Sistemas de Informação</strong></div>
            <div className="about-fact"><span>Construindo</span><strong>Alt. Software Lab</strong></div>
            <div className="about-fact"><span>Reconhecimento</span><strong>Microsoft Elevate Educator Expert</strong><small>2026—2027</small></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
