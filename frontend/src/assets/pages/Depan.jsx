import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import Philosophy from "../../components/landing/Philosophy";
import TechStack from "../../components/landing/TechStack";
import Portfolio from "../../components/landing/Portfolio";
import Partners from "../../components/landing/Partners";
import Alumni from "../../components/landing/Alumni";
import Footer from "../../components/landing/Footer";

const Depan = () => {
  return (
    <div className="min-h-screen bg-[#0A0E12] text-white font-sans relative overflow-x-hidden antialiased">
      {/* Background Glows - Fixed positioning for performance */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00F5A0]/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-[15%] right-[15%] w-[400px] h-[400px] bg-[#00D2FF]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        <Hero />
        <Philosophy />
        <TechStack />
        <Portfolio />
        <Partners />
        <Alumni />
        <Footer />
      </main>
    </div>
  );
};

export default Depan;
