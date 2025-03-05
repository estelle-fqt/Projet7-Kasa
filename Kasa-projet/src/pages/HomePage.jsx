import Header from "../components/Header";
import Banner from "../components/Banner";
import homeBanner from "../assets/imgHomePage.png";
import CardsContainer from "../components/CardsContainer";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <Banner
        imageUrl={homeBanner}
        text={`Chez vous, partout et ailleurs`}
        opacity={0.6}
      />
      <CardsContainer />
      <Footer />
    </>
  );
}

export default Home;

// banner spécifique grâce aux props
// chaque composant est indépendant = facilite la maintenance et la réutilisation
// code clair : simple et lisible
// facile évolution : si on veut changer apparence d'un composant
// export permet d'importer composant dans le routeur (Router.jsx)
