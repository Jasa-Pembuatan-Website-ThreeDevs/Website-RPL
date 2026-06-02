import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export default function Cta() {
    return(
        <div className="mt-24 border-t border-gray-700/40 pt-24">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden p-8 md:p-16 lg:p-20 bg-gradient-to-br from-emerald-500/10 via-gray-900/40 to-transparent border border-emerald-500/30">
              {/* Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] -z-10 opacity-50" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] -z-10 opacity-50" />

              {/* Content Container */}
              <div className="relative z-10 flex flex-col items-center gap-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-[#00F5A0] text-xs font-semibold tracking-wide">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Bergabunglah dengan Kami
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">
                  Wujudkan <span className="bg-gradient-to-r from-[#00F5A0] to-[#4bf3ce] bg-clip-text text-transparent">Karir Impianmu</span> di Dunia Teknologi
                </h2>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Bergabunglah dengan ratusan alumni kami yang telah sukses berkarir di perusahaan teknologi terkemuka. Bangun skill, karakter, dan jaringan profesional bersama kami.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-xl py-8 border-t border-b border-gray-700/40">
                  {[
                    { number: "500+", label: "Siswa Aktif" },
                    { number: "50+", label: "Proyek Nyata" },
                    { number: "30+", label: "Mitra Industri" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                        {stat.number}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 mt-2">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 w-full">
                  {/* Primary Button */}
                  <Link
                    to="/register"
                    className="px-8 py-4 bg-gradient-to-r from-[#00F5A0] to-[#4bf3ce] text-black font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
                  >
                    🚀 Daftar Sekarang
                  </Link>

                  {/* Secondary Button */}
                  <a
                    href="mailto:rpl@smkmuh1genteng.sch.id"
                    className="px-8 py-4 border-2 border-emerald-500/60 text-white font-bold text-lg rounded-xl hover:border-emerald-500/100 hover:bg-emerald-500/10 hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
                  >
                    💬 Hubungi Kami
                  </a>
                </div>

                {/* Additional Info */}
                <div className="flex items-center gap-2 text-sm text-gray-400 mt-8 justify-center flex-wrap">
                  <span>✓ Gratis untuk siswa SMK Muhammadiyah 1 Genteng</span>
                  <span className="text-gray-600">·</span>
                  <span>✓ Belajar dari praktisi industri</span>
                  <span className="text-gray-600">·</span>
                  <span>✓ Sertifikat yang diakui industri</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
    )
}