import { useState, useEffect } from "react";
import Logo from "../assets/Logo.svg";
import mobileLogo from "../assets/mobileLogo.svg";
import Button from "./Button";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the visibility of the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu when any other event occurs outside of the menu
    const closeMenu = (e) => {
        if (!e.target.closest(".navbar-container")) {
            setIsMenuOpen(false);
        }
    };

    // Add event listener when the component mounts
    useEffect(() => {
        document.addEventListener("click", closeMenu);
        return () => {
            document.removeEventListener("click", closeMenu);
        };
    }, []);

    return (
        <nav className=" flex items-center   justify-between bg-customBlue sm:bg-white px-6">
            <div className="flex items-center cursor-pointer">
                {/* Logo for big screen */}
                <img src={Logo} alt="Logo" className="hidden sm:block h-20 " />

                {/* Logo for moblie screen */}

                <img
                    src={mobileLogo}
                    alt="Logo"
                    className="block sm:hidden h-16 "
                />

                {/* Menu for larger screens */}
                <div className="hidden sm:block ml-4">
                    <ul className="flex">
                        <li className="mx-8">
                            <a href="#">Why Us?</a>
                        </li>
                        <li className="mx-8">
                            <a href="#">About</a>
                        </li>
                        <li className="mx-8">
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Button for larger screens */}
            <div className=" mr-2 md:mr-4 lg:mr-8 ml-auto hidden sm:block">
                <Button className="m-auto py-1 rounded-lg px-2">
                    {" "}
                    Try now
                </Button>
            </div>

            <div className="navbar-container mt-3 ">
                {/* Burger Menu Icon for smaller screens */}
                <div className="sm:hidden ml-auto mr-4">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6 fill-current text-white"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M0 3a1 1 0 011-1h18a1 1 0 010 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h18a1 1 0 010 2H1a1 1 0 01-1-1zm0 6a1 1 0 011-1h18a1 1 0 010 2H1a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="sm:hidden absolute top-13 right-0 pt-3 mr-4 bg-customBlue text-white rounded-lg shadow-lg">
                        <ul className="px-4 py-3 flex flex-col gap-1">
                            <li>
                                <a href="#" className=" underline text-white">
                                    Why Us?
                                </a>
                            </li>
                            <li>
                                <a href="#" className="underline text-white">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="underline text-white">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
