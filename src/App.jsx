import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/auth/Login';
import Register from './Components/auth/Register';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';
import AdminBase from './Components/admin/AdminBase';
import Courses from './Components/admin/Courses';
import AddQuestion from './Components/admin/AddQuestion';
import Header from './Components/Header';
import Footer from './Components/Footer';
import QuestionPage from './Components/QuestionPage';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login logic (replace with your authentication implementation)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Handle logout logic (replace with your authentication implementation)
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Header onLogout={handleLogout} />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:subject" element={<QuestionPage />} />
            <Route path="/result" element={<Result />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminBase />}>
              <Route path="courses" element={<Courses />} /> {/* Relative path for nested route */}
              <Route path="admin-question" element={<AddQuestion />} /> {/* Relative path for nested route */}
            </Route>
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
