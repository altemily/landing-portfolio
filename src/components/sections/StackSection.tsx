import { skillGroups } from "../../data/portfolio";
import "./StackSection.style.css";

function StackSection() {
  return (
    <section className="sec stack-section" aria-labelledby="stack-title">
      <div className="wrap">
        <div className="stack-intro">
          <span className="sec-num">02 / Stack</span>
          <h2 className="sec-title" id="stack-title">Tecnologia a serviço da entrega.</h2>
          <p className="sec-sub">Mobile no centro, com backend e web dando suporte ao produto completo.</p>
        </div>
        <div className="stack-grid">
          {skillGroups.map((group, index) => (
            <article className={`stack-card ${index === 0 ? "stack-card-primary" : ""}`} key={group.title}>
              <span className="stack-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StackSection;
