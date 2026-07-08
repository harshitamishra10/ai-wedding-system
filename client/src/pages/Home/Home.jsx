import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import Features from "./Features";
import DashboardPreview from "./DashboardPreview";
import Gallery from "./Gallery";
import Footer from "../../components/layout/Footer";
import Celebrations from "./Celebrations";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Celebrations />
      <Features />
        <DashboardPreview />
        <Gallery />
        <Footer />
    </>
  );
};

export default Home;