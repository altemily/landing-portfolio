import { skillGroups } from "../../data/portfolio";

function AboutSection() {
  return (
    <section className="sec" id="sobre">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <span className="sec-num">— 02</span>
            <h2 className="sec-title">
              Produto <em>acima de tudo</em>
            </h2>
            <div className="about-text">
              <p>
                Sou <strong>Ariane Carvalho</strong> — Desenvolvedora FullStack &
                Mobile com atuação em produto, design e arquitetura. Trabalho no{" "}
                <strong>Senac Labs</strong> desenvolvendo sistemas reais para educação,
                segurança pública e gestão.
              </p>
              <p>
                Fundadora de <span className="hl">Alt.</span> e{" "}
                <span className="hl">Tangerina Labs</span> — dois ecossistemas de
                produto independentes onde construo apps com identidade e propósito
                próprios. <span className="hl-purple">Microsoft Elevate Expert.</span>
              </p>
              <p>
                Cursando Sistemas de Informação na Estácio. Técnica formada pelo Senac
                RN. Acredito que{" "}
                <strong>código bom é aquele que resolve um problema real</strong>, tem
                identidade visual e pode crescer.
              </p>
            </div>
          </div>

          <div>
            <span className="sec-num">— Stack</span>
            <div className="skill-col">
              {skillGroups.map((group) => (
                <div className="skill-block" key={group.title}>
                  <div className="skill-block-title">{group.title}</div>
                  <div className="skill-chips">
                    {group.skills.map((skill) => (
                      <span className="chip" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
