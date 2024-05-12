import React from "react";
import { useState, useEffect } from "react";
import Img1 from "../../assets/zdalc/class.jpg";

import sdg01 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-01.jpg";
import sdg02 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-02.jpg";
import sdg03 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-03.jpg";
import sdg04 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-04.jpg";
import sdg05 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-05.jpg";
import sdg06 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-06.jpg";
import sdg07 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-07.jpg";
import sdg08 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-08.jpg";
import sdg09 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-09.jpg";
import sdg10 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-10.jpg";
import sdg11 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-11.jpg";
import sdg12 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-12.jpg";
import sdg13 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-13.jpg";
import sdg14 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-14.jpg";
import sdg15 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-15.jpg";
import sdg16 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-16.jpg";
import sdg17 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-17.jpg";

import zdIcons01 from "../../assets/zdalc/Zdalc Icons/zdalcIndex.png";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const sdgsImages = {
  1: sdg01,
  2: sdg02,
  3: sdg03,
  4: sdg04,
  5: sdg05,
  6: sdg06,
  7: sdg07,
  8: sdg08,
  9: sdg09,
  10: sdg10,
  11: sdg11,
  12: sdg12,
  13: sdg13,
  14: sdg14,
  15: sdg15,
  16: sdg16,
  17: sdg17,
};

const zdImages = {
  1: zdIcons01,
  2: zdIcons01,
  3: zdIcons01,
  4: zdIcons01,
  5: zdIcons01,
  6: zdIcons01,
  7: zdIcons01,
  8: zdIcons01,
  9: zdIcons01,
  10: zdIcons01,
  11: zdIcons01,
  12: zdIcons01,
  13: zdIcons01,
  14: zdIcons01,
  15: zdIcons01,
  16: zdIcons01,
  17: zdIcons01,
};

const RecentEvents = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  const [eventsData, setEventsData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/newFour')
      .then(response => response.json())
      .then(data => setEventsData(data));
  }, []);

  const ToEvents = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 text-black">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            近期活動
          </h1>
          <div data-aos="fade-up" className="mx-auto my-4 h-0.5 w-10 bg-black"></div>
        </div>

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-5 place-items-center ">
          {eventsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] cursor-pointer"
              onClick={() => ToEvents(data.id)}
            >
              {/* image section */}
              <div className="relative overflow-hidden h-[150px] rounded-t-2xl">
                <img
                  src={Img1}
                  alt=""
                  className="w-full block mx-auto transform -translate-y-0 duration-300 drop-shadow-md"
                />
              </div>

              {/* details section */}
              <div className="p-4 text-left">
                <div className="flex items-center pb-2">
                  <h1 className="text-sm text-gray-500 group-hover:text-white font-bold ">-{new Date(data.date).toISOString().split('T')[0]}</h1>
                  <span className="ml-4 bg-primary text-white px-2 py-0.5 rounded group-hover:bg-white group-hover:text-primary ">{data.categories}</span>
                </div>
                <div className="flex items-center pb-2">
                  <h1 className="text-xl text-black font-bold overflow-hidden overflow-ellipsis whitespace-nowrap">{data.title}</h1>
                </div>
                {/* SDGs指標圖 */}
                <div className="flex justify-between px-4">
                  {data.SDGsNum ? data.SDGsNum.split(',').map((num) => (
                    <img
                      key={num}
                      src={sdgsImages[num]}
                      alt={`SDG ${num}`}
                      className="w-1/4 rounded"
                    />
                  )) : []}
                </div>

                <div className="flex justify-start">
                  <button className="flex items-center justify-center mt-2 text-primaryDark py-1 font-bold w-full sm:w-auto">
                    <span>查看更多</span>
                    <GrFormNextLink className="text-4xl h-9 w-9 pl-3 ml-auto" />
                  </button>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-90 transition-opacity duration-200 rounded-2xl">
                <div className="flex flex-col justify-center items-center h-full">
                  <span className="text-white text-2xl font-bold pb-5">中道指標</span>
                  {/* 中道指標圖 */}
                  <div className="flex justify-between px-4">
                    {data.ZhongDaoNum ? data.ZhongDaoNum.split(',').map((num) => (
                      <img
                        key={num}
                        src={zdImages[num]}
                        alt={`zd ${num}`}
                        className="w-1/4 rounded"
                      />
                    )) : []}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* 了解更多按鈕 */}
        <div className="my-10 flex justify-center items-center">
          <button
            className="bg-white hover:scale-105 duration-300 text-primaryDark py-1 px-9 rounded-full mt-4 group-hover:bg-white group-hover:text-primary border border-primaryDark">
            了解更多
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentEvents;
