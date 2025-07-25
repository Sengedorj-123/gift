'use client';

import { useState } from 'react';

export default function LoveLetterCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className={`relative w-80 h-48 bg-pink-50 rounded-lg shadow-xl cursor-pointer transform transition-all duration-500 ${
          isOpen ? 'rotate-y-180' : 'hover:scale-105'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Front of envelope */}
        <div className={`absolute inset-0 ${isOpen ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
          <div className="relative h-full flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-200 to-red-200 rounded-lg"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-pink-300 to-red-300 rounded-t-lg transform origin-bottom rotate-x-0 transition-transform duration-500"></div>
            <div className="relative z-10 text-center">
              <p className="text-2xl font-cursive text-pink-700 mb-2">Хайртай минь</p>
              <p className="text-sm text-pink-600">Намайг дар 💌</p>
            </div>
          </div>
        </div>

        {/* Back - Letter content */}
        <div className={`absolute inset-0 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 transform rotate-y-180`}>
          <div className="h-full bg-white rounded-lg shadow-inner p-6 flex items-center justify-center">
            <div className="text-center">
              <p className="text-pink-600 font-cursive text-lg leading-relaxed">
                Чи миний амьдралын<br />
                хамгийн гоё бэлэг.<br />
                Чамтай хамт байх<br />
                өдөр бүр баяр баясгалан.<br />
                <span className="text-2xl">💕</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .font-cursive {
          font-family: 'Brush Script MT', cursive;
        }
      `}</style>
    </div>
  );
} 