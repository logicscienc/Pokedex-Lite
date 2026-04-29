import React from "react";

export default function RocketLoader() {
  return (
    <div className="flex justify-center items-center h-[300px]">
      
      <div className="flex flex-col items-center gap-4">
        
        <div className="relative">
          
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full blur-md bg-purple-500/30 animate-pulse"></div>

          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-white/10 border-t-purple-500 rounded-full animate-spin backdrop-blur-md"></div>

        </div>

        {/* Text */}
        <p className="text-gray-400 text-sm">
          Loading Pokémon...
        </p>

      </div>

    </div>
  );
}