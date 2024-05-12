import love_2 from "../../assets/zdalc/love_2.jpg";
import shape from "../../assets/zdalc/shape.png"
import { GrFormNextLink } from "react-icons/gr";

function AboutZhongDao() {
  return (
    <div className="container pt-40" >
      <div data-aos="fade-up" className="flex flex-row bg-gradient-to-b items-center justify-center rounded-3xl ">
        {/* 關於中道字 */}
        <div className="w-1/2 h-full pt-10 pl-40 text-left relative text-white">
          <img src={shape} alt="" className="absolute -bottom-16 -right-5 w-[105%] h-auto z-0" />
          <p data-aos="fade-up" className="text-4xl font-bold mb-10 z-10">關於中道</p>
          <div data-aos="fade-up" className="ml-0 mx-auto mb-8 h-0.5 w-10 bg-white z-10"></div>
          <p data-aos="fade-up" className="text-xl font-bold  z-10">
            中道總會的理念 － 知行合一  大愛無我。<br />
            道之大小乃小我與大愛之認知與運用程度而定。<br />
            認知與運用即是心、也是知的作用。<br />
          </p>
          <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-4 rounded-full w-36">
            <button className="flex items-center justify-center mt-10 text-white py-1 px-5 border-2 border-white font-bold w-full sm:w-auto rounded-full hover:scale-105 duration-300">
              <span>查看更多</span>
              <GrFormNextLink className="text-4xl h-9 w-9 pl-3 ml-auto" />
            </button>
          </div>
        </div>
        {/* 關於中道圖片 */}
        <div data-aos="fade-up" className="w-1/2 h-1/2 pt-5">
          <img src={love_2} alt="" className="w-[125%] h-auto  rounded-3xl mx-auto shadow-2xl transform scale-100 " />
        </div>
      </div>
    </div>
  );
}

export default AboutZhongDao;
