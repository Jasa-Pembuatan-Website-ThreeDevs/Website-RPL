import Depan from "./assets/pages/Depan";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Depan />} />

        {/* Hidden route for login */}
        <Route path="/auth/v1/secure-login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
