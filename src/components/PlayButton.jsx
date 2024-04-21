import PlayStoreLogo from "../assets/playStore.svg";

const PlayButton = () => {
    return (
        <div className="cursor-pointer bg-customBlue rounded-xl flex items-center  w-48 h-16 ">
            <img src={PlayStoreLogo} alt="Play Store Logo" className="h-16" />
            <div>
                <p className="text-white text-lg lg:text-xl">Get it from</p>
                <p className="text-white font-bold text-lg lg:text-xl">
                    Play Store
                </p>
            </div>
        </div>
    );
};

export default PlayButton;
