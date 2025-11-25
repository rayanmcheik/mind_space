'use client';
import React, { useEffect, useState } from 'react';

const Section1 = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const pageHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrollTop = window.scrollY;

            const progress = (scrollTop / pageHeight) * 180;
            setScrollHeight(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="fixed left-[4vw] top-1/2 -translate-y-1/2 w-2 h-[170px] bg-gray-300 rounded-md overflow-hidden">
                <div
                    className="w-full transition-all duration-200 bg-red-500 rounded-md"
                    style={{ height: `${scrollHeight}px` }}
                ></div>
            </div>

            <div className="py-4 text-center">

                <div className='relative flex-col mx-auto'>
                    <div className='flex flex-col text-[90px] font-normal py-0'>
                        <h1 className='-mb-6 text-white'>here’s a teeny-weeny</h1>
                        <h1 className='-mt-2 -mb-6 text-white'>glimpse of our work.</h1>
                        <h1 className='-mt-2 text-white'>what’s coming later is</h1>

                    </div>
                    <div className="flex flex-row items-end justify-center w-full h-12 pt-30 pb-52">
                        <span className="flex items-center justify-center w-20 h-1 mb-10 text-white bg-cyan-500 rounded-l-2xl"></span>
                        <span className="flex items-center justify-center w-8 h-1 mb-10 text-white bg-red-500 rounded-r-2xl"></span>
                        <h1 className='text-red-500 text-[100px] font-bold pr-10 pl-5' >even </h1>
                        <h1 className='text-white text-[100px] font-bold pr-5 ' >greater</h1>
                        <span className="flex items-center justify-center h-1 mb-10 bg-red-500 w-14 rounded-l-2xl"></span>
                        <span className="flex items-center justify-center w-4 h-1 mb-10 mr-4 bg-cyan-500 rounded-r-2xl"></span>
                        <span className="flex items-center justify-center w-10 h-1 mb-10 bg-cyan-500 rounded-2xl"></span>
                    </div>
                </div>


            </div>
        </>
    );
};

export default Section1;
