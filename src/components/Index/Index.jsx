import React from "react";
import Category from "../../components/Category/Category";
import "aos/dist/aos.css";
import TopProducts from "../../components/RecentEvents/RecentEvents";
import Introduction from "../../components/Introduction/Introduction";
import AboutZhongDao from "../../components/AboutZhongDao/AboutZhongDao";
import ChairWord from "../../components/ChairWord/ChairWord";

const Index = () => {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Introduction />
      <AboutZhongDao />
      <ChairWord />
      <Category />
    </div>
  );
}

export default Index;