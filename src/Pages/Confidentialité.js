import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Components/_confidentialité.scss";

const Confidentialité = () => {
  return (
    <div className="confidentialite-page">
      <div className="back-button-container">
        <Link to="/" className="back-button">
          ← Revenir au portfolio
        </Link>
      </div>
      <h1>Politique de confidentialité</h1>
      <p>
        <strong>
          J’accorde une importance toute particulière au droit à la vie privée
          des internautes et m’engage à protéger leurs données personnelles
          selon la législation française et européenne en vigueur.
        </strong>
      </p>
      <p>
        La présente politique de confidentialité, désignée ci-après la
        "Politique" expose mes pratiques concernant les informations que je peux
        collecter sur ce Site et leur utilisation.
      </p>
      <h2>Identité du responsable de traitement</h2>
      <p>
        J’agis en qualité de Responsable de traitement à l’égard des données
        personnelles collectées sur le Site :
      </p>
      <ul>
        <li>Jessie BESSET</li>
        <li>jessiebesset@hotmail.fr</li>
      </ul>
      <h2>Portée et acceptation de la présente politique</h2>
      <p>
        La présente Politique s’applique uniquement aux informations collectées
        à partir de ce site et ne s’applique pas aux informations collectées à
        partir d’autres sources, notamment, sans que cette liste ne soit
        limitée, Facebook®, Twitter®, YouTube® ou tout autre site ou réseaux
        social tiers.
      </p>

      <p>
        En utilisant mon site, vous acceptez les termes de la présente
        Politique. Si vous refusez les termes de la présente Politique, je vous
        invite à ne pas utiliser mon site ou à ne pas me transmettre
        d’information à caractère personnel.
      </p>
      <h2>Données collectées sur mon site</h2>
      <p>
        Aucune donnée personnelle n’est demandée aux visiteurs lorsqu’ils
        consultent simplement le Site. Certains éléments de données permettant
        indirectement une identification peuvent cependant être collectés
        automatiquement par les systèmes d’information et programmes utilisés
        pour le fonctionnement du Site et dont la transmission est inhérente à
        l’utilisation d’internet.
      </p>
      <p>
        Je collecte et conserve certaines données à caractère personnel vous
        concernant (c’est-à-dire les informations qui permettent de vous
        identifier directement ou indirectement) ci-après « Données personnelles
        » lorsque vous les communiquez volontairement sur mon Site.
      </p>
      <p>
        Je traite notamment, vos nom, prénom, adresse électronique, adresse IP,
        etc.
      </p>
      <p>
        e peux être amené à vous demander de me communiquer des Données
        personnelles, notamment dans les cas suivants :
      </p>
      <ul>
        <li>Quand vous souhaitez me transmettre des questions</li>
        <li>Quand vous souhaitez me contacter</li>
      </ul>
      <h2>Finalités de la collecte des données personnelles</h2>
      <p>
        Chaque formulaire présent sur le Site restreint au strict nécessaire la
        collecte des données personnelles et indique systématiquement le
        caractère obligatoire ou facultatif des données. En aucun cas je ne
        pourrai utiliser ces données personnelles pour une finalité autre que
        celle(s) explicitement annoncée(s) sur le formulaire et acceptée(s) par
        l’internaute.
      </p>
      <h2>Destinataire des données personnelles</h2>
      <p>
        Les données personnelles collectées sur mon Site me sont entièrement
        destinées.
      </p>
      <p>
        Je peux être amené à divulguer les Données personnelles aux autorités
        judiciaires, aux forces de l’ordre ou à toute autre autorité lorsque
        cela est requis par la loi.
      </p>
      <h2>Durée de conservation</h2>
      <p>
        Je conserverai vos Données personnelles pendant la durée nécessaire ou
        pour la durée requise par la loi en vigueur.
      </p>
      <h2>Vos droits </h2>
      <p>
        Conformément à la règlementation sur la protection des données
        personnelles, vous disposez d’un droit d’accès, de modification, de
        rectification et de suppression des données vous concernant. Pour
        exercer ce droit, vous pouvez me contacter par mail à l’adresse :
        contact@antoinelbc.fr ou par courrier à l’adresse : Antoine Le
        Bourdonnec, 26 Passage Hermitte, 33000 Bordeaux. Conformément à la
        réglementation en vigueur, votre demande doit être signée et accompagnée
        de la photocopie d’un titre d’identité portant votre signature et
        préciser l’adresse à laquelle doit vous parvenir la réponse. Une réponse
        vous sera alors adressée dans un délai de 2 mois suivant la réception de
        la demande.
      </p>
      <h2>Sécurité</h2>
      <p>
        La sécurité de vos Données personnelles est très importante pour moi.
        Les données personnelles recueillies sur ce Site sont traitées selon des
        protocoles sécurisés qui limitent considérablement les risques
        d’interception ou de récupération par des tiers. Toutefois, en raison de
        la nature ouverte du réseau internet, je ne peux pas exclure les actes
        de piratage, ou l’accès non autorisé des tiers. En continuant à utiliser
        mon Site, vous acceptez ces risques. Dans la limite de ce qui est
        autorisé par les lois en vigueur je décline toute responsabilité en cas
        de dommage direct ou indirect, des pertes, coûts, que ce soit
        contractuelle, délictuelle, y compris par négligence, que vous pourriez
        subir en cas d’accès non autorisé, de perte ou d’altération de vos
        données personnelles.
      </p>
      <div className="footer">
        <a href="/Confidentialité" target="_blank" rel="noopener noreferrer">
          politique de confidentialité
        </a>
        <h3>Copyright &copy; 2025 Jessie Besset</h3>
      </div>
    </div>
  );
};

export default Confidentialité;
