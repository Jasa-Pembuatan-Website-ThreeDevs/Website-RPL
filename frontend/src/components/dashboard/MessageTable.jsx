
const MessageTable = ({ messages }) => {
  return (
    <div className="bg-white/[0.06] backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-6 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Pesan Masuk Terbaru</h2>
        <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">Lihat Semua</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/5">
              <th className="px-6 py-4 text-slate-400 font-medium text-sm">No</th>
              <th className="px-6 py-4 text-slate-400 font-medium text-sm">Nama Pengirim</th>
              <th className="px-6 py-4 text-slate-400 font-medium text-sm">Tanggal</th>
              <th className="px-6 py-4 text-slate-400 font-medium text-sm">Status</th>
              <th className="px-6 py-4 text-slate-400 font-medium text-sm text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {messages.map((msg, index) => (
              <tr key={msg.id} className="hover:bg-white/5 transition-colors group">
                <td className="px-6 py-4 text-white text-sm">{index + 1}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-xs">
                      {msg.name.charAt(0)}
                    </div>
                    <span className="text-white text-sm font-medium">{msg.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-400 text-sm">{msg.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
                    msg.status === 'Baru' 
                      ? 'bg-cyan-400/10 text-cyan-400 border border-cyan-400/20' 
                      : 'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                  }`}>
                    {msg.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-white/10 rounded-lg text-cyan-400 transition-colors" title="View">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="p-2 hover:bg-red-500/10 rounded-lg text-red-400 transition-colors" title="Delete">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageTable;
