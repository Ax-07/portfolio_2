import PropTypes from "prop-types";
import statusBar from "../../assets/images/StatusBar.png";

export const MockMobile = ({ type, imgsrc, alt }) => {
  return (
    <div className={`projet-card__mock-${type}`}>
      {type === "mobile" ? (
        <img
          src={statusBar}
          alt=""
          className="projet-card__mock-mobile__statusbar"
        />
      ) : (
        ""
      )}
      <img className={`projet-card__image-${type}`} src={imgsrc} alt={alt} />
    </div>
  );
};

MockMobile.propTypes = {
  type: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
