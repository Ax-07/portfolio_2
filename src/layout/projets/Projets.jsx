import { Section } from "../../components/Section/Section";
import { useGetProjetQuery } from "../../api/projetApi";
import { ProjetCard } from "../../components/projet/projetCard.jsx" 
import { useEffect } from "react";

export const Projets = () => {
    const { data: projets, error, isLoading } = useGetProjetQuery();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    
    return (
        <Section id="projets" title="projets">
            <ul className="projets__list">
                {projets && projets.map((projet) => (
                    <li key={projet.id} className="projets__item">
                        <ProjetCard {...projet} />
                    </li>
                ))}
            </ul>
        </Section>
    );
};
