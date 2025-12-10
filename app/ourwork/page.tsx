'use client';
import React, { useState } from "react";
import Card from "./Card";
import ToTopButton from "../components/totopbutton";
import Section from "./section";

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

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

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We provide tech solutions, design, business strategies, and more.",
  },
  {
    question: "How long does a project take?",
    answer: "Most tech projects take between 1–4 weeks depending on size.",
  },
  {
    question: "Can I request custom features?",
    answer: "Yes, we deliver custom features tailored to your needs.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionProps) => {
  return (
    <div className="py-4 border-b border-gray-600 ">
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full text-xl text-left text-white cursor-pointer"
      >
        {question}
        <span className="text-cyan-400">{isOpen ? "-" : "+"}</span>
      </button>

      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 mt-2" : "max-h-0"
          }`}
      >
        <p className="text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const OurWork = () => {
  const [selectedCat, setSelectedCat] = useState("All Categories");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const filteredCards =
    selectedCat === "All Categories"
      ? cardsData
      : cardsData.filter((card) => card.category === selectedCat);

  return (
    <div className="w-full h-full bg-black pb-[40lvh]">
      <div className="container w-full h-full px-0 mx-auto">
        <div className="flex justify-end w-full h-auto pr-10">
          <div className="fixed pb-10 bottom-6">
            <ToTopButton />
          </div>
        </div>

        <h1 className="mb-6 text-4xl font-bold text-center text-white">Categories</h1>

        <div className="flex flex-wrap justify-center w-full pt-24 mb-10 text-xl text-white md:gap-10 md:pt-0 gap-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`relative pb-2 transition cursor-pointer ${selectedCat === cat ? "font-bold" : "opacity-70"
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

        <div className="w-[90%] mx-auto mt-20 text-white">
          <h2 className="mb-6 text-3xl font-bold text-center">FAQ</h2>

          <div className="p-6 bg-gray-900 shadow-lg rounded-2xl">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
        <Section />
      </div>
      
    </div>
  );
};

export default OurWork;
