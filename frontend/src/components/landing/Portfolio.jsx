import { memo, useEffect, useState } from "react";
import { publicApi, resolveMediaUrl } from "../../lib/api";
import Reveal from "./Reveal";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    publicApi
      .getProjects()
      .then((data) => setProjects(Array.isArray(data) ? data : []))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="portfolio" className="pt-24 scroll-mt-28">
      <Reveal>
        <div className="flex flex-col items-center gap-3 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-[#00D2FF] text-xs font-semibold tracking-wide">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Portfolio Siswa
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
            Karya <span className="bg-gradient-to-r from-cyan-400 to-[#00D2FF] bg-clip-text text-transparent">Proyek Nyata</span>
          </h3>
          <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
            Proyek-proyek inovatif yang dikembangkan oleh siswa kami dengan teknologi terkini
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading && (
          <div className="col-span-full flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#00F5A0] mx-auto mb-4"></div>
              <p className="text-gray-400">Memuat portfolio...</p>
            </div>
          </div>
        )}
        {!loading && projects.length === 0 && (
          <div className="col-span-full flex justify-center items-center py-20">
            <div className="text-center">
              <p className="text-2xl text-gray-500 mb-2">📋</p>
              <p className="text-gray-400">Belum ada proyek yang dipublikasikan</p>
            </div>
          </div>
        )}
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 80}>
            <div className="group h-full rounded-3xl overflow-hidden border border-gray-700/40 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm hover:border-gray-500/80 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 flex flex-col">
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 via-emerald-500/10 to-transparent overflow-hidden">
                {project.thumbnail_image ? (
                  <img
                    src={resolveMediaUrl(project.thumbnail_image)}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-20 group-hover:opacity-30 transition-opacity">
                    💻
                  </div>
                )}
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Content Container */}
              <div className="p-6 md:p-7 flex flex-col flex-1">
                {/* Title */}
                <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#00F5A0] transition-colors line-clamp-2">
                  {project.title}
                </h4>

                {/* Student Info */}
                <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                  <span>👤</span>
                  <span>{project.student?.user?.name}</span>
                  <span className="text-gray-600">·</span>
                  <span>Kelas {project.student?.grade_level}</span>
                </p>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-6 leading-relaxed line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                {(project.tech_stack || []).length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.tech_stack || []).slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-semibold bg-[#00F5A0]/15 text-[#00F5A0] rounded-full border border-[#00F5A0]/30 hover:bg-[#00F5A0]/25 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                    {(project.tech_stack || []).length > 4 && (
                      <span className="px-3 py-1.5 text-xs font-semibold bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/40">
                        +{project.tech_stack.length - 4}
                      </span>
                    )}
                  </div>
                )}

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-700/40">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#00F5A0] hover:bg-emerald-500/20 hover:text-[#4bf3ce] rounded-lg transition-all duration-200 flex-1 justify-center"
                    >
                      <span>🌐</span> Live Demo
                    </a>
                  )}
                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-300 hover:bg-gray-800/50 hover:text-white rounded-lg transition-all duration-200 flex-1 justify-center"
                    >
                      <span>💾</span> Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default memo(Portfolio);
