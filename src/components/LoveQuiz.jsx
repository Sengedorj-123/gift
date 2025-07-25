'use client';

import { useState } from 'react';

export default function LoveQuiz({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (answerIndex) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsAnswered(false);
    } else {
      onComplete(score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0));
    }
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-2xl">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Асуулт {currentQuestion + 1}/{questions.length}</span>
          <span>{score} оноо</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          {question.question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
              className={`w-full p-4 rounded-2xl text-left transition-all duration-300 transform hover:scale-105 ${
                isAnswered
                  ? index === question.correctAnswer
                    ? 'bg-green-500 text-white shadow-lg'
                    : index === selectedAnswer
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-500'
                  : 'bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{option}</span>
                {isAnswered && index === question.correctAnswer && (
                  <span className="text-2xl">✓</span>
                )}
                {isAnswered && index === selectedAnswer && index !== question.correctAnswer && (
                  <span className="text-2xl">✗</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Result Message */}
        {showResult && (
          <div className="mt-6 p-4 bg-pink-50 rounded-2xl text-center animate-fade-in">
            <p className="text-pink-600 font-medium">
              {selectedAnswer === question.correctAnswer ? '🎉 Зөв!' : '💔 Буруу!'} {question.message}
            </p>
          </div>
        )}

        {/* Next Button */}
        {isAnswered && (
          <button
            onClick={nextQuestion}
            className="mt-8 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-6 rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg animate-fade-in"
          >
            {currentQuestion < questions.length - 1 ? 'Дараагийн асуулт →' : 'Дуусгах 🎊'}
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
} 