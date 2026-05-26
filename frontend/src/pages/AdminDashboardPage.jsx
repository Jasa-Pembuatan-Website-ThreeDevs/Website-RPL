import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Users,
  Image,
  Building2,
  Mail,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { cmsApi } from '../lib/api';
import {
  PostsManager,
  TeachersManager,
  GalleryManager,
  PartnersManager,
  MessagesManager,
  AdminOverview,
} from '../components/admin/AdminContent';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'news', label: 'Berita & Prestasi', icon: FileText },
  { id: 'teachers', label: 'Profil Guru', icon: Users },
  { id: 'gallery', label: 'Galeri', icon: Image },
  { id: 'partners', label: 'Mitra DUDIKA', icon: Building2 },
  { id: 'messages', label: 'Pesan Masuk', icon: Mail },
];

export default function AdminDashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState([
    { title: 'Berita', value: '-' },
    { title: 'Guru', value: '-' },
    { title: 'Mitra', value: '-' },
    { title: 'Pesan', value: '-' },
  ]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    async function loadStats() {
      try {
        const [posts, teachers, partners, messages] = await Promise.all([
          cmsApi.getPosts().catch(() => ({ data: [] })),
          cmsApi.getTeachers().catch(() => []),
          cmsApi.getPartners().catch(() => []),
          cmsApi.getMessages().catch(() => []),
        ]);
        const postList = posts?.data || posts || [];
        const msgList = Array.isArray(messages) ? messages : [];
        const unread = msgList.filter((m) => !m.is_read).length;
        setUnreadCount(unread);
        setStats([
          { title: 'Berita (published)', value: String(Array.isArray(postList) ? postList.length : 0) },
          { title: 'Guru', value: String(Array.isArray(teachers) ? teachers.length : 0) },
          { title: 'Mitra', value: String(Array.isArray(partners) ? partners.length : 0) },
          { title: 'Pesan', value: String(msgList.length) },
        ]);
      } catch {
        /* ignore stats errors */
      }
    }
    loadStats();
  }, [activeNav]);

  async function handleLogout() {
    await logout();
    navigate('/auth/v1/secure-login');
  }

  function renderContent() {
    switch (activeNav) {
      case 'news':
        return <PostsManager />;
      case 'teachers':
        return <TeachersManager />;
      case 'gallery':
        return <GalleryManager />;
      case 'partners':
        return <PartnersManager />;
      case 'messages':
        return <MessagesManager />;
      default:
        return (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold text-white">
                Dashboard{' '}
                <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
                  Admin
                </span>
              </h1>
              <p className="text-gray-400 mt-2">Kelola konten jurusan RPL.</p>
            </div>
            <AdminOverview stats={stats} />
            <MessagesManager />
          </>
        );
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0E12] text-white antialiased">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[5%] right-[-5%] w-[400px] h-[400px] bg-[#00F5A0]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[350px] h-[350px] bg-[#00D2FF]/10 rounded-full blur-[100px]" />
      </div>

      <aside
        className={`fixed top-0 left-0 h-full w-72 z-50 border-r border-gray-600/30 bg-[#0A0E12]/90 backdrop-blur-xl transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full p-4">
          <Link to="/" className="flex items-center gap-3 p-2 mb-6">
            <div className="w-10 h-10 bg-[#00F5A0] rounded-xl flex items-center justify-center font-bold text-black text-sm">
              SM
            </div>
            <div>
              <h2 className="font-bold text-sm">SMK Muhammadiyah</h2>
              <p className="text-[11px] text-[#00F5A0]">Admin Dashboard</p>
            </div>
          </Link>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveNav(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeNav === item.id
                    ? 'bg-[#00F5A0]/10 text-[#00F5A0] border border-[#00F5A0]/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.id === 'messages' && unreadCount > 0 && (
                  <span className="px-2 py-0.5 bg-red-500/80 text-white text-xs rounded-full">
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </nav>

          <div className="p-3 border border-gray-600/30 rounded-xl bg-[#12181F]/50">
            <p className="text-sm font-semibold truncate">{user?.name}</p>
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="lg:ml-72 relative z-10 min-h-screen">
        <header className="sticky top-0 z-30 border-b border-gray-600/30 bg-[#0A0E12]/70 backdrop-blur-xl px-4 lg:px-8 py-4 flex items-center justify-between">
          <button
            type="button"
            className="lg:hidden p-2 text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>
          <span className="text-sm text-gray-400 hidden md:block">Panel Admin CMS</span>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 border border-gray-600/40 rounded-xl text-sm hover:border-red-500/40"
          >
            <LogOut className="w-4 h-4" /> Keluar
          </button>
        </header>

        <main className="p-4 lg:p-8">{renderContent()}</main>
      </div>
    </div>
  );
}
