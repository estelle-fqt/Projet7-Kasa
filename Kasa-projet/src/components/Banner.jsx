import PropTypes from "prop-types";
import "../styles/Banner.scss";

function Banner({ imageUrl, text }) {
  return (
    <>
      <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
        {text && <p>{text}</p>}
      </div>
    </>
  );
}

// validation des props avec PropTypes
Banner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  text: PropTypes.string,
};

export default Banner;
