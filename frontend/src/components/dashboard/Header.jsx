
const Header = ({ setIsSidebarOpen }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/[0.03] backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        {/* Mobile Hamburger */}
        <button 
          className="lg:hidden p-2 text-slate-400 hover:text-white bg-white/5 rounded-lg border border-white/10 transition-colors"
          onClick={() => setIsSidebarOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="relative group flex-1">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-500 group-focus-within:text-cyan-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search dashboard..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-12 pr-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400/50 transition-all text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-6 ml-4">
        <div className="flex items-center gap-2">
          <button className="p-2 sm:p-2.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-2 h-2 bg-cyan-400 rounded-full border-2 border-slate-900 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          </button>
        </div>

        <div className="h-8 w-[1px] bg-white/10 hidden sm:block"></div>

        <div className="flex items-center gap-3 sm:gap-4 cursor-pointer group">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">Admin Profile</p>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Super Admin</p>
          </div>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center overflow-hidden">
            <img
              src="https://ui-avatars.com/api/?name=Admin+RPL&background=0D8ABC&color=fff"
              alt="Avatar"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
