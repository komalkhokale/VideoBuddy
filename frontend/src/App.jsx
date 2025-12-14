import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Authentication from "./pages/authentication.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import VideoMeet from "./pages/VideoMeet.jsx";
import Home from "./pages/Home.jsx";
import History from "./pages/History.jsx";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>

            <Route path="/" element={<LandingPage />} />

            <Route path="/auth" element={<Authentication />} />

            <Route path="/home" element={<Home />} />

            <Route path="/history" element={<History />} />

            <Route path="/:url" element={<VideoMeet/>} /> 
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;