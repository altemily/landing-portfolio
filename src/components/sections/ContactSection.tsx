import { Download, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { contactTopics } from "../../data/portfolio";

function ContactSection() {
  return (
    <section className="sec contact-section" id="contato">
      <div className="wrap">
        <div className="contact-box">
          <div>
            <h2 className="contact-h">
              Vamos construir
              <br />
              <em>algo juntos?</em>
            </h2>
            <p className="contact-sub">
              Disponível para desenvolvimento web e mobile, MVPs, automações,
              consultoria em Power Platform e prototipagem de produto digital. Me manda
              uma mensagem.
            </p>
            <div className="contact-topics">
              {contactTopics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
          <div className="contact-links">
            <a href="mailto:altemilyc@gmail.com" className="clink">
              <Mail size={15} />
              altemilyc@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/arianebcarvalho/"
              target="_blank"
              rel="noreferrer"
              className="clink"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href="https://github.com/altemily"
              target="_blank"
              rel="noreferrer"
              className="clink"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href="https://instagram.com/builtbyariane"
              target="_blank"
              rel="noreferrer"
              className="clink"
            >
              <Instagram size={15} />
              @builtbyariane
            </a>
            <a href="/Ariane-Carvalho-CV.pdf" className="clink clink-accent" download>
              <Download size={15} />
              Baixar currículo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
