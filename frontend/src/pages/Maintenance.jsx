import { memo } from "react";
import { motion } from "framer-motion";
import { Settings, Hammer, Mail, Phone } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-[#0A0E12] text-white flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background Gradient Elements (Consistent with Footer/Hero) */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="w-14 h-14 bg-gradient-to-br from-[#00F5A0] to-[#4bf3ce] rounded-xl flex items-center justify-center font-bold text-black text-xl tracking-tighter shadow-lg shadow-emerald-500/30">
            SM
          </div>
          <div className="text-left">
            <h1 className="text-lg font-bold leading-none">SMKS Muhammadiyah 1 Genteng</h1>
            <p className="text-[12px] text-[#00F5A0] font-semibold mt-1 tracking-widest uppercase">
              RPL DEPARTMENT
            </p>
          </div>
        </motion.div>

        {/* Maintenance Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-8 relative inline-block"
        >
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full animate-pulse"></div>
          <div className="relative bg-gray-900/40 backdrop-blur-xl border border-gray-700/40 p-6 rounded-3xl shadow-2xl">
            <Settings className="w-16 h-16 text-[#00F5A0] animate-[spin_8s_linear_infinite]" />
            <Hammer className="w-8 h-8 text-[#4bf3ce] absolute -bottom-2 -right-2 transform -rotate-12" />
          </div>
        </motion.div>

        {/* Main Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Sedang Dalam <br />
            <span className="bg-gradient-to-r from-[#00F5A0] via-[#4bf3ce] to-[#00D2FF] bg-clip-text text-transparent">
              Proses Pemeliharaan
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-10 leading-relaxed">
            Kami sedang melakukan peningkatan sistem untuk memberikan pengalaman belajar yang lebih baik bagi para calon developer masa depan.
          </p>
        </motion.div>

        {/* Progress Indicator (Stylized) */}
        <motion.div 
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "100%", opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="h-1.5 bg-gray-800 rounded-full max-w-md mx-auto mb-12 overflow-hidden border border-gray-700/20"
        >
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "linear"
            }}
            className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#00F5A0] to-transparent"
          />
        </motion.div>

        {/* Contact/Back Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-gray-800/40"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Mail className="w-4 h-4 text-[#00F5A0]" />
            <span>rpl@smkmuh1genteng.sch.id</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Phone className="w-4 h-4 text-[#00F5A0]" />
            <span>+62 123 4567 8900</span>
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-12 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[#00F5A0] text-xs font-medium"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Estimasi: Segera Kembali
        </motion.div>
      </div>

      {/* Footer Tagline (Consistent with Footer.jsx) */}
      <div className="absolute bottom-8 left-0 right-0 text-center opacity-40">
        <p className="text-sm font-semibold bg-gradient-to-r from-[#00F5A0] via-[#4bf3ce] to-[#00D2FF] bg-clip-text text-transparent">
          Good Skill, Good Attitude ✨
        </p>
      </div>
    </div>
  );
};

export default memo(Maintenance);
