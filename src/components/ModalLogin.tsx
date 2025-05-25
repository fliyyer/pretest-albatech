import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import type { FormData, LoginModalProps } from "../types/modal";
import { authService } from "../services/authServices";
import { useNavigate } from "react-router-dom";


const ModalLogin = ({ isOpen, onClose }: LoginModalProps) => {
    const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const { email, password } = formData;
            const result = await authService.login(email, password);
            localStorage.setItem("token", result.token);
            onClose();
            navigate('/profile')
        } catch (err) {
            const message = err instanceof Error ? err.message : "Login gagal";
            setError(message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer top-5 right-4 text-xl text-secondary"
                    aria-label="Close modal"
                >
                    <IoMdClose />
                </button>

                <h2 className="text-xl font-semibold mb-4">Masuk</h2>
                <div className="h-px bg-gray-200 mb-4" />
                {error && (
                    <div className="mb-4 p-2 bg-red-100 text-red-600 rounded text-sm">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:ring-1 focus:ring-primary transition outline-none"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        disabled={isLoading}
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 p-2 rounded focus:border-primary focus:ring-1 focus:ring-primary transition outline-none"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            required
                            disabled={isLoading}
                        />
                        <button
                            type="button"
                            className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-xl text-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                            tabIndex={-1}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            disabled={isLoading}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </button>
                    </div>

                    <div className="flex items-center">
                        <input disabled={isLoading} type="checkbox" id="remember" className="mr-2" />
                        <label htmlFor="remember" className="text-sm">Remember me</label>
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-primary text-white font-semibold py-2 rounded hover:bg-primary-dark transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isLoading ? "opacity-70 cursor-not-allowed" : ""
                            }`}
                        disabled={isLoading}
                    >
                        {isLoading ? "Memproses..." : "Masuk"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalLogin;