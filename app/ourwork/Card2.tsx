import React from "react";

interface Card2Props {
    image: string;
    description: string;
    title: string;

}

const Card2: React.FC<Card2Props> = ({ image, description, title }) => {
    return (
        <div className="flex flex-row gap-3 p-5 shadow-md cursor-pointer h-44 rounded-2xl">
            <div className="w-10">
                <img src={image} className="object-cover " />
            </div>
            <div className="w-full pr-3">
                <p className="md:text-3xl text-white text-2xl">
                    {title}.{" "}
                    <span className="md:text-2xl text-gray-500 text-xl">{description}</span>
                </p>
            </div>

        </div>
    );
};

export default Card2;
