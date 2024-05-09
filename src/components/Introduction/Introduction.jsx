import BannerImg from "../../assets/zdalc/about-zdalc.jpg";
import { GrFormNextLink } from "react-icons/gr";

const Introduction = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="about-zhongdao"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              總會簡介
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              中華中道領導文化總會係創辦人陳樹理事長，積近二十年之沉澱與思考，經兩年多來的奔波努力，獲得眾多發起人支持而籌組，於2018年5月經內政部核發立案證書，正式開始運作。
              總會成立後，依中道探討層次之內涵，將從科學現象、哲理思想與本體自性等層面次第著手，以企業領導培訓及企業文化轉型為先，再逐步推廣到學術、教育、政經及社會各界，期對企業文化、政經、社會文化之提升能有大助益。
            </p>
            <div className="flex flex-col items-center justify-center border border-yellow-600 gap-4 rounded-full w-36">
              <button data-aos="fade-up" className="flex items-center justify-between">
                <span className="text-yellow-600">了解更多</span>
                <GrFormNextLink className="text-4xl h-12 w-12 p-3 dark:bg-violet-400 text-yellow-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
