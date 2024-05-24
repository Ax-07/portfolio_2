import { Link } from "react-router-dom";
import { Section } from "../../components/Section/Section";
import { Services } from "../services/Services";
import { Skills } from "../../components/skills/Skills";
import { TimeLine } from "../../components/timeLine/TimeLine";

const text =
  "Passionné par l'informatique et le développement depuis plusieurs années, j'ai récemment choisi de me reconvertir en tant que développeur web.";
const text2 =
  "J'ai commencé par me former en autodidacte, puis j'ai suivi une formation chez Openclassrooms pour obtenir une certification professionnelle d'intégrateur web.";
const text3 =
  "Motivé par la curiosité et l'envie de progresser, je suis à la recherche d'un premier poste de développeur web pour mettre en pratique mes connaissances et contribuer à des projets innovants.";

export const About = () => {
  return (
    <Section id={"about"} title={"A propos"}>
      <div className="about__text">
        <p>{text}</p><br/>
        <p>{text2}</p><br/>
        <p>{text3}</p>
      </div>
      {/* <div className="about__cta">
        <Link className="btn" to="#projets" data-target="#projets">
          Voir mes projets
        </Link>
      </div> */}
      <Services />
      <Skills />
      <TimeLine />
    </Section>
  );
};
