import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='w-full bg-white text-secondary max-w-7xl mx-auto py-2 mt-10'>
            <div className='flex flex-col px-4 lg:px-0 md:flex-row border-t border-b border-gray-200 py-10 gap-6 md:gap-20'>
                <div className='flex flex-col gap-5'>
                    <img className='w-24' src={Logo} alt="" />
                    <p className='my-3'>Albatech acts as a corporate partner to help digitize their business to accelerate trends in remote work.</p>
                    <div className='flex gap-4 text-gray-300'>
                        <Link to="/facebook" className='hover:text-primary transition'>
                            <FaFacebookF className='size-8' />
                        </Link>
                        <Link to="/instagram" className='hover:text-primary transition'>
                            <FaInstagram className='size-8' />
                        </Link>
                        <Link to="/linkedin" className='hover:text-primary transition'>
                            <FaLinkedin className='size-8' />
                        </Link>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-secondary text-2xl font-semibold'>Website</h4>
                    <ul className='flex flex-col mt-4 space-y-4'>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/portfolio">Portfolio</Link>
                        <Link to="/career">Career</Link>
                    </ul>
                </div>
                <div className='flex flex-col'>
                    <h4 className='text-secondary text-2xl font-semibold'>Contact</h4>
                    <p className='mt-4'>The Prominence Blok 38D No.25 Jl. Jalur Sutera Barat, Alam Sutera, Kota Tangerang, Banten 15143</p>
                    <Link to="tel:+62878977779893" className='mt-4 underline'><strong>P:</strong> +62 87 8977 79893</Link>
                    <Link to="mailto:info@albatech.id" className='mt-4 underline'><strong>E:</strong> info@albatech.id</Link>
                </div>
            </div>
            <div className='flex px-4  justify-between text-xs md:text-base gap-4 items-center text-gray-400 py-5 font-medium'>
                <p>©PT. Alba Digital Teknologi 2025 | All Rights Reserved</p>
                <p>Privacy policy | Terms of service</p>
            </div>
        </footer>
    )
}

export default Footer