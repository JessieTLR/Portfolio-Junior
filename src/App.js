import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NavBar from "./Components/NavBar";
import "../src/Styles/Components/_app.scss";
import Confidentialité from "./Pages/Confidentialité";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [navState, setNavState] = useState("home");

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

  // Gestion du comportement de la NavBar selon la position du scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const homeHeight = homeRef.current?.offsetHeight || 0;

      if (scrollY < homeHeight * 0.2) {
        setNavState("home");
      } else if (scrollY >= homeHeight * 0.2 && scrollY < homeHeight * 0.9) {
        setNavState("hidden");
      } else if (scrollY >= homeHeight * 0.9) {
        setNavState("top");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <Routes>
        {/*Route principale (page complète sauf politique de confidentialité) */}
        <Route
          path="/"
          element={
            <>
              <NavBar
                activeSection={activeSection}
                navState={navState}
                scrollToHome={() => scrollToSection(homeRef)}
                scrollToAbout={() => scrollToSection(aboutRef)}
                scrollToProjects={() => scrollToSection(projectsRef)}
                scrollToContact={() => scrollToSection(contactRef)}
              />

              <div className="parallax-container">
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
            </>
          }
        />

        {/* Route pour politique de confidentialité */}
        <Route path="/Confidentialité" element={<Confidentialité />} />
      </Routes>
    </Router>
  );
}

export default App;
