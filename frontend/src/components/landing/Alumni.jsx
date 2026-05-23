import { memo } from "react";
import { ALUMNI } from "./landingData";

const Alumni = () => {
  return (
    <>
      <section id="alumni" className="pt-24">
        {/* Section Headers */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[#00F5A0] text-xs font-semibold tracking-wide">
            <svg
              className="w-3.5 h-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Success Stories
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-center">
            Alumni{" "}
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
              Hall of Fame
            </span>
          </h3>
          <p className="text-center text-gray-400 text-base md:text-lg">
            Kisah inspiratif dari alumni kami yang sukses berkari di industri
            teknologi
          </p>
        </div>

        {/* Alumni Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Alumni Card 1 - Reza Pratama */}
          <div className="group border border-emerald-500/40 rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105">
            {/* Image Container */}
            <div className="relative h-48 bg-gradient-to-br from-emerald-500/20 to-transparent overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                alt="Reza Pratama"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <span className="text-xs text-emerald-400 font-semibold">
                  Class 2023
                </span>
              </div>

              {/* Name */}
              <h4 className="text-lg font-bold text-white mb-1">
                Reza Pratama
              </h4>

              {/* Job Title */}
              <p className="text-sm font-semibold text-emerald-300 mb-1">
                Software Engineer
              </p>

              {/* Company */}
              <p className="text-xs text-gray-400 mb-4 font-medium">Gojek</p>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Dari siswa RPL hingga menjadi Software Engineer di perusahaan
                unicorn. Pembelajaran berkelanjutan menjadi kunci kesuksesan.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>📍</span>
                <span>Jakarta</span>
              </div>
            </div>
          </div>

          {/* Alumni Card 2 - Siti Maharani */}
          <div className="group border border-cyan-500/40 rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-sm hover:border-cyan-500/60 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
            {/* Image Container */}
            <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-transparent overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
                alt="Siti Maharani"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-xs text-blue-400 font-semibold">
                  Class 2022
                </span>
              </div>

              {/* Name */}
              <h4 className="text-lg font-bold text-white mb-1">
                Siti Maharani
              </h4>

              {/* Job Title */}
              <p className="text-sm font-semibold text-cyan-300 mb-1">
                Frontend Developer
              </p>

              {/* Company */}
              <p className="text-xs text-gray-400 mb-4 font-medium">
                Tokopedia
              </p>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Menjelma sebagai developer ulung yang mengembangkan interface
                commerce terbaik untuk user experience sempurna.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>📍</span>
                <span>Jakarta</span>
              </div>
            </div>
          </div>

          {/* Alumni Card 3 - Ahmad Fauzi */}
          <div className="group border border-yellow-500/40 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-500/5 to-transparent backdrop-blur-sm hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
            {/* Image Container */}
            <div className="relative h-48 bg-gradient-to-br from-yellow-500/20 to-transparent overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop"
                alt="Ahmad Fauzi"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-xs text-yellow-400 font-semibold">
                  Now 2025
                </span>
              </div>

              {/* Name */}
              <h4 className="text-lg font-bold text-white mb-1">Ahmad Fauzi</h4>

              {/* Job Title */}
              <p className="text-sm font-semibold text-yellow-300 mb-1">
                Data Engineer
              </p>

              {/* Company */}
              <p className="text-xs text-gray-400 mb-4 font-medium">Grab</p>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Menggunakan skill data engineering untuk mengoptimalkan pipeline
                dan meningkatkan insights bisnis perusahaan.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>📍</span>
                <span>Informatika - IFB</span>
              </div>
            </div>
          </div>

          {/* Alumni Card 4 - Dewi Lestari */}
          <div className="group border border-pink-500/40 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/5 to-transparent backdrop-blur-sm hover:border-pink-500/60 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 hover:scale-105">
            {/* Image Container */}
            <div className="relative h-48 bg-gradient-to-br from-pink-500/20 to-transparent overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop"
                alt="Dewi Lestari"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                <span className="text-xs text-orange-400 font-semibold">
                  Class 2023
                </span>
              </div>

              {/* Name */}
              <h4 className="text-lg font-bold text-white mb-1">
                Dewi Lestari
              </h4>

              {/* Job Title */}
              <p className="text-sm font-semibold text-pink-300 mb-1">
                Product Designer
              </p>

              {/* Company */}
              <p className="text-xs text-gray-400 mb-4 font-medium">
                Traveloka
              </p>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Dari siswa RPL menjadi product designer yang menciptakan
                pengalaman pengguna terbaik dalam platform travel.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>📍</span>
                <span>Jakarta</span>
              </div>
            </div>
          </div>

          {/* Alumni Card 5 - Budi Setiawan */}
          <div className="group border border-blue-500/40 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/5 to-transparent backdrop-blur-sm hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
            {/* Image Container */}
            <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-transparent overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
                alt="Budi Setiawan"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <span className="text-xs text-blue-400 font-semibold">
                  Class 2021
                </span>
              </div>

              {/* Name */}
              <h4 className="text-lg font-bold text-white mb-1">
                Budi Setiawan
              </h4>

              {/* Job Title */}
              <p className="text-sm font-semibold text-blue-300 mb-1">
                DevOps Engineer
              </p>

              {/* Company */}
              <p className="text-xs text-gray-400 mb-4 font-medium">
                Bukalapak
              </p>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Spesialis di cloud infrastructure dan automation, memastikan
                platform beroperasi 24/7 dengan reliability tinggi.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>📍</span>
                <span>Bandung</span>
              </div>
            </div>
          </div>

          {/* Alumni Card 6 - Rina Kusuma */}
          <div className="group border border-red-500/40 rounded-2xl overflow-hidden bg-gradient-to-br from-red-500/5 to-transparent backdrop-blur-sm hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 hover:scale-105">
            {/* Image Container */}
            <div className="relative h-48 bg-gradient-to-br from-red-500/20 to-transparent overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=300&fit=crop"
                alt="Rina Kusuma"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span className="text-xs text-red-400 font-semibold">
                  Class 2022
                </span>
              </div>

              {/* Name */}
              <h4 className="text-lg font-bold text-white mb-1">Rina Kusuma</h4>

              {/* Job Title */}
              <p className="text-sm font-semibold text-red-300 mb-1">
                Mobile Developer
              </p>

              {/* Company */}
              <p className="text-xs text-gray-400 mb-4 font-medium">Blibli</p>

              {/* Description */}
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Kuliah jadi terpanggil merancang dan mengembangkan aplikasi
                mobile dengan 50+ downloads di Play Store.
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>📍</span>
                <span>Depok</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="whereTheAreNow" className="pt-24">
        {/* Section Headers */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <h3 className="text-4xl md:text-5xl font-extrabold text-center">
            Where They Are{" "}
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
              Now
            </span>
          </h3>
        </div>

        {/* Main Container with Border */}
        <div className="border border-gray-700/40 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Top Tech Companies Column */}
            <div className="flex flex-col gap-8">
              {/* Column Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-lg">
                  💼
                </div>
                <h4 className="text-lg font-bold text-white">
                  Top Tech Companies
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
                    className="group border border-gray-700/40 rounded-xl px-4 py-3 bg-gradient-to-br from-gray-800/30 to-transparent hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
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
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-lg">
                  🎓
                </div>
                <h4 className="text-lg font-bold text-white">Universities</h4>
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
                    className="group border border-gray-700/40 rounded-xl px-4 py-3 bg-gradient-to-br from-gray-800/30 to-transparent hover:border-cyan-500/60 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 cursor-pointer"
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
      </section>
    </>
  );
};

export default memo(Alumni);
