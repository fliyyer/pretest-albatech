import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const link = [
        { name: "services", path: "/services" },
        { name: "about", path: "/about" },
        { name: "portfolio", path: "/portfolio" },
        { name: "blog", path: "/blog" },
        { name: "career", path: "/career" },
    ]
    return (
        <nav className="w-full fixed z-50 bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/">
                            <img src={Logo} alt="Albatech" className="w-24" />
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <IoMdClose className="w-6 h-6 text-secondary" />
                                ) : (
                                    <GiHamburgerMenu className="w-6 h-6 text-secondary" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-16 md:space-y-0">
                            {link.map((item, index) => (
                                <li key={index} className="text-secondary font-bold capitalize hover:text-primary">
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block">
                            <Link
                                to="/login"
                                className="px-8 font-bold rounded-[30px] py-3 text-secondary text-sm bg-primary hover:bg-yellow-300 transition"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <Link
                        to="/login"
                        className="px-10 font-bold rounded-[30px] py-3 text-secondary text-sm bg-primary hover:bg-yellow-300 transition"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
}