import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Depan() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    const marqueeTrack = marqueeContainer.querySelector(".marquee-track");
    let animationId;
    let scrollPosition = 0;
    const trackWidth = marqueeTrack.scrollWidth / 2;

    const animate = () => {
      scrollPosition += 0.8; // Kontrol kecepatan (semakin besar, semakin cepat)
      if (scrollPosition >= trackWidth) {
        scrollPosition = 0;
      }
      marqueeTrack.style.transform = `translateX(-${scrollPosition}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

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
            <div className="flex justify-center gap-6">
              <button className="px-6 py-3 bg-[#4bf3ce] text-black font-bold rounded-xl hover:brightness-110 transition-all shadow-lg shadow-emerald-500/10 text-sm">
                Lihat Karya Kami
              </button>
              <Link to="/register" className="px-6 py-3 border border-gray-800 bg-[#12181F]/40 backdrop-blur text-white font-semibold rounded-xl hover:bg-gray-800/40 transition-colors text-sm">
                Daftar Sekarang
              </Link>
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

        {/* --- TECH STACK SECTION --- */}
        <section id="tech-stack" className="py-24 w-full">
          {/* Section Headers */}
          <div className="flex flex-col items-center gap-3 mb-6">
            <h3 className="text-4xl md:text-5xl font-extrabold text-center">
              Tech Stack
            </h3>
            <p className="text-center text-gray-400 text-base md:text-lg">
              Mastering modern technologies for real-world applications
            </p>
          </div>

          {/* Marquee Container */}
          <div
            ref={marqueeRef}
            className="relative w-full overflow-hidden"
          >
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>

            {/* Marquee Track */}
            <div className="marquee-track flex gap-8 md:gap-12 py-8 will-change-transform">
              {/* Tech Items - First Set */}
              {[
                {
                  name: "Python",
                  color: "#3776AB",
                  icon: "🐍",
                },
                {
                  name: "Figma",
                  color: "#F24E1E",
                  icon: "✦",
                },
                {
                  name: "TypeScript",
                  color: "#3178C6",
                  icon: "TS",
                },
                {
                  name: "MySQL",
                  color: "#00758F",
                  icon: "🗄️",
                },
                {
                  name: "Git",
                  color: "#F1502F",
                  icon: "⎇",
                },
                {
                  name: "Docker",
                  color: "#2496ED",
                  icon: "🐳",
                },
                {
                  name: "Vue.js",
                  color: "#4FC08D",
                  icon: "✓",
                },
                {
                  name: "PHP",
                  color: "#777BB4",
                  icon: "⟨⟩",
                },
              ].map((tech, idx) => (
                <div
                  key={`tech-1-${idx}`}
                  className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-max"
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

              {/* Tech Items - Duplicate Set untuk infinite loop */}
              {[
                {
                  name: "Python",
                  color: "#3776AB",
                  icon: "🐍",
                },
                {
                  name: "Figma",
                  color: "#F24E1E",
                  icon: "✦",
                },
                {
                  name: "TypeScript",
                  color: "#3178C6",
                  icon: "TS",
                },
                {
                  name: "MySQL",
                  color: "#00758F",
                  icon: "🗄️",
                },
                {
                  name: "Git",
                  color: "#F1502F",
                  icon: "⎇",
                },
                {
                  name: "Docker",
                  color: "#2496ED",
                  icon: "🐳",
                },
                {
                  name: "Vue.js",
                  color: "#4FC08D",
                  icon: "✓",
                },
                {
                  name: "PHP",
                  color: "#777BB4",
                  icon: "⟨⟩",
                },
              ].map((tech, idx) => (
                <div
                  key={`tech-2-${idx}`}
                  className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-max"
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
            </div>
          </div>
        </section>

        {/* --- STUDENT PORTFOLIO SECTION --- */}
        <section id="portfolio" className="py-24 w-full">
          {/* Section Headers */}
          <div className="flex flex-col items-center gap-3 mb-16">
            <h3 className="text-4xl md:text-5xl font-extrabold text-center">
              Student Portfolio
            </h3>
            <p className="text-center text-gray-400 text-base md:text-lg">
              Real projects built by our talented students
            </p>
          </div>

          {/* Portfolio Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* E-Learning Platform Card */}
            <div className="group rounded-2xl overflow-hidden border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                  💻
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop" 
                  alt="E-Learning Platform" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F5A0] transition-colors">
                  E-Learning Platform
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Platform pembelajaran interaktif dengan fitur streaming video, kuis, dan tracking progress siswa.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-semibold bg-red-500/20 text-red-200 rounded-full border border-red-500/30">
                    Laravel
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-200 rounded-full border border-green-500/30">
                    Vue.js
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-200 rounded-full border border-blue-500/30">
                    MySQL
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#00F5A0] hover:text-[#4bf3ce] transition-colors"
                  >
                    <span>↗</span>
                    Live Demo
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors border-l border-gray-700/40"
                  >
                    <span>{"</>"}</span>
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* Student Management System Card */}
            <div className="group rounded-2xl overflow-hidden border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-yellow-500/20 via-amber-500/10 to-transparent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                  📊
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop" 
                  alt="Student Management System" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Title */}
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F5A0] transition-colors">
                  Student Management System
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Sistem manajemen siswa lengkap dengan penilaian akademik, absensi digital, dan komunikasi orangtua.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-200 rounded-full border border-blue-500/30">
                    React
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-green-500/20 text-green-200 rounded-full border border-green-500/30">
                    Node.js
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-yellow-500/20 text-yellow-200 rounded-full border border-yellow-500/30">
                    MongoDB
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#00F5A0] hover:text-[#4bf3ce] transition-colors"
                  >
                    <span>↗</span>
                    Live Demo
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors border-l border-gray-700/40"
                  >
                    <span>{"</>"}</span>
                    Code
                  </a>
                </div>
              </div>
            </div>

            {/* School Library App Card */}
            <div className="group rounded-2xl overflow-hidden border border-[#00F5A0]/40 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm hover:border-[#00F5A0]/60 transition-all duration-300 md:col-span-2 lg:col-span-1">
              {/* Image Container */}
              <div className="relative h-56 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                  📚
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1507842217343-583f20270319?w=400&h=300&fit=crop" 
                  alt="School Library App" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Title */}
                <h4 className="text-xl font-bold text-[#00F5A0] mb-2 group-hover:text-[#4bf3ce] transition-colors">
                  School Library App
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Aplikasi perpustakaan digital dengan peminjaman otomatis dan katalog buku online yang lengkap.
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-200 rounded-full border border-purple-500/30">
                    PHP
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-200 rounded-full border border-cyan-500/30">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-200 rounded-full border border-blue-500/30">
                    MySQL
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#00F5A0] hover:text-[#4bf3ce] transition-colors"
                  >
                    <span>↗</span>
                    Live Demo
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors border-l border-gray-700/40"
                  >
                    <span>{"</>"}</span>
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}