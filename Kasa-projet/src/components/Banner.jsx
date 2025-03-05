import PropTypes from "prop-types";
import "../styles/Banner.scss";
import { useEffect, useState } from "react";

function Banner({ imageUrl, text, opacity }) {
  //Afficher un texte différent sur mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 376);
  //isMobile état qui vérifie si l'écran fait 376px ou moins

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 376);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //écoute changement taille de l'écran, met à jr isMobile, nettoie écouteur d'evenement

  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div
          className="banner-overlay"
          style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
        ></div>
        {text && (
          <p className="banner-text">
            {" "}
            {isMobile ? (
              <>
                Chez vous, <br /> partout et ailleurs
              </>
            ) : (
              text
            )}
          </p>
        )}
      </div>
    </>
  );
}

// validation des props avec PropTypes
Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string,
  opacity: PropTypes.number,
};

export default Banner;
