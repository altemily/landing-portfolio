import { Eye, Lock } from "lucide-react";
import type { Project } from "../../types/portfolio";
import "./ProjectCard.style.css";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="proj-item">
      <div className="proj-num">{project.number}</div>

      <div className="proj-body">
        <div className="proj-tags">
          {project.tags.map((tag) => (
            <span
              className={tag.tone ? `tag ${tag.tone}` : "tag"}
              key={tag.label}
            >
              {tag.label}
            </span>
          ))}
        </div>

        <h3 className="proj-name">{project.name}</h3>

        <div className="proj-subtitle">{project.subtitle}</div>

        <p className="proj-desc">{project.description}</p>

        {project.summary && (
          <p className="proj-summary">{project.summary}</p>
        )}

        {project.impact && (
          <div className="proj-impact-text">{project.impact}</div>
        )}

        {project.confidential && (
          <p className="proj-confidential">
            Case apresentado de forma resumida, respeitando confidencialidade e
            dados sensíveis.
          </p>
        )}

        <div className="proj-footer">
          {project.confidential ? (
            <span className="proj-cta locked">
              <Lock size={12} />
              Projeto confidencial
            </span>
          ) : (
            project.cta && (
              <a
                href={project.cta.href}
                className="proj-cta"
                target="_blank"
                rel="noreferrer"
              >
                <Eye size={12} />
                {project.cta.label}
              </a>
            )
          )}
        </div>
      </div>

      <div className="proj-stack-right">
        {project.stack.map((item) => (
          <span className="stack-pill" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;