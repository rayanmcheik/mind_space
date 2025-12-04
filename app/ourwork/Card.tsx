'use client';
import React from "react";

interface CardProps {
  title: string;
  description: string;
  img: string;
}

const Card: React.FC<CardProps> = ({ title, description, img }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition cursor-pointer">
      <img src={img} alt={title} className="w-full h-56 object-cover" />
      <div className="p-5">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default Card;
