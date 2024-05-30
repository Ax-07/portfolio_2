import PropTypes from "prop-types";
import faCode from "../../assets/icons/faCode.svg";
import integration from "../../assets/icons/integration.svg";
import faPenNib from "../../assets/icons/faPenNib.svg";

const items = [
  {
    title: "Intégration",
    description: "Intégration de maquettes",
    icon: integration,
    alt: "integration",
  },
  {
    title: "Développement",
    description: "Développement de sites web",
    icon: faCode,
    alt: "code",
  },
  { 
    title: "Design", 
    description: "Design de sites web", 
    icon: faPenNib,
    alt: "pen"
  },
];

const ServicesItem = ({ title, description, icon, alt }) => {
  return (
    <li className="services__item">
        <span className="services__item-circle">
          <img
            src={icon}
            alt={`${alt} icon`}
            className="services__item-icon"
          />
          <img
            src={icon}
            alt={`${alt} icon blur`}
            className="services__item-icon services__item-icon--blur"
          />
        </span>
      <div className="services__item-wrapper">
        <h3 className="services__item-title">{title}</h3>
      <p className="services__item-description">{description}</p>
      </div>
    </li>
  );
};
export const Services = () => {
  return (
    <div className="services">
      <h2 className="services__title">Mes compétences</h2>
      <ul className="services__list">
        {items.map((item) => (
          <ServicesItem
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            alt={item.alt}
          />
        ))}
      </ul>
    </div>
  );
};

ServicesItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
