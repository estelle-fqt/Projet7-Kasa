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
