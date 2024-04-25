import Phone from "../assets/Phone.svg";
import Location from "../assets/Location.svg";
import Email from "../assets/Email.svg";
const Footer = () => {
    return (
        <footer className="bg-customBlue grid  text-white h-36 sm:h-48 w-full  ">
            <div className="text-xs sm:text-base flex  items-center justify-between ">
                <div className="ml-4 sm:ml-12 w-1/2 sm:w-1/4 ">
                    <p className="flex items-center gap-2">
                        <img
                            src={Email}
                            className="w-4 sm:w-auto"
                            alt="Email Icon"
                        />
                        zinc.fintech@gmail.com
                    </p>
                    <p className="flex gap-2 items-center my-2">
                        <img
                            src={Phone}
                            className="w-4 sm:w-auto"
                            alt="Phone Icon"
                        />
                        +91 9891800371
                    </p>
                </div>
                <div className="w-1/2 md:w-1/4 mr-4 sm:mr-12  flex items-start  text-right ">
                    <img
                        src={Location}
                        className="h-[12px] top-[2px] sm:h-[16px] relative left-12 sm:left-24 md:left-[106px] sm:top-1 "
                        alt="Location Icon"
                    />
                    <p className="line-clamp-2">
                        Bawana Rd, Delhi Technological University,Rohini, New
                        Delhi
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
