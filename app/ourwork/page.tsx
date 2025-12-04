'use client';
import React, { useState } from "react";
import Card from "./Card"; // Import the card component


const categories = ["All Categories", "Tech", "News", "Business", "Lifestyle"];

const cardsData = [
  {
    id: 1,
    category: "Tech",
    title: "Tech Project",
    description: "A modern tech solution using advanced coding.",
    img: "./tech.avif",
  },
  {
    id: 2,
    category: "News",
    title: "Breaking News",
    description: "Latest updates from around the world.",
    img: "./news.jpg",
  },
  {
    id: 3,
    category: "Business",
    title: "Business Strategy",
    description: "Insights into modern business practices.",
    img: "./business-tech.jpg",
  },
  {
    id: 4,
    category: "Lifestyle",
    title: "Healthy Living",
    description: "Tips and tricks for a balanced lifestyle.",
    img: "./healthy.jpg",
  },
  {
    id: 5,
    category: "Tech",
    title: "AI System",
    description: "Next-generation artificial intelligence system.",
    img: "./tech2.jpeg",
  },
];
const OurWork = () => {
  const [selectedCat, setSelectedCat] = useState("All Categories");

  const filteredCards =
    selectedCat === "All Categories"
      ? cardsData
      : cardsData.filter((card) => card.category === selectedCat);

  return (
        <div className="w-full h-full bg-black pb-52">
            <div className="container w-full h-full px-0 mx-auto">
      <h1 className="text-center text-4xl font-bold mb-6">Categories</h1>

      <div className="w-full flex flex-wrap justify-center gap-10 text-xl mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`relative pb-2 transition text-white cursor-pointer ${
              selectedCat === cat ? "font-bold" : "opacity-70"
            }`}
          >
            {cat}
            {selectedCat === cat && (
              <span className="absolute left-0 bottom-0 w-full h-[3px] bg-cyan-500 rounded"></span>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] mx-auto">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            img={card.img}
          />
        ))}
      </div>
    </div>
        </div>
  );
};

export default OurWork;
