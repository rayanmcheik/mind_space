'use client';
import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();


 useEffect(() => {
  document.body.style.overflow = menuOpen ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto";
  };


}, [menuOpen]);


const linkClass = (path: string) => {
  const isActive = pathname === path;

  return `
    relative 
    transition 
    pb-1
    ${isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"}

    before:absolute 
    before:bottom-0
    before:left-1/2 
    before:-translate-x-1/2
    before:w-full 
    before:h-[3px] 
    before:bg-blue-500 
    before:rounded 
    before:transition-transform 
    before:duration-300
    before:origin-center
    ${isActive ? "before:scale-x-100" : "before:scale-x-0 hover:before:scale-x-100"}
  `;
};


const navLinkClasses =
    "relative text-gray-300 hover:text-white before:absolute before:top-6 before:rounded-lg before:left-1/4 before:w-1/2 before:h-1 before:bg-blue-500 before:scale-x-0 hover:before:scale-x-100 before:origin-center before:transition-transform before:duration-300";

  const menuItems = [
    { name: "About us", path: "/about" },
    { name: "Our work", path: "/ourwork" },
    { name: "Our clients", path: "/ourclient" },
    { name: "Our team", path: "/ourteam" },
  ];

  return (
    <nav className="w-full bg-black shadow-md relative border-b-2 border-blue-500 md:border-b-0">
      <div className="container mx-auto max-w-[1200px] px-4 py-4 flex items-center justify-between">

        <Link href="/">
          <div className="rounded-full border-2 border-white flex justify-center items-center h-auto px-5 py-5">
            <h1 className="text-white text-xl text-center">
              <p>mind</p> Space
            </h1>
          </div>
        </Link>

        <ul className="hidden md:flex items-center space-x-6 pr-10">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className={navLinkClasses}>
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>

        
        <button
          className="md:hidden flex flex-col relative w-10 h-10 justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-1 bg-white rounded-lg transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-0.5 w-full mb-0" : "w-10 mb-1"
            }`}
          ></span>

          <span
            className={`block h-1 bg-white rounded-lg transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-0.5 w-full mb-0" : "w-6 mb-0"
            }`}
          ></span>
        </button>
      </div>

      <div
        className={`md:hidden fixed left-0 w-full bg-black  overflow-auto transition-all duration-300 ease-in-out ${
          menuOpen ? "h-[73vh] py-4 border-b-2 border-blue-500" : "h-0 py-0 "
        }`}
        style={{ zIndex: 999 }}
      >
        <ul className="flex flex-col items-center gap-7 text-4xl px-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={linkClass(item.path)}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
