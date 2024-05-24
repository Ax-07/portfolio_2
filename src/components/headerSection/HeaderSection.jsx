import PropTypes from "prop-types";
import bgPicture1 from "../../assets/images/bgPicture1.png";

export const HeaderSection = ({ title, subTitle, tag }) => {
  return (
    <header className="headerSection" style={{width: "100%", position: "relative"}}>
      <img src={bgPicture1} alt="" className="section-title__overlay headerSection__title" />
      {tag && <span className="tag">Disponible</span>}
      <h2 className="contact__title">{title}</h2>
      {subTitle && <h3 className="contact__title contact__title--grey">{subTitle}</h3>}
    </header>
  );
};

HeaderSection.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    tag: PropTypes.bool,
    };