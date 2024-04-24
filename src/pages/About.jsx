// import emailSvg from "../assets/emailSvg.svg";
// import buisnessInvestmentSvg from "../assets/buisnessInvestment.svg";
// import Button from "../components/Button";

// const About = () => {
//     return (
//         <div className="sm:max-h-screen flex flex-col justify-center items-center">
//             <h2 className="text-customBlue block sm:hidden pt-24 px-auto text-xl font-semibold leading-snug">
//                 About us
//             </h2>
//             <div className="flex bg-customGray sm:bg-white justify-center items-center">
//                 <div className="bg-customGray rounded-lg  w-3/4  sm:p-8 mt-8 sm:mt-24    sm:mx-auto ">
//                     <p className="text-center font-medium text-black text-[0.5rem] sm:text-base md:text-2xl p-4 sm:p-8">
//                         The premier social media platform revolutionizing the
//                         way investors connect and thrive! Dive into a dynamic
//                         ecosystem where financial knowledge meets community
//                         support, empowering you to make informed decisions and
//                         unlock new opportunities. Engage with a vibrant network
//                         of investors, experts, and enthusiasts passionate about
//                         wealth creation and financial freedom.
//                     </p>
//                 </div>

//                 <div className="block sm:hidden ">
//                     <Button className="">Try now</Button>
//                     <img
//                         src={buisnessInvestmentSvg}
//                         className="w-56 "
//                         alt="Business Investment Icon"
//                     />
//                 </div>
//             </div>

//             <div className="hidden sm:flex justify-between w-full mb-14">
//                 <img src={emailSvg} alt="Email Icon" />
//                 <img
//                     src={buisnessInvestmentSvg}
//                     alt="Business Investment Icon"
//                 />
//             </div>
//         </div>
//     );
// };

// export default About;

import emailSvg from "../assets/emailSvg.svg";
import businessInvestmentSvg from "../assets/businessInvestment.svg";
import Button from "../components/Button";

const About = () => {
    return (
        <div className="sm:max-h-screen flex flex-col justify-center items-center">
            <h2 className="text-customBlue block sm:hidden pt-24 px-auto text-xl font-semibold leading-snug">
                About us
            </h2>
            <div className="flex bg-customGray sm:bg-white justify-center items-center">
                <div className="bg-customGray rounded-lg w-3/4 sm:p-8 mt-8 sm:mt-24 sm:mx-auto">
                    <p className="text-center font-medium text-black text-[0.5rem] sm:text-base md:text-2xl p-4 sm:p-8">
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
                <div className="block sm:hidden mt-8">
                    <Button className="">Try now</Button>
                    <img src={businessInvestmentSvg} className="w-56" />
                </div>
            </div>

            {/* Rendering images side by side on larger screens */}
            <div className="hidden sm:flex justify-between w-full mb-14">
                <img src={emailSvg} alt="Email Icon" />
                <img src={businessInvestmentSvg} />
            </div>
        </div>
    );
};

export default About;
