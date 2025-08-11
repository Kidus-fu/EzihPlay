import { NavLink } from "react-router-dom";
import EzihplayLogo from "../../public/Ezihplaylogo4.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LandingNavBar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer hover:text-orange-500 transition-colors ${
      isActive ? "text-orange-500 font-semibold" : "text-black"
    }`;

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl h-14 shadow-md shadow-orange-200 bg-white">
        <div className="flex justify-between items-center h-full px-6">
          {/* Logo */}
          <NavLink to="/">
            <img
              src={EzihplayLogo}
              alt="EzihPlay Logo"
              className="h-14 w-14"
              draggable={false}
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 items-center">
            <li>
              <NavLink to="/" className={linkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/developerOptions" className={linkClasses}>
                Developer Options
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" className={linkClasses}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contectus" className={linkClasses}>
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Action Buttons (Desktop) */}
          <div className="hidden lg:flex gap-4 items-center">
            <NavLink
              to="/login"
              className="px-4 py-2 border border-gray-700 rounded hover:scale-105 transition-transform"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="px-4 py-2 bg-orange-500 text-white rounded hover:scale-105 transition-transform"
            >
              Share now
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpenMobileMenu(true)}
            className="lg:hidden text-2xl cursor-pointer"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 flex flex-col p-6"
          >
            {/* Close Button */}
            <button
              className="self-end text-2xl mb-6 cursor-pointer"
              onClick={() => setOpenMobileMenu(false)}
            >
              ✕
            </button>

            {/* Menu Links */}
            <ul className="flex flex-col gap-6 text-lg">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpenMobileMenu(false)}
                  className={linkClasses}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/developerOptions"
                  onClick={() => setOpenMobileMenu(false)}
                  className={linkClasses}
                >
                  Developer Options
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  onClick={() => setOpenMobileMenu(false)}
                  className={linkClasses}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contectus"
                  onClick={() => setOpenMobileMenu(false)}
                  className={linkClasses}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Mobile Actions */}
            <div className="mt-10 flex flex-col gap-4">
              <NavLink
                to="/login"
                onClick={() => setOpenMobileMenu(false)}
                className="px-4 py-2 border border-gray-700 rounded text-center"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setOpenMobileMenu(false)}
                className="px-4 py-2 bg-orange-500 text-white rounded text-center"
              >
                Share now
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LandingNavBar;
