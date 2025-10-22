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
        ></li>
        <li
          className={`navli ${activeSection === "about" ? "active" : ""}`}
          onClick={scrollToAbout}
        ></li>
        <li
          className={`navli ${activeSection === "projects" ? "active" : ""}`}
          onClick={scrollToProjects}
        ></li>
        <li
          className={`navli ${activeSection === "contact" ? "active" : ""}`}
          onClick={scrollToContact}
        ></li>
      </ul>
    </nav>
  );
};

export default NavBar;
