import { memo } from "react";
import Marquee from "./Marquee";
import { TECH_STACK } from "./landingData";

const TechStack = () => {
  return (
    <section id="tech-stack" className="pt-24">
      <div className="flex flex-col items-center gap-3 mb-6">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center">
          Tech Stack
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg">
          Mastering modern technologies for real-world applications
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>

        <Marquee speed={40} className="py-8">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 whitespace-nowrap shrink-0"
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
        </Marquee>
      </div>
    </section>
  );
};

export default memo(TechStack);
