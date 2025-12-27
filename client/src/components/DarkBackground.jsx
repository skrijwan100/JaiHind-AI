import { useState, useEffect } from 'react';
import Chatbot from './Chatbot';

export default function DarkBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"></div>
      
      {/* Animated gradient orb that follows cursor */}
      <div 
        className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 blur-3xl"
        style={{
          left: `${mousePosition.x - 128}px`,
          top: `${mousePosition.y - 128}px`,
          transition: 'all 0.3s ease-out'
        }}
      ></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>
      
      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div 
          key={i} 
          className="absolute w-2 h-2 rounded-full bg-blue-400 opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        ></div>
      ))}
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="text-white text-4xl font-bold text-center">
          {/* <Chatbot/> */}
        </div>
      </div>
      
      {/* Add a CSS keyframe animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}