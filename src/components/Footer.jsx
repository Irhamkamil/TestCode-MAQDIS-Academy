import React from "react";
import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-600 text-white px-6 md:px-10 xl:px-40 w-full h-full flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0">
      {/* Logo dan Deskripsi */}
      <div className="flex flex-col items-center md:items-start md:w-1/3 space-y-6 mt-10">
        <div className="flex items-center justify-center space-x-3 md:-mt-35 bg-white p-4 rounded-full shadow-lg">
          <img
            src="/logo.png"
            alt="Maqdis Logo"
            className="w-35 object-contain"
          />
        </div>
        <p className="text-center md:text-left mt-5 max-w-xs leading-relaxed">
          Be sure to take a look at our <br /> Terms of Use and Privacy Policy
        </p>
      </div>

      {/* Social Media dan Contact */}
      <div className="md:w-1/3 flex flex-col items-center sm:items-start mb-10 md:my-20 ">
        <h3 className="font-semibold text-white mb-4">Social Media</h3>
        <div className="flex space-x-4 mb-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white hover:bg-green-700 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white hover:bg-green-700 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <h3 className="font-semibold text-white mb-4">Contact</h3>
        <div className="flex space-x-4 mb-2">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Phone"
            className="bg-gray-700 p-3 rounded-full text-gray-300 cursor-pointer hover:text-white hover:bg-green-700 transition "
          >
            <FaPhone />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="bg-gray-700 p-3 rounded-full text-gray-300 cursor-pointer hover:text-white hover:bg-green-700 transition "
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="max-w-xs mt-6 text-center sm:text-left">
          Gedung MAQDIS Ruko Metro Indah Mall Blok D20 Jl. Soekarno Hatta 590
          Bandung Jawa Barat, Indonesia, 40287
        </p>
      </div>
    </footer>
  );
}
