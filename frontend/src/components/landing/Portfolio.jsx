import { memo } from "react";
import { PORTFOLIO } from "./landingData";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pt-24">
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
              Platform pembelajaran interaktif dengan fitur streaming video,
              kuis, dan tracking progress siswa.
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
              Sistem manajemen siswa lengkap dengan penilaian akademik, absensi
              digital, dan komunikasi orangtua.
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
              Aplikasi perpustakaan digital dengan peminjaman otomatis dan
              katalog buku online yang lengkap.
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
  );
};

export default memo(Portfolio);
