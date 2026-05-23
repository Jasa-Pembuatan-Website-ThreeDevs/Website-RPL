import { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import DashboardView from './DashboardView';

const DashboardLayout = () => {
  const [activeItem] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-400 font-sans selection:bg-cyan-400/30 selection:text-cyan-400 overflow-x-hidden">
      {/* Premium Background Gradient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/20 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-600/10 blur-[120px]"></div>
      </div>

      {/* Sidebar */}
      <Sidebar activeItem={activeItem} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <div className="lg:pl-72 flex flex-col min-h-screen relative z-10">
        <Header setIsSidebarOpen={setIsSidebarOpen} />
        
        <main className="flex-1 overflow-y-auto">
          <DashboardView />
        </main>
        
        <footer className="px-8 py-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500 font-medium">
            &copy; 2026 Jurusan Rekayasa Perangkat Lunak - SMK Negeri. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardLayout;
