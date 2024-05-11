/* eslint-disable react/jsx-key */
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";
import SDG1 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-01.jpg"
import SDG2 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-02.jpg"
import SDG3 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-03.jpg"
import ZhongDao from "../../assets/zdalc/ZdalcIcon.png"
import BackGroundPage from "../../components/BackGroundPage/BackGroundPage";
import Img1 from "../../assets/zdalc/class.jpg";
import Img2 from "../../assets/zdalc/class.jpg";
import Img3 from "../../assets/zdalc/class.jpg";
import sdg01 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-01.jpg";
import zdIcons01 from "../../assets/zdalc/Zdalc Icons/zdalcIndex.png";


const SDGsData = [
  {
    id: 1,
    img: SDG1,
    title: "終結貧窮",
    description:
      "消除各地一切形式的貧窮",
  },
  {
    id: 2,
    img: SDG2,
    title: "消除飢餓",
    description:
      "確保糧食安全，消除飢餓，促進永續農業",
  },
  {
    id: 3,
    img: SDG3,
    title: "健康與福祉",
    description:
      "確保及促進各年齡層健康生活與福祉",
  },
];

const ZhongDaoData = [
  {
    id: 1,
    img: ZhongDao,
    title: "",
    description:
      "",
  },
  {
    id: 2,
    img: ZhongDao,
    title: "",
    description:
      "",
  },
  {
    id: 3,
    img: ZhongDao,
    title: "",
    description:
      "",
  },
];

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

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <div className="flex flex-row items-center">
        {SDGsData.map((data) => (
          <img src={data.img} alt={data.title} className="w-36 h-36 p-3" />
        ))}
        <p className="text-6xl my-auto px-3">/</p>
        {ZhongDaoData.map((data) => (
          <img src={data.img} alt={data.title} className="w-36 h-36 rounded-3xl object-cover bg-black p-3" />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
