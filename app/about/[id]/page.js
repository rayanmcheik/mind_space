'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
            setProject(dataToUse);
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
                <div className="flex flex-col items-center justify-center text-white text-lg gap-y-4">

                    <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>

                    {project.image && (
                        <img
                            src={project.image}
                            className="w-full mb-8 rounded-lg"
                            alt={project.title}
                        />
                    )}



                    {project.client && (
                        <p><span className="font-bold">Client:</span> {project.client}</p>
                    )}

                    {project.directors && (
                        <p><span className="font-bold">Directors:</span> {project.directors}</p>
                    )}

                    {project.cinematographer && (
                        <p><span className="font-bold">Cinematographer:</span> {project.cinematographer}</p>
                    )}

                    {project.colorist && (
                        <p><span className="font-bold">Colorist:</span> {project.colorist}</p>
                    )}

                    {project.agency && (
                        <p><span className="font-bold">Agency:</span> {project.agency}</p>
                    )}

                    {project.date && (
                        <p><span className="font-bold">Date:</span> {project.date}</p>
                    )}
                    {project.vimeo_id && (
                        <div className="w-full flex justify-center">
                            <iframe
                                src={`https://player.vimeo.com/video/${project.vimeo_id}`}
                                className="w-full h-[80vh] md:h-[50vh] rounded-lg "
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}

                    {project.description && (
                        <p>{project.description}</p>
                    )}

                    {project.text && (
                        <p>{project.text}</p>
                    )}
                </div>

            </div>

        </div>
    );
}
