import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const NavSection = ({isFooter}) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(
    location.pathname + location.hash
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setActiveLink(location.pathname + location.hash);
  }, [location]);

  return (
    <nav className="nav-section">
      <ul className="nav-section__list">
        {isFooter && (
          <li className="nav-section__item">
            <Link
              to="/"
              className={`nav-section__link ${
                activeLink === "/" ? "active" : ""
              }`}
              onClick={scrollToTop}
            >
              Accueil
            </Link>
          </li>
        )}
        <li className="nav-section__item">
          <Link
            to="/#about"
            className={`nav-section__link ${
              activeLink === "/#about" ? "active" : ""
            }`}
          >
            A propos
          </Link>
        </li>
        <li className="nav-section__item">
          <Link
            to="/#skills"
            className={`nav-section__link ${
              activeLink === "/#skill" ? "active" : ""
            }`}
          >
            Compétences
          </Link>
        </li>
        <li className="nav-section__item">
          <Link
            to="/#projets"
            className={`nav-section__link ${
              activeLink === "/#projets" ? "active" : ""
            }`}
          >
            Projets
          </Link>
        </li>
        <li className="nav-section__item">
          <Link
            to="#contact"
            className={`nav-section__link ${
              activeLink === "/#contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
        </li>
        {/* <li className="nav-section__item">
          <DarkModeBtn />
        </li> */}
      </ul>
    </nav>
  );
};


NavSection.propTypes = {
  isFooter: PropTypes.bool,
};