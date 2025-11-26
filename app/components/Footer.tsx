import Link from 'next/link';
import React from 'react';
import { FaInstagram, FaLinkedinIn, } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="relative w-full py-10 text-white bg-red-500">
            <div className="w-full h-auto md:pt-20 pt-5 mx-auto container relative px-5">
                <div className='flex flex-row w-full h-auto '>


                    <div className='flex flex-col'>
                        <div className='flex flex-row mb-5 gap-36'>
                            <div className='flex flex-col '>
                                <h3 className="mb-4 text-3xl font-bold font-poppins text-left">sitemap</h3>
                                <ul className="space-y-2 text-gray-100 text-xl text-left">
                                    <li><a href="#" className="hover:text-black">about us</a></li>
                                    <li><a href="#" className="hover:text-black">our work</a></li>
                                    <li><a href="#" className="hover:text-black">our clients</a></li>
                                    <li><a href="#" className="hover:text-black">our team</a></li>
                                    <li><a href="#" className="hover:text-black">contact us</a></li>
                                </ul>
                            </div>

                            <div className='flex flex-col '>
                                <h3 className="mb-4 text-3xl font-bold font-poppins text-left">offices</h3>
                                <ul className="space-y-2 text-gray-100 text-xl text-left">
                                    <li><a href="#" className="hover:text-black">dubai, UAE</a></li>
                                    <li><a href="#" className="hover:text-black">beirut, LEBANON</a></li>
                                    <li><a href="#" className="hover:text-black">paris, FRANCE</a></li>
                                    <li><a href="#" className="hover:text-black">cairo, EGYPT</a></li>
                                    <li><a href="#" className="hover:text-black">riyadh, KSA</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex flex-row space-x-4'>
                            <Link href="/">
                                <svg
                                    width="280"
                                    height="120"
                                    viewBox="0 0 120 120"
                                    className="cursor-pointer "
                                >

                                    <text
                                        x="44%"
                                        y="60%"
                                        fill="white"
                                        fontSize="56"
                                        textAnchor="middle"
                                        dominantBaseline="middle"
                                        fontFamily="sans-serif"
                                    >
                                        mindspace
                                    </text>
                                </svg>
                            </Link>
                            <span className='w-1 h-24 mt-6  bg-white'></span>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black mt-10"><FaInstagram size={58} /></a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black mt-10"><FaLinkedinIn size={58} /></a>
                        </div>
                    </div>



                    <div className='flex flex-col w-full items-end'>
                     <div className='flex flex-col justify-start items-start'>
                        <h1 className='text-3xl'>inquiries</h1>
                        <h1 className='text-2xl pt-10'>briefme@mindspace-me.com</h1>
                        </div>
                        <div className='flex flex-row justify-end h-full items-end pb-5'>
                            <h1 className='text-3xl '>privacy policy</h1>
                            <span className='w-0.5 h-12 bg-white mx-4 -mb-2'></span>
                            <h1 className='text-3xl '>terms & conditions</h1>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
