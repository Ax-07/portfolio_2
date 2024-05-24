import faEnvelope from "../../assets/icons/faEnvelope.svg";
import faLocationDot from "../../assets/icons/faLocationDot.svg";

export const ContactInfo = () => {
    return (
        <div className="contact-info">
            <div className="contact-info__wrapper">
              <img src={faEnvelope} alt="" />
              <p>xavier.affringue@gmail.com</p>
            </div>
            <div className="contact-info__wrapper">
              <img src={faLocationDot} alt="" />
              <p>19 rue des Alpes 07520 Lalouvesc</p>
            </div>
          </div>
    );
};