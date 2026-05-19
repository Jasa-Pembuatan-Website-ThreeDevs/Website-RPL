import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="students" element={<div className="py-10 text-2xl">Students Page (Coming Soon)</div>} />
        <Route path="dudika" element={<div className="py-10 text-2xl">DUDIKA Page (Coming Soon)</div>} />
        <Route path="*" element={<div className="py-20 text-center text-4xl">404 - Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
