'use client';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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


        <div className="w-full h-full bg-black">
            <div className="container w-full h-full px-0 pt-20 pb-12 mx-auto md:pt-20 md:pb-52">


                <div className="w-full h-[400px] ">
                    <Swiper
                        slidesPerView={3}
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
                                    className="relative flex items-center justify-center"
                                >
                                    <img
                                        src={project.image}
                                        alt={project.title || "Project Image"}
                                        className="object-cover w-full h-[400px] rounded-lg"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
                                        <h2 className="px-4 text-2xl font-bold text-center text-white">
                                            {project.title}
                                        </h2>
                                    </div>
                                    <a
                                        href={`/about/${project.id}`}
                                        className="absolute px-4 py-2 text-xl font-semibold text-white transition rounded-lg bottom-2 right-2 "
                                    >
                                        See More
                                    </a>
                                </SwiperSlide>

                            ))}
                        <div className="w-10 h-10 text-red-500! swiper-button-prev"></div>
                        <div className="w-10 h-10 text-red-500! swiper-button-next"></div>
                    </Swiper>


                </div>


                <div className="pt-52 ">

                </div>
            </div>
        </div>
    );
}
