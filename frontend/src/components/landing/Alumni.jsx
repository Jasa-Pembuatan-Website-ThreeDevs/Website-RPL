import { memo } from "react";
import { ALUMNI } from "./landingData";
import Reveal from "./Reveal";

const Alumni = () => {
  return (
    <>
      <section id="alumni" className="pt-24 scroll-mt-28">
        {/* Section Headers */}
        <div className="flex flex-col items-center gap-3 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/40 bg-pink-500/10 text-pink-300 text-xs font-semibold tracking-wide">
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Success Stories
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
            Alumni{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Hall of Fame
            </span>
          </h3>
          <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
            Kisah inspiratif dari alumni kami yang sukses berkarir di industri teknologi terkemuka
          </p>
        </div>

        {/* Alumni Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ALUMNI.map((alumnus, idx) => {
            const colorMap = {
              emerald: { border: "border-emerald-500/40", shadow: "shadow-emerald-500/20", text: "text-emerald-300", accent: "from-emerald-500/5" },
              cyan: { border: "border-cyan-500/40", shadow: "shadow-cyan-500/20", text: "text-cyan-300", accent: "from-cyan-500/5" },
              yellow: { border: "border-yellow-500/40", shadow: "shadow-yellow-500/20", text: "text-yellow-300", accent: "from-yellow-500/5" },
              pink: { border: "border-pink-500/40", shadow: "shadow-pink-500/20", text: "text-pink-300", accent: "from-pink-500/5" },
              blue: { border: "border-blue-500/40", shadow: "shadow-blue-500/20", text: "text-blue-300", accent: "from-blue-500/5" },
              red: { border: "border-red-500/40", shadow: "shadow-red-500/20", text: "text-red-300", accent: "from-red-500/5" },
            };
            const colors = colorMap[alumnus.color] || colorMap.emerald;

            return (
              <Reveal key={alumnus.name} delay={idx * 80}>
                <div className={`group border ${colors.border} rounded-3xl overflow-hidden bg-gradient-to-br ${colors.accent} to-transparent backdrop-blur-sm hover:${colors.border} hover:shadow-lg hover:${colors.shadow} transition-all duration-300 hover:scale-105 h-full flex flex-col`}>
                  {/* Image Container */}
                  <div className="relative h-56 bg-gradient-to-br from-gray-800/50 to-transparent overflow-hidden">
                    <img
                      src={alumnus.image}
                      alt={alumnus.name}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    {/* Status Badge */}
                    <div className={`flex items-center gap-2 mb-4 pb-4 border-b border-gray-700/40`}>
                      <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: colors.border.split('-')[1] === 'emerald' ? '#10b981' : colors.border.split('-')[1] === 'cyan' ? '#06b6d4' : colors.border.split('-')[1] === 'yellow' ? '#fbbf24' : colors.border.split('-')[1] === 'pink' ? '#ec4899' : colors.border.split('-')[1] === 'blue' ? '#3b82f6' : '#ef4444' }}></div>
                      <span className={`text-xs ${colors.text} font-semibold`}>
                        {alumnus.class}
                      </span>
                    </div>

                    {/* Name */}
                    <h4 className={`text-xl md:text-2xl font-bold text-white mb-1 group-hover:${colors.text} transition-colors`}>
                      {alumnus.name}
                    </h4>

                    {/* Job Title */}
                    <p className={`text-sm font-semibold ${colors.text} mb-1`}>
                      {alumnus.role}
                    </p>

                    {/* Company */}
                    <p className="text-sm text-gray-400 mb-4 font-medium flex items-center gap-1">
                      <span>🏢</span>
                      {alumnus.company}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-1">
                      {alumnus.description}
                    </p>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 pt-4 border-t border-gray-700/40">
                      <span>📍</span>
                      <span>{alumnus.location}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Where They Are Now Section */}
      <section id="whereTheAreNow" className="pt-24 scroll-mt-28">
        {/* Section Headers */}
        <Reveal>
          <div className="flex flex-col items-center gap-3 mb-16">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
              Alumni di<span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Mana Saja</span>
            </h3>
            <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
              Jaringan global alumni kami di perusahaan-perusahaan terkemuka dan universitas ternama
            </p>
          </div>
        </Reveal>

        {/* Main Container with Border */}
        <Reveal>
          <div className="border border-gray-700/40 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 transition-all duration-300">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Top Tech Companies Column */}
              <div className="flex flex-col gap-8">
                {/* Column Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    💼
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white">
                    Perusahaan Teknologi
                  </h4>
                </div>

                {/* Companies Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Gojek",
                    "Tokopedia",
                    "Grab",
                    "Shopee",
                    "Traveloka",
                    "Bukalapak",
                    "Blibli",
                    "OVO",
                  ].map((company, idx) => (
                    <div
                      key={`company-${idx}`}
                      className="group border border-gray-700/40 rounded-2xl px-4 py-4 bg-gradient-to-br from-gray-800/30 to-transparent hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110 cursor-default"
                    >
                      <p className="text-sm font-semibold text-gray-300 group-hover:text-emerald-300 transition-colors text-center">
                        {company}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Universities Column */}
              <div className="flex flex-col gap-8">
                {/* Column Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    🎓
                  </div>
                  <h4 className="text-xl md:text-2xl font-bold text-white">
                    Universitas Ternama
                  </h4>
                </div>

                {/* Universities Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Institut Teknologi Bandung",
                    "Universitas Indonesia",
                    "Universitas Gadjah Mada",
                    "Institut Teknologi Sepuluh Nopember",
                    "Universitas Brawijaya",
                    "Telkom University",
                  ].map((university, idx) => (
                    <div
                      key={`uni-${idx}`}
                      className="group border border-gray-700/40 rounded-2xl px-4 py-4 bg-gradient-to-br from-gray-800/30 to-transparent hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 cursor-default"
                    >
                      <p className="text-sm font-semibold text-gray-300 group-hover:text-cyan-300 transition-colors text-center">
                        {university}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};

export default memo(Alumni);
