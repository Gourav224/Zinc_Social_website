import Phone from "../assets/Phone.svg";
import Location from "../assets/Location.svg";
import Email from "../assets/email.svg";
const Footer = () => {
    return (
        <footer className="bg-customBlue grid grid-cols-1  sm:grid-cols-2  place-content-center  text-white  h-48 2xl:h-72 w-full text-xl ">
            <div className="mt-4 ml-16 sm:m-auto">
                <ul className="flex flex-col items-start ">
                    <li>
                        <div className="flex items-center justify-center gap-2">
                            <li>
                                {" "}
                                <img src={Email} alt="Email Icon" />
                            </li>
                            <li  className="text-sm sm:text-base">zinc.fintech@gmail.com</li>
                        </div>
                    </li>
                    <li className="mt-2 sm:mt-0">
                        <div className="flex justify-center gap-2">
                            <li>
                                {" "}
                                <img src={Phone} alt="Email Icon" />
                            </li>
                            <li className="text-sm sm:text-base">+91 9891800371</li>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-2 ml-16 sm:m-auto">
                <ul className="flex flex-col items-start">
                    <li>
                        <div className="flex items-center justify-center gap-2">
                            <li>
                                {" "}
                                <img src={Location} alt="Location Icon" />
                            </li>
                            <li className="text-sm sm:text-base" > Bawana Rd, Delhi Technological</li>
                        </div>
                    </li>
                    <li className="ml-8 text-sm sm:text-base"> University, Rohini, New Delhi</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
