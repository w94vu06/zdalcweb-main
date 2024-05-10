import React from "react";
import HeroImg from "../../assets/hero/hero-bg.jpg";
import Slider from "react-slick";

const Hero = ({ handleOrderPopup }) => {

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] bg-white flex justify-center items-center
     dark:bg-gray-950 dark:text-white duration-200 ">
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <img src={HeroImg} alt="" className="w-full h-[500px] sm:h-[400px] object-cover z-10" />
      </div>
      {/* hero content */}
      <div className="absolute text-white text-4xl font-bold text-center">
        中華中道領導文化總會
        <div className="flex gap-5 justify-between items-center mt-4 text-xl font-light leading-8 max-md:flex-wrap">
          <img
            className="shrink-0 self-stretch my-auto max-w-full border border-white border-solid aspect-[100] stroke-[2px] stroke-white w-[184px]"
          />
          <div className="self-stretch">表彰文化</div>
          <img
            className="shrink-0 self-stretch my-auto max-w-full border border-white border-solid aspect-[100] stroke-[2px] stroke-white w-[184px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
