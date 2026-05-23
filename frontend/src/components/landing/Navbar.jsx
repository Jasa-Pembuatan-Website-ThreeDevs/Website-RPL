import { memo } from "react";

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
        {["Home", "Portfolio", "Tech Stack", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="hover:text-[#00F5A0] transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default memo(Navbar);
