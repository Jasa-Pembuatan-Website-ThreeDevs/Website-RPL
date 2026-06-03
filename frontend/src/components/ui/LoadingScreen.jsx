import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0A0E12]">
      <div className="relative">
        {/* Outer Glow */}
        <div className="absolute inset-0 blur-3xl bg-[#00F5A0]/20 animate-pulse"></div>
        
        <div className="relative flex flex-col items-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-gray-800 border-t-[#00F5A0] rounded-full animate-spin shadow-[0_0_15px_rgba(0,245,160,0.3)]"></div>
          
          {/* Text */}
          <div className="mt-6 flex flex-col items-center">
            <h2 className="text-sm font-bold tracking-[0.2em] text-white uppercase animate-pulse">
              Loading
            </h2>
            <div className="mt-2 flex gap-1">
              <span className="w-1.5 h-1.5 bg-[#00F5A0] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-1.5 h-1.5 bg-[#00F5A0] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-1.5 h-1.5 bg-[#00F5A0] rounded-full animate-bounce"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
