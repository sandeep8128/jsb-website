import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ React Router Link
import { Menu, X } from "lucide-react"; // Hamburger icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Businesses ▾", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Resources", path: "/" },
    { name: "Life at JSB", path: "/" },
  ];

  return (
    <nav className="w-[90%] mx-auto mt-4 bg-white shadow-md rounded-full px-8 py-4 sticky top-4 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-black tracking-wide">
          JSB
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-8 text-sm font-medium text-gray-700">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className={`cursor-pointer transition ${
                link.name === "Home"
                  ? "text-black font-semibold"
                  : "hover:text-red-600"
              }`}
            >
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Contact Us (Desktop) */}
        <div className="hidden md:flex justify-end">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium transition">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-2xl shadow-lg py-4 px-6 space-y-3 text-center">
          {navLinks.map((link, i) => (
            <div
              key={i}
              className={`cursor-pointer py-2 ${
                link.name === "Home"
                  ? "text-black font-semibold"
                  : "text-gray-700 hover:text-red-600"
              }`}
              onClick={() => setIsOpen(false)} // Close menu after click
            >
              <Link to={link.path}>{link.name}</Link>
            </div>
          ))}
          <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-medium transition">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
