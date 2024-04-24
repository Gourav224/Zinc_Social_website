import Phone from "../assets/Phone.svg";
import Location from "../assets/Location.svg";
import Email from "../assets/Email.svg";
const Footer = () => {
    return (
        <footer className="bg-customBlue text-white h-24 sm:h-36 flex items-center justify-between  px-12 gap-x-12  w-full text-[8px] sm:text-sm ">
            <div className=" sm:ml-8">
                <p className="flex items-center gap-2">
                    <img src={Email} className="w-4 sm:w-auto" />
                    zinc.fintech@gmail.com
                </p>
                <p className="flex gap-2 items-center my-2 ">
                    <img src={Phone} className="w-4 sm:w-auto" />
                    +91 9891800371
                </p>
            </div>
            <div className="flex items-center text-right w-48 sm:w-72 sm:mr-8 ">
                <img
                    src={Location}
                    className="w-3 sm:w-5  relative left-3 bottom-2 sm:origin-top-left sm:left-14"
                />

                <p className="">
                    Bawana Rd, Delhi Technological University, Rohini, New Delhi
                </p>
            </div>
        </footer>
    );
};

export default Footer;
