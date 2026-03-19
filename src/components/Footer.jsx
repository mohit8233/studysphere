import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

function Footer() {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={`  py-6 mt-auto ${
        theme === "light"
          ? "bg-white text-black"
          : "bg-gray-900 text-white"
      }`}>
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">

          {/* Logo / Title */}
          <h2 className="text-lg font-semibold ">
             Event Explorer
          </h2>

          {/* Links */}
          <div className="flex gap-6 mt-3 md:mt-0 text-sm">
            <Link to='/' className="hover:text-white transition">Home</Link>
            <Link to='/eventdetails' className="hover:text-white transition">EventDetails</Link>
            <Link to='/myticket' className="hover:text-white transition">MyTickets</Link>
          
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm ">
          © 2026 Event Explorer. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;