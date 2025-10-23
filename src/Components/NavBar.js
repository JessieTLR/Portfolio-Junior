import React from "react";
import "../Styles/Components/_navbar.scss";

const NavBar = ({
  activeSection,
  navState,
  scrollToHome,
  scrollToAbout,
  scrollToProjects,
  scrollToContact,
}) => {
  return (
    <nav className={`nav nav--${navState}`}>
      <ul className="navUl">
        <li
          className={`navli ${activeSection === "home" ? "active" : ""}`}
          onClick={scrollToHome}
        >
          <span>//</span> Qui je suis
        </li>
        <li
          className={`navli ${activeSection === "about" ? "active" : ""}`}
          onClick={scrollToAbout}
        >
          <span>//</span> Mon expérience
        </li>
        <li
          className={`navli ${activeSection === "projects" ? "active" : ""}`}
          onClick={scrollToProjects}
        >
          <span>//</span> Mes projets
        </li>
        <li
          className={`navli ${activeSection === "contact" ? "active" : ""}`}
          onClick={scrollToContact}
        >
          <span>//</span> Contactez-moi
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
