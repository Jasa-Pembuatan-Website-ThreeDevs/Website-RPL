import { useEffect, useState } from "react";
import LandingLayout from "../layouts/LandingLayout";
import Reveal from "../components/landing/Reveal";
import { publicApi, resolveMediaUrl } from "../lib/api";

function GalleryItem({ g, idx }) {
  const imageSrc = resolveMediaUrl(g.image_url);

  return (
    <Reveal delay={idx * 40}>
      <div className="group border border-gray-700/40 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300">
        <div className="relative aspect-[4/3] bg-gray-800/30 overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={g.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-800/40" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-70" />
        </div>
        <div className="p-5">
          <p className="text-white font-semibold line-clamp-2">{g.title}</p>
          <p className="text-xs text-gray-500 mt-1">#{g.id}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    publicApi
      .getGalleries()
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch((e) => setError(e?.message || "Gagal memuat data"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <LandingLayout>
      <section className="pt-10 pb-24">
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide">
            <span>🖼️</span>
            Dokumentasi
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Galeri</span>
          </h1>
          <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
            Kegiatan, karya, dan momen terbaik jurusan RPL.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`gallery-skel-${i}`}
                className="border border-gray-700/40 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm h-[320px] animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="border border-red-500/30 bg-red-500/10 text-red-300 rounded-2xl p-4">{error}</div>
        ) : items.length === 0 ? (
          <p className="text-gray-400 text-center py-12">Belum ada item galeri.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((g, idx) => (
              <GalleryItem key={g.id} g={g} idx={idx} />
            ))}
          </div>
        )}
      </section>
    </LandingLayout>
  );
}

