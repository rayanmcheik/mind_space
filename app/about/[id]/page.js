'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ToTopButton from "../totopbutton";

async function getData() {
    const res = await fetch("https://hanzo.dxpshift.com/api/projects", {
        cache: "no-store"
    });
    return res.json();
}

export default function AboutDetails() {
    const params = useParams();
    const id = params.id;
    const [project, setProject] = useState(null);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        async function load() {
            const data = await getData();
            const arr = data.data;
            const dataToUse = arr.find((mov) => String(mov.id) === String(id));
            const projectIndex = arr.findIndex((mov) => String(mov.id) === String(id));
            setProject({ ...dataToUse, totalProjects: arr.length });
            setIndex(projectIndex);
        }
        load();
    }, [id]);

    if (!project) {
        return (
            <div className='flex items-start justify-center w-full bg-black h-lvh'>
                <h1 className='text-3xl font-bold text-white'>Loading...</h1>
            </div>
        );
    }

    return (
        <div className="w-full h-full bg-black">
            <div className="container w-full h-full px-0 pt-20 pb-12 mx-auto md:pt-20 md:pb-52">
                <div className="flex w-full h-auto justify-end pr-10">
                    <div className="fixed bottom-6 pb-10">
                        <ToTopButton />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center text-white text-lg gap-y-4">

                    <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>

                    {project.image && (
                        <img
                            src={project.image}
                            className="w-full mb-8 md:rounded-lg px-4 md:px-0 rounded-lg"
                            alt={project.title}
                        />
                    )}

                    {project.client && (
                        <p className="px-4 md:px-0"><span className="font-bold">Client:</span> {project.client}</p>
                    )}

                    {project.directors && (
                        <p className="px-4 md:px-0"><span className="font-bold">Directors:</span> {project.directors}</p>
                    )}

                    {project.agency && (
                        <p className="px-4 md:px-0"><span className="font-bold">Agency:</span> {project.agency}</p>
                    )}

                    {project.vimeo_id && (
                        <div className="w-full flex justify-start md:justify-center">
                            <iframe
                                src={`https://player.vimeo.com/video/${project.vimeo_id}`}
                                className="w-full h-[80vh] md:h-[50vh] rounded-lg px-4 md:px-0"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    {project.text && (
                        <p className="px-4 md:px-0 -mt-20 md:mt-0">{project.text}</p>
                    )}

                    <div className="flex items-end justify-end w-full px-4 md:px-0 mt-10 gap-3">
                        {index > 0 ? (
                            <a
                                href={`/about/${project.id - 1}`}
                                className="text-white  hover:text-gray-300"
                            >
                                Previous
                            </a>
                        ) : (
                            <span className="text-gray-500">Previous</span>
                        )}

                        <a
                            href=""
                            className="text-gray-500 font-semibold "
                        >
                           | Our Work |
                        </a>

                        {index < project.totalProjects - 1 ? (
                            <a
                                href={`/about/${project.id + 1}`}
                                className="text-white  hover:text-gray-300"
                            >
                                Next
                            </a>
                        ) : (
                            <span className="text-gray-500">Next</span>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
