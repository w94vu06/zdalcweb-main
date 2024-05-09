import boss from '../../assets/zdalc/boss.jpg';
import { GrFormNextLink } from "react-icons/gr";

function ChairWord() {
  return (
    <div className="pt-20 pb-20 pl-10 pr-10">
      <div className="flex flex-col bg-custom-brown-dark  rounded-3xl mx-auto">
        <div className="flex flex-row">
          <img src={boss} alt="理事長" className="w-72 h-auto rounded-3xl object-cover" />
          <div className=" w-full h-full bg-gradient-to-b bg-custom-brown-dark items-center justify-center rounded-3xl p-8">
            <div className="w-full text-white">
              <p className="text-4xl font-bold mb-12 pt-4">理事長的話</p>
              <hr className="mb-12 border-t-2 w-5/6"></hr>
              <div className="text-xl font-bold pb-3">
                <p>「治世尚中道，治企倚中道，處事憑中道」</p><br />
                <p>
                  中華文化深厚廣泛，始於遠古，涵蓋豐富的傳統與外來文化。中道不僅是中華文化的核心，<br />
                  也是人類智慧的寶庫，它指導我們理解宇宙、自然和人間的和諧互動及無窮變化。<br />
                  中華中道領導文化總會於2018年成立，致力於從科學、哲理和本體自性等方面深化企業領導和文化轉型，並逐步向教育和社會各領域推廣。<br />
                  在技術快速變化和資訊泛濫的今天，中道文化提供了一種整合個人和組織思維的方法，旨在提升企業治理和組織效能，並增強生命的價值和品質。<br />
                  我們歡迎更多人加入，共同探索中道文化的深遠影響。
                </p>
              </div>
              <button data-aos="fade-up" className="flex w-1/10 items-center font-bold border-2 border-white text-white">
                <span className="p-3">了解更多</span>
                <GrFormNextLink className="text-4xl h-12 w-12 p-3 dark:bg-violet-400 ml-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ChairWord