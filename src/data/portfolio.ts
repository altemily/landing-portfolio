import type { Project, SkillGroup } from "../types/portfolio";

import sispmpLogin from "../assets/sispmp-login.png";

export const projects: Project[] = [
  {
    number: "01",
    name: "Tenho?",
    subtitle: "Inventário pessoal no celular",
    description:
      "Aplicativo autoral para organizar itens e coleções com uma experiência mobile simples de manter no dia a dia.",
    summary:
      "Cadastro, autenticação e organização visual reunidos em um projeto pensado do conceito à implementação.",
    tags: [{ label: "Projeto autoral" }],
    stack: ["React Native", "Expo", "TypeScript"],
    kind: "Mobile · Projeto autoral",
  },
  {
    number: "02",
    name: "Rods.",
    subtitle: "Case em preparação",
    description:
      "Espaço reservado para apresentar contexto, decisões de engenharia e resultados do projeto.",
    tags: [{ label: "Conteúdo em breve" }],
    stack: [],
    kind: "Projeto · Case em preparação",
    status: "content-pending",
  },
  {
    number: "03",
    name: "Pit.",
    subtitle: "Case em preparação",
    description:
      "Espaço reservado para apresentar contexto, decisões de engenharia e resultados do projeto.",
    tags: [{ label: "Conteúdo em breve" }],
    stack: [],
    kind: "Projeto · Case em preparação",
    status: "content-pending",
  },
  {
    number: "04",
    name: "SISPMP",
    subtitle: "Sistema Patrulha Maria da Penha",
    description:
      "Aplicação mobile para a Polícia Militar do RN, criada para apoiar registros e acompanhamentos da Patrulha Maria da Penha em campo.",
    summary:
      "Atuação em requisitos, liderança frontend e organização do time, conectando necessidades reais à experiência mobile.",
    image: sispmpLogin,
    tags: [{ label: "Projeto institucional" }],
    stack: ["React Native", "TypeScript"],
    impact: "Em uso ativo pela PMRN",
    confidential: false,
    cta: { label: "Ver projeto", href: sispmpLogin },
    kind: "Mobile · Institucional",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "TypeScript", "Android", "iOS"],
  },
  {
    title: "Backend & integrações",
    skills: ["Node.js", "NestJS", "APIs REST", "PostgreSQL"],
  },
  {
    title: "Web & ferramentas",
    skills: ["React", "Git", "GitHub", "Figma"],
  },
];

export const technologyItems = skillGroups.flatMap((group) => group.skills);
