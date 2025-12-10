import React from "react";

export default function Section() {
    return (
        <section className="w-full py-20 pt-20 bg-black">
            <div className="px-6 mx-auto text-center">
                <h1 className="mb-4 text-4xl font-bold leading-tight text-center text-white">
                    We approach work as a place to make the world better
                </h1>
                <div className="flex items-center justify-center">
                    <p className="max-w-2xl mb-16 text-center text-white">
                        Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus.
                        Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.
                    </p>
                </div>
                <div className="grid items-end grid-cols-1 gap-8 md:grid-cols-3">

                    <div className="flex flex-col justify-end h-48 p-8 bg-gray-100 shadow-sm rounded-2xl">
                        <h2 className="mb-2 text-3xl font-semibold text-gray-900">250k</h2>
                        <p className="mb-2 font-medium text-gray-700">Users on the platform</p>
                        <p className="text-sm text-gray-500">
                            Vel labore deleniti veniam consequuntur sunt nobis.
                        </p>
                    </div>

                    <div className="flex flex-col justify-end p-8 text-white bg-gray-900 shadow-sm rounded-2xl h-80">
                        <h2 className="mb-2 text-3xl font-semibold">$8.9 billion</h2>
                        <p className="mb-2 font-medium">
                            We're proud that our customers have made over $8 billion in total revenue.
                        </p>
                        <p className="text-sm text-gray-300">
                            Eu duis porta aliquam ornare. Elementum eget magna egestas.
                        </p>
                    </div>

                    <div className="flex flex-col justify-end h-64 p-8 text-white bg-indigo-600 shadow-sm rounded-2xl">
                        <h2 className="mb-2 text-3xl font-semibold">401,093</h2>
                        <p className="mb-2 font-medium">Transactions this year</p>
                        <p className="text-sm text-indigo-200">
                            Eu duis porta aliquam ornare. Elementum eget magna egestas.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}