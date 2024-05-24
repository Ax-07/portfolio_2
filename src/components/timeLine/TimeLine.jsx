import PropTypes from 'prop-types';

export const TimeLine = () => {

  const experiences = [
    {
      id: 1,
      title: "Chef de cuisine (saisonnier)",
    },
    {
      id: 2,
      title: "Cuisinier (saisonnier)",
    },
    {
      id: 3,
      title: "Chef de rayon (produits frais)",
    },
    {
      id: 4,
      title: "Employé libre service (saisonnier)",
    },
    {
      id: 5,
      title: "Serveur (saisonnier)",
    },
  ];

  const formations = [
    {
      id: 1,
      title: "Formation Intégrateur web (Openclassrooms)",
    },
    {
      id: 2,
      title: "Formation chef de rayon (LeaderPrice)",
    },
    {
      id: 3,
      title: "BEP Vente (option produits frais)",
    },
  ];
    return (
        <div className="timeline">
        <h2 className='timeline__title'>Expériences et formations</h2>
        <div className="timeline__container">
          <div className="timeline__left">
            {experiences.map((experience) => (
              <TimeLineItem key={experience.id}>
                {experience.title}
              </TimeLineItem>
            ))}
          </div>
          <div className="timeline__right">
            {formations.map((formation) => (
              <TimeLineItem key={formation.id}>
                {formation.title}
              </TimeLineItem>
            ))}
          </div>
        </div>
      </div>
    );
};

const TimeLineItem = ({ children }) => {
    return (
        <div className='timeline__item'>
            <div className='timeline__item-puce'>
                <span className='timeline__item-point'></span>
                <span className='timeline__item-line'></span>
            </div>
        {children}
        </div>
    );
}

TimeLineItem.propTypes = {
    children: PropTypes.node.isRequired,
};