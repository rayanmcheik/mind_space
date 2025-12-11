'use client';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ToTopButton from "../components/totopbutton";
import Pricing from "./Pricing";

interface Project {
    id: number;
    image: string;
    title?: string;
}

export default function AboutPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        axios.get("https://hanzo.dxpshift.com/api/projects")
            .then((res) => {
                setProjects(res.data.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="w-full h-full bg-black pb-[50lvh]">

            <div className="container w-full h-full px-0 pt-20 pb-12 mx-auto md:pt-20 md:pb-52">
                <div className="flex justify-end w-full h-auto pr-10">
                    <div className="fixed pb-10 bottom-6"  >
                        <ToTopButton />
                    </div>
                </div>
                <div className="w-full h-[400px]">
                    <Swiper
                        slidesPerView={3}
                        breakpoints={{

                            0: {
                                slidesPerView: 1,

                            },

                            620: {
                                slidesPerView: 1,
                            },
                            760: {
                                slidesPerView: 3,
                            },
                        }}
                        spaceBetween={20}
                        grabCursor={true}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        modules={[Autoplay, Navigation]}
                        className="md:w-full h-[400px]"
                    >
                        {Array.isArray(projects) &&
                            projects.map((project) => (
                                <SwiperSlide
                                    key={project.id}
                                    className="relative flex items-center justify-center group"
                                >
                                    <a href={`/about/${project.id}`} className="absolute inset-0 z-10">
                                        <span className="sr-only">Go to {project.title}</span>
                                    </a>
                                    <img
                                        src={project.image}
                                        alt={project.title || "Project Image"}
                                        className="object-cover w-full h-[400px] rounded-lg"
                                    />
                                    <div className="absolute inset-0 z-0 flex items-center justify-center rounded-lg bg-black/40">
                                        <h2 className="px-4 text-2xl font-bold text-center text-white">
                                            {project.title}
                                        </h2>
                                    </div>
                                    <a
                                        href={`/about/${project.id}`}
                                        className="absolute z-50 px-4 py-2 text-xl font-semibold text-white underline transition rounded-lg bottom-2 right-2 group-hover:bg-red-500"
                                    >
                                        See More
                                    </a>
                                </SwiperSlide>
                            ))}
                        <div className="swiper-button-prev text-red-500!"></div>
                        <div className="swiper-button-next text-red-500!"></div>
                    </Swiper>
                </div>
                <Pricing />
                <div className="flex flex-col items-center w-full gap-8 pt-20 md:flex-row md:items-start">
                    <div className="md:w-1/2 w-full items-center justify-center flex flex-col md:items-start md:justify-start px-3">
                        <h2 className="pt-10 md:pb-16 mb-4 md:text-5xl font-bold text-white text-3xl pb-8">Big Data Entrance</h2>
                        <p className="md:text-2xl text-cyan-500 text-xl  ">
                            Explore the power of big data with our cutting-edge tools and analytics.
                            Gain insights, optimize decisions, and drive growth with ease.
                        </p>
                        <div className="flex flex-row gap-3">
                        <button
                            className="px-6 py-3 mt-8 text-white transition rounded-lg shadow-lg cursor-pointer bg-cyan-500 hover:bg-red-500"
                        >
                            Get started
                        </button>
                        <button
                            className="px-6 py-3 mt-8 text-white transition border-2 rounded-lg shadow-lg cursor-pointer border-amber-50 hover:bg-red-500"
                        >
                            Learn More
                        </button>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-full">
                        <img
                            src="/work1.jpg"
                            alt="Big Data Illustration"
                            className="object-cover w-full h-[400px] rounded-lg shadow-lg md:h-[600px] px-3 md:px-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
