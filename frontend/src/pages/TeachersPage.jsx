import { useEffect, useState } from "react";
import LandingLayout from "../layouts/LandingLayout";
import Reveal from "../components/landing/Reveal";
import { publicApi, resolveMediaUrl, storageUrl } from "../lib/api";

function TeacherCard({ t, idx }) {
  // Backend sometimes provides `photo_path` instead of `photo_url`.
  // Use a stateful src so we can retry alternate URLs on error.
  const initialSrc = resolveMediaUrl(t.photo_url || t.photo_path || t.image_url);
  const [imgSrc, setImgSrc] = useState(initialSrc);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (failed) return; // already tried fallback
    setFailed(true);
    // Try direct storage path as absolute /storage/... (bypass parsing quirks)
    const alt = storageUrl(t.photo_path || t.photo_url || t.image_url) || resolveMediaUrl(t.photo_path) || null;
    if (alt) setImgSrc(alt);
  };

  return (
    <Reveal delay={idx * 60}>
      <div className="border border-gray-700/40 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 hover:scale-[1.02] h-full">
        <div className="relative h-56 bg-gradient-to-br from-gray-800/50 to-transparent overflow-hidden">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={t.name}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={handleError}
            />
          ) : (
            <div className="w-full h-full bg-gray-800/40" />
          )}
          {failed && (
            <div className="absolute bottom-2 left-2 right-2 text-xs text-red-300 bg-black/50 rounded px-2 py-1">
              Gagal memuat gambar
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-70" />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white">{t.name}</h3>
          <p className="text-sm text-[#00F5A0] font-semibold mt-1">{t.position}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function TeachersPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    publicApi
      .getTeachers()
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch((e) => setError(e?.message || "Gagal memuat data"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <LandingLayout>
      <section className="pt-10 pb-24">
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-wide">
            <span>👨‍🏫</span>
            Tim Pengajar
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
            Profil <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Guru</span>
          </h1>
          <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
            Para pengajar yang membimbing dan menyiapkan generasi developer masa depan.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`teacher-skel-${i}`}
                className="border border-gray-700/40 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm h-[340px] animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="border border-red-500/30 bg-red-500/10 text-red-300 rounded-2xl p-4">{error}</div>
        ) : items.length === 0 ? (
          <p className="text-gray-400 text-center py-12">Belum ada data guru.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((t, idx) => (
              <TeacherCard key={t.id} t={t} idx={idx} />
            ))}
          </div>
        )}
      </section>
    </LandingLayout>
  );
}

