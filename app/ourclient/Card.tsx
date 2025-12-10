import React from "react";

interface CardProps {
  image: string;
  name: string;
  comment: string;
  handle: string;
}

const Card: React.FC<CardProps> = ({ image, name, comment, handle }) => {
  return (
    <div className="flex flex-col gap-3 p-5 bg-white shadow-md cursor-pointer h-44 rounded-2xl">
      <p className="text-sm leading-relaxed text-black">{comment}</p>
      <div className="flex items-center gap-3">
        <img src={image} alt={name} className="object-cover w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-sm text-cyan-500">@{handle}</span>
        </div>
      </div>
      
    </div>
  );
};

export default Card;
