import { useState } from "react";
//gère l'état d'ouverture/fermeture des sections
import "../styles/Collapse.scss";
import arrow from "../assets/arrowBack.png";
import PropTypes from "prop-types";
//définit et valide types des props reçues /le composant

function Collapse({ sections, styleClass }) {
  //si aucune section fournie, valeurs /défaut
  const defaultSections = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  //utiliser section passées en prop, ou sinn celle /défaut
  const dataToDisplay = sections || defaultSections;

  //gestion état d'ouverture des sections
  const [openSections, setOpenSections] = useState(
    new Array(dataToDisplay.length).fill(false)
  );
  //openSection = tab d'état garde en mé quelle section ouverte/fermée
  //useState reçoit en val initiale un tab de booléens (false), stocké ds var openSections
  //dataToDisplay.length = nbr de sections a afficher
  //new Array crée un tab vide de cette longueur
  //fill(false) remplit chaque case du tab avc false = ttes sections fermées au départ
  //setOpenSections = fct màj le tab si clic false-->true

  //fonction pour basculer l'état d'ouverture d'une section qd clic dessus
  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };
  //index : index de la section cliquée
  //setOpenSections màj état des sections
  //prev = état précédent du tab openSections
  //map() crée new tab, parcourt chaque élément du tab prev, retourne !isOpen si section cliquée (inversion état), sinn isOpen (conserve état actuel)
  //Permet ouvrir/fermer une section indépendamment des autres
  //modif pas directement openSections mais crée copie modifiée = màj immuable

  return (
    <div className={`collapses ${styleClass || ""}`}>
      {dataToDisplay.map((section, index) => (
        <div key={index}>
          {/*header du collapse*/}
          <div
            className={`collapse ${openSections[index] ? "active" : ""}`}
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <img
              src={arrow}
              alt="flèche"
              className={openSections[index] ? "rotate" : ""}
            />
          </div>

          {/*contenu du collapse*/}
          <div className={`p-collapse ${openSections[index] ? "open" : ""}`}>
            {Array.isArray(section.content) ? (
              <ul>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

//validation des props
Collapse.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
        .isRequired,
    })
  ),
  styleClass: PropTypes.string,
};
//sections doit ê tab d'obj contenant:
// -title (string, obligatoire)
// -content (string ou array, obligatoire)
// styleClass string optionnelle

export default Collapse;
