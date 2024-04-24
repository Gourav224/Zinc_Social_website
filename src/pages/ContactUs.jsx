import { useRef } from "react";
import Footer from "../components/Footer";
import MailInput from "../components/MailInput";
import Button from "../components/Button";

const ContactUs = () => {
    const emailRef = useRef(null);
    const onClick = () => {
        console.log(emailRef.current.value);
    };
    return (
        <div className="max-h-screen sm:min-h-screen flex flex-col justify-center items-center bg-white">
            <h2 className="text-customBlue block sm:hidden pt-24 px-auto text-xl font-semibold leading-snug">
                Contact us
            </h2>
            <div className="mt-6 sm:mt-auto mx-auto text-center">
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
                        className="mt-4  sm:w-16 text-xl rounded-lg md:w-28 md:h-12 md:text-3xl"
                        onClick={onClick}
                    >
                        send
                    </Button>
                </div>
            </div>
            <div className="mt-11 w-full">
                <Footer />
            </div>
        </div>
    );
};

export default ContactUs;
