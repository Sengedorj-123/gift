'use client';

import { useEffect, useState } from 'react';

export default function Confetti() {
  const [particles, setParticles] = useState([]);
  
  const colors = ['#FF69B4', '#FFD700', '#FF1493', '#9370DB', '#00CED1', '#FF6347', '#32CD32'];
  const shapes = ['square', 'circle'];
  
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 150; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: -20,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        animationDuration: Math.random() * 3 + 2,
        animationDelay: Math.random() * 2,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`absolute animate-fall ${particle.shape === 'circle' ? 'rounded-full' : ''}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            animationDuration: `${particle.animationDuration}s`,
            animationDelay: `${particle.animationDelay}s`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .animate-fall {
          animation: fall linear forwards;
        }
      `}</style>
    </div>
  );
} 