import Depan from "./assets/pages/Depan";
import Login from "./components/Login";
import { RegistrationPage } from "./components/Registration";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function AppRoutes() {
  const navigate = useNavigate();
  
  return (
    <Routes>
      <Route path="/" element={<Depan />} />

      {/* Hidden route for login */}
      <Route path="/auth/v1/secure-login" element={<Login />} />
      
      {/* Route for registration */}
      <Route 
        path="/register" 
        element={
          <RegistrationPage 
            onNavigate={(page) => {
              if (page === 'landing') navigate('/');
              else navigate(page);
            }} 
          />
        } 
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
