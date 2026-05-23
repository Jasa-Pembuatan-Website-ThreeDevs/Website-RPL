
const StatCard = ({ title, value, icon, trend }) => {
  return (
    <div className="bg-white/[0.06] backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-2xl hover:-translate-y-1 hover:bg-white/[0.1] transition-all duration-300 group">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        {trend && (
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${trend.startsWith('+') ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
            {trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
        <p className="text-3xl font-bold text-white tracking-tight">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
