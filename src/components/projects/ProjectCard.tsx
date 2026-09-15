import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../types/portfolio";
import "./ProjectCard.style.css";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="proj-item">
      <div className="proj-visual">
        {project.image ? (
          <img src={project.image} alt={`Tela do projeto ${project.name}`} />
        ) : (
          <div className="proj-placeholder" aria-label="Imagem do projeto pendente">
            <span>{project.number}</span>
            <strong>{project.name.slice(0, 2)}</strong>
            <small>SCREEN / PENDING</small>
          </div>
        )}
      </div>

      <div className="proj-body">
        <div className="proj-meta"><span>{project.number}</span>{project.kind}</div>

        <h3 className="proj-name">{project.name}</h3>

        <div className="proj-subtitle">{project.subtitle}</div>

        <p className="proj-desc">{project.description}</p>

        {project.summary && (
          <p className="proj-summary">{project.summary}</p>
        )}

        {project.impact && (
          <div className="proj-impact-text">{project.impact}</div>
        )}

        <div className="proj-footer">
          <div className="proj-stack">
            {project.stack.map((item) => <span key={item}>{item}</span>)}
          </div>
          {project.cta ? (
              <a
                href={project.cta.href}
                className="proj-cta"
                target="_blank"
                rel="noreferrer"
              >
                {project.cta.label}
                <ArrowUpRight size={14} />
              </a>
          ) : <span className="proj-pending">Case em preparação</span>}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
