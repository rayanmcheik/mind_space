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
            const projectIndex = arr.findIndex(
                (mov) => String(mov.id) === String(id)
            );
            setProject(dataToUse);
            setIndex(projectIndex);
        }

        load();
    }, [id]);

    if (!project) {
        return <div className='flex items-start justify-center w-full bg-black h-lvh'><h1 className='text-3xl font-bold text-white'>Loading...</h1></div>;
    }

    return (
        <div className="w-full h-full bg-black">
            <div className="container w-full h-full px-0 pt-20 pb-12 mx-auto md:pt-20 md:pb-52">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-4 text-3xl font-bold text-white">{project.title}</h1>
                    <p className="mb-6 text-neutral-600">
                        Project ID: {id} — Index: {index}
                    </p>
                    <img
                        src={project.image}
                        className="w-full max-w-3xl mb-8 rounded-lg"
                    />
                    <p className="text-xl text-white">{project.description || "No description available"}</p>
                </div>
            </div>
        </div>
    );
}
