'use client';

import { useState, useEffect } from 'react';
import FloatingHearts from '@/components/FloatingHearts';

export default function MessagesPage() {
  const [currentNote, setCurrentNote] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowContent(true), 300);
    }, 1000);
  }, []);

  const loveNotes = [
    {
      id: 1,
      title: " Xайрт чамдаа...",
      message: "Энэ гайхамшигт өглөөний наран мэндлэх мөчид, би хамгийн түрүүнд чамайг л бодсон. Чиний инээмсэглэл, чиний нүд, чиний зөөлөн дуу хоолой... бүгд надад энэ дэлхий дээрх хамгийн үнэтэй бэлэг мэт. Өнөөдөр бол зүгээр ч нэг өдөр биш, харин ертөнцөд чамайг илгээсэн тэр онцгой мөч. Ийм үзэсгэлэнт, ухаалаг, халамжтай бүсгүйг төрүүлж өсгөсөн ээж аавд нь чин сэтгэлийн талархал илэрхийлмээр байна. Учир нь тэд л миний амьдралын гэрэл гэгээ болсон чамайг энэ ертөнцөд авчирсан юм. Чамтайгаа учирснаас хойш миний амьдрал утга учиртай болсон. Өдөр бүр чамайг бодож сэрдэг, орой бүр чамайг бодож унтдаг. Амьдралын урсгалд хааяа зовлон шаналал ирэх нь бий, гэхдээ тэр бүгдийг хамтдаа даваад гарах хүчийг чи надад өгдөг. Чи миний анхны хайр, миний сүүлчийн хүн байх болно. Чи л надад хүнийг чин зүрхнээсээ хайрлаж, хайрлуулах ямар гайхамшигтайг мэдрүүлсэн. Ирээдүйг чамтайгаа хамт төсөөлөх бүрт сэтгэл минь догдолж, зүрх минь доголон цохилдог. Чамтайгаа мөрөөдлөө хуваалцаж, болзоонд яваад, гараа атгалцан алхах тэр мөч бүхэн л миний хувьд амьдралын утга учир юм. Чи байхгүй бол энэ амьдрал нэг л уйтгартай, гүн утгагүй мэт санагддаг. Чи миний нар, миний сар, миний ертөнцийн төв. Тиймээс өнөө шөнө 00:00 цагт би чамтайгаа уулзана — бид хамтдаа чиний төрсөн өдрийг хамгийн гайхамшигтайгаар, хэзээ ч мартагдашгүй дурсамж болгон тэмдэглэнэ. Би чамайг хайрладаг. Өдөр бүр, цаг тутам, амьсгал бүрээрээ... Чамдаа зориулав — миний зүрхний эзэн болсон бүсгүйд."
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex items-center justify-center">
        <div className="animate-pulse text-6xl">💌</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-3 sm:p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className={`w-full transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4 md:mb-6 text-center px-2">
            Хайрын захидал
          </h1>
          <div className="w-20 sm:w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6 sm:mb-8 md:mb-12 rounded-full animate-pulse"></div>

          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl mx-auto transform hover:scale-105 transition-transform duration-500">
            {/* Dots Navigation */}
            <div className="flex justify-center space-x-1 sm:space-x-2 mb-4 sm:mb-6 md:mb-8">
              {loveNotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentNote(index)}
                  className={`h-1.5 sm:h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentNote 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 w-6 sm:w-7 md:w-8' 
                      : 'bg-gray-300 w-1.5 sm:w-2 md:w-2.5 hover:bg-pink-300'
                  }`}
                />
              ))}
            </div>

            {/* Note Display */}
            <div className="bg-white/90 backdrop-blur-sm p-6 sm:p-8 md:p-8 lg:p-10 xl:p-12 shadow-2xl rounded-xl sm:rounded-2xl border border-pink-100 hover:shadow-pink-200 transition-all duration-500 mx-2 sm:mx-4 md:mx-0">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-center px-2">
                {loveNotes[currentNote].title}
              </h2>
              
              <p className="text-gray-600 leading-relaxed text-center font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12">
                {loveNotes[currentNote].message}
              </p>
              
              <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 lg:mt-10">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse">♡</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col xs:flex-row justify-center items-stretch xs:items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 md:px-8 max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            <button
              onClick={() => window.location.href = '/gift'}
              className="group flex-1 xs:flex-none min-h-[48px] sm:min-h-[52px] md:min-h-[56px] px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold hover:scale-105 active:scale-95 transform transition-all duration-300 text-sm sm:text-base md:text-lg rounded-lg sm:rounded-xl border-2 border-pink-200 hover:border-pink-300 flex items-center justify-center"
            >
              ← БУЦАХ
            </button>
            <a
              href="/memories"
              className="group flex-1 xs:flex-none min-h-[48px] sm:min-h-[52px] md:min-h-[56px] px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold tracking-wider rounded-full transform hover:scale-105 active:scale-95 hover:from-pink-600 hover:to-purple-600 transition-all duration-300 relative overflow-hidden text-sm sm:text-base md:text-lg flex items-center justify-center"
            >
              <span className="relative z-10">ДУРСАМЖУУД →</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}