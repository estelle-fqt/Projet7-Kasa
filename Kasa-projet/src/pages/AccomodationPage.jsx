import { useParams } from "react-router-dom";
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

  //si id n'existe pas = affiche page 404 (if(!accomodation))
  if (accomodation === undefined) {
    return <NotFoundPage />;
  }
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
  const sectionsDescription = [{ title: "Description", content: description }];

  const sectionsEquipments = [{ title: "Equipements", content: equipments }];

  return (
    <>
      <Header />
      <div className="accomodation-container">
        {/* Galerie d'images */}
        <Slideshow />

        {/* Infos principales */}
        <div className="accomodation-header">
          <div className="accomodation-info">
            <h1>{title}</h1>
            <p>{location}</p>

            {/* Tags */}
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
            <Rating rating={rating} />
          </div>
        </div>

        {/* Collapses dynamiques Description et equipements */}
        <div className="collapses-contain">
          <div>
            <Collapse
              sections={sectionsDescription}
              styleClass="accomodation-collapse"
              isAccomodationPage={true}
            />
          </div>
          <div>
            <Collapse
              sections={sectionsEquipments}
              styleClass="accomodation-collapse"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccomodationPage;
