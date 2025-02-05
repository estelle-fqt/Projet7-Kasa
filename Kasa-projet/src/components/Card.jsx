import "../styles/Card.scss";
import "react";
import "prop-types";
import PropTypes from "prop-types";

function Card({ title, cover }) {
  return (
    <article className="card">
      <img src={cover} alt={title} className="card-cover"></img>
      <div className="card-content">
        <p className="card-title">{title}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
