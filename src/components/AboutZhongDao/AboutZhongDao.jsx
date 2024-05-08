import love_2 from "../../assets/zdalc/love_2.jpg";
import { GrFormNextLink } from "react-icons/gr";

function AboutZhongDao() {
  return (
    <div className="pt-20 pb-20 pl-10 pr-10">
      <div className="flex flex-row bg-gradient-to-b bg-custom-brown-dark items-end justify-center rounded-3xl p-8">
        <div className="flex flex-col">
          <div className="w-full h-full pt-5 pl-5 pr-36">
            <div className="w-full text-white pb-60">
              <p className="text-4xl font-bold mb-12">關於中道</p>
              <hr className="mb-12  border-white border-t-2 w-4/5"></hr>
              <p className="text-xl font-bold">
                <p>中道總會的理念 － 知行合一  大愛無我。</p><br />
                道之大小乃小我與大愛之認知與運用程度而定。
                認知與運用即是心、也是知的作用。<br />
              </p>
            </div>
            <button data-aos="fade-up" className="flex w-full sm:w-1/2 items-end font-bold border-2 border-white text-white">
              <span className="p-3">了解更多</span>
              <GrFormNextLink className="text-4xl h-12 w-12 p-3 dark:bg-violet-400 ml-auto" />
            </button>
          </div>
        </div>
        <img src={love_2} alt="道" className="max-w-full h-auto rounded-3xl mx-auto" />
      </div>
    </div>
  );
}

export default AboutZhongDao;
