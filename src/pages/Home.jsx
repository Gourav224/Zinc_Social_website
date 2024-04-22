import Navbar from "../components/Navbar";
import PlayButton from "../components/PlayButton";
import vector from "../assets/vector.svg";

const Home = () => {
    return (
        <div className="min-h-screen ">
            <Navbar />
            <div className="grid grid-cols-2   sm:gap-3">
                <div className="col-span-1 my-auto ml-8">
                    <div className="mt-24">
                        <h1 className="text-customBlue font-extrabold text-4xl  md:text-7xl">
                            ZINC Social
                        </h1>
                        <h2 className="text-black text-l md:text-2xl lg:text-3xl font-normal mt-4 md:mt-6">
                            where investors connect and conquer
                        </h2>
                    </div>
                    <div className="mt-4 sm:mt-12 ml-2 sm:ml-8 ">
                        <PlayButton />
                    </div>
                </div>
                <div className="col-span-1  ml-4 mt-16 sm:mx-12 ">
                    <img
                        src={vector}
                        alt="vector"
                        className="w-[12rem] sm:w-[28rem]"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
