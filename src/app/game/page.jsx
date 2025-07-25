'use client';

import { useState, useEffect } from 'react';
import Confetti from '@/components/Confetti';
import FloatingHearts from '@/components/FloatingHearts';
import Image from 'next/image';

export default function GamePage() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const questions = [
    {
      id: 1,
      question: "Бидний хамтдаа зураг авахуулсан хамгийн дуртай газар?",
      options: ["Хүрхрээ усны дэргэд", "Оргил оргилын оройд", "Нуурын эрэг дээр", "Цэцэрлэгт хүрээлэнд"],
      correctAnswer: 2,
      image: "/memories/lake.jpg"
    },
    {
      id: 2,
      question: "Бидний хамгийн их инээд хөөртэй дурсамж?",
      options: ["Хамтдаа кино үзсэн", "Аялалд явсан", "Караоке дуулсан", "Хоол хийж үзсэн"],
      correctAnswer: 1,
      image: "/memories/trip.jpg"
    },
    {
      id: 3,
      question: "Бидний хамтдаа хийх дуртай зүйл?",
      options: ["Хөгжим сонсох", "Түүх ярилцах", "Гадуур зугаалах", "Дээрх бүгд"],
      correctAnswer: 3,
      image: "/memories/fun.jpg"
    },
    {
      id: 4,
      question: "Бидний ирээдүйн мөрөөдөл?",
      options: ["Хамтдаа аялах", "Гэр бүл болох", "Амжилтанд хүрэх", "Бүгд"],
      correctAnswer: 3,
      image: "/memories/dream.jpg"
    },
    {
      id: 5,
      question: "Бидний хайрын түүхийг нэг үгээр?",
      options: ["Гайхамшигтай", "Үзэсгэлэнтэй", "Мөнхийн", "Төгс"],
      correctAnswer: 2,
      image: "/memories/love.jpg"
    }
  ];

  const handleAnswer = (answerIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setGameCompleted(true);
      if (score >= 4) {
        setShowConfetti(true);
      }
    }
  };

  const resetGame = () => {
    setGameStarted(false);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setGameCompleted(false);
    setShowConfetti(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 flex items-center justify-center">
        <div className="animate-pulse text-6xl">💝</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 overflow-hidden">
      {showConfetti && <Confetti />}
      <FloatingHearts />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 max-w-4xl mx-auto">
        {!gameStarted ? (
          // Start Screen
          <div className="text-center animate-fade-in transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-bounce">
              Бидний Хайрын Аялал
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-12 rounded-full animate-pulse"></div>
            
            <div className="bg-white/80 backdrop-blur-sm p-12 shadow-2xl max-w-lg mx-auto rounded-2xl border border-pink-100 hover:shadow-pink-200 transition-all duration-500">
              <div className="mb-8 relative">
                <span className="text-6xl animate-bounce inline-block transform hover:rotate-12 transition-transform duration-300 cursor-pointer">💝</span>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-pink-100 rounded-full animate-ping"></div>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Хайрын түүхээ эргэн санаж, 
                <br />
                хамтдаа өнгөрүүлсэн мөчүүдээ дурсацгаая
              </p>
              <button
                onClick={() => setGameStarted(true)}
                className="group px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold tracking-wider hover:from-pink-600 hover:to-purple-600 transition-all duration-300 rounded-full transform hover:scale-105 hover:shadow-lg relative overflow-hidden"
              >
                <span className="relative z-10">АЯЛАЛАА ЭХЛҮҮЛЭХ</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        ) : !gameCompleted ? (
          // Quiz
          <div className="w-full max-w-2xl animate-slide-up transform hover:scale-102 transition-transform duration-500">
            {/* Progress */}
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between text-lg text-gray-700 mb-2">
                <span className="font-bold">Дурсамж {currentQuestion + 1}/{questions.length}</span>
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full animate-pulse">
                  {score} ❤️
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 transition-all duration-500 rounded-full animate-pulse"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 shadow-2xl rounded-2xl border border-pink-100 hover:shadow-pink-200 transition-all duration-500">
              {questions[currentQuestion].image && (
                <div className="mb-8 rounded-xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-48 bg-gradient-to-r from-pink-100 via-purple-100 to-pink-100 rounded-xl flex items-center justify-center relative">
                    <span className="text-6xl animate-pulse">🌟</span>
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-2xl text-pink-600 font-bold">Дурсамж</span>
                    </div>
                  </div>
                </div>
              )}
              
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-8 text-center">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`group w-full p-4 text-left rounded-xl transition-all duration-300 transform hover:scale-102 relative overflow-hidden
                      ${
                        showResult
                          ? index === questions[currentQuestion].correctAnswer
                            ? 'bg-gradient-to-r from-green-500 to-green-400 text-white'
                            : index === selectedAnswer
                            ? 'bg-gradient-to-r from-red-500 to-red-400 text-white'
                            : 'bg-white/50 border border-gray-200'
                          : 'bg-white/50 border border-gray-200 hover:border-pink-400 hover:shadow-lg'
                      }`}
                  >
                    <span className="text-lg relative z-10">{option}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </button>
                ))}
              </div>

              {showResult && (
                <button
                  onClick={nextQuestion}
                  className="group mt-8 w-full px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold tracking-wider hover:from-pink-600 hover:to-purple-600 transition-all duration-300 rounded-full transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">
                    {currentQuestion < questions.length - 1 ? 'ДАРААГИЙН ДУРСАМЖ' : 'ДУУСГАХ'}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              )}
            </div>
          </div>
        ) : (
          // Result Screen
          <div className="text-center animate-fade-in transform hover:scale-105 transition-transform duration-500">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Бидний Хайрын Түүх
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-12 rounded-full animate-pulse"></div>
            
            <div className="bg-white/90 backdrop-blur-sm p-12 shadow-2xl max-w-lg mx-auto rounded-2xl border border-pink-100 hover:shadow-pink-200 transition-all duration-500">
              <div className="text-8xl mb-6 animate-bounce transform hover:rotate-12 transition-transform duration-300 cursor-pointer">
                {score >= 4 ? '💝' : score >= 2 ? '💖' : '💗'}
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {score}/{questions.length} Дурсамж
              </h2>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                {score === questions.length 
                  ? "Бидний хайр үнэхээр гайхамшигтай! Хамтдаа бүтээсэн дурсамж бүр маань үнэ цэнэтэй."
                  : score >= 4 
                  ? "Бидний хайр өдөр бүр улам бүр гүнзгийрч байна!"
                  : score >= 2
                  ? "Хамтдаа илүү олон дурсамж бүтээе!"
                  : "Бидний хайрын түүх одоо эхэлж байна!"
                }
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={resetGame}
                  className="group w-full px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold tracking-wider hover:from-pink-600 hover:to-purple-600 transition-all duration-300 rounded-full transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">ДАХИН ТОГЛОХ</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                <button
                  onClick={() => window.location.href = '/'}
                  className="group w-full px-12 py-4 bg-white text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-pink-500 font-bold tracking-wider hover:bg-pink-50 transition-all duration-300 rounded-full transform hover:scale-105 relative overflow-hidden"
                >
                  <span className="relative z-10">НҮҮР ХУУДАС</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
            
            <p className="mt-8 text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold animate-pulse">
              Төрсөн өдрийн мэнд хайрт минь! 💝
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 