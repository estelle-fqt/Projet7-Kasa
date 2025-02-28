import PropTypes from "prop-types";
import starActive from "../assets/starActive.png";
import starInactive from "../assets/starInactive.png";

function Rating({ rating }) {
  const maxStars = 5;

  return (
    <div className="rating-stars">
      {[...Array(maxStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? starActive : starInactive}
          alt={index < rating ? "étoile active" : "étoile inactive"}
          className="star"
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
