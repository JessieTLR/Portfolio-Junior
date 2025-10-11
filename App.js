import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (refName) => {
    refName.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Détection automatique de la section visible
  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "projects", ref: projectsRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visibleSection = activeSection;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            visibleSection = entry.target.id;
          }
        });

        setActiveSection(visibleSection);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) observer.unobserve(section.ref.current);
      });
    };
  }, [activeSection]);

  // Gestion du tout en haut ou tout en bas
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      if (scrollY === 0) {
        setActiveSection("home");
      } else if (scrollY + windowHeight >= bodyHeight - 5) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll">
      <NavBar
        activeSection={activeSection}
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />

      <section id="home" ref={homeRef}>
        <Home />
      </section>

      <section id="about" ref={aboutRef}>
        <About />
      </section>

      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>

      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
