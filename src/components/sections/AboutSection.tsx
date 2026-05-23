import { skillGroups } from "../../data/portfolio";
import "./AboutSection.style.css";

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
                Sou <strong>Ariane Carvalho</strong>, Desenvolvedora FullStack &
                Mobile com olhar de produto, design e arquitetura de soluções.
                Atuo no <strong>Senac Labs EduTech</strong>, desenvolvendo sistemas para
                educação, segurança pública, gestão e melhoria de processos.
              </p>

              <p>
                Também construo produtos autorais pela{" "}
                <span className="hl">Alt.</span> e pela 
                <span className="hl"> Tangerina Labs</span>, meus espaços de
                experimentação, estudo e criação de apps com identidade própria.{" "}
              </p>

              <p>
                Curso o sétimo período de Sistemas de Informação na Estácio e sou Técnica em Desenvolvimento de Sistemas formada pelo Senac RN. 
                Acredito que código bom é aquele que resolve um
                problema real, tem uma experiência bem pensada e nasce com
                espaço para crescer.
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
