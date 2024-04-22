import PlayStoreLogo from "../assets/playStore.svg";

const PlayButton = () => {
    return (
        <div className="cursor-pointer bg-customBlue rounded-xl flex items-center  w-32 h-12  sm:w-48 sm:h-16 ">
            <img src={PlayStoreLogo} alt="Play Store Logo" className="h-10 sm:h-16" />
            <div>
                <p className="text-white text-sm sm:text-xl">Get it from</p>
                <p className="text-white font-bold text-sm sm:text-xl">
                    Play Store
                </p>
            </div>
        </div>
    );
};

export default PlayButton;
