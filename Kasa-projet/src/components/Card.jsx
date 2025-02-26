import "../styles/Card.scss";
import "react";
import "prop-types";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ title, cover, id }) {
  return (
    <Link to={`/accomodation/${id}`} className="card-link">
      <article className="card">
        <img src={cover} alt={title} className="card-cover"></img>
        <div className="card-content">
          <p className="card-title">
            {title}
            {id}
          </p>
        </div>
      </article>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
