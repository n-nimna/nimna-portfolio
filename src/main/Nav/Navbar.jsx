import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the side menu open  a and close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="bg-black text-white py-4 fixed top-0 left-0 w-full z-50 hidden md:flex justify-between items-center px-20 shadow-md">
  {/* Logo with less gap */}
  <div className="font-bold text-2xl bg-custom-gradient bg-clip-text text-transparent">NIMESHI</div>

  {/* Navbar Links with reduced gap */}
  <div className="space-x-8 text-m flex relative">
  <a href="#hero1" className="hover:text-white-700 relative font-medium">Home</a>
  <a href="#about" className="hover:text-white-700 relative font-medium">About</a>
  <a href="#service" className="hover:text-white-700 relative font-medium">Service</a>
  <a href="#skills" className="hover:text-white-700 relative font-medium">Skills</a>
  <a href="#project" className="hover:text-white-700 relative font-medium">Projects</a>
</div>

</nav>



      {/* Mobile Navbar */}
      <div className="md:hidden">
        {/* Hamburger Icon */}
      {/* Hamburger Icon */}
<div className="fixed top-0 left-0 z-10">
  <button
    onClick={toggleMenu}
    className="text-white p-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </button>
</div>

        {/* Side Menu (Mobile) */}
      
{/* Side Menu (Mobile) */}
<div
  className={`fixed top-0 left-0 w-3/4 h-60 bg-[#1A1A1A] text-white p-6 transform ${
    isOpen ? "translate-x-0" : "-translate-x-full"
  } transition-transform ease-in-out duration-300 z-40`}
>
  {/* Close Icon */}
  <button
    onClick={toggleMenu}
    className="text-white absolute top-4 right-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  {/* Side Menu Links */}
  <div className="space-y-3 text-lg">
    <a href="#home" className="block hover:text-gray-400 font-medium">Home</a>
    <a href="#about" className="block hover:text-gray-400 font-medium">About</a>
    <a href="#service" className="block hover:text-gray-400 font-medium">Service</a>
    <a href="#skills" className="block hover:text-gray-400 font-medium">Skills</a>
    <a href="#project" className="block hover:text-gray-400 font-medium">Projects</a>
  </div>
</div>

      </div>
    </div>
  );
};


export default Navbar;