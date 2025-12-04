'use client';
import React, { useEffect, useState } from 'react';
import { CiAirportSign1 } from 'react-icons/ci';
import gsap from 'gsap';
import AnimatedCircle from './AnimatedCircle';

const Section1 = () => {

  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / pageHeight) * 180;
      setScrollHeight(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-auto bg-black ">
      <div className="fixed top-1/2 -translate-y-1/2 w-2 h-[170px] bg-gray-300 rounded-md overflow-hidden left-10">
          <div className="w-full transition-all duration-200 bg-red-500 rounded-md border-[0.2px] border-gray-400" style={{ height: `${scrollHeight}px` }} ></div>
        </div>
      <div className='container w-full h-auto px-0 mx-auto md:pt-10 md:pb-12 pt-52 '>

        

        <div className="relative px-5 py-4 text-center md:py-4 md:mt-0 -mt-52 md:px-0">
          <div className="relative flex-col mx-auto">
            <div className='flex items-center justify-center md:mt-0 mt-48'>
              <AnimatedCircle/>
             
            </div>
            <div className="flex flex-col md:text-[90px] py-0 font-poppins text-4xl px-5 md:px-0 md:-mt-[440px] -mt-68 leading-15 md:leading-none">
              <h1 className="mb-0 text-white md:-mb-6">here’s a teeny-weeny</h1>
              <h1 className="mb-0 text-white md:mt-3 md:mb-0">glimpse of our work.</h1>
              <h1 className="text-white ">what’s coming later is</h1>
            </div>
            <div className="flex flex-row items-end justify-center w-full h-12 pt-10 pb-16 md:pt-30">
              <span className="flex items-center justify-center w-20 h-1 text-white md:mb-10 bg-cyan-500 rounded-l-2xl"></span>
              <span className="flex items-center justify-center w-8 h-1 text-white bg-red-500 md:mb-10 rounded-r-2xl"></span>
              <h1 className="text-red-500 md:text-[100px] font-bold md:pr-10 md:pl-5 text-4xl pr-3 pl-2">even</h1>
              <h1 className="text-white md:text-[100px] font-bold md:pr-5 text-4xl pr-2">greater</h1>
              <span className="flex items-center justify-center h-1 bg-red-500 md:mb-10 w-14 rounded-l-2xl"></span>
              <span className="flex items-center justify-center w-4 h-1 mr-2 md:mb-10 md:mr-4 bg-cyan-500 rounded-r-2xl"></span>
              <span className="flex items-center justify-center w-10 h-1 md:mb-10 bg-cyan-500 rounded-2xl"></span>
            </div>
          </div>
        </div></div>
    </div>
  );
};
export default Section1;
