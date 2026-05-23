import { memo } from "react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4">
      {/* Footer Background Gradient Overlays */}
      <div className="absolute top-0 left-[-20%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Footer Content Container */}
      <div className="relative z-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* --- TENTANG KAMI COLUMN --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white">Tentang Kami</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              SMKS Muhammadiyah 1 Genteng - Jurusan Rekayasa Perangkat Lunak
              mempersiapkan generasi developer masa depan dengan skill teknis
              dan karakter ungguI yang siap bersaing di industri teknologi
              global.
            </p>
          </div>

          {/* --- KONTAK COLUMN --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white">Kontak</h3>
            <div className="flex flex-col gap-4">
              {/* Address */}
              <a
                href="#"
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#00F5A0] transition-colors group"
              >
                <span className="text-lg mt-0.5 text-gray-500 group-hover:text-[#00F5A0] transition-colors">
                  📍
                </span>
                <span className="leading-relaxed">
                  Genteng, Banyuwangi, Jawa Timur
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+621234567890"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00F5A0] transition-colors group"
              >
                <span className="text-lg text-gray-500 group-hover:text-[#00F5A0] transition-colors">
                  📞
                </span>
                <span>+62 123 4567 8900</span>
              </a>

              {/* Email */}
              <a
                href="mailto:rpl@smkmuh1genteng.sch.id"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00F5A0] transition-colors group"
              >
                <span className="text-lg text-gray-500 group-hover:text-[#00F5A0] transition-colors">
                  ✉️
                </span>
                <span className="break-all">rpl@smkmuh1genteng.sch.id</span>
              </a>
            </div>
          </div>

          {/* --- IKUTI KAMI COLUMN --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white">Ikuti Kami</h3>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 border border-gray-700/40 hover:border-pink-500/60 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
              >
                📷
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-red-500/20 hover:to-red-500/20 border border-gray-700/40 hover:border-red-500/60 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
              >
                📹
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-gradient-to-br hover:from-black/50 hover:to-gray-500/20 border border-gray-700/40 hover:border-white/60 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
              >
                🎵
              </a>
            </div>
          </div>

          {/* --- MAP SECTION --- */}
          <div className="relative z-10 mb-12">
            <div className="flex flex-col gap-6">
              {/* Map Section Header */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-white">
                  📍 Kunjungi Kami
                </h3>
                <p className="text-sm text-gray-400">
                  Lokasi SMKS Muhammadiyah 1 Genteng di Banyuwangi, Jawa Timur
                </p>
              </div>

              {/* Map Container */}
              <div className="group rounded-2xl overflow-hidden border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-emerald-500/60 transition-all duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.383968530149!2d114.37936!3d-8.192477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15e3e0c8c8001%3A0x1234567890ab!2sSMKS%20Muhammadiyah%201%20Genteng!5e0!3m2!1sid!2sid!4v1234567890"
                  width="100%"
                  height="200"
                  style={{ border: "none" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-gray-700/40 mb-8"></div>

      {/* Footer Bottom */}
      <div className="relative z-10  py-6 text-center">
        {/* Copyright Text */}
        <p className="text-sm text-gray-400">
          © 2026 SMKS Muhammadiyah 1 Genteng - Jurusan RPL. All rights reserved.
        </p>

        {/* Tagline */}
        <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text">
          Good Skill, Good Attitude.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
