  import React, { useEffect, useRef } from "react";
import { memo } from "react";
import Marquee from "./Marquee";
import { PARTNERS } from "./landingData";

const Partners = () => {

  const techMarqueeRef = useRef(null);
    const partnerMarqueeRef = useRef(null);
  
    useEffect(() => {
      // Tech Stack Marquee Animation
      const techMarqueeContainer = techMarqueeRef.current;
      if (techMarqueeContainer) {
        const marqueeTrack = techMarqueeContainer.querySelector(".marquee-track");
        let animationId;
        let scrollPosition = 0;
        const trackWidth = marqueeTrack.scrollWidth / 2;
  
        const animate = () => {
          scrollPosition += 0.8; // Kontrol kecepatan (semakin besar, semakin cepat)
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
  
    useEffect(() => {
      // Partner Ecosystem Marquee Animation
      const partnerMarqueeContainer = partnerMarqueeRef.current;
      if (partnerMarqueeContainer) {
        const marqueeTrack =
          partnerMarqueeContainer.querySelector(".marquee-track");
        let animationId;
        let scrollPosition = 0;
        const trackWidth = marqueeTrack.scrollWidth / 2;
  
        const animate = () => {
          scrollPosition += 0.8; // Kontrol kecepatan (semakin besar, semakin cepat)
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
    <section id="partners" className="pt-24">
      {/* Section Headers */}
      <div className="flex flex-col items-center gap-3 mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-center">
          Partner{" "}
          <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
            Ecosystem
          </span>
        </h3>
        <p className="text-center text-gray-400 text-base md:text-lg">
          Berkembang bersama perusahaan teknologi terkemuka di Indonesia
        </p>
      </div>

      {/* Partners Marquee Container */}
      <div
        ref={partnerMarqueeRef}
        className="relative w-full overflow-hidden mb-16"
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0A0E12] to-transparent z-10 pointer-events-none"></div>

        {/* Marquee Track */}
        <div className="marquee-track flex gap-8 md:gap-12 py-8 will-change-transform">
          {/* Partner Items - First Set */}
          {[
            {
              name: "Gojek",
              color: "#00B81A",
              icon: "🚗",
              description: "On-demand services",
            },
            {
              name: "Tokopedia",
              color: "#1CB127",
              icon: "🛍️",
              description: "E-commerce platform",
            },
            {
              name: "Bukalapak",
              color: "#FF4444",
              icon: "📦",
              description: "Marketplace solutions",
            },
            {
              name: "Shopee",
              color: "#FF6600",
              icon: "🏪",
              description: "Social commerce",
            },
            {
              name: "Traveloka",
              color: "#0080FF",
              icon: "✈️",
              description: "Travel & booking",
            },
            {
              name: "Telkom",
              color: "#FF0000",
              icon: "📡",
              description: "Telecommunications",
            },
            {
              name: "Bank BRI",
              color: "#0066FF",
              icon: "🏦",
              description: "Financial services",
            },
            {
              name: "OVO",
              color: "#6B2AC1",
              icon: "💳",
              description: "Digital wallet",
            },
          ].map((partner, idx) => (
            <div
              key={`partner-1-${idx}`}
              className="flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-2xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-max hover:scale-105 cursor-pointer"
              style={{
                borderColor: `${partner.color}40`,
                backgroundImage: `linear-gradient(135deg, ${partner.color}05, transparent)`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl font-bold"
                style={{ backgroundColor: `${partner.color}20` }}
              >
                {partner.icon}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-white">
                  {partner.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {partner.description}
                </div>
              </div>
            </div>
          ))}

          {/* Partner Items - Duplicate Set untuk infinite loop */}
          {[
            {
              name: "Gojek",
              color: "#00B81A",
              icon: "🚗",
              description: "On-demand services",
            },
            {
              name: "Tokopedia",
              color: "#1CB127",
              icon: "🛍️",
              description: "E-commerce platform",
            },
            {
              name: "Bukalapak",
              color: "#FF4444",
              icon: "📦",
              description: "Marketplace solutions",
            },
            {
              name: "Shopee",
              color: "#FF6600",
              icon: "🏪",
              description: "Social commerce",
            },
            {
              name: "Traveloka",
              color: "#0080FF",
              icon: "✈️",
              description: "Travel & booking",
            },
            {
              name: "Telkom",
              color: "#FF0000",
              icon: "📡",
              description: "Telecommunications",
            },
            {
              name: "Bank BRI",
              color: "#0066FF",
              icon: "🏦",
              description: "Financial services",
            },
            {
              name: "OVO",
              color: "#6B2AC1",
              icon: "💳",
              description: "Digital wallet",
            },
          ].map((partner, idx) => (
            <div
              key={`partner-2-${idx}`}
              className="flex flex-col items-center justify-center gap-3 px-6 py-6 rounded-2xl border border-gray-700/40 bg-gradient-to-br from-gray-900/40 to-transparent backdrop-blur-sm hover:border-gray-600/60 hover:bg-gray-900/60 transition-all duration-300 whitespace-nowrap flex-shrink-0 min-w-max hover:scale-105 cursor-pointer"
              style={{
                borderColor: `${partner.color}40`,
                backgroundImage: `linear-gradient(135deg, ${partner.color}05, transparent)`,
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl font-bold"
                style={{ backgroundColor: `${partner.color}20` }}
              >
                {partner.icon}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-white">
                  {partner.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {partner.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* 50+ Industry Partners */}
        <div className="border border-emerald-500/40 rounded-2xl p-8 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm hover:border-emerald-500/60 transition-all duration-300 group cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🤝
            </div>
            <div className="text-2xl font-bold text-emerald-400">50+</div>
          </div>
          <h4 className="text-lg font-bold text-white mb-2">
            Industry Partners
          </h4>
          <p className="text-xs text-gray-400">Leading companies</p>
        </div>

        {/* 100% Placement Rate */}
        <div className="border border-yellow-500/40 rounded-2xl p-8 bg-gradient-to-br from-yellow-500/5 to-transparent backdrop-blur-sm hover:border-yellow-500/60 transition-all duration-300 group cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              📈
            </div>
            <div className="text-2xl font-bold text-yellow-400">100%</div>
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Placement Rate</h4>
          <p className="text-xs text-gray-400">Student success</p>
        </div>

        {/* 250+ Successful Placements */}
        <div className="border border-cyan-500/40 rounded-2xl p-8 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-sm hover:border-cyan-500/60 transition-all duration-300 group cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              🎯
            </div>
            <div className="text-2xl font-bold text-cyan-400">250+</div>
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Success Stories</h4>
          <p className="text-xs text-gray-400">Alumni placements</p>
        </div>

        {/* 95% Satisfaction Rate */}
        <div className="border border-pink-500/40 rounded-2xl p-8 bg-gradient-to-br from-pink-500/5 to-transparent backdrop-blur-sm hover:border-pink-500/60 transition-all duration-300 group cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
              ⭐
            </div>
            <div className="text-2xl font-bold text-pink-400">95%</div>
          </div>
          <h4 className="text-lg font-bold text-white mb-2">
            Satisfaction Rate
          </h4>
          <p className="text-xs text-gray-400">Partner feedback</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial Card 1 - Tokopedia */}
        <div className="border border-green-500/40 rounded-2xl p-8 bg-gradient-to-br from-green-500/5 to-transparent backdrop-blur-sm hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-xl">
              🛍️
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Tokopedia</h4>
              <p className="text-xs text-gray-400">E-commerce Leader</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 italic mb-4">
            "Siswa dari RPL menunjukkan skill teknis yang solid dan attitude
            yang luar biasa. Mereka siap berkontribusi dari hari pertama."
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ⭐
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-400 ml-2">5.0</span>
          </div>
        </div>

        {/* Testimonial Card 2 - Gojek */}
        <div className="border border-green-500/40 rounded-2xl p-8 bg-gradient-to-br from-green-500/5 to-transparent backdrop-blur-sm hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-xl">
              🚗
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Gojek</h4>
              <p className="text-xs text-gray-400">Mobility Services</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 italic mb-4">
            "Kami sangat terkesan dengan kemampuan problem-solving dan
            kolaborasi tim dari lulusan RPL. Mereka menjadi aset berharga."
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ⭐
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-400 ml-2">5.0</span>
          </div>
        </div>

        {/* Testimonial Card 3 - Bukalapak */}
        <div className="border border-red-500/40 rounded-2xl p-8 bg-gradient-to-br from-red-500/5 to-transparent backdrop-blur-sm hover:border-red-500/60 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center text-xl">
              📦
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Bukalapak</h4>
              <p className="text-xs text-gray-400">Marketplace Platform</p>
            </div>
          </div>
          <p className="text-sm text-gray-300 italic mb-4">
            "Dedikasi dan semangat belajar siswa RPL luar biasa. Mereka tidak
            hanya menyelesaikan tugas, tapi juga berinovasi."
          </p>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ⭐
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-400 ml-2">5.0</span>
          </div>
        </div>
      </div>

      {/* Partnership Benefits Section */}
      <div className="mt-16 border border-emerald-500/30 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-emerald-500/5 to-transparent backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit 1 */}
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 bg-emerald-500/20 rounded-lg flex items-center justify-center text-2xl">
              💼
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Industry Exposure
              </h4>
              <p className="text-sm text-gray-400">
                Langsung belajar dari praktik industri dan kebutuhan dunia kerja
                yang sesungguhnya.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 bg-cyan-500/20 rounded-lg flex items-center justify-center text-2xl">
              🎓
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Career Pathways
              </h4>
              <p className="text-sm text-gray-400">
                Akses langsung ke kesempatan magang dan penempatan kerja di
                perusahaan terkemuka.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col gap-4">
            <div className="w-14 h-14 bg-yellow-500/20 rounded-lg flex items-center justify-center text-2xl">
              🚀
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-2">
                Growth Opportunities
              </h4>
              <p className="text-sm text-gray-400">
                Pengembangan skill berkelanjutan dan mentoring dari profesional
                berpengalaman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Partners);
