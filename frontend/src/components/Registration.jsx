import { useState } from "react";
import { GraduationCap, User, CreditCard, School, Phone, MessageSquare, Send, CheckCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export function RegistrationPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    fullName: "",
    nisn: "",
    schoolOrigin: "",
    whatsapp: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    
    // Simulate API call and then navigate
    onNavigate("/success-registration");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#1a1a2e] to-[#1e3a8a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-500/10 rounded-full blur-[180px] animate-pulse delay-2000" />
      </div>

      {/* Back to Home Button */}
      <button
        onClick={() => onNavigate("landing")}
        className="fixed top-8 left-8 z-20 flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 mb-6 shadow-[0_0_40px_rgba(99,102,241,0.4)]">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Pendaftaran{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                PPDB RPL
              </span>
            </h1>
            <p className="text-gray-300 text-lg">
              Daftar sekarang dan jadilah bagian dari{" "}
              <span className="text-indigo-400 font-semibold">Software Engineer</span> masa depan
            </p>
          </div>

          {/* Registration Card */}
          <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-semibold text-white">
                  <User className="w-4 h-4 text-indigo-400" />
                  Nama Lengkap
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-400/60 focus:bg-white/15 focus:ring-4 focus:ring-indigo-400/20 transition-all duration-300"
                  required
                />
              </div>

              {/* NISN */}
              <div className="space-y-2">
                <label htmlFor="nisn" className="flex items-center gap-2 text-sm font-semibold text-white">
                  <CreditCard className="w-4 h-4 text-indigo-400" />
                  NISN (Nomor Induk Siswa Nasional)
                </label>
                <input
                  id="nisn"
                  name="nisn"
                  type="number"
                  value={formData.nisn}
                  onChange={handleChange}
                  placeholder="Masukkan NISN"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-400/60 focus:bg-white/15 focus:ring-4 focus:ring-indigo-400/20 transition-all duration-300"
                  required
                />
              </div>

              {/* School Origin */}
              <div className="space-y-2">
                <label htmlFor="schoolOrigin" className="flex items-center gap-2 text-sm font-semibold text-white">
                  <School className="w-4 h-4 text-indigo-400" />
                  Asal SMP/MTs
                </label>
                <input
                  id="schoolOrigin"
                  name="schoolOrigin"
                  type="text"
                  value={formData.schoolOrigin}
                  onChange={handleChange}
                  placeholder="Masukkan asal sekolah"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-400/60 focus:bg-white/15 focus:ring-4 focus:ring-indigo-400/20 transition-all duration-300"
                  required
                />
              </div>

              {/* WhatsApp Number */}
              <div className="space-y-2">
                <label htmlFor="whatsapp" className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  Nomor WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="Contoh: 081234567890"
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-400/60 focus:bg-white/15 focus:ring-4 focus:ring-indigo-400/20 transition-all duration-300"
                  required
                />
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <label htmlFor="reason" className="flex items-center gap-2 text-sm font-semibold text-white">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  Alasan Bergabung di Jurusan RPL
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Ceritakan alasan dan motivasi Anda untuk bergabung di jurusan RPL..."
                  rows={5}
                  className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-400/60 focus:bg-white/15 focus:ring-4 focus:ring-indigo-400/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-bold py-5 rounded-xl hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span className="text-lg">Daftar Sekarang</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Info Text */}
              <p className="text-center text-gray-300 text-sm mt-6">
                Data yang Anda masukkan akan diproses oleh panitia PPDB.
                <br />
                Pastikan semua informasi yang diberikan adalah{" "}
                <span className="text-indigo-400 font-semibold">valid dan benar</span>.
              </p>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-gray-300">
                Pendaftaran dibuka sepanjang tahun
              </span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Butuh bantuan?{" "}
              <a
                href="#"
                className="text-indigo-400 hover:text-blue-400 font-medium transition-colors duration-300"
              >
                Hubungi Panitia PPDB
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}