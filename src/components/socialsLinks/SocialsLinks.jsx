import { NavLink } from "react-router-dom";
// import codePen from "../../assets/icons/socials/Codepen.svg";
import github from "../../assets/icons/socials/Github.svg";
import linkedin from "../../assets/icons/socials/Linkedin.svg";
// import figma from "../../assets/icons/stacks/Figma.svg";

export const SocialsLinks = () => {
    return (
        <div className="social-links">
            <ul className="social-links__list">
                <li className="social-links__item">
                    <NavLink to="https://github.com/Ax-07">
                        <img src={github} alt="icon github" />
                    </NavLink>
                </li>
                <li className="social-links__item">
                    <NavLink to="https://www.linkedin.com/in/xavier-affringue-374937267">
                        <img src={linkedin} alt="icon linkedin" />
                    </NavLink>
                </li>
                {/* <li className="social-links__item">
                    <NavLink to="https://codepen.io/ax-07">
                        <img src={codePen} alt="icon codepen" />
                    </NavLink>
                    </li>
                <li className="social-links__item">
                    <NavLink to="https://www.figma.com/files/user/1207400583489876966?fuid=1207400583489876966">
                        <img src={figma} alt="icon figma" />
                    </NavLink>
                </li> */}
            </ul>
          </div>
    );
};
