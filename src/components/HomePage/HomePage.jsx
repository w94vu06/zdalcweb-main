import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "../TopProducts/TopProducts";
import Introduction from "../Introduction/Introduction";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import AboutZhongDao from "../AboutZhongDao/AboutZhongDao";
import ChairWord from "../ChairWord/ChairWord";
import BackGroundPage from "../BackGroundPage/BackGroundPage";

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
      <BackGroundPage handleOrderPopup={handleOrderPopup} />
      {/*<TopProducts handleOrderPopup={handleOrderPopup} />
      <Introduction />
      <AboutZhongDao />
      <ChairWord />
  <Category />*/}
      <Footer />
    </div>
  );
}

export default HomePage;