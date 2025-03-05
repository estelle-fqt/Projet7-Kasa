import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/NotFoundPage.scss";
import { useNavigate } from "react-router-dom";
// hook pr rédiriger l'utilisateur

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
          {/*navigate("/") redirige vers la page d'accueil */}
          Retourner sur la page d&apos;accueil
        </button>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
