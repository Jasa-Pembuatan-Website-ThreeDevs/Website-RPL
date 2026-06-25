import { useToast } from '../../context/ToastContext';

function ToastItem({ t }) {
  const color = t.type === 'success' ? 'bg-[#00F5A0]/10 border-[#00F5A0]/30 text-[#00F5A0]' : 'bg-[#111315]/90 border-gray-600/30 text-white';
  return (
    <div className={`px-4 py-2 rounded-lg border shadow-md mb-3 max-w-sm ${color}`}>
      <div className="text-sm">{t.message}</div>
    </div>
  );
}

export default function Toasts() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-4 right-4 z-[9999] flex flex-col items-end">
      {toasts.map((t) => (
        <ToastItem key={t.id} t={t} />
      ))}
    </div>
  );
}
