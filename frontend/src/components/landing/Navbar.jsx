import { memo } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 max-w-7xl mx-auto border border-gray-600/40 px-6 py-3 mt-6 rounded-2xl flex justify-between items-center z-50 bg-[#0A0E12]/70 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#00F5A0] rounded-xl flex items-center justify-center font-bold text-black text-sm tracking-tighter">
          SM
        </div>
        <div>
          <h1 className="text-sm font-bold tracking-wide leading-none text-white">
            SMK Muhammadiyah
          </h1>
          <p className="text-[11px] text-[#00F5A0] font-semibold mt-1 tracking-wider">
            RPL Department
          </p>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        {[
          { label: "Home", href: "#home" },
          { label: "Portfolio", href: "#portfolio" },
          { label: "Mitra", href: "#partners" },
          { label: "Tech Stack", href: "#tech-stack" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-[#00F5A0] transition-colors"
          >
            {item.label}
          </a>
        ))}
        <Link
          to="/auth/v1/secure-login"
          className="px-4 py-2 border border-gray-600/40 bg-[#12181F]/40 backdrop-blur rounded-lg hover:border-[#00F5A0]/40 hover:text-[#00F5A0] transition-colors"
        >
          Masuk
        </Link>
      </nav>
    </header>
  );
};

export default memo(Navbar);
