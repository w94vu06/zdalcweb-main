import boss from '../../assets/zdalc/boss.jpg';

function ChairWord() {
  return (
    <div className="flex flex-col bg-custom-brown-dark pt-20 pb-20 pl-10 pr-10 rounded-3xl w-11/12 mx-auto">
      <div className="flex flex-row">
        <img src={boss} alt="理事長" className="w-72 h-96 rounded-3xl object-cover" />
        <div className=" w-full h-full bg-gradient-to-b bg-custom-brown-dark items-center justify-center rounded-tl-3xl rounded-tr-3xl p-8">
          <div className="w-full text-white">
            <p className="text-4xl font-bold mb-12 pt-4">理事長的話</p>
            <hr className="mb-12 border-t-2 w-5/6"></hr>
            <p className="text-xl font-bold">
              <p>「治世尚中道，治企倚中道，處事憑中道」</p><br />
              中華文化深厚廣泛，始於遠古，涵蓋豐富的傳統與外來文化。中道不僅是中華文化的核心，<br />
              也是人類智慧的寶庫，它指導我們理解宇宙、自然和人間的和諧互動及無窮變化。<br />
              中華中道領導文化總會於2018年成立，致力於從科學、哲理和本體自性等方面深化企業領導和文化轉型，並逐步向教育和社會各領域推廣。<br />
              在技術快速變化和資訊泛濫的今天，中道文化提供了一種整合個人和組織思維的方法，旨在提升企業治理和組織效能，並增強生命的價值和品質。<br />
              我們歡迎更多人加入，共同探索中道文化的深遠影響。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChairWord