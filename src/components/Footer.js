import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-16 rounded-t-2xl">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">JSB</h3>
          <p className="text-sm text-gray-400">
            © JSB Group | Logistics • Trade • Enterprise • Forums
            <br />
            Trusted Business Partner in India & Beyond
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Resources</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Businesses</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>JSB Logistics</li>
            <li>DVEX</li>
            <li>RJ Enterprise</li>
            <li>JSB Farms</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-1 text-gray-400 text-sm">
            <li>Vision & Mission</li>
            <li>Leadership</li>
            <li>Achievements</li>
            <li>Certifications</li>
            <li>Life at JSB</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8 text-xl text-gray-400">
        <FaLinkedin />
        <FaInstagram />
        <FaFacebook />
        <FaYoutube />
      </div>
    </footer>
  );
}
