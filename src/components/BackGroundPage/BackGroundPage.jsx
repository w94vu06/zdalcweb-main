import HeroImg from "../../assets/hero/hero-bg.jpg";

const BackGroundPage = () => {

    return (
        <div className="flex flex-col relative overflow-hidden min-h-screen bg-gray-100 items-start
     dark:bg-gray-950 dark:text-white duration-200 container pb-8">
            <img src={HeroImg} alt="" className="w-full h-[500px] sm:h-[400px] object-cover z-20 mt-28" />
        </div>
    );
};

export default BackGroundPage;
