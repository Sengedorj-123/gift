'use client';

import { useAudio } from '@/context/AudioContext';
import { usePathname } from 'next/navigation';

export default function BackgroundMusic() {
  const { isPlaying, showInitialPlay, togglePlay, isInitialized } = useAudio();
  const pathname = usePathname();

  // Only show on home page
  if (pathname !== '/') return null;

  // Don't render until audio is initialized
  if (!isInitialized) return null;

  return (
    <>
      {/* Large initial play button */}
      {showInitialPlay && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <button
            onClick={togglePlay}
            className="bg-white/90 backdrop-blur-sm p-8 rounded-full shadow-2xl hover:shadow-pink-200 transition-all duration-300 group animate-pulse"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-pink-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 whitespace-nowrap">
              <span className="text-white font-bold text-lg bg-pink-500/80 px-4 py-2 rounded-full">
                Хөгжим тоглуулах
              </span>
            </div>
          </button>
        </div>
      )}

      {/* Small control button */}
      {!showInitialPlay && (
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={togglePlay}
            className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-pink-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
        </div>
      )}
    </>
  );
}