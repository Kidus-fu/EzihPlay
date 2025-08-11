import { NavLink } from "react-router-dom";
import EzihplayLogo from "../../public/Ezihplaylogo4.png";
import { useState } from "react";

const LandingNavBar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const linkClasses = ({ isActive }) =>
    `cursor-pointer hover:text-orange-500 ${isActive ? "text-orange-500 font-semibold" : ""}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl h-14 shadow-md shadow-orange-200 bg-white">
  <div className="flex justify-between items-center h-full px-6">
    {/* Logo */}
    <NavLink to="/">
      <img
        src={EzihplayLogo}
        alt="EzihPlay Logo"
        className="h-14 w-14"
        title="EzihPlay Logo"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />
    </NavLink>

    {/* Desktop Menu */}
    <ul className="hidden lg:flex gap-3 items-center select-none sm:text-xs">
      <li><NavLink to="/" className={linkClasses}>Home</NavLink></li>
      <li><NavLink to="/developerOptions" className={linkClasses}>Developer Options</NavLink></li>
      <li><NavLink to="/aboutus" className={linkClasses}>About</NavLink></li>
      <li><NavLink to="/contectus" className={linkClasses}>Contact</NavLink></li>
    </ul>

    {/* Action Buttons */}
    <div className="hidden lg:flex gap-4 items-center">
      <NavLink to="/login" className="px-4 py-2 border sm:text-sm border-gray-700 rounded hover:scale-105 transition-transform">Login</NavLink>
      <NavLink to="/signup" className="px-4 py-2 bg-orange-500 sm:text-sm text-white rounded hover:scale-105 transition-transform">Share now</NavLink>
    </div>

    {/* Mobile Toggle */}
    <button onClick={() => setOpenMobileMenu(true)} className="lg:hidden">☰</button>
  </div>
</nav>

  );
};

export default LandingNavBar;
