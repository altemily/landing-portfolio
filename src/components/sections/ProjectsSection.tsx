import { projects } from "../../data/portfolio";
import ProjectCard from "../projects/ProjectCard";
import "./ProjectsSection.style.css";

function ProjectsSection() {
  return (
    <section className="sec" id="projetos">
      <div className="wrap">
        <div className="projects-header">
          <div>
            <span className="sec-num">— 01</span>
            <h2 className="sec-title">
              Projetos com  <em>propósito</em>
            </h2>
            <p className="sec-sub">Sistemas reais. Em produção. Para organizações reais.</p>
          </div>
        </div>

        <div className="proj-list">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.number} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
