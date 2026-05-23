import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Users,
  Image,
  Building2,
  Mail,
  Search,
  LogOut,
  ChevronDown,
  TrendingUp,
  Eye,
  Trash2,
  Menu,
  X,
} from "lucide-react";

export function AdminDashboard({ onNavigate }) {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "news", label: "Berita & Prestasi", icon: FileText },
    { id: "teachers", label: "Profil Guru", icon: Users },
    { id: "gallery", label: "Galeri", icon: Image },
    { id: "partners", label: "Mitra DUDIKA", icon: Building2 },
    { id: "messages", label: "Pesan Masuk", icon: Mail, badge: 5 },
  ];

  const statsCards = [
    {
      title: "Total Berita",
      value: "48",
      change: "+12%",
      icon: FileText,
      color: "from-[#00ff87] to-[#60efff]",
    },
    {
      title: "Total Guru",
      value: "24",
      change: "+2",
      icon: Users,
      color: "from-[#60efff] to-[#9d4edd]",
    },
    {
      title: "Mitra Industri",
      value: "52",
      change: "+8",
      icon: Building2,
      color: "from-[#ffd700] to-[#ff6b6b]",
    },
    {
      title: "Pesan Belum Dibaca",
      value: "15",
      change: "5 new",
      icon: Mail,
      color: "from-[#ff6b6b] to-[#ffd700]",
    },
  ];

  const recentMessages = [
    {
      id: 1,
      nama: "Ahmad Rizki",
      tanggal: "2024-05-15",
      pesan: "Informasi pendaftaran siswa baru",
      status: "Belum Dibaca",
    },
    {
      id: 2,
      nama: "Siti Nurhaliza",
      tanggal: "2024-05-14",
      pesan: "Pertanyaan tentang kurikulum",
      status: "Sudah Dibaca",
    },
    {
      id: 3,
      nama: "Budi Santoso",
      tanggal: "2024-05-14",
      pesan: "Kerjasama magang industri",
      status: "Belum Dibaca",
    },
    {
      id: 4,
      nama: "Dewi Kusuma",
      tanggal: "2024-05-13",
      pesan: "Request informasi fasilitas",
      status: "Sudah Dibaca",
    },
    {
      id: 5,
      nama: "Farhan Maulana",
      tanggal: "2024-05-13",
      pesan: "Tanya jadwal open house",
      status: "Belum Dibaca",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1f] via-[#1a1a2e] to-[#16213e] text-white">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 backdrop-blur-2xl bg-white/5 border-r border-white/10 z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff87] to-[#60efff] flex items-center justify-center">
                <span className="text-black font-bold text-xl">SM</span>
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">SMK Muhammadiyah</h2>
                <p className="text-[#00ff87] text-xs">Admin Dashboard</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  activeNav === item.id
                    ? "bg-gradient-to-r from-[#00ff87]/20 to-[#60efff]/20 border border-[#00ff87]/40 shadow-[0_0_20px_rgba(0,255,135,0.2)]"
                    : "hover:bg-white/5 border border-transparent"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${
                    activeNav === item.id ? "text-[#00ff87]" : "text-gray-400 group-hover:text-white"
                  }`}
                />
                <span
                  className={`flex-1 text-left font-medium text-sm ${
                    activeNav === item.id ? "text-white" : "text-gray-400 group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
                {item.badge && (
                  <span className="px-2 py-1 bg-[#ff6b6b] text-white text-xs font-bold rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-white/10">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                  alt="Admin"
                  className="w-10 h-10 rounded-full border-2 border-[#00ff87]/30 object-cover"
                />
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">Admin RPL</p>
                  <p className="text-gray-400 text-xs">admin@smk.sch.id</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Top Header */}
        <header className="sticky top-0 z-40 backdrop-blur-2xl bg-white/5 border-b border-white/10">
          <div className="px-4 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
              >
                {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Search Bar */}
              <div className="flex-1 max-w-xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search anything..."
                    className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00ff87]/40 focus:bg-white/10 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Admin Profile & Logout */}
              <div className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-3 px-4 py-2 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                    alt="Admin"
                    className="w-8 h-8 rounded-full border-2 border-[#00ff87]/30 object-cover"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">Admin RPL</p>
                    <p className="text-gray-400 text-xs">Super Admin</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>

                <button
                  onClick={() => onNavigate("login")}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff4757] text-white font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(255,107,107,0.4)] transition-all duration-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 lg:p-8">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Dashboard{" "}
              <span className="bg-gradient-to-r from-[#00ff87] to-[#60efff] bg-clip-text text-transparent">
                Overview
              </span>
            </h1>
            <p className="text-gray-400">Welcome back! Here's what's happening today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCards.map((stat, index) => (
              <div
                key={index}
                className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,255,135,0.1)] hover:border-[#00ff87]/40 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#00ff87]/10 to-transparent rounded-full blur-2xl group-hover:bg-[#00ff87]/20 transition-all duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-[#00ff87]/10 border border-[#00ff87]/20 rounded-full">
                      <TrendingUp className="w-3 h-3 text-[#00ff87]" />
                      <span className="text-[#00ff87] text-xs font-semibold">{stat.change}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Messages Table */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Pesan Terbaru</h2>
              <p className="text-gray-400 text-sm">Kelola pesan masuk dari pengunjung</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      No
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Nama
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Pesan
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Tanggal
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentMessages.map((message, index) => (
                    <tr
                      key={message.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-sm text-gray-300">{index + 1}</td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-semibold text-white">{message.nama}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-400 max-w-xs truncate">{message.pesan}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{message.tanggal}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            message.status === "Belum Dibaca"
                              ? "bg-[#ff6b6b]/20 text-[#ff6b6b] border border-[#ff6b6b]/30"
                              : "bg-[#00ff87]/20 text-[#00ff87] border border-[#00ff87]/30"
                          }`}
                        >
                          {message.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-lg bg-[#60efff]/10 border border-[#60efff]/20 text-[#60efff] hover:bg-[#60efff]/20 transition-all duration-200">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 text-[#ff6b6b] hover:bg-[#ff6b6b]/20 transition-all duration-200">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 border-t border-white/10 flex items-center justify-between">
              <p className="text-sm text-gray-400">Showing 5 of 15 messages</p>
              <button className="px-4 py-2 bg-gradient-to-r from-[#00ff87] to-[#60efff] text-black font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(0,255,135,0.4)] transition-all duration-300">
                View All Messages
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </div>
  );
}

export default AdminDashboard;
