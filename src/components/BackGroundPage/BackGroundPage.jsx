import HeroImg from "../../assets/hero/hero-bg.jpg";

const BackGroundPage = ({position}) => {
    return (
        <div className="">
            <div className="relative">
                <img src={HeroImg} alt="" className="w-full h-[500px] object-cover z-0" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white font-bold ">
                </p>
            </div>
        </div>
    );
};

export default BackGroundPage;
