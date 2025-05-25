import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import ModalLogin from "./ModalLogin";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const link = [
        { name: "services", path: "/" },
        { name: "about", path: "/" },
        { name: "portfolio", path: "/" },
        { name: "blog", path: "/" },
        { name: "career", path: "/" },
    ];

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, [isLoginOpen]);

    const renderAuthButton = () => {
        if (isLoggedIn) {
            return (
                <Link
                    to="/profile"
                    className="px-10 font-semibold cursor-pointer text-white transition text-sm inline-block text-center"
                >
                    <FaUserCircle className="text-4xl text-primary" />
                </Link>

            );
        }

        return (
            <button
                onClick={() => setIsLoginOpen(true)}
                className="px-10 font-semibold rounded-[30px] py-2 cursor-pointer text-secondary text-sm bg-primary hover:bg-yellow-300 transition"
            >
                Login
            </button>
        );
    };


    return (
        <Fragment>
            <nav className="w-full fixed z-50 bg-white shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex lg:px-0">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link to="/">
                                <img src={Logo} alt="Albatech" className="w-24" />
                            </Link>
                            <div className="md:hidden">
                                <button onClick={() => setNavbar(!navbar)}>
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
                        <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                            <ul className="items-center justify-center space-y-4 md:flex space-x-4 lg:space-x-16 md:space-y-0">
                                {link.map((item, index) => (
                                    <li key={index} className="text-secondary font-semibold capitalize transition hover:text-primary">
                                        <Link to={item.path}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-3 space-y-2 md:hidden sm:inline-block">
                                {renderAuthButton()}
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        {renderAuthButton()}
                    </div>
                </div>
            </nav>

            <ModalLogin isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </Fragment>
    );
}
