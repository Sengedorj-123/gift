'use client';

import { useState } from 'react';

export default function GiftBox({ onOpen }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <div 
      className="relative cursor-pointer inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className={`relative transform transition-transform duration-300 ${isHovered && !isOpening ? 'scale-105' : ''}`}>
        {/* Minimalist Gift Box */}
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          {/* Box */}
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Ribbon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-1 bg-pink-400"></div>
            <div className="absolute w-1 h-full bg-pink-400"></div>
          </div>
          
          {/* Lid */}
          <div 
            className={`absolute -top-2 inset-x-0 h-4 bg-gray-900 transition-all duration-700 ${
              isOpening ? '-translate-y-20 opacity-0' : ''
            }`}
          ></div>
          
          {/* Bow */}
          <div 
            className={`absolute -top-6 left-1/2 transform -translate-x-1/2 transition-all duration-700 ${
              isOpening ? '-translate-y-20 opacity-0' : ''
            }`}
          >
            <div className="w-8 h-8 bg-pink-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 