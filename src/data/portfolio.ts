import type { Project, SkillGroup } from "../types/portfolio";

import sispmpLogin from "../assets/sispmp-login.png";
import gapeLogin from "../assets/gape-login.png";
import stashhubLogin from "../assets/stashhub-login.png";
import aprumaStyleGuide from "../assets/Apruma-style-guide.png";
import contadorSemanaS from "../assets/contador-semana-s.png";

export const technologyItems = [
  "React",
  "React Native",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "APIs REST",
  "Figma",
  "Design Systems",
  "UX/UI",
  "MVPs",
];

export const projects: Project[] = [
  {
    number: "001",
    name: "SISPMP",
    subtitle: "Sistema Patrulha Maria da Penha",
    description:
      "Aplicação mobile desenvolvida para a Polícia Militar do RN. Gerencia registros e acompanhamentos da Patrulha Maria da Penha, com autenticação segura, cadastros e interface pensada para uso em campo por agentes.",
    summary:
      "Atuei como analista de requisitos, líder frontend e Scrum Master, conectando necessidades de campo, organização do time e experiência mobile para entregar uma solução clara, segura e útil para os agentes.",
    tags: [
      { label: "Senac RN · Projeto Integrador" },
      { label: "Governo · PMRN", tone: "purple" },
      { label: "Impacto social", tone: "green" },
    ],
    stack: ["React Native", "TypeScript", "Mobile", "Sistema institucional"],
    impact: "Sistema em uso ativo pela PMRN — impacto social direto",
    confidential: false,
    cta: { label: "Ver projeto", href: sispmpLogin },
  },
  {
    number: "002",
    name: "GAPE",
    subtitle: "Gestão de Alta Performance Estudantil",
    description:
      "Sistema web interno do Senac RN para acompanhamento pedagógico do Ensino Médio. Permite o lançamento de notas pelos professores, visualização de métricas de desempenho por turma, evolução trimestral e acesso do aluno ao próprio boletim para download.",
    summary:
      "Atuei como desenvolvedora FullStack, conectando interface, dados e regras da aplicação para apoiar professores, gestão pedagógica e alunos em um fluxo mais claro de acompanhamento acadêmico.",
    tags: [{ label: "Senac RN · Interno" }, { label: "Educação" }],
    stack: ["React", "TypeScript", "Dashboard", "Produto interno"],
    confidential: false,
    cta: { label: "Ver projeto", href: gapeLogin },
  },
  {
    number: "003",
    name: "StashHub",
    subtitle: "App de inventário pessoal",
    description:
      "Produto autoral para organizar itens, coleções e inventário pessoal. A proposta une cadastro de objetos, autenticação, interface mobile e uma experiência visual simples para transformar organização em algo mais leve e bonito.",
    summary:
      "Projeto autoral em desenvolvimento, criado para explorar organização pessoal de um jeito mais visual, simples e agradável de manter no dia a dia.",
    tags: [
      { label: "Produto próprio", tone: "tan" },
      { label: "Mobile" },
    ],
    stack: ["React Native", "Expo", "TypeScript", "Produto digital"],
    cta: { label: "Ver projeto", href: stashhubLogin },
  },
  {
    number: "004",
    name: "Apruma!",
    subtitle: "Design System — App de Gestão de Obra",
    description:
      "Design System completo para app de gestão de reforma residencial. Paleta com 5 ramps, tipografia editorial, componentes, formulários, navegação e tela de dashboard funcional no Figma.",
    summary:
      "A proposta foi criar uma base visual consistente para um produto mobile, definindo identidade, componentes e padrões de interface antes da implementação.",
    tags: [
      { label: "Design System", tone: "tan" },
      { label: "Produto próprio" },
    ],
    stack: ["Figma", "Design System", "UX/UI", "Produto digital"],
    cta: { label: "Ver protótipo", href: aprumaStyleGuide },
  },
  {
    number: "005",
    name: "Contador Semana S",
    subtitle: "Sistema de Contagem de Visitantes em Tempo Real",
    description:
      "Aplicação web para contagem e análise de visitantes nos espaços do evento Semana S do Senac RN. Dados sincronizados por estande para equipes de campo.",
    summary:
      "Sistema criado para apoiar equipes durante o evento, facilitando registros por espaço e oferecendo uma visão consolidada dos visitantes em tempo real.",
    tags: [{ label: "Senac RN · Evento" }],
    stack: ["React", "Dashboard", "Dados em tempo real"],
    impact: "3.373 visitantes registrados no evento",
    confidential: false,
    cta: { label: "Ver dashboard", href: contadorSemanaS },
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend & Interface",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Backend & Dados",
    skills: ["Node.js", "NestJS", "APIs REST", "PostgreSQL", "SQL"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo"],
  },
  {
    title: "Design & Produto",
    skills: ["Figma", "UX/UI", "Design Systems", "Prototipagem"],
  },
];

export const contactTopics = [
  "Sistemas web",
  "Apps mobile",
  "APIs",
  "Dashboards",
  "Prototipagem",
  "MVPs",
];
