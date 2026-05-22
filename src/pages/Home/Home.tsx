import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import AboutSection from "../../components/sections/AboutSection";
import ContactSection from "../../components/sections/ContactSection";
import HeroSection from "../../components/sections/HeroSection";
import Marquee from "../../components/sections/Marquee";
import ProjectsSection from "../../components/sections/ProjectsSection";

function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Marquee />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
