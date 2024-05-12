import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from "@material-tailwind/react";
import { Player } from 'video-react';
import sdg01 from "../../assets/zdalc/SDG Icons 2019 _PRINT/E_SDG_PRINT-01.jpg";
import zdIcons01 from "../../assets/zdalc/Zdalc Icons/zdalcIndex.png";

const SDGsValue = [
  {
    id: 1,
    SDGsIcons: sdg01,
    description: "SDG 12：負責任的消費和生產 - 提倡實踐碳減排和資源回收，推動實現更永續的消費和生產模式。",
  },
  {
    id: 2,
    SDGsIcons: sdg01,
    description: "SDG 13：氣候行動 - 強調採取緊急行動對抗氣候變化及其影響。",
  },
  {
    id: 3,
    SDGsIcons: sdg01,
    description: "SDG 17：夥伴關係實現目標 - 透過跨宗教和跨領域的合作，共同努力實現全球永續發展目標。",
  },
];

const ZhongDaoValue = [
  {
    id: 1,
    zdIcons: zdIcons01,
    description: "中道 12：中道消費與生產 - 推動平衡且負責任的資源利用，兼顧經濟成長、社會正義、與環境保護，以實現更具包容性及永續性的消費與生產模式。",
  },
  {
    id: 2,
    zdIcons: zdIcons01,
    description: "中道 13：中道氣候行動 - 強調以和為貴地面對氣候變遷，並採取有效措施減緩其衝擊，同時兼顧經濟發展、社會正義、與環境保護的平衡。",
  },
  {
    id: 3,
    zdIcons: zdIcons01,
    description: "中道 17：中道夥伴關係達成目標 - 促進不同背景、意識形態、與利害關係人之間的合作，以共同努力實現永續發展目標，並重視共存與相互支援的價值。",
  },
];

const ContentData = [
  {
    id: 1,
    time: "2024-02-21",
    title: "中道-向地球佈施-李鴻源",
    hint: "講座",
    images: [
      { id: 1, src: sdg01 },
      { id: 2, src: sdg01 },
      { id: 3, src: sdg01 },
    ],
  }
];

const Description = {
  summary: "李鴻源前內政部長在一場論壇中分享了關於宗教在現代社會對於地球永續責任的見解，強調了宗教對社會的影響力和在推動環境保護及永續發展上的重要角色。他論及了當前面臨的全球暖化、氣候變遷等環境問題，並指出透過提升人們的靈魂層級和智慧，宗教可以啟發人類採取積極行動，共同對抗這些挑戰。整場演講結合了對宗教深刻的認識與對環境永續發展的關懷，呼籲每個個體都能在生活中實踐碳減排和資源回收，共同創造一個更佳的未來。",
  points: [
    "宗教在推動對地球責任和永續發展中扮演關鍵角色。",
    "當前面臨環境問題，如全球暖化和氣候變遷，亟需解決。",
    "提升靈魂層級和智慧是促進環境保護和永續行動的重要途徑。",
    "呼籲社會各界共同參與，透過實踐碳減排和資源回收等行動應對挑戰。",
    "強調了宗教對於提升個人意識和推動社會變革的影響力。",
    "示範宗教如何在實際行動中貢獻於環境永續。",
    "鼓勵個人和組織以創新方式對抗氣候變化問題。",
    "透過教育和普及知識，增進公眾對永續發展重要性的認識。",
  ],
};

const Content = () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="container flex flex-col pb-24 text-black">
      <div className="z-10 self-center -mt-40 max-w-full bg-white shadow-2xl w-full">
        <div className="px-20 pt-10">
          {/* 頁面導航 */}
          <div className="flex text-xl font-bold text-black">
            <Breadcrumbs className="bg-white ps-0">
              <a href="/#" className="opacity-60 text-xl font-bold hover:text-primaryDark">
                首頁
              </a>
              <a href="#" className="opacity-60 text-xl font-bold hover:text-primaryDark">
                最新活動
              </a>
              <a href="#" className='font-bold text-xl hover:text-primary'>
                中道-向地球佈施-李鴻源
              </a>
            </Breadcrumbs>
          </div>
          {/* 頁首指標 */}
          <div className="flex gap-5 self-start mt-4 max-md:flex-wrap max-md:mt-10">
            <div className="flex gap-2.5 px-px">
              {SDGsValue.map((item, index) => (
                <img
                  key={index}
                  loading="lazy"
                  srcSet={item.SDGsIcons}
                  className="shrink-0 aspect-square w-[66px]"
                />
              ))}
            </div>
            <div className="self-start text-6xl font-light text-primary leading-[56px] max-md:text-4xl">
              /
            </div>
            <div className="flex gap-2.5">
              {ZhongDaoValue.map((item, index) => (
                <img
                  key={index}
                  loading="lazy"
                  srcSet={item.zdIcons}
                  className="shrink-0 aspect-square w-[66px]"
                />
              ))}
            </div>
          </div>
          {/* 頁首標題 */}
          <div className="flex justify-between items-center gap-5 mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-bold leading-8 text-black">
              中道-向地球佈施-李鴻源
            </div>
            <div className="flex gap-2">
              <div className="text-xl text-black">
                2024-02-21
              </div>
              <span className="ml-4 bg-primary text-white px-2 py-0.5 rounded group-hover:bg-white group-hover:text-primary">講座</span>
            </div>
          </div>
          {/* 頁首影片 */}
          <div className='my-12 w-full max-md:mt-10 max-md:max-w-full'>
            <Player>
              <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player>
          </div>
          {/* 摘要&重點條列 */}
          <div className="text-xl text-black leading-loose">
            摘要：
            <br />
            {'　　'}{Description.summary}
            <br />
            <br />
            重點條列：
            <br />
            {Description.points.map((point, index) => (
              <React.Fragment key={index}>
                {index + 1}. {point}
                <br />
              </React.Fragment>
            ))}
          </div>
          {/* SDGs指標解釋 */}
          <div className="flex gap-2.5 mt-20 text-2xl font-bold text-black leading-loose">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/804a612dd184df8bf5a4da1f8b24df49a88cd3d2bb5430c3701d09566cd07936?"
              className="aspect-square"
            />
            <div className="flex-auto my-auto">本文中的SDGs指標</div>
          </div>
          <div
            className="px-5 pt-8 pb-5 mt-3 text-xl text-white bg-primary rounded-3xl leading-loose max-md:max-w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {(isHovered ? ZhongDaoValue : SDGsValue).map((item, index) => (
              <React.Fragment key={index}>
                {item.description}
                <br />
              </React.Fragment>
            ))}
          </div>

          {/* 相關圖片 */}
          <div className="flex items-center gap-2.5 mt-20 text-2xl font-bold text-black  leading-loose ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/082dda005733e4393102c4161fd867c7fa68bb963c98d4ace51974328208011d?"
              className="aspect-square" />
            <div className="my-auto">相關圖片</div>
          </div>

          <div className="flex flex-wrap pt-5 justify-between gap-2 max-md:flex-col max-md:gap-0">
            {images.map((image, index) => (
              <div key={index} className="w-1/5 p-1">
                <img
                  loading="lazy"
                  srcSet={image}
                  className="grow shrink-0 max-w-full aspect-square w-full"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Content;