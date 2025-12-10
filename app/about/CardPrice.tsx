import React from "react";

interface CardPriceProps {
    title: string;
    price: string;
    highlighted: boolean;
    onClick: () => void;
}

const CardPrice: React.FC<CardPriceProps> = ({ title, price, highlighted, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`flex flex-col p-8 text-center rounded-2xl transition-transform hover:scale-105 cursor-pointer bg-blue-50
        ${highlighted ? "border-2 border-cyan-500 shadow-xl bg-blue-50" : "border border-gray-300"}
      `}
        >
            <h3 className="mb-2 text-xl font-semibold">{title}</h3>

            <p className="text-4xl font-bold">
                ${price}
                <span className="text-lg">/month</span>
            </p>

            <button
                className={`py-2 mt-6 rounded-lg transition 
          ${highlighted
                        ? "  bg-blue-700 text-white hover:bg-cyan-500 cursor-pointer"
                        : "border border-gray-300 hover:bg-gray-100 "
                    }`}
            >
                Buy plan
            </button>
        </div>
    );
};

export default CardPrice;
