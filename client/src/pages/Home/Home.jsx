import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import Footer from "../../components/layout/Footer";
import Features from "./Features";
import DashboardPreview from "./DashboardPreview";
//import Gallery from "./Gallery";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
        <DashboardPreview />
        <Gallery />
        <Footer />
    </>
  );
};

export default Home;