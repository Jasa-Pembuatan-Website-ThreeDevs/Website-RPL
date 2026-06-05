import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, Home, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SuccessRegistration() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#1a1a2e] to-[#1e3a8a] relative overflow-hidden flex items-center justify-center p-4">
      {/* Background Effects (consistent with Registration page) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg relative z-10"
      >
        {/* Main Card */}
        <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-center">
          {/* Animated Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3 
            }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-8 shadow-[0_0_40px_rgba(79,70,229,0.5)]"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>

          {/* Text Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pendaftaran Berhasil!
          </h1>
          
          <div className="space-y-4 mb-10">
            <p className="text-gray-300 text-lg leading-relaxed">
              Data Anda telah berhasil dikirim dan saat ini sedang dalam tahap{" "}
              <span className="text-indigo-400 font-semibold">verifikasi oleh admin</span>.
            </p>
            <p className="text-gray-400 text-sm italic">
              Mohon tunggu informasi selanjutnya yang akan dikirimkan melalui nomor WhatsApp yang telah Anda daftarkan.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-semibold transition-all duration-300 group"
            >
              <Home className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Beranda</span>
            </button>
            <button
              onClick={() => navigate("/info")}
              className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] rounded-xl text-white font-semibold transition-all duration-300 group"
            >
              <Info className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Info Lainnya</span>
            </button>
          </div>
        </div>

        {/* Support Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            Ada kendala?{" "}
            <a
              href="#"
              className="text-indigo-400 hover:text-blue-400 font-medium transition-colors duration-300 underline underline-offset-4"
            >
              Hubungi Helpdesk PPDB
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
