import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "../Styles/Components/_contact.scss";

export default function Contact() {
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isChecked) {
      setShowError(true);
      return;
    }

    const form = e.target;
    const prenom = form.prenom.value;
    const nom = form.nom.value;
    const email = form.email.value;
    const message = form.message.value;

    const mailtoLink = `mailto:jessiebesset@hotmail.fr?subject=Contact%20de%20${prenom}%20${nom}&body=${encodeURIComponent(
      `${message}\n\nDe: ${prenom} ${nom} (${email})`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section">
      <h2>Contactez-moi</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" name="prenom" required />
        </div>

        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="consent"
            checked={isChecked}
            onChange={(e) => {
              setIsChecked(e.target.checked);
              if (e.target.checked) setShowError(false);
            }}
          />
          <label htmlFor="consent">
            En soumettant ce formulaire, j'accepte que mes données personnelles
            soient utilisées pour me recontacter. Aucun autre traitement ne sera
            effectué avec mes informations. Pour en savoir plus, veuillez
            consulter la{" "}
            <a
              href="/Confidentialité"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique de confidentialité
            </a>
            .
          </label>
        </div>

        {showError && (
          <p className="error-message">
            ⚠️ Vous devez accepter la politique de confidentialité avant
            d’envoyer le message.
          </p>
        )}

        <button type="submit">Envoyer</button>
      </form>

      {/* Section mail et github*/}
      <div className="contact-links">
        <a
          href="mailto:jessiebesset@hotmail.fr"
          className="contact-icon"
          aria-label="Envoyer un mail"
        >
          <FaEnvelope />
          <span>jessiebesset@hotmail.fr</span>
        </a>

        <a
          href="https://github.com/JessieTLR"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-icon"
          aria-label="Lien vers GitHub"
        >
          <FaGithub />
          <span>Mon GitHub</span>
        </a>
      </div>

      <div className="footer">
        <Link to="./Confidentialité" rel="noopener noreferrer">
          politique de confidentialité
        </Link>
        <h3>Copyright &copy; 2025 Jessie Besset</h3>
      </div>
    </section>
  );
}
