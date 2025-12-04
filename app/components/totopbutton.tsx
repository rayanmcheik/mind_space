'use client';

import React from 'react';

const ToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (

    <button
      onClick={scrollToTop}
      className="fixed flex items-center justify-center w-12 h-12 p-2 transition bg-white rounded-full shadow-lg cursor-pointer bottom-6 right-6 z-50"
    >
      <img src="./to-top.svg" alt="Back to top" className="w-6 h-6" />
    </button>

  );
};

export default ToTopButton;
