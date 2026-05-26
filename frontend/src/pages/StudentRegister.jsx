import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { GlassCard, GlassInput, GlassButton, AlertBanner } from '../components/ui/GlassCard';

export default function StudentRegister() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (form.password.length < 8) {
      setError('Password minimal 8 karakter.');
      return;
    }
    if (form.password !== form.password_confirmation) {
      setError('Konfirmasi password tidak cocok.');
      return;
    }

    setLoading(true);
    try {
      await register({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
        password_confirmation: form.password_confirmation,
      });
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0E12] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#00F5A0]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[15%] left-[-10%] w-[350px] h-[350px] bg-[#00D2FF]/10 rounded-full blur-[100px]" />

      <Link
        to="/"
        className="fixed top-8 left-8 z-20 flex items-center gap-2 px-4 py-2 border border-gray-600/40 bg-[#12181F]/40 backdrop-blur rounded-xl text-sm text-gray-300 hover:text-white"
      >
        <ArrowLeft className="w-4 h-4" /> Beranda
      </Link>

      <GlassCard className="relative z-10 w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center mb-2">
          Daftar{' '}
          <span className="bg-gradient-to-r from-[#00F5A0] to-[#00D2FF] bg-clip-text text-transparent">
            Akun Siswa
          </span>
        </h1>
        <p className="text-center text-gray-400 text-sm mb-6">
          Buat akun untuk mengelola profil dan proyek portfolio
        </p>

        <AlertBanner message={error} />

        <form onSubmit={handleSubmit} className="space-y-4">
          <GlassInput name="name" placeholder="Nama lengkap" value={form.name} onChange={handleChange} required />
          <GlassInput name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <GlassInput name="password" type="password" placeholder="Password (min. 8 karakter)" value={form.password} onChange={handleChange} required />
          <GlassInput
            name="password_confirmation"
            type="password"
            placeholder="Konfirmasi password"
            value={form.password_confirmation}
            onChange={handleChange}
            required
          />
          <GlassButton type="submit" className="w-full" disabled={loading}>
            {loading ? 'Mendaftar...' : 'Daftar'}
          </GlassButton>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Sudah punya akun?{' '}
          <Link to="/auth/v1/secure-login" className="text-[#00F5A0] hover:underline">
            Masuk
          </Link>
        </p>
      </GlassCard>
    </div>
  );
}
