'use client';
import React, { useState } from "react";

const OurClient = () => {
    const [popup, setOpenpop] = useState(false);

    return (
        <div className="w-full h-full bg-black pb-52">
            <div className="container w-full h-full px-0 mx-auto">
                <div className="relative w-full md:h-[80lvh] h-lvh">
                    <img
                        src="./ourteam.jpg"
                        alt="Our Team Banner"
                        className="object-cover w-full h-full"
                    />

                    <button
                        onClick={() => setOpenpop(true)}
                        className="absolute px-6 py-3 text-white transition -translate-x-1/2 rounded-lg shadow-lg cursor-pointer bottom-6 left-1/2 bg-cyan-500 hover:bg-red-500"
                    >
                        Learn More
                    </button>
                </div>

                {popup && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
                        onClick={() => setOpenpop(false)}
                    >
                        <div
                            className="bg-cyan-500 w-[90%] max-w-[400px] p-6 rounded-xl shadow-xl relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setOpenpop(false)}
                                className="absolute text-xl text-black cursor-pointer top-3 right-3 hover:text-red-500"
                            >
                                ×
                            </button>

                            <h2 className="mb-3 text-3xl font-bold">Welcome to Our Team</h2>
                            <p className="text-xl text-white">
                                Join our team and help us bring bold ideas to life.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OurClient;