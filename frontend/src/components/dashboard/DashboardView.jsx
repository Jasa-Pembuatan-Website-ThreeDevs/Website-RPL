import StatCard from './StatCard';
import MessageTable from './MessageTable';

const DashboardView = () => {
  const stats = [
    {
      title: 'Total Berita',
      value: '128',
      trend: '+12%',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Total Guru',
      value: '42',
      trend: '+2',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: 'Mitra Industri',
      value: '24',
      trend: '+5',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Pesan Baru',
      value: '15',
      trend: '+8',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const messages = [
    { id: 1, name: 'Budi Santoso', date: '20 Mei 2026', status: 'Baru' },
    { id: 2, name: 'Siti Aminah', date: '19 Mei 2026', status: 'Dibaca' },
    { id: 3, name: 'Rahmat Hidayat', date: '18 Mei 2026', status: 'Dibaca' },
    { id: 4, name: 'Dewi Lestari', date: '18 Mei 2026', status: 'Baru' },
    { id: 5, name: 'Ahmad Fauzi', date: '17 Mei 2026', status: 'Dibaca' },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back, Admin!</h2>
        <p className="text-slate-400">Here's what's happening with your department profile today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        <MessageTable messages={messages} />
      </div>
    </div>
  );
};

export default DashboardView;
