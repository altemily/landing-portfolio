import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { HeroSection } from "@/pages/Sections/HeroSection";
import { ProcessSection } from "@/pages/Sections/ProcessSection";
import { ProjectsSection } from "@/pages/Sections/ProjectsSection";
import { SkillsSection } from "@/pages/Sections/SkillsSection";
import { ContactSection } from "@/pages/Sections/ContactSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;