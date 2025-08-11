"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Services", path: "/#services" },
    { name: "Blog", path: "/#blog" },
    { name: "Contact", path: "/#contact" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white shadow-lg z-50">
  <div className="container mx-auto flex justify-between items-center py-3 px-4 md:px-6">
    {/* Brand */}
    <Link
      href="/"
      className="relative group text-2xl md:text-3xl font-extrabold tracking-wide transition-all duration-300"
    >
      CoreTech Solutions
      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden md:flex space-x-6 lg:space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className="relative group px-2 py-1 text-lg font-medium transition-all duration-300 hover:text-cyan-200"
        >
          {item.name}
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </Link>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden p-2 rounded-lg transition hover:bg-white hover:bg-opacity-20"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle Menu"
    >
      {isOpen ? <X size={26} /> : <Menu size={26} />}
    </button>
  </div>

  {/* Mobile Menu */}
  <div
    ref={menuRef}
    className={`md:hidden bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 overflow-hidden transition-all duration-300 ease-in-out ${
      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="flex flex-col divide-y divide-blue-400">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className="block py-3 px-4 text-base font-medium hover:bg-cyan-600 hover:text-white transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>
</nav>

  );
}
