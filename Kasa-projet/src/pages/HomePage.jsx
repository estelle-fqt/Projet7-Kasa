import Header from "../components/Header";
import Banner from "../components/Banner";
import homeBanner from "../assets/imgHomePage.png";
import CardsContainer from "../components/CardsContainer";
import Footer from "../components/Footer";

//import Layout from "../components/Layout";

function Home() {
  return (
    <>
      <Header />
      <Banner imageUrl={homeBanner} text={`Chez vous, partout et ailleurs`} />
      <CardsContainer />
      <Footer />
    </>
  );
}

export default Home;
