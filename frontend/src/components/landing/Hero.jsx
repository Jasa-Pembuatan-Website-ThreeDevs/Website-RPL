import { memo } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="flex flex-col items-center gap-8 scroll-mt-28 min-h-[90vh] justify-center py-20">
      {/* Badge */}
      <div className="hero-enter inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[#00F5A0] text-xs font-semibold tracking-wide hover:border-emerald-500/60 hover:bg-emerald-500/15 transition-all duration-300">
        <svg className="w-4 h-4 animate-spin duration-3000" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        🚀 Coding the Future
      </div>

      {/* Main Heading */}
      <h1 className="hero-enter-delay-1 text-6xl md:text-7xl lg:text-8xl text-center mx-auto max-w-4xl font-extrabold tracking-tighter leading-[1.1]">
        Mencetak <br />
        <span className="bg-gradient-to-r from-[#00F5A0] via-[#4bf3ce] to-[#00D2FF] bg-clip-text text-transparent">
          Software Engineer
        </span>{" "}
        <br />
        Masa Depan
      </h1>

      {/* Subheading */}
      <div className="hero-enter-delay-2 text-center max-w-2xl">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-3">
          Pusat inovasi teknologi <span className="text-white font-bold">SMKS Muhammadiyah 1 Genteng</span>
        </p>
        <p className="text-lg text-[#00F5A0] font-semibold">✨ Good Skill, Good Attitude</p>
      </div>

      {/* CTA Buttons */}
      <div className="hero-enter-delay-3 flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 w-full">
        <button
          type="button"
          onClick={scrollToPortfolio}
          className="px-8 py-4 bg-gradient-to-r from-[#00F5A0] to-[#4bf3ce] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 text-base font-semibold"
        >
          ↓ Lihat Karya Kami
        </button>
        <Link
          to="/register"
          className="px-8 py-4 border-2 border-gray-600 bg-gray-900/40 backdrop-blur text-white font-semibold rounded-xl hover:border-[#00F5A0]/60 hover:bg-emerald-500/10 hover:scale-105 active:scale-95 transition-all duration-200 text-base"
        >
          Daftar Sekarang →
        </Link>
      </div>

      {/* Stats */}
      <div className="hero-enter-delay-4 flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-16 pt-12 w-full border-t border-gray-700/40 mt-12">
        {[
          { value: "500+", label: "Siswa Terlatih", color: "from-emerald-500 to-[#00F5A0]" },
          { value: "50+", label: "Proyek Nyata", color: "from-yellow-500 to-orange-400" },
          { value: "10+", label: "Tech Stack", color: "from-blue-500 to-[#00D2FF]" },
        ].map((stat) => (
          <div key={stat.label} className="text-center hover:scale-105 transition-transform duration-200">
            <div className={`text-4xl md:text-5xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 mt-2 font-medium tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="animate-bounce pt-8 opacity-60">
        <svg className="w-6 h-6 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default memo(Hero);
