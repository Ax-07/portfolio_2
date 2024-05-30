import PropTypes from "prop-types";
import statusBar from "../../assets/images/StatusBar.png";

export const Mock = ({ type, size, imgsrc, alt }) => {
  return (
    <div className={`mock-${type} ${size ? `mock-${type}--${size}` : ""}`}>
      <div className="mock__content">
        {type === "mobile" ? (
          <img src={statusBar} alt="status bar iphone" className="mock-mobile__statusbar" />
        ) : (
          ""
        )}
        <img className={`mock__image-${type}`} src={imgsrc} alt={alt} />
      </div>
    </div>
  );
};

Mock.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
