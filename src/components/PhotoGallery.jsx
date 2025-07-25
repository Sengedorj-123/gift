'use client';

import { useState } from 'react';

export default function PhotoGallery({ memories, onPhotoClick }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {memories.map((memory) => (
        <div
          key={memory.id}
          className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
          onMouseEnter={() => setHoveredId(memory.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => onPhotoClick(memory)}
        >
          {/* Photo Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
              hoveredId === memory.id ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-1">{memory.title}</h3>
                <p className="text-sm opacity-90">{memory.date}</p>
              </div>
            </div>

            {/* Heart Icon */}
            <div className={`absolute top-4 right-4 transition-all duration-300 ${
              hoveredId === memory.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }`}>
              <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                <span className="text-2xl">💕</span>
              </div>
            </div>
          </div>

          {/* Title (Mobile) */}
          <div className="md:hidden mt-3 text-center">
            <h3 className="font-semibold text-gray-800">{memory.title}</h3>
            <p className="text-sm text-gray-500">{memory.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 