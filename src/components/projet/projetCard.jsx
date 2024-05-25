import { Link } from "react-router-dom";
import showMore from "../../assets/icons/show-more__btn.png";
import { Mock } from "../mocks/Mock";
import { StackList } from "../stacksList/StackList";

export const ProjetCard = (projet) => {
  return (
    <article className="projet-card">
      {/* <img src={bgPicture} alt="" className="projet-card__background"/> */}
      <div className="projet-card__mocks">
        <Mock type={"desktop"} size="sm" imgsrc={projet.pictures.img1.desktop} alt={projet.title} />
        <Mock type={"mobile"} size="sm" imgsrc={projet.pictures.img2.desktop} alt={projet.title} />
      </div>
      <div className="projet-card__infos">
        <div className="projet-card__categories">
            {projet.categories.map((category) => (
                <span key={category} className="projet-card__category">
                {category}
                </span>
            ))}
        </div>
        <StackList stacks={projet.stacks} />
      </div>
      <div className="projet-card__wrapper">
        <h3 className="projet-card__title">{projet.title}</h3>
        <span className="projet-card__btn">
          <Link to={`/projet/${projet.id}`}>
          <img src={showMore} alt="show more btn" />
          </Link>
        </span>
        <h4 className="projet-card__sub-title">{projet.subTitle}</h4>
      </div>
    </article>
  );
};
