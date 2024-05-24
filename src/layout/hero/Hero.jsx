import faEnvelope from "/src/assets/icons/faEnvelope.png";
import { Link } from "react-router-dom";
import { TextAnimation } from "../../components/TextAnimation/TextAnimation";
import { SlideInTextAnimation } from "../../components/TextAnimation/SlideInTextAnimation";
import { SeparateLine } from "../../components/separateLines/SeparateLine";

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__wrapper">
      {/* <SeparateLine /> */}
        <TextAnimation text="Affringue Xavier" />
        <SlideInTextAnimation text="Développeur web" />
        {/* <h2 className="hero__sub-title">Développeur web</h2> */}
        <span className="hero__tag tag">Disponible</span>
      </div>
      <Link to="/contact" className={`hero__btn btn`}>
        Contactez moi <img src={faEnvelope} alt="" className="hero__btn-icon" />
      </Link>
      {/* <SeparateLine /> */}

    </section>
  );
};
