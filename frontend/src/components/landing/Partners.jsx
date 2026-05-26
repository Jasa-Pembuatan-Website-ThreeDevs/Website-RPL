import { memo, useEffect, useState } from 'react';
import { Building2, ExternalLink, Users } from 'lucide-react';
import Marquee from './Marquee';
import Reveal from './Reveal';
import { publicApi } from '../../lib/api';
import { PARTNERS as FALLBACK_PARTNERS } from './landingData';
import { normalizePartner, ensureMarqueeItems } from '../../utils/partnerHelpers';

function PartnerCard({ partner }) {
  const content = (
    <div
      className="flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-2xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-[200px] max-w-[240px] hover:scale-[1.03] cursor-default"
      style={{
        borderColor: `${partner.color}40`,
        backgroundImage: `linear-gradient(135deg, ${partner.color}08, transparent)`,
      }}
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden font-bold text-lg"
        style={{ backgroundColor: `${partner.color}20` }}
      >
        {partner.logo ? (
          <img
            src={partner.logo}
            alt={partner.name}
            className="w-full h-full object-contain p-1"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span style={{ color: partner.color }}>{partner.icon}</span>
        )}
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
  const totalQuota = partners.reduce((sum, p) => sum + (Number(p.quota) || 0), 0);
  const featured = partners.slice(0, 3);

  return (
    <section id="partners" className="pt-24 scroll-mt-28">
      <Reveal>
        <div className="flex flex-col items-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D2FF]/30 bg-[#00D2FF]/10 text-[#00D2FF] text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            DUDIKA — Dunia Usaha Dunia Industri
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-center">
            Mitra{' '}
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
              Industri
            </span>
          </h3>
          <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl">
            Data mitra langsung dari sistem CMS — berkembang bersama perusahaan teknologi di Indonesia
          </p>
        </div>
      </Reveal>

      {loading ? (
        <div className="flex justify-center gap-4 py-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-48 h-32 rounded-2xl bg-gray-800/40 animate-pulse border border-gray-700/30"
            />
          ))}
        </div>
      ) : (
        <Reveal delay={100}>
          <div className="relative w-full overflow-hidden mb-16">
            <div className="absolute left-0 top-0 w-24 md:w-32 h-full bg-gradient-to-r from-[#0A0E12] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-24 md:w-32 h-full bg-gradient-to-l from-[#0A0E12] to-transparent z-10 pointer-events-none" />
            <Marquee speed={45} className="py-6">
              {marqueeItems.map((partner) => (
                <PartnerCard key={`${partner.id}-marquee`} partner={partner} />
              ))}
            </Marquee>
          </div>
        </Reveal>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            label: 'Mitra Industri',
            value: `${partners.length}+`,
            icon: '🤝',
            border: 'border-emerald-500/40',
            accent: 'text-emerald-400',
          },
          {
            label: 'Kuota Magang',
            value: totalQuota > 0 ? `${totalQuota}` : '—',
            icon: '🎓',
            border: 'border-cyan-500/40',
            accent: 'text-cyan-400',
          },
          {
            label: 'Program DUDIKA',
            value: 'Aktif',
            icon: '🏭',
            border: 'border-yellow-500/40',
            accent: 'text-yellow-400',
          },
          {
            label: 'Kolaborasi',
            value: '2026',
            icon: '🚀',
            border: 'border-pink-500/40',
            accent: 'text-pink-400',
          },
        ].map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div
              className={`border ${stat.border} rounded-2xl p-8 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-2xl">
                  {stat.icon}
                </div>
                <div className={`text-2xl font-bold ${stat.accent}`}>{stat.value}</div>
              </div>
              <h4 className="text-lg font-bold text-white">{stat.label}</h4>
            </div>
          </Reveal>
        ))}
      </div>

      {featured.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((partner, i) => (
            <Reveal key={partner.id} delay={i * 100}>
              <div
                className="border rounded-2xl p-8 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 h-full"
                style={{ borderColor: `${partner.color}40` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden"
                    style={{ backgroundColor: `${partner.color}20` }}
                  >
                    {partner.logo ? (
                      <img src={partner.logo} alt="" className="w-full h-full object-contain" loading="lazy" />
                    ) : (
                      <span className="font-bold" style={{ color: partner.color }}>
                        {partner.icon}
                      </span>
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{partner.name}</h4>
                    {partner.quota > 0 && (
                      <p className="text-xs text-gray-400">Kuota magang: {partner.quota} siswa</p>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
                  {partner.description}
                </p>
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 text-xs text-[#00F5A0] hover:underline"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Kunjungi website
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal delay={150}>
        <div className="mt-16 border border-emerald-500/30 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💼',
                title: 'Industry Exposure',
                text: 'Belajar langsung dari praktik industri dan kebutuhan dunia kerja nyata.',
              },
              {
                icon: '🎓',
                title: 'Career Pathways',
                text: 'Akses magang dan penempatan kerja melalui jaringan mitra DUDIKA.',
              },
              {
                icon: '🚀',
                title: 'Growth Opportunities',
                text: 'Pengembangan skill berkelanjutan bersama profesional berpengalaman.',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col gap-4">
                <div className="w-14 h-14 bg-emerald-500/20 rounded-lg flex items-center justify-center text-2xl animate-float">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.text}</p>
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
