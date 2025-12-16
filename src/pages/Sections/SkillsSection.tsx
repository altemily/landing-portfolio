import { 
  Code2, 
  Layers, 
  Smartphone, 
  Server, 
  FileText, 
  Cloud,
  Blocks,
  Paintbrush,
  Database,
  Shield,
  GitBranch,
  Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "Engenharia",
    icon: Blocks,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: [
      "Arquitetura de Software",
      "Modelagem de Dados",
      "API Design",
      "Code Review",
      "Testes Automatizados",
    ],
  },
  {
    title: "Frontend",
    icon: Paintbrush,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Design Systems",
      "Acessibilidade",
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    skills: [
      "React Native",
      "Expo",
      "Navegação",
      "Hooks Customizados",
      "Integrações Nativas",
      "App Store",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    skills: [
      "Node.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Autenticação",
      "APIs REST",
    ],
  },
  {
    title: "Documentação & Produto",
    icon: FileText,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    skills: [
      "Requisitos",
      "User Stories",
      "BPMN",
      "Casos de Uso",
      "Especificações Técnicas",
      "PRDs",
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    skills: [
      "Docker",
      "AWS",
      "CI/CD",
      "Cloudflare",
      "Vercel",
      "Observabilidade",
    ],
  },
];

const coreCompetencies = [
  { icon: Code2, label: "Clean Code" },
  { icon: Layers, label: "Arquitetura" },
  { icon: Database, label: "Modelagem" },
  { icon: Shield, label: "Segurança" },
  { icon: GitBranch, label: "Git Flow" },
  { icon: Cpu, label: "Performance" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-background">
      <div className="section-container">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Competências
          </h2>
          <p className="text-lg text-muted-foreground">
            Base técnica consistente aliada à prática de produto e documentação
            para construir soluções completas.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {coreCompetencies.map((comp) => (
            <div
              key={comp.label}
              className="flex items-center gap-2 px-4 py-2 bg-secondary/80 rounded-full border border-border/50"
            >
              <comp.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {comp.label}
              </span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card p-6 hover-lift group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 rounded-xl ${category.bgColor} flex items-center justify-center`}
                >
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium bg-secondary text-muted-foreground rounded-lg hover:text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
