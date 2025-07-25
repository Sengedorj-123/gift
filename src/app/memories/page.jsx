'use client';

import { useState, useEffect } from 'react';
import FloatingHearts from '@/components/FloatingHearts';
import PhotoGallery from '@/components/PhotoGallery';

// Монгол хэлээр тайлбар: Энэ код нь "public" фолдер доторх зургуудыг memories-д ашиглахаар өөрчилсөн. Зургийн замыг шууд /memories/1.jpg гэх мэтээр зааж өгсөн.

export default function MemoriesPage() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 300);
    }, 1000);
  }, []);

  // public/memories/ доторх зургуудыг ашиглана
  const memories = [
    {
      id: 1,
      image: "/memories/1.jpg",
      title: "Анхны болзоо",
      date: "2025.01.25"
    },
    {
      id: 2,
      image: "/memories/2.jpg",
      title: "Анх удаа хамт хонож өнгөрүүлсэн өдөр",
      date: "2025.01.28"
    },
    {
      id: 3,
      image: "/memories/3.jpg",
      title: "Чиний минь тэмцээн",
      date: "2025.02.03"
    },
    {
      id: 4,
      image: "/memories/4.jpg",
      title: "Бид хоёрын анхны Валентин",
      date: "2025.02.14"
    },
    {
      id: 5,
      image: "/memories/5.jpg",
      title: "Миний хайртай зураг",
      date: "2025.05.07"
    },
  
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex items-center justify-center">
        <div className="animate-pulse text-6xl">📸</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 overflow-hidden">
      <FloatingHearts />
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 text-center">
            Дурсамжууд
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-12 rounded-full animate-pulse"></div>
          
          <p className="text-center text-gray-600 font-light mb-12 text-lg">
            Хамтдаа өнгөрүүлсэн мөч бүр үнэ цэнэтэй
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="relative group cursor-pointer overflow-hidden bg-gray-100 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
                onClick={() => setSelectedPhoto(memory)}
              >
                <div className="relative">
                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Mobile: Always show title */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-bold">{memory.title}</h3>
                  <p className="text-white/80 text-sm">{memory.date}</p>
                </div>
                
                {/* Desktop: Show on hover */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white text-lg font-bold mb-1">{memory.title}</h3>
                    <p className="text-white/80 text-sm">{memory.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
        <div className="flex justify-center mt-12">
          <a 
            href="/gift"
            className="px-8 py-3 bg-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-300"
          >
            Бэлэг нээх 🎁
          </a>
        </div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full transform hover:scale-105 transition-transform duration-500">
            <img 
              src={selectedPhoto.image} 
              alt={selectedPhoto.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-white/80 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text ">
                {selectedPhoto.title}
              </h3>
              <p className="text-white/60 text-sm mt-1">{selectedPhoto.date}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
} 