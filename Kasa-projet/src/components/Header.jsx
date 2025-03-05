import { Link, useLocation } from "react-router-dom";
//useLocation récupère l'URL actuelle
import "../styles/Header.scss";
import logo from "../assets/logoKasa.svg";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header-logo"></img>
      <nav className="header-nav">
        <Link
          to="/"
          className={`header-link ${location.pathname === "/" ? "active" : ""}`}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={`header-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
