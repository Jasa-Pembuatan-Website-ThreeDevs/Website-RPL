import { memo } from "react";
import { PORTFOLIO } from "./landingData";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-24">
      <div className="flex flex-col items-center gap-3 mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center">
          Student Portfolio
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg">
          Real projects built by our talented students
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PORTFOLIO.map((item, idx) => (
          <div 
            key={idx}
            className="group rounded-2xl overflow-hidden border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 transition-all duration-300"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F5A0] transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="px-3 py-1 text-xs font-semibold rounded-full border border-gray-500/30 bg-gray-500/20 text-gray-200"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-[#00F5A0] hover:text-[#4bf3ce] transition-colors">
                  <span>↗</span> Live Demo
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors border-l border-gray-700/40 pl-3">
                  <span>{"</>"}</span> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Portfolio);
