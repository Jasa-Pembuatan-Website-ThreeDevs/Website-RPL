import React, { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import Toasts from "./components/ui/Toasts";
import LoadingScreen from "./components/ui/LoadingScreen";
import { ProtectedRoute } from "./components/ProtectedRoute";
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
const NotFound = lazy(() => import("./assets/pages/NotFound"));

function AppRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Simulate loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
        <Route path="*" element={<NotFound />} />
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
      </Suspense>
    </>
  );
}

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 1500); // Initial load takes a bit longer
    return () => clearTimeout(timer);
  }, []);

  if (isInitialLoading) {
    return <LoadingScreen />;
  }

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
