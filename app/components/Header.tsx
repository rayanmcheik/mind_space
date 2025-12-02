'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const menuItems = [
    { name: "About us", path: "/about", newTab: true },
    { name: "Our work", path: "/ourwork" },
    { name: "Our clients", path: "/ourclient" },
    { name: "Our team", path: "/ourteam" },
    { name: "contact us", path: "/contact" },
  ];


  return (
    <div className="fixed z-50 w-full bg-black border-b-2 border-blue-500 shadow-md md:w-full md:relative md:border-b-0">
      <div className="container flex items-center justify-between py-4 mx-auto">
        <Link href="/">
          <svg width="120" height="120" viewBox="0 0 120 120" className="cursor-pointer">
            <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="2" fill="none" />
            <text x="50%" y="45%" fill="white" fontSize="20" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif">
              mind
            </text>
            <text x="50%" y="65%" fill="white" fontSize="20" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif">
              Space
            </text>
          </svg>
        </Link>

        <ul className="items-center hidden space-x-6 md:flex">
          {menuItems.map((item) => (
            <li key={item.path}>
              {item.newTab ? (
                <a href={item.path} rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  {item.name}
                </a>
              ) : (
                <Link href={item.path} className="text-gray-300 hover:text-white">{item.name}</Link>
              )}
            </li>
          ))}
          <li><LanguageSwitcher /></li>
        </ul>

        <button
          className="flex flex-col justify-center w-10 h-10 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-1 bg-white rounded-lg transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-0.5 w-full mb-0" : "w-10 mb-1"}`}></span>
          <span className={`block h-1 bg-white rounded-lg transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-0.5 w-full mb-0" : "w-6 mb-0"}`}></span>
        </button>
      </div>

      <div className={`md:hidden fixed left-0 w-full bg-black overflow-auto transition-all duration-300 ease-in-out ${menuOpen ? "h-[73vh] py-4 border-b-2 border-blue-500" : "h-0 py-0"}`} style={{ zIndex: 999 }}>
        <ul className="flex flex-col items-center pl-2 text-4xl gap-7">
          {menuItems.map((item) => (
            <li key={item.path}>
              {item.newTab ? (
                <a href={item.path} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                  {item.name}
                </a>
              ) : (
                <Link href={item.path} className="text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
          <li><LanguageSwitcher /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
