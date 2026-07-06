import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import Footer from "../../components/layout/Footer";
import Features from "./Features";
import DashboardPreview from "./DashboardPreview";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
        <DashboardPreview />
        <Footer />
    </>
  );
};

export default Home;