import { memo } from "react";
import Marquee from "./Marquee";
import { PARTNERS } from "./landingData";

const Partners = () => {
  const stats = [
    { icon: "🤝", label: "Industry Partners", value: "50+", color: "emerald", desc: "Leading companies" },
    { icon: "📈", label: "Placement Rate", value: "100%", color: "yellow", desc: "Student success" },
    { icon: "🎯", label: "Success Stories", value: "250+", color: "cyan", desc: "Alumni placements" },
    { icon: "⭐", label: "Satisfaction Rate", value: "95%", color: "pink", desc: "Partner feedback" },
  ];

  return (
    <section id="partners" className="pt-24">
      <div className="flex flex-col items-center gap-3 mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center">
          Partner{" "}
          <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
            Ecosystem
          </span>
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg">
          Berkembang bersama perusahaan teknologi terkemuka di Indonesia
        </p>
      </div>

      <div className="relative w-full overflow-hidden mb-16">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>

        <Marquee speed={50} className="py-8">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-2xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 shrink-0 min-w-[200px] hover:scale-105 cursor-pointer"
              style={{
                borderColor: `${partner.color}40`,
                backgroundImage: `linear-gradient(135deg, ${partner.color}05, transparent)`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl font-bold"
                style={{ backgroundColor: `${partner.color}20` }}
              >
                {partner.icon}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-white">{partner.name}</div>
                <div className="text-xs text-gray-400 mt-1">{partner.description}</div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div key={idx} className="border border-gray-700/40 rounded-2xl p-8 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 transition-all duration-300 group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white opacity-80">{stat.value}</div>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">{stat.label}</h4>
            <p className="text-xs text-gray-400">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(Partners);
