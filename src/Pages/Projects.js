import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../Styles/Components/_projects.scss";

import MiniLab from "../Assets/Mini_labJS.png";
import ReactMovie from "../Assets/React-movie.png";
import TheResto from "../Assets/Theresto.png";

const projects = [
  {
    title: "Mini-Lab JavaScript",
    image: MiniLab,
    description:
      "Un site vitrine d'expérimentations JavaScript : logique, DOM et manipulations diverses.",
    techs: ["HTML", "SASS", "JavaScript"],
    github: "https://github.com/JessieTLR/mini-lab-JS",
  },
  {
    title: "React Movie (API)",
    image: ReactMovie,
    description:
      "Application React consommant une API de films pour afficher les dernières sorties, les favoris, les détails des fiches et mettre en favoris.",
    techs: ["React", "API REST", "SASS"],
    github: "https://github.com/JessieTLR/React-Movie-app",
    demo: "https://movieapp-jessieb.netlify.app/",
  },
  {
    title: "The Resto",
    image: TheResto,
    description:
      "Page moderne réalisée en HTML5 et SASS. Le site met l’accent sur le design, la typographie élégante, et la structure responsive.",
    techs: ["HTML", "CSS"],
    github: "https://github.com/JessieTLR/Projet-le-resto",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">Ma sélection de projets</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-image-container">
              <img src={p.image} alt={p.title} className="project-image" />
              <div className="project-overlay">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-icon"
                    title="Voir le site"
                  >
                    <FaExternalLinkAlt />
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="overlay-icon"
                    title="Voir le code"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>

            <div className="project-info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="tech-list">
                {p.techs.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
