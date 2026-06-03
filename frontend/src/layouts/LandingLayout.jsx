import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

export default function LandingLayout({ children, afterMain = null }) {
  return (
    <div className="min-h-screen bg-[#0A0E12] text-white font-sans relative overflow-x-hidden antialiased">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-[15%] right-[-8%] w-[min(500px,80vw)] h-[min(500px,80vw)] bg-[#00F5A0]/10 rounded-full blur-[120px] animate-glow-pulse will-change-transform" />
        <div className="absolute bottom-[10%] right-[10%] w-[min(400px,70vw)] h-[min(400px,70vw)] bg-[#00D2FF]/10 rounded-full blur-[100px] animate-glow-pulse will-change-transform [animation-delay:2s]" />
        <div className="absolute top-[45%] left-[-8%] w-[min(350px,60vw)] h-[min(350px,60vw)] bg-emerald-500/5 rounded-full blur-[90px] animate-glow-pulse will-change-transform [animation-delay:4s]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Navbar />
        <main className="pt-[110px] max-w-7xl mx-auto relative z-10">{children}</main>
        {afterMain}
        <Footer />
      </div>
    </div>
  );
}

