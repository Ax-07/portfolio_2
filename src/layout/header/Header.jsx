import { NavLink } from "react-router-dom";
import { BtnBurger } from "../../components/btnBurger/BtnBurger";
import { NavSection } from "../../components/navSection/NavSection";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import { useContext } from "react";
import { NavContext } from "../../context/navbarContext";

const MOBILE_BREAKPOINT = 768;

export const Header = () => {
  const { windowWidth } = useWindowSize();
  const { openDropNav } = useContext(NavContext);
  const isMobile = windowWidth < MOBILE_BREAKPOINT;
  // const isConnected = useSelector((state) => state.auth.isConnected);
  const isConnected = false;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className={`header ${openDropNav ? 'header--open' : ''}`}>
      <NavLink className="header__logo" to="/" onClick={scrollToTop}>{"<Ax-@7/>"}
      </NavLink>

      <div className="header__nav">
        {isMobile && openDropNav && (
          <>
            <NavSection isFooter={false}/>
          </>
        )}
        {!isMobile && <NavSection isFooter={false}/>}
      </div>
        {isMobile && <BtnBurger windowWidth={windowWidth} />}

      {!isMobile && isConnected && (
          <NavLink to="/admin" className={`admin-nav ${isConnected?"admin-nav--connected":""}`}>admin</NavLink>
      )}
    </header>
  );
};
