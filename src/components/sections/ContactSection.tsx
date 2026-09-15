import { ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import "./ContactSection.style.css";

function ContactSection() {
  return (
    <section className="sec contact-section" id="contato">
      <div className="wrap">
        <div className="contact-box">
          <div>
            <span className="contact-label">05 / Contato</span>
            <h2 className="contact-h">Vamos construir algo relevante?</h2>
            <p className="contact-sub">
              Para oportunidades, projetos mobile ou uma boa conversa sobre engenharia.
            </p>
            <div className="contact-actions">
              <a href="mailto:altemilyc@gmail.com" className="contact-primary">
                Entrar em contato <ArrowUpRight size={16} />
              </a>
              <a href={`${import.meta.env.BASE_URL}Ariane-Carvalho-CV.pdf`} className="contact-secondary" download>
                <Download size={15} /> Currículo
              </a>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
