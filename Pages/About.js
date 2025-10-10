import React from "react";
import NavBar from "../Components/NavBar";

const experiences = [
  {
    titre: "Apprentissage de HTML5 et CSS3",
    description:
      "Création de sites statiques, connaissance du SEO, SASS et GitHub",
  },
  {
    titre: "Formation continue React",
    description:
      "Approfondissement de la technologie React et développement d'interfaces utilisateur.",
  },
  {
    titre: "Ambitionne le Back-End sur Python",
    description:
      "Exploration des frameworks Python pour le développement back-end et l'intelligence artificielle.",
  },
];

const About = () => {
  return (
    <div>
      <NavBar />
      <h1></h1>
    </div>
  );
};

export default About;
