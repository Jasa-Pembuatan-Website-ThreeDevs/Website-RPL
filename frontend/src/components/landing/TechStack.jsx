import React, { useEffect, useRef } from "react";
import { memo } from "react";
import Marquee from "./Marquee";
import { TECH_STACK } from "./landingData";

const TechStack = () => {
  const techMarqueeRef = useRef(null);
    const partnerMarqueeRef = useRef(null);
  
    useEffect(() => {
      // Tech Stack Marquee Animation
      const techMarqueeContainer = techMarqueeRef.current;
      if (techMarqueeContainer) {
        const marqueeTrack = techMarqueeContainer.querySelector(".marquee-track");
        let animationId;
        let scrollPosition = 0;
        const trackWidth = marqueeTrack.scrollWidth / 2;
  
        const animate = () => {
          scrollPosition += 0.8; // Kontrol kecepatan (semakin besar, semakin cepat)
          if (scrollPosition >= trackWidth) {
            scrollPosition = 0;
          }
          marqueeTrack.style.transform = `translateX(-${scrollPosition}px)`;
          animationId = requestAnimationFrame(animate);
        };
  
        animationId = requestAnimationFrame(animate);
  
        return () => cancelAnimationFrame(animationId);
      }
    }, []);
  
    useEffect(() => {
      // Partner Ecosystem Marquee Animation
      const partnerMarqueeContainer = partnerMarqueeRef.current;
      if (partnerMarqueeContainer) {
        const marqueeTrack =
          partnerMarqueeContainer.querySelector(".marquee-track");
        let animationId;
        let scrollPosition = 0;
        const trackWidth = marqueeTrack.scrollWidth / 2;
  
        const animate = () => {
          scrollPosition += 0.8; // Kontrol kecepatan (semakin besar, semakin cepat)
          if (scrollPosition >= trackWidth) {
            scrollPosition = 0;
          }
          marqueeTrack.style.transform = `translateX(-${scrollPosition}px)`;
          animationId = requestAnimationFrame(animate);
        };
  
        animationId = requestAnimationFrame(animate);
  
        return () => cancelAnimationFrame(animationId);
      }
    }, []);
  return (
    <section id="tech-stack" className="pt-24">
      {/* Section Headers */}
      <div className="flex flex-col items-center gap-3 mb-6">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center">
          Tech Stack
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg">
          Mastering modern technologies for real-world applications
        </p>
      </div>

      {/* Marquee Container */}
      <div ref={techMarqueeRef} className="relative w-full overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="marquee-track flex gap-8 md:gap-12 py-8 will-change-transform">
          {/* Tech Items - First Set */}
          {[
            {
              name: "Python",
              color: "#3776AB",
              icon: "🐍",
            },
            {
              name: "Figma",
              color: "#F24E1E",
              icon: "✦",
            },
            {
              name: "TypeScript",
              color: "#3178C6",
              icon: "TS",
            },
            {
              name: "MySQL",
              color: "#00758F",
              icon: "🗄️",
            },
            {
              name: "Git",
              color: "#F1502F",
              icon: "⎇",
            },
            {
              name: "Docker",
              color: "#2496ED",
              icon: "🐳",
            },
            {
              name: "Vue.js",
              color: "#4FC08D",
              icon: "✓",
            },
            {
              name: "PHP",
              color: "#777BB4",
              icon: "⟨⟩",
            },
          ].map((tech, idx) => (
            <div
              key={`tech-1-${idx}`}
              className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-max"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-white"
                style={{ backgroundColor: `${tech.color}20` }}
              >
                {tech.icon}
              </div>
              <span className="text-sm font-semibold text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}

          {/* Tech Items - Duplicate Set untuk infinite loop */}
          {[
            {
              name: "Python",
              color: "#3776AB",
              icon: "🐍",
            },
            {
              name: "Figma",
              color: "#F24E1E",
              icon: "✦",
            },
            {
              name: "TypeScript",
              color: "#3178C6",
              icon: "TS",
            },
            {
              name: "MySQL",
              color: "#00758F",
              icon: "🗄️",
            },
            {
              name: "Git",
              color: "#F1502F",
              icon: "⎇",
            },
            {
              name: "Docker",
              color: "#2496ED",
              icon: "🐳",
            },
            {
              name: "Vue.js",
              color: "#4FC08D",
              icon: "✓",
            },
            {
              name: "PHP",
              color: "#777BB4",
              icon: "⟨⟩",
            },
          ].map((tech, idx) => (
            <div
              key={`tech-2-${idx}`}
              className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-max"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-white"
                style={{ backgroundColor: `${tech.color}20` }}
              >
                {tech.icon}
              </div>
              <span className="text-sm font-semibold text-gray-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(TechStack);
