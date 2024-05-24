import { NavSection } from "../../components/navSection/NavSection";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      {/* <NavSection isFooter={true}/> */}
      <div className="footer__copyrigth">
        <p>© {date} Affringue Xavier</p>
      </div>
    </footer>
  );
};
