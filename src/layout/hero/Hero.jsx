import faEnvelope from "/src/assets/icons/faEnvelope.png";
import { Link } from "react-router-dom";
import { TextAnimation } from "../../components/TextAnimation/TextAnimation";
import { SlideInTextAnimation } from "../../components/TextAnimation/SlideInTextAnimation";
import { Tag } from "../../components/tag/Tag";

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__wrapper">
        <TextAnimation text="Affringue Xavier" />
        <SlideInTextAnimation text="Développeur web" />
        <Tag text={"Disponible"} />
      </div>
      <Link to="/contact" className={`hero__btn btn`}>
        Contactez moi <img src={faEnvelope} alt="" className="hero__btn-icon" />
      </Link>
    </section>
  );
};
