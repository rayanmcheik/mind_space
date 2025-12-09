'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';
import ToTopButton from '../components/totopbutton';

const OurTeam = () => {
    return (
        <div className="w-full h-auto bg-black pb-[40lvh]">
            <div className="w-full h-auto px-5 md:pt-32 pb-12 mx-auto container pt-20">
                 <div className="flex w-full h-auto justify-end pr-10">
                    <div className=" fixed bottom-6  pb-10 "  >
                        <ToTopButton />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <h1 className="text-2xl font-semibold text-center pb-7 md:text-5xl md:pb-10 font-poppins text-white">
                            Meet Our Team
                        </h1>
                    </div>

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2.6}

                        className="w-full px-4 md:mt-0 mt-20 pl-0"
                        breakpoints={{
                            0: {
                                slidesPerView: 1,

                            },
                            340: {
                                slidesPerView: 1.1,
                            },
                            414: {
                                slidesPerView: 1.4,
                            },
                            550: {
                                slidesPerView: 1.8,
                            },
                            700: {
                                slidesPerView: 2.2,
                            },
                            768: {
                                slidesPerView: 1.2,

                            },
                            920: {
                                slidesPerView: 1.2,
                            },
                            1024: {
                                slidesPerView: 1.6,

                            },
                            1440: {
                                slidesPerView: 2,

                            },
                            1462: {
                                slidesPerView: 2.4,
                            }

                        }}
                    >
                        <SwiperSlide>
                            <Card
                                image="/women.jpg"
                                title="Nathaly Smith"
                                description="Front-end and back-end developer focused on React and Next.js, creating seamless user experiences and clean code."
                                companyName='Mind Space'

                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                image="/man.jpg"
                                title="Roger Adams"
                                description="Front-end and back-end developer focused on React and Next.js, creating seamless user experiences and clean code."
                                companyName='Mind Space'

                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Card
                                image="/women.jpg"
                                title="Christelle Johnson"
                                description="Front-end and back-end developer focused on React and Next.js, creating seamless user experiences and clean code."
                                companyName='Mind Space'

                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card
                                image="/women.jpg"
                                title="Lynda Williams"
                                description="Front-end and back-end developer focused on React and Next.js, creating seamless user experiences and clean code."
                                companyName='Mind Space'

                            />
                        </SwiperSlide>


                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default OurTeam;
