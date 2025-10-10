import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className="nav">
        <ul className="navUl">
          <li className="navli">
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              // Qui je suis
            </NavLink>
          </li>

          <li className="navli">
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              // Mon histoire
            </NavLink>
          </li>

          <li className="navli">
            <NavLink
              to="/blog"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              // Mes projets
            </NavLink>
          </li>

          <li className="navli">
            <NavLink
              to="/contact"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              // Me contacter
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
