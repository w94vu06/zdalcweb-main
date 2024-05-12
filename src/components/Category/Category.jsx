import report from "../../assets/zdalc/class.jpg";
import seminar from "../../assets/zdalc/seminar.jpg";
import publicwelfare from "../../assets/zdalc/publicwelfare.jpg";
import reading from "../../assets/zdalc/reading.jpg";
import otherEvent from "../../assets/zdalc/otherEvent.jpg";
import SDGsInZdalc from "../../assets/zdalc/SDGsInZdalc.jpg";
import { GrFormNextLink } from "react-icons/gr";

const Category = [
  {
    id: 1,
    img: report,
    title: "活動報導",
    aosDelay: "0",
  },
  {
    id: 2,
    img: seminar,
    title: "研討暨論壇",
    aosDelay: "50",
  },
  {
    id: 3,
    img: publicwelfare,
    title: "公益講座",
    aosDelay: "100",
  },
  {
    id: 4,
    img: reading,
    title: "讀書分享會",
    aosDelay: "150",
  },
  {
    id: 5,
    img: otherEvent,
    title: "其他活動",
    aosDelay: "200",
  },
  {
    id: 6,
    img: SDGsInZdalc,
    title: "SDGs在中道",
    aosDelay: "250",
  },
];

const Products = () => {
  return (
    <div className="container pt-20 pb-20 pl-10 pr-10">
      <div className="flex flex-row bg-gradient-to-b bg-custom-brown-dark items-end justify-center rounded-3xl p-8 text-white">
        <div className="mt-14 mb-12">
          <div className="container">
            {/* Header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
              <h1  className="text-3xl font-bold">
                主題分類
              </h1><br />
              <hr className="mb-12  border-white border-t-2 w-1/12 mx-auto"></hr>
            </div>
            {/* Body section */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 place-items-center gap-5 ">
                {/* card section */}
                {Category.map((data) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.id}
                    className="space-y-3"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="h-96 w-96 object-cover rounded-3xl over-hidden "
                    />
                    <div>
                      <h3 className="font-semibold text-2xl text-center">{data.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              {/* view all button */}
              <div className="flex justify-center">
                <button className="flex items-center justify-center mt-10 text-white py-1 px-5 pr-3 border-2 border-white font-bold w-full sm:w-auto rounded-full hover:scale-105 duration-300">
                  <span>查看更多</span>
                  <GrFormNextLink className="text-4xl h-9 w-9 pl-3  ml-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Products;
