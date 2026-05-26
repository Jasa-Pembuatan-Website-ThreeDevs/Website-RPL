import { memo, useEffect, useState } from "react";
import { publicApi, storageUrl } from "../../lib/api";
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
      <div className="flex flex-col items-center gap-3 mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center">
          Student Portfolio
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg">
          Real projects built by our talented students
        </p>
      </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading && (
          <p className="col-span-full text-center text-gray-500">Memuat portfolio...</p>
        )}
        {!loading && projects.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            Belum ada proyek dipublikasikan.
          </p>
        )}
        {projects.map((project, index) => (
        <Reveal key={project.id} delay={index * 80}>
        <div
          className="group rounded-2xl overflow-hidden border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:scale-[1.02] transition-all duration-300 h-full"
        >
          <div className="relative h-56 bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-transparent overflow-hidden">
            {project.thumbnail_image ? (
              <img
                src={storageUrl(project.thumbnail_image)}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-30">
                💻
              </div>
            )}
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F5A0] transition-colors">
              {project.title}
            </h4>
            <p className="text-sm text-gray-400 mb-2">
              {project.student?.user?.name} · Kelas {project.student?.grade_level}
            </p>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {(project.tech_stack || []).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold bg-[#00F5A0]/10 text-[#00F5A0] rounded-full border border-[#00F5A0]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {project.demo_url && (
                <a
                  href={project.demo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#00F5A0] hover:text-[#4bf3ce] transition-colors"
                >
                  <span>↗</span> Live Demo
                </a>
              )}
              {project.repo_url && (
                <a
                  href={project.repo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors border-l border-gray-700/40"
                >
                  <span>{"</>"}</span> Code
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
