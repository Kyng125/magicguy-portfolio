"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Landing() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleImageClick = () => {
    router.push("/home");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black flex flex-col justify-between items-center p-8 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <div 
          className={`relative group transition-all duration-700 cursor-pointer ${isLoaded ? "opacity-100" : "opacity-0 translate-y-10"}`}
          onClick={handleImageClick}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Glowing orb effect */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-vividMagenta/30 to-electricBlue/30 blur-xl transition-all duration-500 ${isHovering ? "opacity-100 scale-110" : "opacity-0 scale-95"}`}></div>
          
          {/* Profile image with hover effect */}
          <div className="relative z-10">
            <Image
              src="/LuLu1.jpg"
              alt="Lulu"
              width={300}
              height={300}
              priority
              className={`rounded-full  transition-all duration-500 ${isHovering ? "scale-105 border-electricBlue/50 shadow-2xl shadow-vividMagenta/30" : "scale-100"}`}
            />
          </div>
          
          {/* Animated title */}
          <h1 className={`mt-8 text-5xl md:text-7xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-electricBlue to-vividMagenta transition-all duration-500 ${isHovering ? "tracking-wider" : "tracking-normal"}`}>
            Enter the Magic
          </h1>
          
          {/* Subtle click prompt */}
          <p className="mt-4 text-white/70 text-center transition-all duration-300">
            {isHovering ? "Click to continue →" : "Welcome to my world"}
          </p>
        </div>
      </div>

      {/* Animated arrow indicator */}
      <div 
        className="animate-bounce cursor-pointer mb-8 group"
        onClick={handleImageClick}
      >
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 256 256"
            className="text-electricBlue transition-all duration-300 group-hover:text-vividMagenta"
            stroke="currentColor"
            strokeWidth="12"
          >
            <path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path>
          </svg>
          <span className="text-white/80 font-medium text-sm mt-1 transition-all duration-300 group-hover:text-white">
            Click to enter
          </span>
        </div>
      </div>

      {/* Subtle footer */}
      <footer className="text-white/30 text-xs mb-4 transition-all duration-500 hover:text-white/60">
        © {new Date().getFullYear()} Lulu Draws Stuff
      </footer>
    </div>
  );
}