import React from "react";
import { useState } from "react";
import "../Styles/Components/_experiences.scss";

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const exp = [
    {
      title: "Formation Développement Web",
      details: (
        <>
          <p>
            <strong>Organismes :</strong> OpenClassRoom / FromScratch /
            Docstring
          </p>
          <p>
            <strong>Période :</strong> 2025 – aujourd'hui
          </p>
          <p>
            <strong>Compétences : </strong>HTML, CSS, JavaScript, React en
            formation continue, Python début et formation continue
          </p>
        </>
      ),
    },
    {
      title: "Chargée de mission Développement Durable",
      details: (
        <>
          <p>
            <strong>Organisation :</strong> Communautés de communes du
            Frontonnais et des Hauts Tolosans
          </p>
          <p>
            <strong>Période :</strong> 2015 – Aujourd'hui
          </p>
          <ul>
            <strong>Compétences acquises :</strong>
            <li>Gestion de projets</li>
            <li>Création et suivi d'évènements</li>
            <li>Travail en équipe</li>
            <li>Autonomie</li>
          </ul>
        </>
      ),
    },
    {
      title: "Master Développement Durable",
      details: (
        <>
          <p>
            <strong>Master 2 :</strong> Aménagement du territoire{" "}
          </p>
          <p>
            <strong>Période :</strong> 2013-2015
          </p>
          <p>
            <strong>Spécialisation :</strong> Gestion de l'environnement
            <br />
            <strong>Mémoire :</strong> “Création et valorisation des chemins de
            randonnées sur la CC du Frontonnais”.
          </p>
        </>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="experiences">
      <h2>Mon Parcours</h2>
      {exp.map((exp, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? "active" : ""}`}
        >
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            {exp.title}
            <span className="arrow">{activeIndex === index ? " ▲" : " ▼"}</span>
          </button>
          <div className="accordion-content">
            {activeIndex === index && (
              <div className="accordion-text">{exp.details}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experiences;
