import { Link } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/logoKasa.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Kasa logo" className="header-logo"></img>
      <nav className="header-nav">
        <Link to="/" className="header-link">
          Accueil
        </Link>
        <Link to="/about" className="header-link">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
