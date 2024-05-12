import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from "@material-tailwind/react";
import { Player } from 'video-react';
import ReactPlayer from 'react-player';

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

function formatDate(dateString) {
  const date = new Date(dateString);
  if (!isNaN(date)) {
    return date.toISOString().split('T')[0];
  } else {
    return 'Invalid date'; // 或者根據你的需要返回其他適當的默認值
  }
}


const Content = ({ id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];

  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:3000/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

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
              <a href="" className='font-bold text-xl hover:text-primary'>
                {post.title}
              </a>
            </Breadcrumbs>
          </div>
          {/* 頁首指標 */}
          <div className="flex self-start mt-4 max-md:flex-wrap max-md:mt-10">
            <div className="flex gap-2.5 px-px">
              {/* SDGs指標圖 */}
              {post.SDGsNum ? post.SDGsNum.split(',').map((num) => (
                <img
                  key={num}
                  src={sdgsImages[num]}
                  alt={`SDG ${num}`}
                  className="w-12 h-12 rounded"
                />
              )) : []}
            </div>

            <div className="flex ms-2.5 gap-2.5">
              {/* 中道指標圖 */}
              {post.ZhongDaoNum ? post.ZhongDaoNum.split(',').map((num) => (
                <img
                  key={num}
                  src={zdImages[num]}
                  alt={`zd ${num}`}
                  className="w-12 h-12 rounded" // Changed from w-1/4 to w-1/12
                />
              )) : []}
            </div>
          </div>
          {/* 頁首標題 */}
          <div className="flex justify-between items-center gap-5 mt-11 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-bold leading-8 text-black">
              {post.title}
            </div>
            <div className="flex gap-2">
              <div className="text-xl text-black">
                {formatDate(post.date)}
              </div>
              <span className="ml-4 bg-primary text-white px-2 py-0.5 rounded group-hover:bg-white group-hover:text-primary">講座</span>
            </div>
          </div>
          {/* 頁首影片 */}
          <div className='my-12 w-full max-md:mt-10 max-md:max-w-full'>
            <div className="relative">
              <ReactPlayer url={post.youtubeLink} width="100%" height="600px" />
            </div>
          </div>
          {/* 摘要&重點條列 */}
          <div className="text-xl text-black leading-loose">
            摘要：
            <br />
            {'　　'}{post.summary}
            <br />
            <br />
            重點條列：
            <br />
            {post.keypoints && post.keypoints.split('。').filter(item => item).map((point, index, arr) => (
              <p key={index}>{point + (index < arr.length - 1 ? '。' : '')}</p>
            ))}
          </div>
          {/* SDGs指標解釋 */}
          <div className="flex gap-2.5 mt-20 text-2xl font-bold text-black leading-loose">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/804a612dd184df8bf5a4da1f8b24df49a88cd3d2bb5430c3701d09566cd07936?"
              className="aspect-square" />
            <div className="flex-auto my-auto">本文中的SDGs指標</div>
          </div>

          <div
            className="px-10 pt-8 mt-3 text-xl text-white bg-primary rounded-3xl leading-loose max-md:max-w-full">
            {post.SDGsDes && post.SDGsDes.split('。').map((item, index, arr) => (
              <React.Fragment key={index}>
                {item.trim() + (index < arr.length - 1 ? '。' : '')}
                <br />
              </React.Fragment>
            ))}
          </div>

          {/* 中道指標解釋 */}
          <div className="flex gap-2.5 mt-5 text-2xl font-bold text-black leading-loose">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/804a612dd184df8bf5a4da1f8b24df49a88cd3d2bb5430c3701d09566cd07936?"
              className="aspect-square" />
            <div className="flex-auto my-auto">本文中的中道指標</div>
          </div>

          <div
            className="px-10 pt-8 mt-3 text-xl text-white bg-primary rounded-3xl leading-loose max-md:max-w-full">
            {post.ZhongDaoDes && post.ZhongDaoDes.split('。').map((item, index, arr) => (
              <React.Fragment key={index}>
                {item.trim() + (index < arr.length - 1 ? '。' : '')}
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