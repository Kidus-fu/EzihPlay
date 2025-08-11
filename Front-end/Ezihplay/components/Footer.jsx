import React from "react";
import { GithubFilled, GlobalOutlined, LinkedinFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="relative py-10  " id="footer">
            <div className='max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200'>

                {/* Logo & Mission */}
                <div>
                    <h2 className="text-xl font-bold">EzihPlay</h2>
                    <p className="mt-2 text-sm">
                        Discover, share, and review playlists from Ethiopia and beyond. Built with ❤️ in Ethiopia to connect music lovers worldwide.
                    </p>
                </div>


                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold  mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm ">
                        <li><Link to={"/"} className="hover:text-orange-500">Home</Link></li>
                        <li><Link to={"/aboutus"} className="hover:text-orange-500"> About </Link></li>
                        <li><Link to={"/login"} className="hover:text-orange-500">Login</Link></li>
                        <li><Link to={"/signup"} className="hover:text-orange-500">Get Started</Link></li>
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div>
                    <h3 className="text-lg font-semibold  mb-3">Connect</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://github.com/Kidus-fu/EzihPlay" target="_blank" rel="noopener noreferrer" className="text-red-400">
                            <GithubFilled />
                        </a>
                        <a href="https://www.linkedin.com/in/kidus-surafel/" target="_blank" rel="noopener noreferrer" className="text-blue-800">
                            <LinkedinFilled />
                        </a>
                        <a href="https://ezih-play.vercel.app/" className="text-blue-500">
                            <GlobalOutlined />
                        </a>
                    </div>
                    <p className="text-xs mt-4">© {new Date().getFullYear()} EzihPlay. All rights reserved</p>
                </div>
            </div>
            <div
                className="sm:absolute hidden top-0 right-0 z-0 h-1/2 w-1/6 blur-3xl bg-gray-200"
            />
            <div
                className="absolute bottom-0 left-0 z-0 sm:h-1/2 sm:w-1/6 w-0 h-0 blur-2xl bg-gray-200"
            />
        </footer>
    );
};

export default Footer;