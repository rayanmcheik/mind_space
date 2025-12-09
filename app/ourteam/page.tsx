'use client';
import React, { useState } from "react";
import ToTopButton from "../components/totopbutton";

const OurTeam = () => {
    const [popup, setOpenpop] = useState(false);

    return (
        <div className="w-full h-full bg-black pb-52">
            <div className="container w-full h-full px-0 mx-auto">
                <div className="flex w-full h-auto justify-end pr-10">
                    <div className=" fixed bottom-6  pb-10 "  >
                        <ToTopButton />
                    </div>
                </div>
                <div className="relative w-full md:h-[80lvh] h-lvh">
                    <img
                        src="./ourteam.jpg"
                        alt="Our Team Banner"
                        className="w-full h-full object-cover"
                    />

                    <button
                        onClick={() => setOpenpop(true)}
                        className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-cyan-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-500 transition cursor-pointer"
                    >
                        Learn More
                    </button>
                </div>

                {popup && (
                    <div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                        onClick={() => setOpenpop(false)}
                    >
                        <div
                            className="bg-cyan-500 w-[90%] max-w-[400px] p-6 rounded-xl shadow-xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setOpenpop(false)}
                                className="absolute top-3 right-3 text-black hover:text-red-500 text-xl cursor-pointer"
                            >
                                ×
                            </button>

                            <h2 className="text-3xl font-bold mb-3">Welcome to Our Team</h2>
                            <p className="text-white text-xl">
                                Join our team and help us bring bold ideas to life.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurTeam;
