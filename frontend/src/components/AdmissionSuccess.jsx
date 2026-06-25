import { motion } from "framer-motion";
import { CheckCircle, PartyPopper, Download, Home, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AdmissionSuccess() {
  const navigate = useNavigate();

  // Mock data for display
  const studentData = {
    name: "Budi Santoso",
    regNumber: "REG/2026/RPL/001",
    nisn: "0081234567",
    department: "Rekayasa Perangkat Lunak (RPL)"
  };

  return (
    <div className="min-h-screen bg-[#f8faff] relative overflow-hidden font-sans">
      {/* Decorative Blue Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-600 to-indigo-700 -skew-y-2 origin-top-left z-0 shadow-lg" />
      
      {/* Animated Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse z-0" />
      <div className="absolute top-40 right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-700 z-0" />

      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12 flex flex-col items-center">
        {/* Success Header Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="bg-white p-2 rounded-full shadow-2xl mb-8"
        >
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-full">
            <CheckCircle className="w-16 h-16 text-white" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Selamat! Anda <span className="text-blue-200">Lulus</span>
          </h1>
          <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto px-4">
            Anda telah dinyatakan <span className="bg-white/20 px-2 py-0.5 rounded">Diterima</span> sebagai calon siswa di Jurusan Rekayasa Perangkat Lunak.
          </p>
        </motion.div>

        {/* Professional Result Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="w-full max-w-2xl bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100"
        >
          {/* Card Header */}
          <div className="bg-blue-50/50 px-8 py-6 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-gray-800 uppercase tracking-wider text-sm">Status Penerimaan</span>
            </div>
            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-widest">
              Lulus Seleksi
            </div>
          </div>

          {/* Card Body - Student Info */}
          <div className="p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-1">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Nama Lengkap</p>
                <p className="text-gray-800 font-bold text-lg">{studentData.name}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Nomor Registrasi</p>
                <p className="text-blue-600 font-mono font-bold text-lg">{studentData.regNumber}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">NISN</p>
                <p className="text-gray-800 font-bold text-lg">{studentData.nisn}</p>
              </div>
              <div className="space-y-1">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">Program Keahlian</p>
                <p className="text-gray-800 font-bold text-lg">{studentData.department}</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-2 rounded-lg shrink-0">
                  <PartyPopper className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-blue-900 font-bold mb-1">Langkah Selanjutnya</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Silakan unduh Bukti Kelulusan Anda dan lakukan pendaftaran ulang sesuai dengan jadwal yang ditentukan.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-200 group">
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Unduh Bukti Kelulusan
              </button>
              <button 
                onClick={() => navigate("/")}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Kembali ke Beranda
              </button>
            </div>
          </div>
          
          {/* Card Footer */}
          <div className="bg-gray-50 px-8 py-4 text-center">
            <p className="text-gray-400 text-xs font-medium">
              Panitia Penerimaan Peserta Didik Baru (PPDB) Jurusan RPL 2026
            </p>
          </div>
        </motion.div>

        {/* Support Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 font-medium">
            Butuh bantuan terkait daftar ulang?{" "}
            <a href="#" className="text-blue-600 font-bold hover:underline">Hubungi Panitia</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
