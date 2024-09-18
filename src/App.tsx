// import React from "react";
import LandingPage from "./LandingPage";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
export default function App() {
return (
  <HashRouter>
    <div>
      <Routes>
        <Route path="/" element={<Navigate to ="/LandingPage" />} />
        <Route path="/LandingPage/*" element={<LandingPage />} />
        <Route path="/Kanbas/*" element={<Kanbas />} />
      </Routes>
    </div>
  </HashRouter>
); 
}