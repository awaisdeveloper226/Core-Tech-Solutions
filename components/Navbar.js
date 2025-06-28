"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Blog", path: "/#blog" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white py-2 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand Name */}
        <Link
          href="/"
          className="text-3xl font-extrabold tracking-wide transition-all duration-300"
        >
          CoreTech Solutions
          {/* Underline effect for brand name */}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="relative px-4 py-2 text-lg font-medium transition-all duration-300 hover:text-cyan-200 group"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg transition transform hover:bg-white hover:bg-opacity-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-center transition-all duration-300 ease-in-out transform ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="block py-3 text-lg font-medium transition-all duration-300 hover:bg-cyan-600 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
