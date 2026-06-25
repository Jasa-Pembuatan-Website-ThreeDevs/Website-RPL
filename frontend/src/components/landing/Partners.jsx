import { memo, useEffect, useState } from 'react';
import { Building2, ExternalLink, Users } from 'lucide-react';
import Marquee from './Marquee';
import Reveal from './Reveal';
import { publicApi } from '../../lib/api';
import { PARTNERS as FALLBACK_PARTNERS } from './landingData';
import { normalizePartner, ensureMarqueeItems } from '../../utils/partnerHelpers';

const makeInitials = (name) => {
  if (!name) return 'M';
  return name
    .split(' ')
    .map((s) => s[0]?.toUpperCase() || '')
    .slice(0, 2)
    .join('');
};

const makeFallbackDataUrl = (label, bg) => {
  const size = 140;
  const initials = makeInitials(label);
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}' viewBox='0 0 ${size} ${size}'>` +
    `<rect width='100%' height='100%' fill='${bg.replace(/'/g, '%27')}' rx='20'/>` +
    `<text x='50%' y='55%' font-family='Inter, Roboto, Arial, sans-serif' font-size='52' fill='white' text-anchor='middle' dominant-baseline='middle' font-weight='700'>${initials}</text>` +
    `</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

function PartnerCard({ partner }) {
  const fallbackSrc = makeFallbackDataUrl(partner.name, partner.color || '#0ea5a4');

  const content = (
    <div
      className="flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-2xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 flex-shrink-0 min-w-[220px] max-w-[260px] hover:scale-[1.03] cursor-default"
      style={{
        borderColor: `${partner.color}40`,
        backgroundImage: `linear-gradient(135deg, ${partner.color}08, transparent)`,
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden font-bold text-lg"
        style={{ backgroundColor: `${partner.color}20` }}
      >
        <img
          src={partner.logo || fallbackSrc}
          alt={partner.name}
          className="w-full h-full object-contain p-1"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            if (!e.currentTarget.dataset.fallback) {
              e.currentTarget.dataset.fallback = '1';
              e.currentTarget.src = fallbackSrc;
            }
          }}
        />
      </div>
      <div className="text-center">
        <div className="text-sm font-bold text-white">{partner.name}</div>
        <div className="text-xs text-gray-400 mt-1 line-clamp-2 max-w-[180px]">
          {partner.description}
        </div>
        {partner.quota > 0 && (
          <div className="text-[10px] text-[#00F5A0] mt-2 flex items-center justify-center gap-1">
            <Users className="w-3 h-3" />
            Kuota magang: {partner.quota}
          </div>
        )}
      </div>
    </div>
  );

  if (partner.website) {
    return (
      <a
        href={partner.website}
        target="_blank"
        rel="noreferrer"
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]/50 rounded-2xl"
        aria-label={`Kunjungi website ${partner.name}`}
      >
        {content}
      </a>
    );
  }

  return content;
}

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    publicApi
      .getPartners()
      .then((data) => {
        const list = Array.isArray(data) ? data : [];
        if (list.length > 0) {
          setPartners(list.map(normalizePartner));
        } else {
          setPartners(FALLBACK_PARTNERS.map((p) => normalizePartner({
            id: p.name,
            company_name: p.name,
            description: p.description,
            logo_image: null,
          })));
        }
      })
      .catch(() => {
        setPartners(
          FALLBACK_PARTNERS.map((p) =>
            normalizePartner({
              id: p.name,
              company_name: p.name,
              description: p.description,
            })
          )
        );
      })
      .finally(() => setLoading(false));
  }, []);

  const marqueeItems = ensureMarqueeItems(partners);
  const featured = partners.slice(0, 3);

  return (
    <section id="partners" className="pt-24 scroll-mt-28">
      <Reveal>
        <div className="flex flex-col items-center gap-3 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wide">
            <Building2 className="w-4 h-4" />
            Program DUDIKA
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center max-w-3xl">
            Mitra <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Industri</span>
          </h3>
          <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
            Terhubung dengan perusahaan terkemuka melalui Program DUDIKA (Dunia Usaha Dunia Industri) untuk magang dan penempatan karir
          </p>
        </div>
      </Reveal>

      {/* Partners Marquee */}
      {loading ? (
        <div className="flex justify-center gap-4 py-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-48 h-32 rounded-3xl bg-gray-800/40 animate-pulse border border-gray-700/30"
            />
          ))}
        </div>
      ) : (
        <Reveal delay={100}>
          <div className="relative w-full overflow-hidden mb-20 rounded-3xl">
            <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#0A0E12] via-[#0A0E12]/50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#0A0E12] via-[#0A0E12]/50 to-transparent z-10 pointer-events-none"></div>
            <Marquee speed={45} className="py-8">
              {marqueeItems.map((partner) => (
                <PartnerCard key={`${partner.id}-marquee`} partner={partner} />
              ))}
            </Marquee>
          </div>
        </Reveal>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {[
          {
            label: 'Perusahaan Mitra',
            value: `${partners.length}+`,
            icon: '🤝',
            border: 'from-emerald-500/20',
            accent: 'text-emerald-400',
            color: '#00F5A0',
          },
          {
            label: 'Program Aktif',
            value: 'DUDIKA',
            icon: '🏭',
            border: 'from-yellow-500/20',
            accent: 'text-yellow-400',
            color: '#FFBD2E',
          },
          {
            label: 'Mulai Tahun',
            value: '2026',
            icon: '🚀',
            border: 'from-pink-500/20',
            accent: 'text-pink-400',
            color: '#FF6B9D',
          },
        ].map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div
              className={`border bg-gradient-to-br ${stat.border} to-transparent backdrop-blur-sm rounded-3xl p-8 hover:scale-105 hover:shadow-lg transition-all duration-300 group/stat`}
              style={{
                borderColor: `${stat.color}40`,
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-4xl group-hover/stat:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold ${stat.accent}`}>
                  {stat.value}
                </div>
              </div>
              <h4 className="text-base font-bold text-white">
                {stat.label}
              </h4>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Featured Partners */}
      {featured.length > 0 && (
        <div className="mb-20">
          <Reveal>
            <h4 className="text-2xl font-bold text-center mb-12 text-white">
              Mitra Unggulan
            </h4>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((partner, i) => {
              const fsrc = makeFallbackDataUrl(partner.name, partner.color || '#0ea5a4');
              return (
                <Reveal key={partner.id} delay={i * 100}>
                  <div
                  className="border rounded-3xl p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm hover:shadow-xl hover:scale-105 transition-all duration-300 h-full group/card"
                  style={{ borderColor: `${partner.color}40` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden font-bold text-2xl flex-shrink-0 group-hover/card:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${partner.color}25` }}
                    >
                      <img
                        src={partner.logo || fsrc}
                        alt={partner.name}
                        className="w-full h-full object-contain p-2"
                        loading="lazy"
                        onError={(e) => {
                          if (!e.currentTarget.dataset.fallback) {
                            e.currentTarget.dataset.fallback = '1';
                            e.currentTarget.src = fsrc;
                          }
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover/card:text-cyan-300 transition-colors">{partner.name}</h4>
                      {partner.quota > 0 && (
                        <p className="text-sm text-gray-400 flex items-center gap-1 mt-1">
                          <Users className="w-3 h-3" />
                          Kuota: {partner.quota} siswa
                        </p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed line-clamp-4 mb-6">
                    {partner.description}
                  </p>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#00F5A0] hover:bg-emerald-500/20 rounded-lg transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Kunjungi
                    </a>
                  )}
                </div>
              </Reveal>
            )})}            
          </div>
        </div>
      )}

      {/* Benefits Section */}
      <Reveal delay={150}>
        <div className="border border-emerald-500/40 rounded-3xl p-8 md:p-12 bg-gradient-to-br from-emerald-500/10 to-transparent backdrop-blur-sm">
          <h4 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
            Manfaat Program DUDIKA
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: '💼',
                title: 'Pengalaman Industri',
                text: 'Belajar langsung dari praktik industri dan kebutuhan dunia kerja nyata.',
              },
              {
                icon: '🎓',
                title: 'Jalur Karir',
                text: 'Akses magang dan penempatan kerja melalui jaringan mitra industri kami.',
              },
              {
                icon: '🚀',
                title: 'Pengembangan Skill',
                text: 'Pelatihan berkelanjutan bersama profesional berpengalaman dari industri.',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-4 group/benefit">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-3xl group-hover/benefit:scale-125 group-hover/benefit:bg-emerald-500/30 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h5 className="text-lg font-bold text-white mb-2 group-hover/benefit:text-emerald-300 transition-colors">
                    {item.title}
                  </h5>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default memo(Partners);
