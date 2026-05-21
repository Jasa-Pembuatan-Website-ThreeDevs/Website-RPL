import React from "react";

export default function Depan() {
  return (
    <div className="min-h-screen bg-[#0A0E12] text-white font-sans relative overflow-hidden antialiased">
      {/* Efek Glow/Blurs di Background */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00F5A0]/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[15%] right-[15%] w-[400px] h-[400px] bg-[#00D2FF]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- NAVBAR --- */}
      <header
        style={{
          backgroundColor: "rgba(10, 14, 18, 0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
        className="fixed top-0 left-0 right-0 max-w-7xl mx-auto border border-gray-600/40 px-6 py-3 mt-6 rounded-2xl flex justify-between items-center z-50"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00F5A0] rounded-xl flex items-center justify-center font-bold text-black text-sm tracking-tighter">
            SM
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-wide leading-none">
              SMK Muhammadiyah
            </h1>
            <p className="text-[11px] text-[#00F5A0] font-semibold mt-1 tracking-wider">
              RPL Department
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-300">
          <a
            href="#"
            className="text-white hover:text-[#00F5A0] transition-colors"
          >
            Home
          </a>
          <a href="#" className="hover:text-[#00F5A0] transition-colors">
            Portfolio
          </a>
          <a href="#" className="hover:text-[#00F5A0] transition-colors">
            Tech Stack
          </a>
          <a href="#" className="hover:text-[#00F5A0] transition-colors">
            Contact
          </a>
        </nav>
      </header>

      {/* --- HERO CONTENT --- */}
      <main className="max-w-7xl mx-auto px-6 pt-[120px] pb-24 gap-12 items-center relative z-10">
        <section id="home" className="flex flex-col items-center gap-6">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[#00F5A0] text-xs font-semibold tracking-wide">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Coding the Future
          </div>

          {/* Judul Utama (Heading) */}
          <h2 className="text-5xl text-center mx-auto max-w-3xl md:text-6xl font-extrabold tracking-tight leading-[1.12]">
            Mencetak <br />
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
              Software Engineer
            </span>{" "}
            Masa Depan
          </h2>

          {/* Subtitle / Deskripsi */}
          <div className="text-base text-center text-gray-400 max-w-xl leading-relaxed">
            Pusat inovasi teknologi{" "}
            <span className="text-white font-bold">
              SMKS Muhammadiyah 1 Genteng
            </span>
            .
            <p className="text-[#00F5A0] font-semibold mt-1">
              Good Skill, Good Attitude.
            </p>
          </div>

          {/* Tombol Aksi (Buttons) */}
          <div className="flex flex-col justify-center items-center gap-4 mt-2">
            <div class="flex justify-center gap-6">
              <button className="px-6 py-3 bg-[#4bf3ce] text-black font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-emerald-500/10 text-sm">
                Lihat Karya Kami
              </button>
              <button className="px-6 py-3 border border-gray-800 bg-[#12181F]/40 backdrop-blur text-white font-semibold rounded-xl hover:bg-gray-800/40 transition-colors text-sm">
                Daftar Sekarang
              </button>
            </div>

            {/* Statistik (Stats Section) */}
            <div className="flex justify-center items-center gap-12 pt-8 w-full">
              <div>
                <div className="text-3xl font-extrabold text-[#00F5A0]">
                  500+
                </div>
                <div className="text-[11px] text-gray-500 mt-1 font-medium tracking-wide">
                  Students Trained
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#FFBD2E]">
                  50+
                </div>
                <div className="text-[11px] text-gray-500 mt-1 font-medium tracking-wide">
                  Projects Built
                </div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#00D2FF]">
                  10+
                </div>
                <div className="text-[11px] text-gray-500 mt-1 font-medium tracking-wide">
                  Tech Stacks
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PHILOSOPHY SECTION --- */}
        <section id="philosophy" className="py-24">
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
                    <h5 className="text-sm font-bold text-white">
                      Project-Based
                    </h5>
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
      </main>
    </div>
  );
}
