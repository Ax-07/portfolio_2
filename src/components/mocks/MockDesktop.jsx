import PropTypes from "prop-types";

export const MockDesktop = ({imgsrc, alt}) => {
    return (
        <div className="projet-card__mock-desktop">
          <img
            className="projet-card__image"
            src={imgsrc}
            alt={alt}
          />
        </div>
    );
};

MockDesktop.propTypes = {
    imgsrc: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
};