// components/Navbar.tsx
"use client";

import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { 
      label: "Mass Tort", 
      href: "#",
      hasDropdown: true 
    },
    { 
      label: "Class Action", 
      href: "#",
      hasDropdown: true 
    },
    { 
      label: "Personal Injury", 
      href: "#",
      hasDropdown: true 
    },
    { label: "Blogs", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Desktop Navigation - Full width container */}
          <div className="hidden md:flex w-full items-center justify-between">
            {/* Navigation Links on left */}
            <div className="flex space-x-10">
              {navItems.map((item) => (
                <div key={item.label} className="relative group">
                  <a
                    href={item.href}
                    className="text-blue-400 hover:text-blue-600 font-semibold transition duration-300 flex items-center"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <MdKeyboardArrowDown 
                        size={20} 
                        className="ml-1 text-gray-100  rounded-md transition duration-300 bg-yellow-500"
                      />
                    )}
                  </a>
                </div>
              ))}
            </div>
            
            {/* Phone Number on right */}
            <div className="flex items-center">
              <div className="bg-blue-900 text-white px-6 py-2 rounded-3xl font-bold flex items-center gap-3 hover:bg-blue-800 transition duration-300 cursor-pointer">
                <div className="bg-yellow-400 rounded-full p-2">
                  <IoCall size={16} className="text-blue-900"/>
                </div>
                <span className="whitespace-nowrap">(888) 202-1350</span>
              </div>
            </div>
          </div>

          {/* Mobile - Only hamburger menu on right side */}
          <div className="flex md:hidden w-full items-center justify-end">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition duration-300"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <RxCross1 size={28} className="text-gray-700 hover:text-red-600 transition duration-300"/>
              ) : (
                <CiMenuFries size={28} className="text-black hover:text-blue-900 transition duration-300"/>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-white border-t border-gray-200 shadow-lg`}
      >
        {/* Phone Number in Mobile Menu */}
        <div className="px-4 py-4 border-b border-gray-100 bg-blue-50">
          <div className="bg-blue-900 text-white px-4 py-3 rounded-2xl font-bold flex items-center justify-center gap-3">
            <div className="bg-yellow-400 rounded-full p-1.5">
              <IoCall size={16} className="text-blue-900"/>
            </div>
            <span className="whitespace-nowrap">(888) 202-1350</span>
          </div>
        </div>

        {/* Mobile Menu Items */}
        <div className="px-4 py-3">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 last:border-b-0">
              <a
                href={item.href}
                onClick={closeMenu}
                className="block text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md px-4 py-4 text-base font-semibold transition duration-300 flex items-center justify-between"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <MdKeyboardArrowDown 
                    size={20} 
                    className="text-yellow-500"
                  />
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;