'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from './Card';
import ToTopButton from '../components/totopbutton';
import Section from './Section';

const OurTeam = () => {
    return (
        <div className="w-full h-auto bg-black pb-[60lvh]">
            <div className="container w-full h-auto px-5 pt-20 pb-12 mx-auto md:pt-32">
                 <div className="flex justify-end w-full h-auto pr-10">
                    <div className="fixed pb-10 bottom-6"  >
                        <ToTopButton />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <h1 className="text-2xl font-semibold text-center text-white pb-7 md:text-5xl md:pb-10 font-poppins">
                            Meet Our Team
                        </h1>
                    </div>

                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2.6}

                        className="w-full px-4 pl-0 mt-20 md:mt-0"
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
                <Section />
            </div>
        </div>
    );
};

export default OurTeam;
