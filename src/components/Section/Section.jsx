import { useRef } from "react";
import PropTypes from "prop-types";
import bgSectionTitleMobile from "../../assets/images/bgSectionTitleMobile.png";
import bgSectionTitleTablet from "../../assets/images/bgSectionTitleTablet.png";
import bgSectionTitleDesktop from "../../assets/images/bgSectionTitleDesktop.png";
import { useIntersectionObserver } from "../../utils/hooks/useIntersectionObserver";

export const Section = ({ id, title, subTitle, tag, children }) => {
  const ref = useRef();
  const isVisible = useIntersectionObserver(ref, { threshold: 0.010 });
  return (
    <section
      ref={ref}
      id={id}
      className={`section ${id} ${isVisible ? "section--display" : ""}`}
    >
        <picture className="section-title__overlay">
							<source media="(min-width: 1024px)" srcSet={bgSectionTitleDesktop} type="image/png"/>
							<source media="(min-width: 500px)" srcSet={bgSectionTitleTablet} type="image/png"/>
							<img src={bgSectionTitleMobile} className="section-title__overlay-img"
								alt="Background section title" width="100%" height="auto"/>
						</picture>

      {tag && <span className="section__tag tag">Disponible</span>}
      <div className="section__title-wrapper">
        <h2 className="section__title">{title}</h2>
        {subTitle && <h3 className="section__sub-title">{subTitle}</h3>}
      </div>
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  tag: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
