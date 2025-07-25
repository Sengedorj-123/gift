'use client';

export default function LoveNote({ title, message, emoji }) {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 transform hover:scale-105 transition-all duration-300">
      {/* Emoji */}
      <div className="text-center mb-6">
        <span className="text-6xl md:text-7xl animate-bounce inline-block">
          {emoji}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-pink-600 text-center mb-6">
        {title}
      </h2>

      {/* Message */}
      <div className="relative">
        <div className="absolute -top-4 -left-4 text-4xl text-pink-300 opacity-50">"</div>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center px-8">
          {message}
        </p>
        <div className="absolute -bottom-4 -right-4 text-4xl text-pink-300 opacity-50 rotate-180">"</div>
      </div>

      {/* Decorative hearts */}
      <div className="flex justify-center mt-8 space-x-2">
        <span className="text-pink-400 animate-pulse">💕</span>
        <span className="text-pink-500 animate-pulse animation-delay-200">💖</span>
        <span className="text-pink-400 animate-pulse animation-delay-400">💕</span>
      </div>

      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
} 