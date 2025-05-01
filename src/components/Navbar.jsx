import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6 px-6 md:px-12 bg-transparent fixed top-0 left-0 w-full z-50 shadow-md">
            {/* Logo Section */}
            <div className="flex items-center">
                <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
            </div>

            {/* Social Icons Section */}
            <div className="flex items-center gap-6 text-white text-2xl">
                <a href="https://www.linkedin.com/in/zerradaissa/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/aissap" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-all">
                    <FaGithub />
                </a>
                <a href="https://x.com/ZerradAissa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-all">
                    <FaXTwitter />
                </a>
                <a href="https://www.instagram.com/hollycore.777/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-all">
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
