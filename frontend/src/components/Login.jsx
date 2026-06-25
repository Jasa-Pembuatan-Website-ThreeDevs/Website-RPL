import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import {
  GlassCard,
  GlassInput,
  GlassButton,
  AlertBanner,
} from "./ui/GlassCard";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const user = await login(email.trim(), password);
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] w-full h-full flex items-center justify-center bg-[#0A0E12] overflow-hidden font-sans">
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#00F5A0]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[15%] left-[-10%] w-[350px] h-[350px] bg-[#00D2FF]/10 rounded-full blur-[100px]" />

      <Link
        to="/"
        className="fixed top-8 left-8 z-20 flex items-center gap-2 px-4 py-2 border border-gray-600/40 bg-[#12181F]/40 backdrop-blur rounded-xl text-sm text-gray-300 hover:text-white"
      >
        <ArrowLeft className="w-4 h-4" /> Beranda
      </Link>

      <GlassCard className="z-10 w-full max-w-md p-8 mx-4 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
            Masuk
          </h2>
          <p className="text-gray-400 text-sm">
            Dashboard siswa atau admin CMS
          </p>
        </div>

        <AlertBanner message={error} />

        <form onSubmit={handleSubmit} className="w-full space-y-5">
          <GlassInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <GlassInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="grid grid-cols-2 gap-4 w-full">
            <GlassButton
              type="button"
              variant="secondary"
              className="w-full"
              onClick={() => navigate('/')}
            >
              Beranda
            </GlassButton>
            <GlassButton type="submit" className="w-full" disabled={loading}>
              {loading ? 'Memproses...' : 'Masuk'}
            </GlassButton>
          </div>
        </form>

        <p className="mt-6 text-sm text-gray-500">
          Siswa baru?{" "}
          <Link
            to="/student/register"
            className="text-[#00F5A0] hover:underline"
          >
            Daftar akun siswa
          </Link>
        </p>

        <p className="mt-4 text-white/20 text-xs uppercase tracking-widest font-semibold">
          © 2026 PPLG SMEMSA
        </p>
      </GlassCard>
    </div>
  );
};

export default Login;
