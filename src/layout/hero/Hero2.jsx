import profilPicture from "/src/assets/images/profil-picture.png";
import faEnvelope from "/src/assets/icons/faEnvelope.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__col">
        <div className="hero__col hero__col-left">
          <img
            src={profilPicture}
            alt="photo de profil"
            className="hero__picture"
          />
        </div>
        <div className="hero__col hero__col-right">
          <div className="hero__wrapper">
            <span className="hero__tag tag">Disponible</span>
            <h1 className="hero__title">Affringue Xavier</h1>
            <h2 className="hero__sub-title">Développeur web</h2>
          </div>
          <Link to="#contact" className={`hero__btn btn`}>
            Contactez moi{" "}
            <img src={faEnvelope} alt="" className="hero__btn-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};