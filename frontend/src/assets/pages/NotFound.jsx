import React from "react";
import { Link } from "react-router-dom"; // Pastikan menggunakan react-router-dom

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0E12] text-white font-sans relative overflow-x-hidden antialiased flex flex-col justify-center items-center px-4">
      {/* Background Glow - Konsisten dengan LandingLayout */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="absolute top-[15%] right-[-8%] w-[min(500px,80vw)] h-[min(500px,80vw)] bg-[#00F5A0]/10 rounded-full blur-[120px] animate-glow-pulse will-change-transform" />
        <div className="absolute bottom-[10%] right-[10%] w-[min(400px,70vw)] h-[min(400px,70vw)] bg-[#00D2FF]/10 rounded-full blur-[100px] animate-glow-pulse will-change-transform [animation-delay:2s]" />
        <div className="absolute top-[45%] left-[-8%] w-[min(350px,60vw)] h-[min(350px,60vw)] bg-emerald-500/5 rounded-full blur-[90px] animate-glow-pulse will-change-transform [animation-delay:4s]" />
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 text-center max-w-lg mx-auto dynamic-fade-in">
        {/* Angka 404 Besar dengan Efek Gradient */}
        <h1 className="text-[120px] md:text-[160px] font-extrabold leading-none tracking-tighter bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,245,160,0.2)]">
          404
        </h1>

        {/* Garis Pembatas Modern */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] mx-auto my-6" />

        {/* Teks Deskripsi */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3 tracking-wide">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
          Sepertinya Anda tersesat di ruang hampa. Halaman yang Anda cari tidak
          ada atau telah dipindahkan ke dimensi lain.
        </p>

        {/* Tombol Kembali */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-[#0A0E12] bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] hover:opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,245,160,0.3)] active:translate-y-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
