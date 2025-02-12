import { useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";
// import CaegoriesList from "./FabricsList";
import FeaturedSection from "./featuredSection";
import ImageCarousel from "./imageCarousel";
//import FabricsList from "./FabricsList";
import FabricsList from "./FabricsList";

const Home = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <main>
        <ImageCarousel /> {/* Image carousel section */}
        <FeaturedSection /> {/* Featured products section */}
        {/* Caegories list section */}
        <FabricsList/>
      </main>
      <Footer />
    </>
  );
};

export default Home;
