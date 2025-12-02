'use client';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AnimatedCircleAbout from "./AnimatedCircleAbout";

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
                <div className="pl-28">
                    <AnimatedCircleAbout />
                </div>

                <div className="w-[1000px] h-[400px] pl-24">
                    <Swiper
                        effect=""
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        coverflowEffect={{ rotate: 50, stretch: 0, depth: 200, modifier: 1, slideShadows: true }}
                        modules={[EffectCoverflow, Autoplay]}
                        className="md:w-[1000px] md:-mt-[540px] h-[400px]"
                    >

                        {Array.isArray(projects) && projects.map((project) => (
                            <SwiperSlide key={project.id} className="flex items-center justify-center">
                                <img
                                    src={project.image}
                                    alt={project.title || "Project Image"}
                                    className="object-cover w-[1000px] h-[400px]"
                                />

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>
                <div className="container absolute z-50 w-full h-auto px-72 -mt-92 ">
                    <p className="font-bold text-center text-[70px] font-poppins text-white">
                        from target-shattering social
                        campaigns, to pulling off
                        Guinness World Record
                        experiences.
                        <span className="text-red-500">
                            {" "}from on-ground activations, to state-of-the-art installations.
                        </span>
                    </p>
                </div>
                <div className="pt-52 ">

                </div>
            </div>
        </div>
    );
}
