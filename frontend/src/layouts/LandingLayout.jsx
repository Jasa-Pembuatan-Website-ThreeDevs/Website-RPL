import { useState, useEffect } from "react"; 
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

export default function LandingLayout({ children, afterMain = null }) {
  // 1. State untuk mengontrol visibilitas tombol
  const [isVisible, setIsVisible] = useState(false);

  // 2. Mengatur Event Listener Scroll dengan useEffect
  useEffect(() => {
    const toggleVisibility = () => {
      // Jika scroll lebih dari 50px, ubah state jadi true
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Pasang event saat komponen muncul (mount)
    window.addEventListener('scroll', toggleVisibility);

    // CLEANUP: Hapus event saat komponen hilang (unmount) agar tidak membebani memori
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Empty array memastikan ini hanya berjalan 1x saat aplikasi di-load

  return (
    <div className="min-h-screen bg-[#0A0E12] text-white font-sans relative overflow-x-hidden antialiased">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-[15%] right-[-8%] w-[min(500px,80vw)] h-[min(500px,80vw)] bg-[#00F5A0]/10 rounded-full blur-[120px] animate-glow-pulse will-change-transform" />
        <div className="absolute bottom-[10%] right-[10%] w-[min(400px,70vw)] h-[min(400px,70vw)] bg-[#00D2FF]/10 rounded-full blur-[100px] animate-glow-pulse will-change-transform [animation-delay:2s]" />
        <div className="absolute top-[45%] left-[-8%] w-[min(350px,60vw)] h-[min(350px,60vw)] bg-emerald-500/5 rounded-full blur-[90px] animate-glow-pulse will-change-transform [animation-delay:4s]" />
      </div>

      <Navbar />
      <div className="relative max-w-7xl mx-auto">
        {/* whatsapp floating */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 ease-in-out hover:bg-[#20ba5a] hover:scale-110 
        ${isVisible
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 translate-y-16 pointer-events-none'
            }`}
          aria-label="Hubungi kami melalui WhatsApp"
        >
          <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.977 14.053 1.048 11.43 1.048c-5.44 0-9.866 4.371-9.87 9.8a9.69 9.69 0 0 0 1.492 5.147l-.983 3.593 3.69-.957zm11.536-4.636c-.31-.155-1.838-.893-2.12-.994-.28-.103-.485-.155-.688.155-.203.31-.787.984-.965 1.19-.177.205-.355.23-.665.076-.31-.155-1.307-.474-2.486-1.513-.918-.809-1.537-1.81-1.718-2.12-.181-.31-.02-.477.136-.632.14-.139.31-.361.464-.542.156-.181.208-.31.31-.517.104-.207.052-.388-.026-.543-.078-.155-.688-1.636-.943-2.24-.248-.59-.5-.51-.688-.519-.177-.009-.38-.01-.582-.01-.203 0-.532.077-.81.38-.28.305-1.066 1.03-1.066 2.513 0 1.483 1.092 2.915 1.245 3.122.152.207 2.149 3.245 5.203 4.537.727.307 1.293.49 1.734.629.73.23 1.393.197 1.918.12.585-.087 1.838-.742 2.098-1.42.26-.677.26-1.258.182-1.383-.077-.125-.28-.203-.59-.359z" />
          </svg>
        </a>

        <main className="pt-[110px] max-w-7xl mx-auto relative z-10">{children}</main>
        {afterMain}
      </div>
      <Footer />
    </div>
  );
}

