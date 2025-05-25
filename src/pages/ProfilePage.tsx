import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState("");

    useEffect(() => {
        const getToken = localStorage.getItem("token");
        if (!getToken) {
            navigate("/");
        } else {
            setToken(getToken);
        }
    }, [navigate]);

    const handleCopy = () => {
        navigator.clipboard.writeText(token);
        alert("Token berhasil disalin!");
    };

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 flex items-center justify-center px-4 py-16">
                <div className="bg-white rounded-2xl border border-primary shadow-lg p-8 max-w-lg w-full animate-fadeIn">
                    <div className="flex flex-col items-center mb-6">
                        <FaUserCircle className="text-6xl text-primary mb-2" />
                        <h1 className="text-2xl font-bold text-secondary">Selamat Datang!</h1>
                        <p className="text-gray-600 text-sm mt-1">Berikut adalah token akses Anda:</p>
                    </div>

                    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-sm font-mono text-gray-700 relative break-all">
                        {token}
                        <button
                            onClick={handleCopy}
                            className="absolute top-4 right-2 text-gray-500 hover:text-primary transition"
                            title="Copy token"
                        >
                            <MdOutlineContentCopy className="text-lg" />
                        </button>
                    </div>

                    <div className="mt-6 text-center text-xs text-gray-400">
                        Token ini diberikan setelah proses login dan digunakan untuk otentikasi.
                    </div>
                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            navigate("/");
                        }}
                        className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-[30px] transition font-semibold"
                    >
                        Logout
                    </button>
                </div>

            </div>
        </main>
    );
};

export default ProfilePage;
