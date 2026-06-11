import React, { useEffect, useRef } from "react";
import { memo } from "react";
import Marquee from "./Marquee";
import { TECH_STACK } from "./landingData";

const TechStack = () => {
  const techMarqueeRef = useRef(null);
  
  useEffect(() => {
    // Tech Stack Marquee Animation
    const techMarqueeContainer = techMarqueeRef.current;
    if (techMarqueeContainer) {
      const marqueeTrack = techMarqueeContainer.querySelector(".marquee-track");
      let animationId;
      let scrollPosition = 0;
      const trackWidth = marqueeTrack.scrollWidth / 2;

      const animate = () => {
        scrollPosition += 0.8;
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

  const techItems = TECH_STACK;

  const renderTechCard = (tech, key) => (
    <div
      key={key}
      className="group/item flex flex-col items-center gap-3 px-7 py-5 rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-max hover:scale-110"
      style={{
        borderColor: `${tech.color}40`,
        backgroundImage: `linear-gradient(135deg, ${tech.color}08, transparent)`,
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center p-3 group-hover/item:scale-125 transition-transform duration-300"
        style={{ backgroundColor: `${tech.color}25` }}
      >
        <img
          src={tech.logo}
          alt={`${tech.name} logo`}
          className="h-full w-full object-contain"
          loading="lazy"
          draggable="false"
        />
      </div>
      <span className="text-sm font-bold text-gray-200 group-hover/item:text-white transition-colors">
        {tech.name}
      </span>
    </div>
  );

  return (
    <section id="tech-stack" className="pt-24 scroll-mt-28">
      {/* Section Headers */}
      <div className="flex flex-col items-center gap-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Teknologi Terdepan
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
          Tech Stack <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Modern</span>
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
          Menguasai teknologi terbaru untuk aplikasi dunia nyata dan kesuksesan karir di industri
        </p>
      </div>

      {/* Marquee Container */}
      <div ref={techMarqueeRef} className="relative w-full overflow-hidden group">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#0A0E12] via-[#0A0E12]/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#0A0E12] via-[#0A0E12]/50 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="marquee-track flex gap-6 md:gap-8 py-10 will-change-transform">
          {/* First Set */}
          {techItems.map((tech, idx) => renderTechCard(tech, `tech-1-${idx}`))}

          {/* Duplicate Set untuk infinite loop */}
          {techItems.map((tech, idx) => renderTechCard(tech, `tech-2-${idx}`))}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {[
          {
            icon: "🎯",
            title: "Problem Solving",
            desc: "Menyelesaikan masalah kompleks dengan solusi inovatif"
          },
          {
            icon: "📈",
            title: "Scalable Development",
            desc: "Membangun aplikasi yang dapat berkembang dengan kebutuhan"
          },
          {
            icon: "🔐",
            title: "Best Practices",
            desc: "Mengikuti standar industri dan keamanan terbaik"
          }
        ].map((item, idx) => (
          <div key={idx} className="border border-gray-700/40 rounded-2xl p-6 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group/card">
            <div className="text-4xl mb-4 group-hover/card:scale-125 transition-transform duration-300">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover/card:text-blue-300 transition-colors">
              {item.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(TechStack);
