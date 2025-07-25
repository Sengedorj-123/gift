'use client';

import { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [...prev, {
        id: Date.now(),
        left: Math.random() * 100,
        animationDuration: 5 + Math.random() * 5,
        size: 20 + Math.random() * 30
      }]);
    }, 1000);

    // Clean up old hearts
    const cleanup = setInterval(() => {
      setHearts(prev => prev.filter(heart => Date.now() - heart.id < 10000));
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="absolute animate-float-up"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`
          }}
        >
          💕
        </div>
      ))}
      <style jsx>{`
        @keyframes float-up {
          to {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up linear forwards;
        }
      `}</style>
    </div>
  );
} 