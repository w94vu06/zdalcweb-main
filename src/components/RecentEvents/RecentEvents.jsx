import React from "react";
import Img1 from "../../assets/zdalc/class.jpg";
import Img2 from "../../assets/zdalc/class.jpg";
import Img3 from "../../assets/zdalc/class.jpg";
import sdg01 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-01.jpg";
import sdg12 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-12.jpg";
import sdg13 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-13.jpg";
import sdg17 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-17.jpg";
import zdIcons01 from "../../assets/zdalc/Zdalc Icons/zdalcIndex.png";
import { GrFormNextLink } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const EventsData = [
  {
    id: 1,
    img: Img1,
    time: "2024年3月6日, 星期三",
    title: "中道談判力:各種情境-林榮堅",
    hint: "講座",
    images: [
      { id: 1, src: sdg12 },
      { id: 2, src: sdg13 },
      { id: 3, src: sdg17 },
    ],
    zdIcons: [
      { id: 1, src: zdIcons01 },
      { id: 2, src: zdIcons01 },
      { id: 3, src: zdIcons01 },
    ],
  },
  {
    id: 2,
    img: Img2,
    time: "2024年3月6日, 星期三",
    title: "中道-向地球佈施-李鴻源",
    hint: "講座",
    images: [
      { id: 1, src: sdg01 },
      { id: 2, src: sdg01 },
      { id: 3, src: sdg01 },
    ],
    zdIcons: [
      { id: 1, src: zdIcons01 },
      { id: 2, src: zdIcons01 },
      { id: 3, src: zdIcons01 },
    ],
  },
  {
    id: 3,
    img: Img3,
    time: "2024年3月6日, 星期三",
    title: "從中道談廉明政道-陳樹",
    hint: "講座",
    images: [
      { id: 1, src: sdg01 },
      { id: 2, src: sdg01 },
      { id: 3, src: sdg01 },
    ],
    zdIcons: [
      { id: 1, src: zdIcons01 },
      { id: 2, src: zdIcons01 },
      { id: 3, src: zdIcons01 },
    ],
  },

  {
    id: 4,
    img: Img3,
    time: "2024年3月6日, 星期三",
    title: "禪與靜坐關係",
    hint: "講座",
    images: [
      { id: 1, src: sdg01 },
      { id: 2, src: sdg01 },
      { id: 3, src: sdg01 },
    ],
    zdIcons: [
      { id: 1, src: zdIcons01 },
      { id: 2, src: zdIcons01 },
      { id: 3, src: zdIcons01 },
    ],
  },
];

const RecentEvents = ({ handleOrderPopup }) => {
  const navigate = useNavigate();

  function NavToEvents() {
    navigate('/events');  // 导航到 OrderPage 组件对应的路由
  }

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
          {EventsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] cursor-pointer"
              onClick={NavToEvents}
            >
              {/* image section */}
              <div className="relative overflow-hidden h-[150px] rounded-t-2xl">
                <img
                  src={data.img}
                  alt=""
                  className="w-full block mx-auto transform -translate-y-0 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-left">
                <div className="flex items-center pb-2">
                  <h1 className="text-sm text-gray-500 group-hover:text-white font-bold ">-{data.time}</h1>
                  <span className="ml-4 bg-primary text-white px-2 py-0.5 rounded group-hover:bg-white group-hover:text-primary ">{data.hint}</span>
                </div>
                <div className="flex items-center pb-2">
                  <h1 className="text-xl text-black font-bold ">{data.title}</h1>
                </div>

                <div className="flex justify-between px-4">
                  {data.images.map((image) => (
                    <img
                      key={image.id}
                      src={image.src}
                      alt=""
                      className="w-1/4 rounded"
                    />
                  ))}
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
                  <div className="flex justify-between px-4">
                    {data.zdIcons.map((image) => (
                      <img
                        key={image.id}
                        src={image.src}
                        alt=""
                        className="w-1/4 rounded"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
