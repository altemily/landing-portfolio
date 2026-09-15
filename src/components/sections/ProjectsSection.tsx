import { projects } from "../../data/portfolio";
import ProjectCard from "../projects/ProjectCard";
import "./ProjectsSection.style.css";

function ProjectsSection() {
  return (
    <section className="sec projects-section" id="projetos">
      <div className="wrap">
        <div className="projects-header">
          <div>
            <span className="sec-num">03 / Projetos</span>
            <h2 className="sec-title">Projetos em destaque</h2>
            <p className="sec-sub">Aplicações construídas para problemas reais.</p>
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
