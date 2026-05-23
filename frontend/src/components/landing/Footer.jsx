import { memo } from "react";

const Footer = () => {
  return (
    <footer className="relative mt-32 pt-16 border-t border-gray-700/40">
      <div className="absolute top-0 left-[-20%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="relative z-10 mb-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white">Tentang Kami</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            SMKS Muhammadiyah 1 Genteng - Jurusan Rekayasa Perangkat Lunak mempersiapkan generasi developer masa depan dengan skill teknis dan karakter ungguI.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white">Kontak</h3>
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <div className="flex items-start gap-3 hover:text-[#00F5A0] transition-colors cursor-pointer">
              <span>📍</span> Genteng, Banyuwangi, Jawa Timur
            </div>
            <a href="tel:+62" className="flex items-center gap-3 hover:text-[#00F5A0] transition-colors">
              <span>📞</span> +62 123 4567 8900
            </a>
            <a href="mailto:rpl@smkmuh1genteng.sch.id" className="flex items-center gap-3 hover:text-[#00F5A0] transition-colors">
              <span>✉️</span> rpl@smkmuh1genteng.sch.id
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-bold text-white">Ikuti Kami</h3>
          <div className="flex items-center gap-4">
            {["📷", "📹", "🎵"].map((icon, idx) => (
              <a 
                key={idx}
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800/50 hover:bg-[#00F5A0]/20 border border-gray-700/40 hover:border-[#00F5A0]/60 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-gray-700/40 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400">
          © 2026 SMKS Muhammadiyah 1 Genteng - Jurusan RPL.
        </p>
        <p className="text-sm font-semibold text-transparent bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text">
          Good Skill, Good Attitude.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
