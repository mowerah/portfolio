import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import CV from "./pages/CV";
import PrivateRoute from "./components/PrivateRoute";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === "molid" && password === "abcd1234") {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home onLogin={handleLogin} />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/projects"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Projects />
            </PrivateRoute>
          }
        />
        <Route
          path="/experience"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Experience />
            </PrivateRoute>
          }
        />
        <Route
          path="/cv"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <CV />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
