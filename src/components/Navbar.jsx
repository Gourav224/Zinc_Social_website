import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-white  px-6">
            <div className="flex items-center ">
                {/* <Link to="/"> */}
                <img src={Logo} alt="Logo" className="h-20" />
                {/* </Link> */}

                <div className="hidden sm:block">
                    <ul className="flex ml-4">
                        <li className="mx-6">
                            <a href="#">why us?</a>
                        </li>
                        <li className="mx-6">
                            <a href="#">About</a>
                        </li>
                        <li className="mx-6">
                            <a href="#">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mr-2 md:mr-4 lg:mr-8">
                <button className="bg-customBlue text-white px-2 py-1 rounded hover">
                    Try now
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
