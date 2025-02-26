import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { Navigate } from "react-router-dom";
import data from "../datas/data.json";
import "../styles/AccomodationPage.scss";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Rating from "../components/Rating";
import Footer from "../components/Footer";
//import NotFoundPage from "../pages/NotFoundPage";
//import { useEffect } from "react";

function AccomodationPage() {
  const { id } = useParams();
  //const navigate = useNavigate();

  const accomodation = data.find((acc) => acc.id === id);

  //si id n'existe pas = affiche page 404
  if (accomodation === undefined) {
    return "page erreur 404";
  }
  const {
    title,
    location,
    //description,
    //pictures,
    host,
    rating,
    //equipments,
    tags,
  } = accomodation;

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

        {/* Description et equipements */}
      </div>
      <Footer />
    </>
  );
}

export default AccomodationPage;
