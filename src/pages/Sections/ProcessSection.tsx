import { 
  Search, 
  GitBranch, 
  Blocks, 
  Code2, 
  Rocket, 
  Heart 
} from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Imersão",
    description: "Conversas, levantamento de requisitos e entendimento do problema real.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: GitBranch,
    title: "Raciocínio",
    description: "Fluxos, UX e documentação para organizar ideias e decisões.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Blocks,
    title: "Design Técnico",
    description: "Modelagem, APIs e definição de limites para dar estrutura ao sistema.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: Code2,
    title: "Construção",
    description: "Frontend, mobile e backend com foco em consistência e boas práticas.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Rocket,
    title: "Entrega",
    description: "Deploy, CI/CD e documentação para facilitar uso e continuidade.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Heart,
    title: "Cuidado",
    description: "Acompanhamento, ajustes e evolução contínua do produto.",
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
  },
];

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="py-32 lg:py-40 bg-secondary/30 relative overflow-hidden"
    >
      {/* Linha fluida decorativa */}
      <svg
        className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none opacity-30"
        viewBox="0 0 1200 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="processLineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="hsl(20 100% 59%)" stopOpacity="0" />
            <stop offset="20%" stopColor="hsl(20 100% 59%)" stopOpacity="0.6" />
            <stop offset="80%" stopColor="hsl(266 100% 68%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(266 100% 68%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 50 Q200 20, 400 50 T800 50 T1200 50"
          stroke="url(#processLineGradient)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary mb-4 block">
            Metodologia
          </span>

          <h2 className="heading-lg text-foreground mb-4">
            Como eu trabalho
          </h2>

          <p className="body-md text-muted-foreground max-w-xl mx-auto">
            Organização e clareza para transformar ideias em produtos funcionais.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {processSteps.map((step, index) => (
            <div key={step.title} className="group relative">
              <div className="glass-card p-8 h-full hover-lift">
                
                {/* Número */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-border/50 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Ícone */}
                <div
                  className={`w-12 h-12 rounded-2xl ${step.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className={`w-6 h-6 ${step.color}`} />
                </div>

                {/* Conteúdo */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
