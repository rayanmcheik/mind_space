'use client';
import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import LanguageSwitcher from "./languageSwitcher";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? 'text-white font-bold transition'
      : 'text-gray-300 hover:text-white transition';


  const navLinkClasses =
    "relative text-gray-300 hover:text-white before:absolute before:top-6 before:rounded-lg before:left-1/4 before:w-1/2 before:h-1 before:bg-blue-500 before:scale-x-0 hover:before:scale-x-100 before:origin-center before:transition-transform before:duration-300";


  return (
    <nav className="w-full pt-1 pb-1 bg-black shadow-md">
      <div className="container flex items-center justify-between px-4 mx-auto max-w-[1200px] pt-4 pb-4">
        <div className="flex items-center ">
          <Link href="/">
            <div className="rounded-[100%] border-2 border-white justify-center items-center h-auto px-5 py-5">
              <h1 className="text-white text-xl w-full text-center">
                <p>  mind</p> Space
              </h1>
            </div>
          </Link>
        </div>



        <ul className="items-center hidden space-x-6 md:flex text-gray-300">
          <li>
            <Link href="/about" className={navLinkClasses}>About us</Link>
          </li>
          <li>
            <Link href="/ourwork" className={navLinkClasses}>Our work</Link>
          </li>
          <li>
            <Link href="/ourclient" className={navLinkClasses}>Our clients</Link>
          </li>
          <li>
            <Link href="/ourteam" className={navLinkClasses}>Our team</Link>
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>


        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-7 h-0.5 bg-white"></span>
          <span className="block w-7 h-0.5 bg-white"></span>

        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-black bg-opacity-95">
          <Link href="/" className={linkClass('/')} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className={linkClass('/about')} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className={linkClass('/contact')} onClick={() => setMenuOpen(false)}>Contact</Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute text-3xl text-white top-6 right-6"
          >
            ✕
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;