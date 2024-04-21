import Navbar from "../components/Navbar";
import PlayButton from "../components/PlayButton";
import vector from "../assets/vector.svg";

const Home = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <div className="ml-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 m-4 gap-4">
                <div className="col-span-1 my-auto ml-8">
                    <div className="mt-24">
                        <h1 className="text-customBlue font-extrabold text-3xl lg:text-7xl md:text-5xl">
                            ZINC Social
                        </h1>
                        <h2 className="text-black text-l md:text-2xl lg:text-3xl font-normal mt-4 md:mt-6">
                            where investors connect and conquer
                        </h2>
                    </div>
                    <div className="mt-8 md:mt-12 ml-8 sm:ml-4">
                        <PlayButton />
                    </div>
                </div>
                <div className="col-span-1 mx-12 hidden sm:block">
                    <img src={vector} alt="vector" className="h-[26rem]" />
                </div>
            </div>
        </div>
    );
};

export default Home;
