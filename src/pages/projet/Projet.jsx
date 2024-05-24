import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useGetProjetQuery } from "../../api/projetApi";
import { useEffect } from "react";
import { Mock } from "../../components/mocks/Mock";
import bgRectangle from "../../assets/images/bgRectangle.png";
import { GithubIcon, GlobeIcon } from "../../utils/icons/iconsStack";

export const Projet = () => {
  const { id } = useParams();
  const { data: projets = [], error, isLoading} = useGetProjetQuery();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const projet = projets?.find((projet) => projet.id === Number(id));

  return (
    projet && <div className="projet-page">
      <header className="projet-page__header">
        <img src={bgRectangle} alt="background image of header" className="projet-page__header-mask" />
        <div className="projet-page__mocks">
          <Mock
            type={"desktop"}
            size={"sm"}
            imgsrc={projet.pictures.img1.desktop}
            alt={projet.title}
          />
          <Mock
            type={"mobile"}
            size={"sm"}
            imgsrc={projet.pictures.img2.desktop}
            alt={projet.title}
          />
        </div>
        <div className="projet-page__links">
          <a href={projet.links.github} target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
          <a href={projet.links.website} target="_blank" rel="noreferrer">
            <GlobeIcon />
          </a>
        </div>
      </header>
      <section className="projet-page__content">
        <div className="projet-page__infos">
          <div className="projet-page__wrapper">
            <h1 className="projet-page__title">{projet.title}</h1>
            <h2 className="projet-page__subTitle">{projet.subTitle}</h2>
          </div>
          <p className="projet-page__description">{projet.description}</p>
          <SkillTarget objectif={projet.objectif} />
          <Articles articles={projet.articles} />
        </div>
        <Conclusion conclusion={projet.conclusion} />
      </section>
    </div>
  );
};

const SkillTarget = ({objectif}) => {
  return (
    <div className="projet-page__skill-target">
      <h3 className="projet-page__skill-target__title">Compétences ciblé :</h3>
      <ul className="projet-page__skill-target__list">
        {objectif?.map((objectif) => (
          <li key={objectif} className="projet-page__skill-target__item">
            {objectif}
          </li>
        ))}
      </ul>
    </div>
  );
}
SkillTarget.propTypes = {
  objectif: PropTypes.array,
};

const Articles = ({articles}) => {
  return (
    <>
      {articles?.map((article, index) => (
        <article key={index} className="projet-page__article">
          <div className="projet-page__article__img">
            <img src={article.image} alt="" />
          </div>
          <aside className="projet-page__article__content">
          <h3 className="projet-page__article__title">{article.title}</h3>
          {article.content?.map((content, index) => (
            <p key={index}>{content}</p>
          ))}
          </aside>
        </article>
      ))}
    </>
  );
}
Articles.propTypes = {
  articles: PropTypes.array,
};

const Conclusion = ({conclusion}) => {
  return (
    <div className="projet-page__conclusion">
      <h3 className="projet-page__conclusion__title">Conclusion</h3>
      {conclusion?.map((conclusion, index)=> (
        <p key={index}>{conclusion}</p>
      ))}
    </div>
  );
}
Conclusion.propTypes = {
  conclusion: PropTypes.array,
};