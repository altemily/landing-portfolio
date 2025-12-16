import { Button } from "@/components/ui/button";
import { ArrowUpRight, Folder, Smartphone, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "stashhub",
    icon: Folder,
    name: "StashHub",
    tagline: "Aplicação Fullstack para Organização e Controle",
    description:
      "Desenvolvimento completo de uma aplicação mobile e backend para organização de itens e coleções. Envolve modelagem de dados, arquitetura, integração mobile e UX minimalista orientada à eficiência.",
    technologies: ["React Native", "TypeScript", "Node.js", "Prisma", "PostgreSQL"],
    gradient: "from-primary/10 to-primary/0",
    accentColor: "text-primary",
  },
  {
    id: "jarvis",
    icon: Smartphone,
    name: "Jarvis",
    tagline: "Workspace Pessoal e Produtividade",
    description:
      "Sistema de produtividade que unifica tarefas, notas e calendário. Atuação em web e mobile, definição de fluxos, arquitetura, interface e documentação. Foco em clareza, acessibilidade e experiência fluida.",
    technologies: ["React", "Next.js", "TypeScript", "React Native", "Context API"],
    gradient: "from-accent/10 to-accent/0",
    accentColor: "text-accent",
  },
  {
    id: "flowfiscal",
    icon: BarChart3,
    name: "FlowFiscal",
    tagline: "Sistema de Gestão Operacional e Fiscal",
    description:
      "Aplicação web para apoiar operações fiscais, com formulários complexos, regras de negócio estruturadas e arquitetura sustentável. Participação em backend, documentação técnica e fluxo do usuário.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Docker"],
    gradient: "from-emerald-500/10 to-emerald-500/0",
    accentColor: "text-emerald-500",
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-lg text-muted-foreground">
            Alguns dos sistemas em que trabalhei, com foco em clareza arquitetural,
            experiência do usuário e boas práticas de engenharia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group glass-card overflow-hidden hover-lift border border-border/30 rounded-lg"
            >
              {/* Icon Area */}
              <div
                className={`h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.06)_1px,transparent_1px)] bg-[size:20px_20px]" />
                <project.icon
                  className={`w-14 h-14 ${project.accentColor} relative z-10 transition-transform duration-300 group-hover:scale-105`}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.tagline}
                </p>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group/btn" asChild>
                  <Link to={`/cases/${project.id}`}>
                    Abrir Case Study
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
