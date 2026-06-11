import { memo } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const socialIcons = {
  Instagram: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
    </svg>
  ),
  YouTube: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z" />
    </svg>
  ),
  GitHub: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2A11.4 11.4 0 0 1 12 5c1 0 2.1.1 3 .4 2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  ),
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-transparent via-gray-900/40 to-gray-950">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 left-[-20%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[-10%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* --- BRAND COLUMN --- */}
          <div className="flex flex-col gap-6 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00F5A0] to-[#4bf3ce] rounded-xl flex items-center justify-center font-bold text-black text-sm tracking-tighter shadow-lg shadow-emerald-500/30">
                SM
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">SMK Muhammadiyah</h4>
                <p className="text-[11px] text-[#00F5A0] font-semibold mt-0.5">RPL Department</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Mempersiapkan generasi developer masa depan dengan skill teknis dan karakter unggulan.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#00F5A0] font-semibold">
              ✨ Good Skill, Good Attitude
            </div>
          </div>

          {/* --- NAVIGASI COLUMN --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white">Navigasi</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Beranda", href: "#home" },
                { label: "Filosofi", href: "#philosophy" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Tech Stack", href: "#tech-stack" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#00F5A0] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- KONTAK COLUMN --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white">Kontak</h3>
            <div className="flex flex-col gap-3">
              {/* Email */}
              <a
                href="mailto:rpl@smkmuh1genteng.sch.id"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00F5A0] transition-colors group"
              >
                <Mail className="w-4 h-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span className="break-all">rpl@smkmuh1genteng.sch.id</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+621234567890"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#00F5A0] transition-colors group"
              >
                <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-125 transition-transform" />
                <span>+62 123 4567 8900</span>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=SMKS+Muhammadiyah+1+Genteng"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-gray-400 hover:text-[#00F5A0] transition-colors group"
              >
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                <span className="leading-relaxed">Genteng, Banyuwangi, Jawa Timur</span>
              </a>
            </div>
          </div>

          {/* --- IKUTI KAMI COLUMN --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white">Ikuti Kami</h3>
            <div className="flex items-center gap-3 flex-wrap">
              {[
                {
                  icon: socialIcons.Instagram,
                  href: "https://instagram.com/smkmuh1genteng",
                  label: "Instagram",
                  color: "hover:text-pink-400 hover:border-pink-500/40",
                },
                {
                  icon: socialIcons.YouTube,
                  href: "https://youtube.com/@smkmuh1genteng",
                  label: "YouTube",
                  color: "hover:text-red-400 hover:border-red-500/40",
                },
                {
                  icon: socialIcons.GitHub,
                  href: "https://github.com/smkmuh1genteng",
                  label: "GitHub",
                  color: "hover:text-gray-300 hover:border-gray-500/40",
                },
              ].map((social) => {
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-lg border border-gray-700/40 flex items-center justify-center text-lg transition-all duration-200 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* --- PENTING COLUMN --- */}
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-bold text-white">Penting</h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Code of Conduct", href: "#" },
                { label: "Contact Us", href: "mailto:rpl@smkmuh1genteng.sch.id" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#00F5A0] transition-colors duration-200 flex items-center gap-1 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700/40 mb-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright Text */}
          <div className="text-sm text-gray-400 text-center md:text-left">
            <p>© {currentYear} SMKS Muhammadiyah 1 Genteng - Jurusan RPL.</p>
          </div>

          {/* Tagline */}
          <p className="text-sm font-semibold bg-gradient-to-r from-[#00F5A0] via-[#4bf3ce] to-[#00D2FF] bg-clip-text text-transparent">
            Good Skill, Good Attitude ✨
          </p>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="relative z-10 border-t border-gray-800/40"></div>
    </footer>
  );
};

export default memo(Footer);
