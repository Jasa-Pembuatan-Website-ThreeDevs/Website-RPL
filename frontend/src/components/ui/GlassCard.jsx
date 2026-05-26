export function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`backdrop-blur-xl bg-[#12181F]/50 border border-gray-600/30 rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}

export function GlassInput({ className = '', ...props }) {
  return (
    <input
      className={`w-full px-4 py-3 bg-[#0A0E12]/60 border border-gray-600/40 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00F5A0]/50 focus:ring-1 focus:ring-[#00F5A0]/30 transition-all ${className}`}
      {...props}
    />
  );
}

export function GlassTextarea({ className = '', ...props }) {
  return (
    <textarea
      className={`w-full px-4 py-3 bg-[#0A0E12]/60 border border-gray-600/40 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00F5A0]/50 focus:ring-1 focus:ring-[#00F5A0]/30 transition-all resize-none ${className}`}
      {...props}
    />
  );
}

export function GlassSelect({ className = '', children, ...props }) {
  return (
    <select
      className={`w-full px-4 py-3 bg-[#0A0E12]/60 border border-gray-600/40 rounded-xl text-white focus:outline-none focus:border-[#00F5A0]/50 focus:ring-1 focus:ring-[#00F5A0]/30 transition-all ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function GlassButton({ variant = 'primary', className = '', children, ...props }) {
  const variants = {
    primary:
      'bg-[#4bf3ce] text-black font-bold hover:brightness-110 shadow-lg shadow-emerald-500/10',
    secondary:
      'border border-gray-600/40 bg-[#12181F]/40 backdrop-blur text-white font-semibold hover:bg-gray-800/40',
    danger: 'bg-red-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30',
    ghost: 'text-gray-400 hover:text-[#00F5A0] hover:bg-white/5',
  };

  return (
    <button
      className={`px-5 py-2.5 rounded-xl text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function GlassModal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-[#12181F]/90 border border-gray-600/40 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function AlertBanner({ type = 'error', message }) {
  if (!message) return null;
  const styles =
    type === 'success'
      ? 'bg-[#00F5A0]/10 border-[#00F5A0]/30 text-[#00F5A0]'
      : 'bg-red-500/10 border-red-500/30 text-red-400';

  return (
    <div className={`px-4 py-3 rounded-xl border text-sm mb-4 ${styles}`}>{message}</div>
  );
}
