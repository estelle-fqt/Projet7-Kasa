import Header from "../components/Header";
import Banner from "../components/Banner";
import aboutPage from "../assets/imgAboutPage.png";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <Header />
      <Banner imageUrl={aboutPage} />
      <Collapse />
      <Footer />
    </>
  );
}

export default AboutPage;
