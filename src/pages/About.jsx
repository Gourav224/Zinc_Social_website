import emailSvg from "../assets/emailSvg.svg";
import businessInvestmentSvg from "../assets/businessInvestment.svg";
import Button from "../components/Button";

const About = () => {
    return (
        <div className="md:h-screen text-center font-['Inter']">
            <h2 className="text-customBlue block sm:hidden my-6  text-2xl font-extrabold leading-snug">
                About
            </h2>
            <div className="flex sm:hidden  bg-customGray sm:bg-white justify-center items-center">
                <div className="bg-customGray rounded-lg w-3/5 sm:w-full mx-12 sm:p-8 mt-8 sm:mt-24 sm:mx-auto">
                    <p className="font-semibold text-black text-sm text-center sm:text-base md:text-2xl p-4 sm:p-8">
                        The premier social media platform revolutionizing the
                        way investors connect and thrive! Dive into a dynamic
                        ecosystem where financial knowledge meets community
                        support, empowering you to make informed decisions and
                        unlock new opportunities. Engage with a vibrant network
                        of investors, experts, and enthusiasts passionate about
                        wealth creation and financial freedom.
                    </p>
                </div>

                {/* Rendering Button and Image only on small screens */}
                <div className="grid grid-rows-2  mt-8">
                    <Button className="m-auto py-1 rounded-lg px-2">
                        Try now
                    </Button>
                    <img src={businessInvestmentSvg} className="w-48 mt-auto" />
                </div>
            </div>

            {/* Rendering images side by side on larger screens */}
            <div className="hidden sm:block w-full ">
                <div className="bg-customGray rounded-lg mx-44 my-12  py-16 px-8">
                    <p className="font-[500] text-black text-xl text-center mx-auto max-w-[800px] ">
                        The premier social media platform revolutionizing the
                        way investors connect and thrive! Dive into a dynamic
                        ecosystem where financial knowledge meets community
                        support, empowering you to make informed decisions and
                        unlock new opportunities. Engage with a vibrant network
                        of investors, experts, and enthusiasts passionate about
                        wealth creation and financial freedom.
                    </p>
                </div>
                <div className="flex justify-between  ">
                    <img src={emailSvg} alt="Email Icon" className="max-w-96" />
                    <img src={businessInvestmentSvg}  className="max-w-96"/>
                </div>
            </div>
        </div>
    );
};

export default About;
