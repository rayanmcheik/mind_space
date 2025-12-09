import React from 'react';
import Link from 'next/link';

interface CardProps {
    image: string;
    title: string;
    companyName: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, companyName }) => {
    return (
        <Link href="/" className="block">
            <div className="flex flex-row items-start gap-4 md:gap-8 bg-white text-black rounded-3xl 
                px-4 md:px-8 py-4 md:py-8 w-[260px] md:w-[600px] transition-all duration-300">
                <div className='flex justify-center items-center w-auto h-full'>
                    <img
                        src={image}
                        alt={title}
                        className="rounded-full object-cover w-14 h-14 md:w-36 md:h-36 border-2 border-cyan-500"
                    />
                </div>
                <div className="flex flex-col flex-1">
                    <h2 className="text-xs md:text-2xl font-bold mb-1 pb-5">
                        {title}

                    </h2>

                    <p className="text-[10px] md:text-xl font-semibold text-cyan-500 mb-1 pb-5">
                        {companyName}
                    </p>

                    <p className="text-[10px] md:text-xl text-gray-600">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
