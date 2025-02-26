import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../datas/data.json";
import "../styles/Slideshow.scss";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

function Slideshow() {
  const { id } = useParams(); // récupère l'id de la route
  const [pictures, setPictures] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // trouve img correspond au logement via l'id
    const accomodation = data.find((acc) => acc.id === id);
    if (accomodation) {
      setPictures(accomodation.pictures);
    }
  }, [id]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-img-wrapper">
        <img src={pictures[currentIndex]} alt="" className="carousel-img" />
      </div>
      {pictures.length > 1 && (
        <>
          <button className="carousel-arrow left" onClick={prevImage}>
            <img src={arrowLeft} alt="flèche gauche" />
          </button>
          <span className="numbering">
            {currentIndex + 1}/{pictures.length}
          </span>
          <button className="carousel-arrow right" onClick={nextImage}>
            <img src={arrowRight} alt="flèche droite" />
          </button>
        </>
      )}
    </div>
  );
}

export default Slideshow;
