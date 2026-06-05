import { memo, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Mitra", href: "#partners" },
    { label: "Alumni", href: "#alumni" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="border border-gray-600/40 rounded-2xl px-6 py-3.5 bg-[#0A0E12]/70 backdrop-blur-xl flex justify-between items-center shadow-lg shadow-emerald-500/5 hover:border-gray-600/60 transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
            <div className="w-11 h-11 bg-gradient-to-br from-[#00F5A0] to-[#4bf3ce] rounded-xl flex items-center justify-center font-bold text-black text-sm tracking-tighter shadow-lg shadow-emerald-500/30">
              SM
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-wide leading-none text-white">
                SMKS Muhammadiyah 1 Genteng
              </h1>
              <p className="text-[11px] text-[#00F5A0] font-semibold mt-1 tracking-widest">
                RPL DEPARTMENT
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-[#00F5A0] hover:scale-105 transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <Link
              to="/auth/v1/secure-login"
              className="px-5 py-2.5 border border-gray-600/40 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-lg hover:border-[#00F5A0]/60 hover:bg-emerald-500/10 hover:text-[#00F5A0] transition-all duration-200 font-semibold"
            >
              Masuk
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800/40 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 border border-gray-600/40 rounded-2xl px-6 py-4 bg-[#0A0E12]/95 backdrop-blur-xl shadow-lg shadow-emerald-500/5 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2.5 text-gray-300 hover:text-[#00F5A0] hover:bg-emerald-500/10 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to="/auth/v1/secure-login"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2.5 border border-gray-600/40 bg-gradient-to-br from-gray-900/40 to-gray-800/20 rounded-lg text-white hover:border-[#00F5A0]/60 hover:bg-emerald-500/10 hover:text-[#00F5A0] transition-all duration-200 font-semibold"
              >
                Masuk
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Navbar);
