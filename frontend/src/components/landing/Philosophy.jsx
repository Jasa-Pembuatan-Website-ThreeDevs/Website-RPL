import { memo } from "react";

const Philosophy = () => {
  return (
    <section id="philosophy" className="pt-24">
      {/* Section Headers */}
      <div className="flex flex-col items-center gap-3 mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center">
          Our Philosophy
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
          Building great developers through skill and character
        </p>
      </div>

      {/* Philosophy Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* Good Skill Card */}
        <div className="border border-emerald-500/40 rounded-2xl p-8 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm hover:border-emerald-500/60 transition-all duration-300">
          {/* Icon & Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#00F5A0] rounded-lg flex items-center justify-center text-black font-bold text-lg">
              &lt;&gt;
            </div>
            <h4 className="text-2xl md:text-3xl font-bold text-white">
              Good Skill
            </h4>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            Kami fokus pada pengembangan kemampuan teknis yang solid. Dari
            fundamental programming hingga teknologi terkini, siswa kami
            diberdaki dengan skill yang dibutuhkan industri.
          </p>

          {/* Sub-cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Problem Solving */}
            <div className="border border-emerald-500/30 rounded-lg p-4 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">💡</span>
                </div>
                <h5 className="text-sm font-bold text-white">
                  Problem Solving
                </h5>
              </div>
              <p className="text-xs text-gray-400">Critical thinking</p>
            </div>

            {/* Project-Based */}
            <div className="border border-emerald-500/30 rounded-lg p-4 bg-emerald-500/5 hover:bg-emerald-500/10 transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-cyan-400 rounded-full flex items-center justify-center">
                  <span className="text-black text-xs font-bold">◎</span>
                </div>
                <h5 className="text-sm font-bold text-white">Project-Based</h5>
              </div>
              <p className="text-xs text-gray-400">Real-world experience</p>
            </div>
          </div>
        </div>

        {/* Good Attitude Card */}
        <div>
          <div className="border border-yellow-500/40 rounded-2xl p-6 md:p-8 bg-gradient-to-br from-yellow-500/5 to-transparent backdrop-blur-sm hover:border-yellow-500/60 transition-all duration-300">
            {/* Icon & Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-lg">
                👤
              </div>
              <h4 className="text-2xl md:text-3xl font-bold text-white">
                Good Attitude
              </h4>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Karakter dan etika profesional adalah fondasi kesuksesan. Kami
              mengajarkan integritas, dedikasi kesuksesan kami membangun
              developer tidak hanya pintar, tapi juga berintegritas.
            </p>
          </div>

          {/* Main Stat */}
          <div className="border border-yellow-500/40 rounded-2xl p-6 md:p-8 mt-6 bg-gradient-to-br from-yellow-500/5 to-transparent backdrop-blur-sm">
            <div className="mb-4 md:mb-6">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2">
                100%
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">
                Industry-Ready
              </div>
            </div>

            {/* Footer Text */}
            <div className="text-sm md:text-base text-[#00F5A0] font-semibold">
              Siap kerja & mengajar
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Philosophy);
