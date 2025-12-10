import React from "react";

export default function Section() {
    return (
        <section className="w-full py-20 mt-20 bg-white">
    
                <div className="flex flex-col w-1/2 px-10">
                    <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900">
                        We're always looking for awesome people to join us
                    </h2>
                    <p className="max-w-md mb-10 text-gray-600">
                        Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus.
                        Est non placerat nam arcu. Cras purus nibh cursus sit eu in id.
                    </p>
                </div>
                
                <div className="flex flex-row gap-10 px-10">
                <div className="w-3/5 h-[650px]">
                    <img
                        src="/office.webp"
                        className="object-cover w-full h-full rounded-2xl"
                    />
                </div>

                <div>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-3xl font-semibold text-gray-900">Full-time designer</h3>
                            <p className="max-w-sm text-xl text-gray-600">
                                Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias.
                            </p>
                            <p className="mt-1 text-xl font-semibold text-gray-900">$75,000 USD</p>
                            <p className="text-lg text-gray-500">San Francisco, CA</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold text-gray-900">Laravel developer</h3>
                            <p className="max-w-sm text-xl text-gray-600">
                                Enim architecto dolorem autem. Et voluptas consectetur magni sapiente.
                            </p>
                            <p className="mt-1 text-xl font-semibold text-gray-900">$250,000 USD</p>
                            <p className="text-lg text-gray-500">San Francisco, CA</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-semibold text-gray-900">React Native developer</h3>
                            <p className="max-w-sm text-xl text-gray-600">
                                Velit veniam omnis voluptas architecto eos molestiae voluptatem.
                            </p>
                            <p className="mt-1 text-xl font-semibold text-gray-900">$150,000 USD</p>
                            <p className="text-lg text-gray-500">San Francisco, CA</p>
                        </div>

                        <a href="#" className="block mt-4 text-2xl font-semibold text-indigo-600 hover:underline">
                            View all openings →
                        </a>
                    </div>
                </div>
                </div>

        </section>
    );
}