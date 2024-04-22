import emailSvg from "../assets/email.svg";
import buisnessInvestmentSvg from "../assets/buisnessInvestment.svg";

const About = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="bg-customGray h-[350px] p-8 w-[1100px] rounded-lg">
                <p className="mx-48  text-center  font-bold">
                    The premier social media platform revolutionizing the way
                    investors connect and thrive! Dive into a dynamic ecosystem
                    where financial knowledge meets community support,
                    empowering you to make informed decisions and unlock new
                    opportunities. Engage with a vibrant network of investors,
                    experts, and enthusiasts passionate about wealth creation
                    and financial freedom.
                </p>
            </div>
            <div className="flex justify-between w-full mb-14">
                <img src={emailSvg} />
                <img src={buisnessInvestmentSvg} />
            </div>
        </div>
    );
};

export default About;
