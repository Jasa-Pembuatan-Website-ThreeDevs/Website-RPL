import { memo } from "react";
import Reveal from "./Reveal";

const Philosophy = () => {
  return (
    <section id="philosophy" className="pt-24 scroll-mt-28">
      <Reveal>
        <div className="flex flex-col items-center gap-3 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[#00F5A0] text-xs font-semibold tracking-wide">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Filosofi Kami
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
            Membangun Developer <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">Berkualitas</span>
          </h3>
          <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Skill teknis hebat dikombinasikan dengan karakter yang kuat
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Good Skill Card */}
        <Reveal delay={80}>
          <div className="group border border-emerald-500/40 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-emerald-500/10 to-transparent backdrop-blur-sm hover:border-emerald-500/70 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 h-full">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00F5A0] to-[#4bf3ce] rounded-xl flex items-center justify-center text-black font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                &lt;&gt;
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl font-bold text-white">
                  Good Skill
                </h4>
                <p className="text-sm text-[#00F5A0] font-semibold mt-1">Kemampuan Teknis</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10">
              Kami fokus pada pengembangan kemampuan teknis yang solid. Dari fundamental programming hingga teknologi terkini, siswa kami diberdayakan dengan skill yang dibutuhkan industri modern.
            </p>

            {/* Sub-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "💡", title: "Problem Solving", desc: "Critical thinking & logic" },
                { icon: "⚙️", title: "Project-Based", desc: "Real-world experience" },
                { icon: "📚", title: "Continuous Learning", desc: "Update teknologi terbaru" },
                { icon: "🏆", title: "Best Practices", desc: "Industry standards" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-emerald-500/40 rounded-xl p-4 bg-emerald-500/5 hover:bg-emerald-500/15 hover:scale-105 transition-all duration-200 cursor-default group/card"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h5 className="text-sm font-bold text-white group-hover/card:text-[#00F5A0] transition-colors">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Good Attitude Card */}
        <Reveal delay={160}>
          <div className="group flex flex-col">
            <div className="border border-yellow-500/40 rounded-3xl p-8 md:p-10 bg-gradient-to-br from-yellow-500/10 to-transparent backdrop-blur-sm hover:border-yellow-500/70 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 flex-1">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center text-black font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-yellow-500/30">
                  👤
                </div>
                <div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white">
                    Good Attitude
                  </h4>
                  <p className="text-sm text-yellow-300 font-semibold mt-1">Karakter & Etika</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Karakter dan etika profesional adalah fondasi kesuksesan sejati. Kami membangun developer yang tidak hanya pintar secara teknis, tapi juga berinteggritas tinggi, bertanggung jawab, dan siap berkontribusi positif bagi industri.
              </p>
            </div>

            {/* Stats Card */}
            <div className="border border-yellow-500/40 rounded-3xl p-8 md:p-10 mt-6 bg-gradient-to-br from-yellow-500/10 to-transparent backdrop-blur-sm hover:border-yellow-500/70 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="text-6xl md:text-7xl lg:text-8xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-gray-400 font-medium tracking-wide">
                    Siap Industri
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-yellow-300 font-bold">
                    ✓ Siap kerja<br/>✓ Siap mendidik<br/>✓ Siap berinovasi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default memo(Philosophy);
