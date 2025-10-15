import React, { useState } from "react";
import "../Styles/Components/_contact.scss";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="contact-section">
      <h2>Contactez-moi</h2>
      <form
        className="contact-form"
        action="mailto:jessiebesset@hotmail.fr"
        method="POST"
        encType="text/plain"
      >
        <div className="form-group">
          <label htmlFor="prenom">Prénom</label>
          <input type="text" id="prenom" name="Prénom" required />
        </div>

        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="Nom" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="Email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="Message" rows="5" required></textarea>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="consent"
            required
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <label htmlFor="consent">
            En soumettant ce formulaire, j'accepte que mes données personnelles
            soient utilisées pour me recontacter. Aucun autre traitement ne sera
            effectué avec mes informations. Pour en savoir plus, veuillez
            consulter la{" "}
            <a
              href="/politique-de-confidentialite"
              target="_blank"
              rel="noopener noreferrer"
            >
              politique de confidentialité
            </a>
            .
          </label>
        </div>

        <button type="submit" disabled={!isChecked}>
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
