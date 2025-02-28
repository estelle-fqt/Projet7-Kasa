import { useState } from "react";
import "../styles/Collapse.scss";
import arrow from "../assets/arrowBack.png";
import PropTypes from "prop-types";

function Collapse({ sections, styleClass }) {
  //si aucune section fournie,valeurs /défaut
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

  //utiliser section passées en prop, ou celle /défaut
  const dataToDisplay = sections || defaultSections;

  const [openSections, setOpenSections] = useState(
    new Array(dataToDisplay.length).fill(false)
  );

  //fonction pour basculer l'état d'une section spécifique
  const toggleSection = (index) => {
    setOpenSections((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

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

Collapse.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
        .isRequired,
    })
  ),
  styleClass: PropTypes.string,
  isAccomodationPage: PropTypes.bool,
};

export default Collapse;
