import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Category from "../../components/Category/Category";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "../../components/RecentEvents/RecentEvents";
import Introduction from "../../components/Introduction/Introduction";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
import AboutZhongDao from "../../components/AboutZhongDao/AboutZhongDao";
import ChairWord from "../../components/ChairWord/ChairWord";
import BackGroundPage from "../../components/BackGroundPage/BackGroundPage";

const HomePage = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Introduction />
      <AboutZhongDao />
      <ChairWord />
      <Category />
      <Footer />
    </div>
  );
}

export default HomePage;