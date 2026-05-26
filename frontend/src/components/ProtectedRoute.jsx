import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function ProtectedRoute({ children, role }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0E12] flex items-center justify-center text-[#00F5A0]">
        Memuat...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/v1/secure-login" replace />;
  }

  if (role && user.role !== role) {
    const redirect = user.role === 'student' ? '/dashboard' : '/admin';
    return <Navigate to={redirect} replace />;
  }

  return children;
}
