import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function StashHubCaseStudy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-14">

      {/* voltar */}
      <a
        href="/#projetos"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar para projetos
      </a>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-3">
          StashHub
        </h1>

        <p className="text-lg text-muted-foreground leading-normal max-w-2xl">
          Aplicação fullstack para organizar itens e coleções com velocidade,
          clareza e arquitetura sustentável.  
          Este case reúne decisões, raciocínio técnico e o processo de construção do produto.
        </p>

        <div className="h-px w-full bg-border/50 mt-6" />
      </header>

      {/* Visão Geral */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">
          Visão Geral
        </h2>

        <p className="text-muted-foreground leading-normal">
          O StashHub nasceu da necessidade de uma ferramenta simples, fluida e eficiente
          para catalogar objetos e coleções.  
          A proposta foi criar um app minimalista, rápido e com uma arquitetura sólida
          o suficiente para evoluir sem perder identidade.
        </p>
      </section>

      {/* Problema */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">
          O Problema
        </h2>

        <p className="text-muted-foreground leading-normal mb-4">
          Soluções existentes são pesadas, burocráticas e pouco práticas.  
          No mobile, especialmente, a experiência tende a ser lenta e desgastante.
          A missão foi inverter esse cenário.
        </p>

        <ul className="space-y-1 text-muted-foreground leading-normal">
          <li className="flex gap-2"><span className="text-primary">•</span>Cadastro rápido de itens</li>
          <li className="flex gap-2"><span className="text-primary">•</span>Busca eficiente</li>
          <li className="flex gap-2"><span className="text-primary">•</span>Categorias personalizáveis</li>
          <li className="flex gap-2"><span className="text-primary">•</span>Suporte a imagens</li>
          <li className="flex gap-2"><span className="text-primary">•</span>Experiência fluida e acessível</li>
        </ul>
      </section>

      {/* Minha Atuação */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">
          Minha Atuação
        </h2>

        <p className="text-muted-foreground leading-normal mb-4 max-w-2xl">
          Atuei ponta a ponta, cobrindo engenharia fullstack, mobile e documentação.
          Minha prioridade foi entregar uma solução clara, eficiente e fácil de evoluir.
        </p>

        <ul className="space-y-1 text-muted-foreground leading-normal">
          {[
            "Arquitetura da aplicação",
            "Modelagem de banco de dados",
            "Desenvolvimento mobile (UI, lógica e experiência)",
            "Desenvolvimento backend (APIs, validações, integrações)",
            "Documentação técnica",
            "Definição dos fluxos e comportamento das telas",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-primary">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Processo */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-4">
          Processo de Desenvolvimento
        </h2>

        <div className="space-y-6">

          <div>
            <h3 className="text-xl font-semibold mb-1">
              1. Entendimento & Definição
            </h3>
            <p className="text-muted-foreground leading-normal">
              Defini o MVP priorizando simplicidade: criar, listar, filtrar e visualizar
              itens com fluidez — sem ruído desnecessário.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">
              2. Arquitetura & Modelagem
            </h3>
            <p className="text-muted-foreground leading-normal mb-2">
              Para garantir consistência e escalabilidade, utilizei:
            </p>

            <ul className="space-y-1 text-muted-foreground leading-normal">
              <li className="flex gap-2"><span className="text-primary">•</span>Node.js + TypeScript + Prisma</li>
              <li className="flex gap-2"><span className="text-primary">•</span>PostgreSQL como banco relacional</li>
              <li className="flex gap-2"><span className="text-primary">•</span>React Native + Expo</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Context API para estado</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">
              3. Desenvolvimento Mobile
            </h3>
            <p className="text-muted-foreground leading-normal">
              Telas minimalistas, navegação suave e componentes reutilizáveis,
              resultando em uma experiência confortável e moderna.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1">
              4. Backend & API
            </h3>
            <p className="text-muted-foreground leading-normal">
              APIs REST enxutas, validações sólidas, upload de imagens,
              relacionamentos entre entidades e tratamento consistente de erros.
            </p>
          </div>

        </div>
      </section>

      {/* Tecnologias */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">
          Tecnologias Utilizadas
        </h2>

        <div className="flex flex-wrap gap-2">
          {["React Native", "Expo", "Node.js", "TypeScript", "Prisma ORM", "PostgreSQL"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Resultados */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold tracking-tight mb-3">
          Resultados
        </h2>

        <ul className="space-y-1 text-muted-foreground leading-normal">
          {[
            "Fluxo completo integrando mobile e backend",
            "Arquitetura clara e expansível",
            "Experiência minimalista e leve",
            "Base preparada para features futuras",
            "Documentação coesa para onboarding rápido",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-primary">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <footer className="pt-8 border-t border-border/40">
        <a
          href="https://github.com/altAriane"
          target="_blank"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Ver repositório no GitHub
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </footer>
    </main>
  );
}
