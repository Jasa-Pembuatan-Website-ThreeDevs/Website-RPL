import { useEffect, useMemo, useState } from "react";
import LandingLayout from "../layouts/LandingLayout";
import Reveal from "../components/landing/Reveal";
import { publicApi, resolveMediaUrl } from "../lib/api";

function PostCard({ post, idx }) {
  const imageSrc = resolveMediaUrl(post.image_url);

  return (
    <Reveal delay={idx * 50}>
      <div className="group border border-gray-700/40 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
        <div className="relative h-52 bg-gray-800/30 overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-800/40" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-70" />
          <div className="absolute bottom-3 left-3">
            <span className="text-xs px-3 py-1 rounded-full border border-gray-700/50 bg-gray-900/50 text-gray-300">
              {post.human_date || post.published_at || "—"}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-white line-clamp-2">{post.title}</h3>
          {post.content && (
            <p className="text-sm text-gray-400 mt-3 line-clamp-3">
              {String(post.content).replace(/\s+/g, " ").trim()}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function PostsPage() {
  const [payload, setPayload] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    publicApi
      .getPosts({ per_page: "12" })
      .then((data) => setPayload(data))
      .catch((e) => setError(e?.message || "Gagal memuat data"))
      .finally(() => setLoading(false));
  }, []);

  const posts = useMemo(() => {
    const list = payload?.data || payload || [];
    return Array.isArray(list) ? list.filter((p) => p?.is_published !== false) : [];
  }, [payload]);

  return (
    <LandingLayout>
      <section className="pt-10 pb-24">
        <div className="flex flex-col items-center gap-3 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-semibold tracking-wide">
            <span>📰</span>
            Update
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
            Berita &{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Prestasi
            </span>
          </h1>
          <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
            Informasi terbaru kegiatan, karya, dan pencapaian jurusan RPL.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={`post-skel-${i}`}
                className="border border-gray-700/40 rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm h-[360px] animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="border border-red-500/30 bg-red-500/10 text-red-300 rounded-2xl p-4">{error}</div>
        ) : posts.length === 0 ? (
          <p className="text-gray-400 text-center py-12">Belum ada berita.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p, idx) => (
              <PostCard key={p.id} post={p} idx={idx} />
            ))}
          </div>
        )}
      </section>
    </LandingLayout>
  );
}

