import Footer from "../../components/Layout/Footer";
import Header from "../../components/Layout/Header";
import AboutSection from "../../components/sections/AboutSection";
import ContactSection from "../../components/sections/ContactSection";
import HeroSection from "../../components/sections/HeroSection";
import ProjectsSection from "../../components/sections/ProjectsSection";
import StackSection from "../../components/sections/StackSection";
import "./Home.style.css";

function Home() {
  return (
    <>
      <Header />
      <main className="home-page">
        <HeroSection />
        <StackSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
