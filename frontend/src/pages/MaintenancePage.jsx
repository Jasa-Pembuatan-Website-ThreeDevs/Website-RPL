import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-[#0A0E12] text-white font-sans relative overflow-hidden antialiased flex flex-col justify-center items-center px-4">
      {/* Background Glow - Fixed positioning and pointer-events-none to prevent layout interference */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="absolute top-[15%] right-[-8%] w-[min(500px,80vw)] h-[min(500px,80vw)] bg-[#00F5A0]/10 rounded-full blur-[120px] animate-glow-pulse will-change-transform" />
        <div className="absolute bottom-[10%] right-[10%] w-[min(400px,70vw)] h-[min(400px,70vw)] bg-[#00D2FF]/10 rounded-full blur-[100px] animate-glow-pulse will-change-transform [animation-delay:2s]" />
        <div className="absolute top-[45%] left-[-8%] w-[min(350px,60vw)] h-[min(350px,60vw)] bg-emerald-500/5 rounded-full blur-[90px] animate-glow-pulse will-change-transform [animation-delay:4s]" />
      </div>

      {/* Konten Utama - Menggunakan hero-enter yang lebih stabil */}
      <div className="relative z-10 text-center max-w-lg mx-auto hero-enter">
        {/* Lottie Animation Container - Fixed size to prevent layout shifts */}
        <div className="mb-8 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-hidden">
                <DotLottieReact
                    src="https://lottie.host/67dd3251-89d6-418e-b773-35503899cc77/pwoP8Foy5l.lottie"
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>

        {/* Header dengan Efek Gradient */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,245,160,0.2)] uppercase hero-enter-delay-1">
          Maintenance Mode
        </h1>

        {/* Garis Pembatas Modern */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] mx-auto my-6 hero-enter-delay-2" />

        {/* Teks Deskripsi */}
        <div className="hero-enter-delay-3">
            <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-wide text-white">
            Sedang Dalam Perbaikan
            </h2>
            <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
            Kami sedang melakukan pembaruan untuk meningkatkan pengalaman Anda. 
            Mohon tunggu sebentar, kami akan segera kembali dengan fitur-fitur yang lebih keren!
            </p>
        </div>

        {/* Info Tambahan / Kontak */}
        <div className="flex flex-col items-center gap-4 hero-enter-delay-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
                Estimasi Selesai: Segera
            </p>
            <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-[#00F5A0] animate-ping"></div>
                <div className="w-2 h-2 rounded-full bg-[#00F5A0]"></div>
                <div className="w-2 h-2 rounded-full bg-[#00F5A0] opacity-50"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
