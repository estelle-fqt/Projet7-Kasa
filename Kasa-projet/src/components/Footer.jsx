import logo from "../assets/logoKasaFooter.svg";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="Kasa logo" className="footer-logo"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
