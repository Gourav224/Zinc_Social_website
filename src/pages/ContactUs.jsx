import { useRef } from "react";
import MailInput from "../components/MailInput";
import Button from "../components/Button";
import emailSvg from "../assets/PhoneEmail.svg";
import Footer from "../components/Footer";

const ContactUs = () => {
    const emailRef = useRef(null);
    const onClick = () => {
        console.log(emailRef.current.value);
        if (emailRef.current.value) {
            alert("Email sent");
            emailRef.current.value = "";
        } else {
            alert("Please enter a valid email");
        }
    };
    return (
        <div className="max-h-screen sm:min-h-screen  text-center flex flex-col bg-white">
            <h2 className="text-customBlue block sm:hidden pt-12 mx-auto text-2xl font-semibold leading-snug">
                Contact us
            </h2>
            <div className="flex m-auto mb-24 text-center">
                <div className="sm:hidden w-1/2 ">
                    <img src={emailSvg} alt="Email Icon" className="w-96 " />
                </div>
                <div className="m-auto">
                    <h2 className="hidden sm:block  mb-8  text-center text-black text-2xl font-semibold">
                        Drop your email, we will contact you
                    </h2>
                    <div className="w-36 sm:w-96 mx-auto">
                        <MailInput
                            label="Email"
                            ref={emailRef}
                            placeholder="loremipsum@gmail.com"
                            className=""
                        />
                        <Button
                            className="text-center mt-2 sm:mt-4 w-12 h-6 text-xs  sm:w-16  rounded-lg md:w-20 md:h-12 md:text-2xl"
                            onClick={onClick}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
};

export default ContactUs;
