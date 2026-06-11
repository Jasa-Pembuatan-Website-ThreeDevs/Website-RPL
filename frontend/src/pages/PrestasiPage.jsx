import { useState, useEffect } from "react";
import LandingLayout from "../layouts/LandingLayout";
import Reveal from "../components/landing/Reveal";

// Dummy data for Prestasi to show beautiful modern cards
const PRESTASI_DATA = [
  {
    id: 1,
    title: "Juara 1 Lomba Web Design Tingkat Nasional",
    event: "LKS SMK Tingkat Nasional 2025",
    date: "12 Mei 2025",
    winner: "Tim RPL Alpha",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    description: "Meraih medali emas dalam ajang Lomba Kompetensi Siswa dengan membuat aplikasi e-learning berbasis AI.",
    category: "Web Development",
    color: "emerald"
  },
  {
    id: 2,
    title: "Medali Emas Olimpiade Sains Terapan",
    event: "Olimpiade Vokasi Nasional 2024",
    date: "24 Agustus 2024",
    winner: "Siti Maharani",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    description: "Berhasil mengalahkan 500 peserta lain dari seluruh Indonesia dalam kompetisi algoritma dan struktur data.",
    category: "Software Engineering",
    color: "cyan"
  },
  {
    id: 3,
    title: "Best UI/UX Design Award",
    event: "Hackathon TechFest 2024",
    date: "10 November 2024",
    winner: "RPL Creative Team",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    description: "Mendapatkan penghargaan desain terbaik untuk prototipe aplikasi smart city management yang revolusioner.",
    category: "UI/UX Design",
    color: "pink"
  }
];

const COLOR_MAP = {
  emerald: { border: "border-emerald-500/40", shadow: "shadow-emerald-500/20", text: "text-emerald-400", bg: "bg-emerald-500/10", from: "from-emerald-500/5", icon: "🏆", badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  cyan: { border: "border-cyan-500/40", shadow: "shadow-cyan-500/20", text: "text-cyan-400", bg: "bg-cyan-500/10", from: "from-cyan-500/5", icon: "🥇", badge: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
  pink: { border: "border-pink-500/40", shadow: "shadow-pink-500/20", text: "text-pink-400", bg: "bg-pink-500/10", from: "from-pink-500/5", icon: "🎨", badge: "bg-pink-500/20 text-pink-300 border-pink-500/30" },
  yellow: { border: "border-yellow-500/40", shadow: "shadow-yellow-500/20", text: "text-yellow-400", bg: "bg-yellow-500/10", from: "from-yellow-500/5", icon: "🛡️", badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" },
  blue: { border: "border-blue-500/40", shadow: "shadow-blue-500/20", text: "text-blue-400", bg: "bg-blue-500/10", from: "from-blue-500/5", icon: "💡", badge: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  purple: { border: "border-purple-500/40", shadow: "shadow-purple-500/20", text: "text-purple-400", bg: "bg-purple-500/10", from: "from-purple-500/5", icon: "🤖", badge: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
};

function PrestasiCard({ prestasi, idx }) {
  const colors = COLOR_MAP[prestasi.color] || COLOR_MAP.emerald;

  return (
    <Reveal delay={idx * 80}>
      <div className={`group border ${colors.border} rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:${colors.border} hover:shadow-xl hover:${colors.shadow} transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative`}>
        
        {/* Glow Effect */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${colors.from} to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`} />

        {/* Image Section */}
        <div className="relative h-56 bg-gray-800/50 overflow-hidden">
          <img
            src={prestasi.image}
            alt={prestasi.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-transparent opacity-80" />
          
          {/* Category Badge on Image */}
          <div className="absolute top-4 right-4">
            <span className={`text-xs px-3 py-1 rounded-full border backdrop-blur-md font-medium tracking-wide ${colors.badge}`}>
              {prestasi.category}
            </span>
          </div>

          {/* Date Label on Image */}
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">{colors.icon}</span>
              <span className="text-sm font-medium text-gray-300 drop-shadow-md">
                {prestasi.date}
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-7 flex flex-col flex-grow">
          {/* Winner/Achiever */}
          <div className="mb-3 flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colors.bg} ${colors.border} border`}>
              <svg className={`w-4 h-4 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className={`text-sm font-semibold ${colors.text}`}>
              {prestasi.winner}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-gray-200 transition-colors">
            {prestasi.title}
          </h3>

          {/* Event */}
          <p className="text-sm text-gray-400 font-medium mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {prestasi.event}
          </p>

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed flex-grow">
            {prestasi.description}
          </p>

          {/* Decorative Footer */}
          <div className="mt-6 pt-4 border-t border-gray-700/40 flex justify-end">
             <button className={`text-sm font-semibold ${colors.text} hover:text-white transition-colors flex items-center gap-1 group/btn`}>
                Detail Prestasi
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
             </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function PrestasiPage() {
  const [loading, setLoading] = useState(true);

  // Simulate loading to show skeleton effect (matches other pages)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LandingLayout>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] -right-[10%] w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <section className="pt-24 pb-32 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header Section */}
          <Reveal>
            <div className="flex flex-col items-center gap-4 mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-300 text-xs font-bold tracking-widest uppercase">
                <span>🏆</span>
                Wall of Fame
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-4xl tracking-tight">
                Pencapaian &{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
                  Prestasi
                </span>
              </h1>
              <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl mt-2 leading-relaxed">
                Menampilkan dedikasi, kerja keras, dan inovasi siswa-siswi jurusan Rekayasa Perangkat Lunak dalam berbagai kompetisi tingkat nasional maupun internasional.
              </p>
            </div>
          </Reveal>

          {/* Cards Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={`prestasi-skel-${i}`}
                  className="border border-gray-700/40 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm h-[520px] animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PRESTASI_DATA.map((prestasi, idx) => (
                <PrestasiCard key={prestasi.id} prestasi={prestasi} idx={idx} />
              ))}
            </div>
          )}

          {/* Call to Action Section (Optional but adds premium feel) */}
          <Reveal delay={300}>
            <div className="mt-24 border border-gray-700/40 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-gray-900/60 to-gray-800/20 backdrop-blur-md relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Punya Prestasi yang Belum Tercatat?</h3>
              <p className="text-gray-400 max-w-xl mb-8">
                Jika kamu adalah siswa atau alumni RPL dan memiliki pencapaian membanggakan, laporkan kepada pembimbing untuk ditampilkan di Wall of Fame.
              </p>
              <button className="px-8 py-3 rounded-xl bg-white text-gray-900 font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                Lapor Prestasi
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </LandingLayout>
  );
}
