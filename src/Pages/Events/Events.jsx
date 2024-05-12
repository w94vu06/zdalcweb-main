/* eslint-disable react/jsx-key */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";
import BackGroundPage from "../../components/BackGroundPage/BackGroundPage";
import Content from "../../components/Content/Content";
import { useParams } from 'react-router-dom';

const Events = () => {
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
  const { id } = useParams();

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <BackGroundPage/>
      <Content id={id}/>
      <Footer />
    </div>
  );
};

export default Events;
