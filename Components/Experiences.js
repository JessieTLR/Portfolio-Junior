import React from "react";
import { useState } from "react";
import "../Styles/Components/_experiences.scss";

const Experiences = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const exp = [
    {
      title: "💻 Formation Développement Web",
      details: (
        <>
          <p>
            <strong>Organisme :</strong> OpenClassRoom / FromScratch
          </p>
          <p>
            <strong>Période :</strong> 2025 – aujourd'hui
          </p>
          <p>
            Compétences : HTML, CSS, JavaScript, React en formation continu
            <br />
            Projet final : création d’un site portfolio responsive.
          </p>
        </>
      ),
    },
    {
      title: "🌱 Chargée de mission Développement Durable",
      details: (
        <>
          <p>
            <strong>Organisation :</strong> CC du Frontonnais / des Hauts
            Tolosans
          </p>
          <p>
            <strong>Période :</strong> 2015 – Aujourd'hui
          </p>
          <ul>
            <li>Gestion de projet</li>
            <li>Création et suivi d'évènement</li>
            <li>Travail en équipe</li>
          </ul>
        </>
      ),
    },
    {
      title: "🎓 Master Développement Durable",
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
            <span className="arrow">{activeIndex === index ? "▲" : "▼"}</span>
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
