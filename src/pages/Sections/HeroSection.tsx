import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "-2s" }} />
      
      {/* Flowing Line Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(20 100% 59%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(20 100% 59%)" stopOpacity="0.4" />
            <stop offset="70%" stopColor="hsl(266 100% 68%)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(266 100% 68%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-100 600 Q200 300, 500 450 T900 350 T1300 500"
          stroke="url(#heroLineGradient)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-100 650 Q300 400, 600 500 T1000 400 T1400 550"
          stroke="url(#heroLineGradient)"
          strokeWidth="0.5"
          fill="none"
          opacity="0.5"
        />
      </svg>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.15)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.15)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_20%,transparent_100%)]" />

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto">

          {/* Name - Authorial Typography */}
          <h1 className="animate-fade-up-delay-1 heading-xl text-center text-foreground mb-6">
            Ariane Carvalho<span className="text-primary">.</span>
          </h1>

          {/* Title */}
          <p className="animate-fade-up-delay-2 text-center text-lg md:text-xl text-muted-foreground font-medium tracking-wide mb-8">
            Engenheira de Software · Fullstack & Mobile
          </p>

          {/* Authorial Tagline */}
          <div className="animate-fade-up-delay-3 max-w-2xl mx-auto text-center mb-12">
            <p className="body-lg text-foreground leading-relaxed">
              Trabalho com desenvolvimento web, mobile e arquitetura de sistemas.
              <br />
              Busco sempre unir clareza, documentação e boa prática técnica no que construo.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#projetos">
                Explorar Projetos
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#processo">Meu Processo</a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-up-delay-4 flex justify-center mt-20">
            <a
              href="#essencia"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-xs font-medium tracking-widest uppercase">Descobrir</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}