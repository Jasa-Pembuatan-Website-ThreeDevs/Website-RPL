import { Link } from "react-router-dom";

export default function Cta() {
    return(
        <div className="mt-24 border-t border-gray-700/40">
        <div className="relative rounded-3xl overflow-hidden  p-12 md:p-20">
          {/* Content Container */}
          <div className="relative z-10 flex flex-col items-center gap-8 text-center">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Mari Bergabung Bersama Kami
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
              Wujudkan karir impianmu di dunia teknologi
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              {/* Primary Button - Daftar Sekarang */}
              <Link
                to="/register"
                className="px-8 py-4 bg-[#4bf3ce] text-black font-bold text-lg rounded-xl hover:brightness-110 transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 duration-300"
              >
                Daftar Sekarang
              </Link>

              {/* Secondary Button - Hubungi Kami */}
              <a
                href="mailto:rpl@smkmuh1genteng.sch.id"
                className="px-8 py-4 border-2 border-gray-600 text-white font-bold text-lg rounded-xl hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-105 backdrop-blur"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}