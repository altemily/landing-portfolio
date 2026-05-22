import type { Project, SkillGroup } from "../types/portfolio";

export const marqueeItems = [
  "React Native",
  "Flutter",
  "Power Platform",
  "Node.js",
  "TypeScript",
  "Figma",
  "Design Systems",
  "Supabase",
  "SharePoint",
  "Microsoft 365",
  "Product Design",
];

export const projects: Project[] = [
  {
    number: "001",
    name: "SISPMP",
    subtitle: "Sistema Patrulha Maria da Penha",
    description:
      "Aplicação mobile desenvolvida para a Polícia Militar do RN. Gerencia registros e acompanhamentos da Patrulha Maria da Penha, com autenticação segura, cadastros e interface pensada para uso em campo por agentes.",
    tags: [
      { label: "Governo · PMRN", tone: "purple" },
      { label: "Impacto social", tone: "green" },
    ],
    stack: ["React Native", "TypeScript", "Power Platform", "SharePoint"],
    impact: "Sistema em uso ativo pela PMRN — impacto social direto",
    confidential: true,
  },
  {
    number: "002",
    name: "GAPE",
    subtitle: "Gestão de Alta Performance Estudantil",
    description:
      "Sistema web interno do Senac RN para acompanhamento pedagógico do Ensino Médio. Dashboard com métricas de desempenho por turma, evolução trimestral e avaliação comportamental multidimensional.",
    tags: [{ label: "Senac RN · Interno" }, { label: "Educação" }],
    stack: ["React", "TypeScript", "Recharts", "Power Platform"],
    confidential: true,
  },
  {
    number: "003",
    name: "Apruma!",
    subtitle: "Design System — App de Gestão de Obra",
    description:
      "Design System completo para app de gestão de reforma residencial. Paleta com 5 ramps, tipografia editorial, componentes, formulários, navegação e tela de dashboard funcional no Figma.",
    tags: [{ label: "Design System", tone: "tan" }, { label: "Produto próprio" }],
    stack: ["Figma", "Design System", "React Native"],
    cta: { label: "Ver protótipo", href: "#contato" },
  },
  {
    number: "004",
    name: "Contador Semana S",
    subtitle: "Sistema de Contagem de Visitantes em Tempo Real",
    description:
      "Aplicação web para contagem e análise de visitantes nos espaços do evento Semana S do Senac RN. Dados sincronizados por estande para equipes de campo.",
    tags: [{ label: "Senac RN · Evento" }],
    stack: ["React", "Power Apps", "Power Automate"],
    impact: "3.373 visitantes registrados no evento",
    confidential: true,
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Mobile",
    skills: ["React", "React Native", "Flutter", "TypeScript", "Expo"],
  },
  {
    title: "Backend & Dados",
    skills: ["Node.js", "Express", "Supabase", "SQLite", "Drizzle ORM"],
  },
  {
    title: "Microsoft 365",
    skills: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
  },
  {
    title: "Design & Produto",
    skills: ["Figma", "Design Systems", "Prototipagem", "UX"],
  },
];

export const contactTopics = [
  "Sistemas web",
  "Apps mobile",
  "Power Platform",
  "Automações",
  "Prototipagem",
  "MVPs",
];
