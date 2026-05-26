import { memo } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="flex flex-col items-center gap-6 scroll-mt-28">
      <div className="hero-enter inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[#00F5A0] text-xs font-semibold tracking-wide">
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        Coding the Future
      </div>

      <h2 className="hero-enter-delay-1 text-5xl text-center mx-auto max-w-3xl md:text-6xl font-extrabold tracking-tight leading-[1.12]">
        Mencetak <br />
        <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
          Software Engineer
        </span>{" "}
        Masa Depan
      </h2>

      <div className="hero-enter-delay-2 text-base text-center text-gray-400 max-w-xl leading-relaxed">
        Pusat inovasi teknologi{" "}
        <span className="text-white font-bold">SMKS Muhammadiyah 1 Genteng</span>.
        <p className="text-[#00F5A0] font-semibold mt-1">Good Skill, Good Attitude.</p>
      </div>

      <div className="hero-enter-delay-3 flex flex-col justify-center items-center gap-4 mt-2">
        <div className="flex justify-center gap-6">
          <button
            type="button"
            onClick={scrollToPortfolio}
            className="px-6 py-3 bg-[#4bf3ce] text-black font-bold rounded-xl hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-emerald-500/10 text-sm"
          >
            Lihat Karya Kami
          </button>
          <Link
            to="/register"
            className="px-6 py-3 border border-gray-800 bg-[#12181F]/40 backdrop-blur text-white font-semibold rounded-xl hover:bg-gray-800/40 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
          >
            Daftar Sekarang
          </Link>
        </div>

        <div className="flex justify-center items-center gap-12 pt-8 w-full">
          {[
            { value: "500+", label: "Students Trained", color: "text-[#00F5A0]" },
            { value: "50+", label: "Projects Built", color: "text-[#FFBD2E]" },
            { value: "10+", label: "Tech Stacks", color: "text-[#00D2FF]" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`text-3xl font-extrabold ${stat.color}`}>{stat.value}</div>
              <div className="text-[11px] text-gray-500 mt-1 font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
