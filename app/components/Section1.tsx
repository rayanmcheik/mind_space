'use client';
import React, { useEffect, useState } from 'react';
import { CiAirportSign1 } from 'react-icons/ci';
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
      <div className='w-full h-auto px-0 md:pt-20 md:pb-12 mx-auto container pt-20 '>

      <div className="fixed top-1/2 -translate-y-1/2 w-2 h-[170px] bg-gray-300 rounded-md overflow-hidden">
        <div className="w-full transition-all duration-200 bg-red-500 rounded-md" style={{ height: `${scrollHeight}px` }} ></div>
      </div>

      
<div className='flex items-center justify-center'>
      <svg
        viewBox="0 0 500 500"
        className="static w-[200px] h-[200px] md:w-[500px] md:h-[500px]  justify-center md:-mt-0 -mt-10"
      >
        <circle
          cx="250"
          cy="250"
          r="240"
          stroke="cyan"
          strokeWidth="8"
          fill="transparent"
        />
      </svg>
</div>


      <div className="relative md:py-4 py-4 text-center md:-mt-[500px] -mt-52 md:px-0 px-5">
        <div className="relative flex-col mx-auto">
          <div className="flex flex-col md:text-[90px] py-0 font-poppins text-3xl px-5 md:px-0">
            <h1 className="md:-mb-6 mb-0  text-white">here’s a teeny-weeny</h1>
            <h1 className="md:mt-3 md:mb-0 mb-0 text-white">glimpse of our work.</h1>
            <h1 className=" text-white ">what’s coming later is</h1>
          </div>
          <div className="flex flex-row items-end justify-center w-full h-12 md:pt-30 pb-16 pt-10">
            <span className="flex items-center justify-center w-20 h-1 md:mb-10 text-white bg-cyan-500 rounded-l-2xl"></span>
            <span className="flex items-center justify-center w-8 h-1 md:mb-10 text-white bg-red-500 rounded-r-2xl"></span>
            <h1 className="text-red-500 md:text-[100px] font-bold md:pr-10 md:pl-5 text-4xl pr-3 pl-2">even</h1>
            <h1 className="text-white md:text-[100px] font-bold md:pr-5 text-4xl pr-2">greater</h1>
            <span className="flex items-center justify-center h-1 md:mb-10 bg-red-500 w-14 rounded-l-2xl"></span>
            <span className="flex items-center justify-center w-4 h-1 md:mb-10 md:mr-4 bg-cyan-500 rounded-r-2xl mr-2"></span>
            <span className="flex items-center justify-center w-10 h-1 md:mb-10 bg-cyan-500 rounded-2xl"></span>
          </div>
        </div>
      </div></div>
    </div>
  );
};
export default Section1;
