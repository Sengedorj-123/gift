'use client';

import { useState, useEffect } from 'react';
import GiftBox from '@/components/GiftBox';
import Confetti from '@/components/Confetti';
import FloatingHearts from '@/components/FloatingHearts';

export default function GiftPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleOpenGift = () => {
    setIsOpened(true);
    setTimeout(() => setShowConfetti(true), 500);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex items-center justify-center">
        <div className="animate-pulse text-6xl">🎁</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 overflow-hidden">
      {showConfetti && <Confetti />}
      <FloatingHearts />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {!isOpened ? (
          // Gift Box Section
          <div className="text-center animate-fade-in transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 tracking-wide">
              Гүнж танд зориулсан бэлэг
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-12 rounded-full animate-pulse"></div>
            
            <div className="transform hover:scale-105 transition-transform duration-300">
              <GiftBox onOpen={handleOpenGift} />
            </div>
            
            <p className="mt-8 text-gray-600 font-light animate-bounce">
              Бэлгээ нээхийн тулд дарна уу
            </p>
          </div>
        ) : (
          // Gift Content
          <div className="text-center max-w-2xl mx-auto animate-fade-in transform hover:scale-105 transition-transform duration-500">
            
            
            <div className="bg-white/90 backdrop-blur-sm border border-pink-100 rounded-2xl shadow-2xl p-12 mb-8 hover:shadow-pink-200 transition-all duration-500">
              <div className="text-6xl mb-8 animate-bounce transform hover:rotate-12 transition-transform duration-300 cursor-pointer">🎂</div>
              
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Хайрт минь
              </h2>
              
              <p className="text-gray-600 leading-relaxed mb-8 font-light">
              Маргааш нэг л онцгой өдөр шиг санагдаад байна...
Чамайг инээмсэглэж, баяр хөөрөөр гэрэлтэхийг харах нь миний хамгийн сайхан бэлэг.
Чамд сэтгэлээсээ хамгийн сайн сайхныг хүсье…
Харин яг 00:00 цагт —
гэрийн чинь гадаа чимээгүйхэн нэгэн хүн чамайг хүлээж байх болно...
Бүх зүйл яг тэр мөчөөс эхэлнэ.
Бэлэг чамайг хүлээгээд, зүрх догдолж байна... ❤️
              </p>
              
              <div className="flex justify-center space-x-12 mb-8">
                <div className="text-center group">
                  <div className="text-3xl mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transform transition-transform duration-300">♡</div>
                  <p className="text-sm bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">Аз жаргал</p>
                </div>
                <div className="text-center group">
                  <div className="text-3xl mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transform transition-transform duration-300">♡</div>
                  <p className="text-sm bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">Хайр</p>
                </div>
                <div className="text-center group">
                  <div className="text-3xl mb-2 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transform transition-transform duration-300">♡</div>
                  <p className="text-sm bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold">Амжилт</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => window.location.href = '/'}
                className="group w-full md:w-auto px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold tracking-wider hover:from-pink-600 hover:to-purple-600 transition-all duration-300 rounded-full transform hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10">БУЦАХ</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 