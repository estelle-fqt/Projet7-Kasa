import "prop-types";
import PropTypes from "prop-types";
import starActive from "../assets/starActive.png";
//import starInactive from "../assets/starInactive.png";

function Rating({ rating }) {
  const maxStars = 5;

  return (
    <div className="rating-stars">
      {[...Array(maxStars)].map((_, index) => (
        <span key={index} className={index < rating ? "star filled" : "star"}>
          <img src={starActive} alt="étoile active" />
          {/*<img src={starInactive} alt="étoile inactive" />*/}
        </span>
      ))}
    </div>
  );
}
// ajouter les étoiles inactives

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Rating;
