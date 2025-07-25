'use client';

import { useState, useEffect } from 'react';
import Heart from '@/components/Heart';
import FloatingHearts from '@/components/FloatingHearts';

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 overflow-hidden">
      <FloatingHearts />
      
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <Heart className="w-24 h-24 mb-8 text-pink-500 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-6">
          Хайрт минь 💝
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
          Энэ бол таны төрсөн өдөрт зориулсан онцгой бэлэг. Та энд хайр, дурсамж, тоглоом, захидал гээд олон гайхалтай зүйлсийг олох болно.
        </p>

        <a 
          href="/messages"
          className="mb-12 px-8 py-3 bg-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-300"
        >
          Захидал үзэх 💌
        </a>

        
      </div>
    </div>
  );
}