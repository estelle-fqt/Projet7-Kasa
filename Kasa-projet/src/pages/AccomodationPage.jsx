import { useParams } from "react-router-dom";
// useParams = hook récupère ID du logement depuis l'url
import data from "../datas/data.json";
import "../styles/AccomodationPage.scss";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import NotFoundPage from "./NotFoundPage";

function AccomodationPage() {
  const { id } = useParams();
  const accomodation = data.find((acc) => acc.id === id);
  // cherche logement correspondant dans data.json

  //si id n'existe pas = affiche page 404
  if (accomodation === undefined) {
    return <NotFoundPage />;
  }

  // récuperation données du logement pr les réutiliser dans le rendu
  const {
    title,
    location,
    description,
    host,
    rating,
    equipments,
    tags,
  } = accomodation;

  // sections dynamique pour collapse
  const sectionDescription = [{ title: "Description", content: description }];
  const sectionEquipments = [{ title: "Equipements", content: equipments }];

  return (
    <>
      <Header />

      <div className="accomodation-container">
        {/* Carrousel d'images */}
        <Slideshow />

        {/* Infos principales */}
        <div className="accomodation-header">
          <div className="accomodation-info">
            <h1>{title}</h1>
            <p>{location}</p>

            {/* Tags */}
            {/* affichage dynamique*/}
            <div className="tags">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hôte et note */}
          <div className="host">
            <div className="host-info">
              <p className="host-name">{host.name}</p>
              <img
                className="host-picture"
                src={host.picture}
                alt={host.name}
              />
            </div>
            <Rating className="rating" rating={Number(rating)} />
          </div>
        </div>

        {/* Collapses dynamiques Description et equipements */}
        <div className="collapses-contain">
          <div>
            <Collapse sections={sectionDescription} />
          </div>
          <div>
            <Collapse sections={sectionEquipments} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccomodationPage;

//réutilisation des composants
//gestion des erreurs (NotFoundPage)
//affichage dynamique : contenu généré automatiquement à partir data.json
