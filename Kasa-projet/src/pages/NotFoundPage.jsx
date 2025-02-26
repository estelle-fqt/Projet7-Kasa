import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/NotFoundPage.scss";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="erreur">
        <h1 className="erreur-404">404</h1>
        <span className="erreur-info">
          Oups! La page que vous demandez n&apos;existe pas.
        </span>
        <button onClick={() => navigate("/")}>
          Retourner sur la page d&apos;accueil
        </button>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
