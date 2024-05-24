import { Contact } from "../../layout/contact/Contact";
import { Hero } from "../../layout/hero/Hero";
import { Projets } from "../../layout/projets/Projets";
import { About } from "../../layout/about/About";

export const Home = () => {
    return (
        <div id="home-page">
            <Hero />
            <About />
            <Projets />    
            <Contact />
        </div>
    );
};
