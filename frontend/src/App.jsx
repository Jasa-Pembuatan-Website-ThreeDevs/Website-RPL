import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import Toasts from "./components/ui/Toasts";
import LoadingScreen from "./components/ui/LoadingScreen";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { publicApi } from "./lib/api";

const Depan = lazy(() => import("./assets/pages/Depan"));
const Showcase = lazy(() => import("./assets/pages/Showcase"));
const Login = lazy(() => import("./components/Login"));
const RegistrationPage = lazy(() => import("./components/Registration").then(mod => ({ default: mod.RegistrationPage })));
const StudentDashboard = lazy(() => import("./pages/StudentDashboard"));
const AdminDashboardPage = lazy(() => import("./pages/AdminDashboardPage"));
const StudentRegister = lazy(() => import("./pages/StudentRegister"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const PrestasiPage = lazy(() => import("./pages/PrestasiPage"));
const NotFound = lazy(() => import("./assets/pages/NotFound"));
const MaintenancePage = lazy(() => import("./pages/MaintenancePage"));

function AppRoutes({ isBackendMaintenance }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  // Manual override jika ingin memaksa mode maintenance dari frontend
  const isFrontendForcedMaintenance = false;

  const isMaintenanceActive = isBackendMaintenance || isFrontendForcedMaintenance;

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Simulate loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isMaintenanceActive && location.pathname !== "/maintenance") {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <MaintenancePage />
      </Suspense>
    );
  }

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Depan />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/prestasi" element={<PrestasiPage />} />
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
      </Suspense>
    </>
  );
}

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isBackendMaintenance, setIsBackendMaintenance] = useState(false);

  useEffect(() => {
    const handleMaintenance = () => setIsBackendMaintenance(true);
    window.addEventListener('maintenance-mode', handleMaintenance);

    // Initial backend check
    const checkBackendStatus = async () => {
      try {
        await publicApi.getCategories();
      } catch (err) {
        // api.js handles dispatching the event if it's 503
      } finally {
        setIsInitialLoading(false);
      }
    };

    checkBackendStatus();

    return () => {
      window.removeEventListener('maintenance-mode', handleMaintenance);
    };
  }, []);

  if (isInitialLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <ToastProvider>
        <AuthProvider>
          <AppRoutes isBackendMaintenance={isBackendMaintenance} />
        </AuthProvider>
        <Toasts />
      </ToastProvider>
    </Router>
  );
}

export default App;
