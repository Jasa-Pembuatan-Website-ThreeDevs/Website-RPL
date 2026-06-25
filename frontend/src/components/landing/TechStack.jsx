import { memo, useEffect, useRef } from "react";
import { TECH_STACK } from "./landingData";

const iconBaseProps = {
  className: "h-8 w-8 drop-shadow-[0_0_12px_rgba(255,255,255,0.12)]",
  viewBox: "0 0 64 64",
  fill: "none",
  "aria-hidden": "true",
};

const ReactLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <circle cx="32" cy="32" r="5" fill={color} />
    <ellipse cx="32" cy="32" rx="24" ry="9" stroke={color} strokeWidth="3" />
    <ellipse cx="32" cy="32" rx="24" ry="9" stroke={color} strokeWidth="3" transform="rotate(60 32 32)" />
    <ellipse cx="32" cy="32" rx="24" ry="9" stroke={color} strokeWidth="3" transform="rotate(-60 32 32)" />
  </svg>
);

const LaravelLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <path d="M32 8L52 20V44L32 56L12 44V20L32 8Z" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    <path d="M32 16L42.5 22V34L32 40L21.5 34V22L32 16Z" fill={color} fillOpacity="0.28" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M21.5 22L32 28L42.5 22" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M32 28V40" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

const TypeScriptLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <rect x="8" y="8" width="48" height="48" rx="12" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="3" />
    <path d="M20 24H44" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
    <path d="M28 24V40" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
    <path d="M23 40H33" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
    <path d="M38 30.5C38 28.6 39.7 27 42 27C44.2 27 46 28.3 46 30.3C46 32.3 44.7 33 42.3 33.5C39.7 34 38 35 38 37C38 39.2 39.7 41 42.4 41C44.4 41 45.8 40.2 47 39" stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const VueLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <path d="M12 14L32 48L52 14H41.5L32 31L22.5 14H12Z" fill={color} fillOpacity="0.18" />
    <path d="M15.5 14L32 42.5L48.5 14H39.5L32 27.5L24.5 14H15.5Z" fill="#34495E" fillOpacity="0.9" />
    <path d="M22.5 14L32 31L41.5 14H34.5L32 18.4L29.5 14H22.5Z" fill={color} />
  </svg>
);

const NodeLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <path d="M32 8L50 18V46L32 56L14 46V18L32 8Z" fill={color} fillOpacity="0.18" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    <path d="M22 23.5C22 21.6 23.6 20 25.5 20H36.5C38.4 20 40 21.6 40 23.5V35.5C40 37.4 38.4 39 36.5 39H30.5C28.6 39 27 40.6 27 42.5" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="22" cy="23.5" r="2.5" fill={color} />
    <circle cx="40" cy="23.5" r="2.5" fill={color} />
    <circle cx="27" cy="42.5" r="2.5" fill={color} />
  </svg>
);

const TailwindLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <path d="M18 24C20 18 24 15 30 15C35 15 38 17.2 40 21.5C42 17.5 45 15 50 15C56 15 60 19 60 26C58 22 54 20 49 20C44 20 40.8 22.1 38 26.5C36 30.4 33 32 28 32C22 32 18.7 29.9 18 24Z" fill={color} fillOpacity="0.22" />
    <path d="M4 42C6 36 10 33 16 33C21 33 24 35.2 26 39.5C28 35.5 31 33 36 33C42 33 46 37 46 44C44 40 40 38 35 38C30 38 26.8 40.1 24 44.5C22 48.4 19 50 14 50C8 50 4.7 47.9 4 42Z" fill={color} />
    <path d="M18 54C20 49 24 46 30 46C35 46 38 48.2 40 52.5C42 48.5 45 46 50 46C56 46 60 50 60 57C58 53 54 51 49 51C44 51 40.8 53.1 38 57.5C36 61.4 33 63 28 63C22 63 18.7 60.9 18 54Z" fill={color} fillOpacity="0.16" transform="translate(0 -6)" />
  </svg>
);

const PythonLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <path d="M18 28C18 18.1 24.1 12 34 12H42C47.5 12 52 16.5 52 22V34H28C22.5 34 18 29.5 18 24V28Z" fill="#3776AB" />
    <path d="M46 36C46 45.9 39.9 52 30 52H22C16.5 52 12 47.5 12 42V30H36C41.5 30 46 34.5 46 40V36Z" fill="#FFD43B" />
    <circle cx="39.5" cy="23" r="2.2" fill="#fff" />
    <circle cx="24.5" cy="41" r="2.2" fill="#fff" />
    <path d="M30 12H42C47.5 12 52 16.5 52 22V24H28C22.5 24 18 28.5 18 34V32C18 22.1 24.1 12 34 12H30Z" fill={color} fillOpacity="0.18" />
  </svg>
);

const MySqlLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <path
      d="M10 38C16 25.5 27.5 18 41 18C48 18 53 20 57 24C53 24 50.5 25.2 48.5 28C53 30.2 55 33.4 55 38C55 48 47 56 36 56C27 56 19.7 52.6 14.2 45.8C11.4 42.3 9.9 40.2 10 38Z"
      fill={color}
      fillOpacity="0.2"
      stroke={color}
      strokeWidth="3"
      strokeLinejoin="round"
    />
    <path d="M22 44C28 36 35.5 31 44 28C43 34 44.5 39 49 43" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M42 20C38.5 25.5 35.5 29 31 31" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="46" cy="23.5" r="2.4" fill={color} />
  </svg>
);

const GitLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <circle cx="18" cy="18" r="5" fill={color} />
    <circle cx="18" cy="46" r="5" fill={color} />
    <circle cx="46" cy="32" r="5" fill={color} />
    <path d="M18 23V41" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M23 18H39" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M23 46H41" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M39 18C42 21 44 26 44 32" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M39 46C42 43 44 38 44 32" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const DockerLogo = ({ color }) => (
  <svg {...iconBaseProps}>
    <rect x="14" y="14" width="8" height="8" rx="1.5" fill={color} />
    <rect x="24" y="14" width="8" height="8" rx="1.5" fill={color} />
    <rect x="34" y="14" width="8" height="8" rx="1.5" fill={color} />
    <rect x="44" y="14" width="8" height="8" rx="1.5" fill={color} />
    <path d="M12 36C12 28.8 17.8 23 25 23H38C46.8 23 54 29.3 54 38.1C54 47.2 46.5 54 37.4 54H26C18.8 54 12 48.1 12 40.9V36Z" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="3" strokeLinejoin="round" />
    <path d="M52 35C54 36.5 55 38.8 55 41.2C51 40.8 48.7 39.9 46.7 38.1" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 39H42" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M28 44H39" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const logoMap = {
  react: ReactLogo,
  laravel: LaravelLogo,
  typescript: TypeScriptLogo,
  vue: VueLogo,
  node: NodeLogo,
  tailwind: TailwindLogo,
  python: PythonLogo,
  mysql: MySqlLogo,
  git: GitLogo,
  docker: DockerLogo,
};

function TechIcon({ logo, color }) {
  const Icon = logoMap[logo];

  if (!Icon) {
    return (
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl text-xl font-bold text-white"
        style={{ backgroundColor: `${color}25` }}
      >
        ?
      </div>
    );
  }

  return <Icon color={color} />;
}

const TechStack = () => {
  const techMarqueeRef = useRef(null);

  useEffect(() => {
    // Tech Stack Marquee Animation
    const techMarqueeContainer = techMarqueeRef.current;
    if (techMarqueeContainer) {
      const marqueeTrack = techMarqueeContainer.querySelector(".marquee-track");
      let animationId;
      let scrollPosition = 0;
      const trackWidth = marqueeTrack.scrollWidth / 2;

      const animate = () => {
        scrollPosition += 0.8;
        if (scrollPosition >= trackWidth) {
          scrollPosition = 0;
        }
        marqueeTrack.style.transform = `translateX(-${scrollPosition}px)`;
        animationId = requestAnimationFrame(animate);
      };

      animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }
  }, []);

  return (
    <section id="tech-stack" className="pt-24 scroll-mt-28">
      {/* Section Headers */}
      <div className="flex flex-col items-center gap-3 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wide">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Teknologi Terdepan
        </div>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
          Tech Stack <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Modern</span>
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
          Menguasai teknologi terbaru untuk aplikasi dunia nyata dan kesuksesan karir di industri
        </p>
      </div>

      {/* Marquee Container */}
      <div ref={techMarqueeRef} className="relative w-full overflow-hidden group">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#0A0E12] via-[#0A0E12]/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#0A0E12] via-[#0A0E12]/50 to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="marquee-track flex gap-6 md:gap-8 py-10 will-change-transform">
          {/* First Set */}
          {TECH_STACK.map((tech, idx) => (
            <div
              key={`tech-1-${idx}`}
              className="group/item flex flex-col items-center gap-3 px-7 py-5 rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-max hover:scale-110"
              style={{
                borderColor: `${tech.color}40`,
                backgroundImage: `linear-gradient(135deg, ${tech.color}08, transparent)`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center group-hover/item:scale-125 transition-transform duration-300"
                style={{ backgroundColor: `${tech.color}25` }}
              >
                <TechIcon logo={tech.logo} color={tech.color} />
              </div>
              <span className="text-sm font-bold text-gray-200 group-hover/item:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}

          {/* Duplicate Set untuk infinite loop */}
          {TECH_STACK.map((tech, idx) => (
            <div
              key={`tech-2-${idx}`}
              className="group/item flex flex-col items-center gap-3 px-7 py-5 rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-max hover:scale-110"
              style={{
                borderColor: `${tech.color}40`,
                backgroundImage: `linear-gradient(135deg, ${tech.color}08, transparent)`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center group-hover/item:scale-125 transition-transform duration-300"
                style={{ backgroundColor: `${tech.color}25` }}
              >
                <TechIcon logo={tech.logo} color={tech.color} />
              </div>
              <span className="text-sm font-bold text-gray-200 group-hover/item:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {[
          {
            icon: "🎯",
            title: "Problem Solving",
            desc: "Menyelesaikan masalah kompleks dengan solusi inovatif"
          },
          {
            icon: "📈",
            title: "Scalable Development",
            desc: "Membangun aplikasi yang dapat berkembang dengan kebutuhan"
          },
          {
            icon: "🔐",
            title: "Best Practices",
            desc: "Mengikuti standar industri dan keamanan terbaik"
          }
        ].map((item, idx) => (
          <div key={idx} className="border border-gray-700/40 rounded-2xl p-6 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group/card">
            <div className="text-4xl mb-4 group-hover/card:scale-125 transition-transform duration-300">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-white mb-2 group-hover/card:text-blue-300 transition-colors">
              {item.title}
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default memo(TechStack);
