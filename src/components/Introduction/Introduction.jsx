import BannerImg from "../../assets/zdalc/about-zdalc.jpg";
import { GrFormNextLink } from "react-icons/gr";

const Introduction = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-60 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in ">
            <img
              src={BannerImg}
              alt="about-zhongdao"
              className="max-w-[100%] h-[100%] w-full rounded-lg drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-8 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              總會簡介
            </h1>
            <div data-aos="fade-up" className="ml-0 my-4 h-0.5 w-10 bg-black"></div>
            <p
              data-aos="fade-up"
              className="text-base text-black tracking-wide leading-5 font-bold"
            >
              中華中道領導文化總會係創辦人陳樹理事長，積近二十年之沉澱與思考，經兩年多來的奔波努力，獲得眾多發起人支持而籌組，於2018年5月經內政部核發立案證書，正式開始運作。
              總會成立後，依中道探討層次之內涵，將從科學現象、哲理思想與本體自性等層面次第著手，以企業領導培訓及企業文化轉型為先，再逐步推廣到學術、教育、政經及社會各界，期對企業文化、政經、社會文化之提升能有大助益。
            </p>
            <div data-aos="fade-up" className="flex flex-col items-center justify-center gap-4 rounded-full w-36">
              <button className="flex items-center justify-center mt-10 text-primaryDark py-1 px-5 pr-3 border-2 border-primaryDark font-bold w-full sm:w-auto rounded-full hover:scale-105 duration-300">
                <span>查看更多</span>
                <GrFormNextLink className="text-4xl h-9 w-9 pl-3 dark:bg-violet-400 ml-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
