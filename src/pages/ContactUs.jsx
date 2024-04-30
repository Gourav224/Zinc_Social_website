import { useRef } from "react";
import MailInput from "../components/MailInput";
import Button from "../components/Button";
import emailSvg from "../assets/PhoneEmail.svg";
import Footer from "../components/Footer";
import { db } from "../utils/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import config from "../utils/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactUs = () => {
    const emailRef = useRef("");
    const emailCollectionRef = collection(db, config.dbName);
    const onSubmit = async () => {
        if (emailRef.current.value) {
            try {
                const email = emailRef.current.value;
                await addDoc(emailCollectionRef, { email });
                emailRef.current.value = "";
                // Success message
                toast.success("Email sent successfully!", {
                    position: "bottom-right",
                });
            } catch (error) {
                // Error message
                toast.error("Error sending email. Please try again later.", {
                    position: "bottom-right",
                });
            }
        } else {
            // Empty email error message
            toast.error("Please enter a valid email!", {
                position: "bottom-right",
            });
        }
    };

    return (
        <div
            id="contact"
            className="max-h-screen sm:min-h-screen  text-center flex flex-col bg-white"
        >
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
                        />
                        <Button
                            className="text-center mt-2 md:mt-4 w-12 h-6 text-xs  sm:w-16 sm:h-10 rounded-lg   sm:text-xl"
                            onClick={onSubmit}
                        >
                            Send
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Footer />
            </div>
            <ToastContainer />
        </div>
    );
};

export default ContactUs;
