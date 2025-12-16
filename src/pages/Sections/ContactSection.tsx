import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/altemily",
      username: "@altemily",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arianebcarvalho",
      username: "/in/arianebcarvalho",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:altemilyc@gmail.com",
      username: "altemilyc@gmail.com",
    },
  ];

  return (
    <section id="contato" className="py-24 lg:py-32 bg-background">
      <div className="section-container">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Disponível para oportunidades e boas conversas sobre tecnologia.
          </p>
        </div>

        {/* Social Links */}
        <div className="max-w-lg mx-auto">
          <div className="glass-card p-8">
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl border border-border/50 hover:bg-secondary hover:border-border transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <link.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <p className="font-medium text-foreground">
                        {link.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {link.username}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
