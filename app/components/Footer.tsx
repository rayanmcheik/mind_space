import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full py-10 text-white bg-red-500">
            <div className="container w-full px-5 mx-auto">

                <div className="flex flex-col md:flex-row w-full gap-10 md:gap-0 md:justify-between">

                    <div className="flex flex-col w-full md:w-2/3">

                        <div className="flex flex-row md:flex-row md:gap-10 mb-10 gap-5">

                            <div>
                                <h3 className="mb-4 text-3xl font-bold font-poppins">sitemap</h3>
                                <ul className="space-y-2 text-xl text-gray-100">
                                    <li><Link href="/about" className="hover:text-black">about us</Link></li>
                                    <li><Link href="/ourwork" className="hover:text-black">our work</Link></li>
                                    <li><Link href="/ourclient" className="hover:text-black">our clients</Link></li>
                                    <li><Link href="/ourteam" className="hover:text-black">our team</Link></li>
                                    <li><Link href="/contact" className="hover:text-black">contact us</Link></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="mb-4 text-3xl font-bold font-poppins">offices</h3>
                                <ul className="space-y-2 text-xl text-gray-100">
                                    <li>dubai, UAE</li>
                                    <li>beirut, LEBANON</li>
                                    <li>paris, FRANCE</li>
                                    <li>cairo, EGYPT</li>
                                    <li>riyadh, KSA</li>
                                </ul>
                            </div>

                        </div>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                            <Link href="/" className="flex justify-center md:justify-start">
                                <svg
                                    width="220"
                                    height="80"
                                    viewBox="0 0 120 120"
                                    className="cursor-pointer"
                                >
                                    <text
                                        x="50%"
                                        y="50%"
                                        fill="white"
                                        fontSize="50"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fontFamily="sans-serif"
                                    >
                                        mindspace
                                    </text>
                                </svg>
                            </Link>

                            <span className="hidden md:block w-1 h-24 bg-white"></span>

                            <div className="flex flex-row gap-6">
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black"
                                >
                                    <FaInstagram size={48} />
                                </a>
                                <a
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-black"
                                >
                                    <FaLinkedinIn size={48} />
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col w-full md:w-1/3 items-center md:items-end text-center md:text-right gap-10">

                        <div>
                            <h1 className="text-3xl">inquiries</h1>
                            <h1 className="pt-5 text-2xl">briefme@mindspace-me.com</h1>
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:items-end gap-3">
                            <h1 className="text-2xl md:text-3xl">privacy policy</h1>
                            <span className="hidden md:block w-0.5 h-10 bg-white"></span>
                            <h1 className="text-2xl md:text-3xl">terms & conditions</h1>
                        </div>

                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
