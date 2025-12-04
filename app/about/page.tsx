'use client';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ToTopButton from "../components/totopbutton";

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
        <div className="w-full h-full bg-black pb-[20%]">
            <ToTopButton></ToTopButton>
            <div className="container w-full h-full px-0 pt-20 pb-12 mx-auto md:pt-20 md:pb-52">
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
            </div>
        </div>
    );
}
