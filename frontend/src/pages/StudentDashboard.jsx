import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User, FolderKanban, Menu, X, Share2, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import ProfileSection from '../components/student/ProfileSection';
import ProjectsCrud from '../components/student/ProjectsCrud';

const tabs = [
  { id: 'profile', label: 'Profil', icon: User },
  { id: 'projects', label: 'Proyek', icon: FolderKanban },
];

export default function StudentDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleLogout() {
    await logout();
    navigate('/auth/v1/secure-login');
  }

  const handleShare = async () => {
    const shareData = {
      title: 'Dashboard Siswa RPL',
      text: `Lihat dashboard saya di RPL Department!`,
      url: window.location.origin,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.origin);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E12] text-white font-sans antialiased relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] right-[-5%] w-[400px] h-[400px] bg-[#00F5A0]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-[#00D2FF]/10 rounded-full blur-[100px]" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-600/30 bg-[#0A0E12]/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="lg:hidden p-2 text-gray-400"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#00F5A0] rounded-xl flex items-center justify-center font-bold text-black text-sm">
                SM
              </div>
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold leading-none">Dashboard Siswa</h1>
                <p className="text-[11px] text-[#00F5A0] font-semibold mt-0.5">PPLG SMEMSA</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <span className="text-sm text-gray-400 hidden md:inline">{user?.name}</span>
            
            <button
              type="button"
              onClick={handleShare}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 border transition-all rounded-xl text-sm ${
                copied 
                  ? 'border-[#00F5A0]/50 bg-[#00F5A0]/10 text-[#00F5A0]' 
                  : 'border-gray-600/40 bg-[#12181F]/40 backdrop-blur text-gray-300 hover:text-[#00F5A0] hover:border-[#00F5A0]/40'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Tersalin!' : 'Bagikan'}</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 border border-gray-600/40 bg-[#12181F]/40 backdrop-blur rounded-xl text-sm text-gray-300 hover:text-white hover:border-red-500/40 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Keluar</span>
            </button>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-12">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Halo,{' '}
            <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
              {user?.name?.split(' ')[0] || 'Siswa'}
            </span>
          </h1>
          <p className="text-gray-400 mt-2">Kelola profil dan portfolio proyekmu di sini.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <aside
            className={`lg:w-56 shrink-0 ${
              sidebarOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <nav className="backdrop-blur-xl bg-[#12181F]/50 border border-gray-600/30 rounded-2xl p-2 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#00F5A0]/10 text-[#00F5A0] border border-[#00F5A0]/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 min-w-0">
            {activeTab === 'profile' && <ProfileSection />}
            {activeTab === 'projects' && <ProjectsCrud />}
          </main>
        </div>
      </div>
    </div>
  );
}
