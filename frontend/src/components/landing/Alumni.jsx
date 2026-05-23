import { memo } from "react";
import { ALUMNI } from "./landingData";

const Alumni = () => {
  return (
    <section id="alumni" className="pt-24">
      <div className="flex flex-col items-center gap-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[#00F5A0] text-xs font-semibold tracking-wide">
          <span>★</span> Success Stories
        </div>
        <h3 className="text-4xl md:text-5xl font-extrabold text-center">
          Alumni{" "}
          <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
            Hall of Fame
          </span>
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg">
          Kisah inspiratif dari alumni kami yang sukses berkarier di industri teknologi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ALUMNI.map((person, idx) => (
          <div 
            key={idx}
            className="group border border-gray-700/40 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative h-48 bg-gray-900/50 overflow-hidden">
              <img
                src={person.image}
                alt={person.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[#00F5A0] rounded-full"></div>
                <span className="text-xs text-[#00F5A0] font-semibold">
                  Class {person.class}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white mb-1">{person.name}</h4>
              <p className="text-sm font-semibold text-gray-300 mb-1">{person.role}</p>
              <p className="text-xs text-gray-400 mb-4 font-medium">{person.company}</p>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
                {person.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span>📍</span> {person.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Alumni);
