import Depan from "./assets/pages/Depan";
import Showcase from "./assets/pages/Showcase";
import Login from "./components/Login";
import { RegistrationPage } from "./components/Registration";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import Toasts from "./components/ui/Toasts";
import { ProtectedRoute } from "./components/ProtectedRoute";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboardPage from "./pages/AdminDashboardPage";
import StudentRegister from "./pages/StudentRegister";
import TeachersPage from "./pages/TeachersPage";
import GalleryPage from "./pages/GalleryPage";
import PostsPage from "./pages/PostsPage";
import PartnersPage from "./pages/PartnersPage";

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Depan />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/teachers" element={<TeachersPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="/partners" element={<PartnersPage />} />
      <Route path="/auth/v1/secure-login" element={<Login />} />
      <Route path="/student/register" element={<StudentRegister />} />
      <Route
        path="/register"
        element={
          <RegistrationPage
            onNavigate={(page) => {
              if (page === "landing") navigate("/");
              else navigate(page);
            }}
          />
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute role="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ToastProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
        <Toasts />
      </ToastProvider>
    </Router>
  );
}

export default App;
