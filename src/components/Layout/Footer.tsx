import { FlowingLineHorizontal } from "@/components/FlowingLine";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="section-container">
        <FlowingLineHorizontal className="mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">
              Ariane<span className="text-primary">.</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Ariane Carvalho. - Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/altemily"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/arianebcarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}