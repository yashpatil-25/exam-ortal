import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; // Import shared styles

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // For now, directly move to Home page for testing
    onLogin(); // Update the login state to indicate the user is logged in
    navigate('/'); // Redirect to Home after login
    
    // Uncomment and implement actual login logic later
    // if (validLogin(email, password)) {
    //   onLogin(); // Set login state to true if valid
    //   navigate('/'); // Redirect to Home if successful
    // } else {
    //   alert('Invalid login credentials');
    // }
  };
  

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p>
          Don’t have an account?{' '}
          <button className="auth-link" onClick={() => navigate('/register')}>
            Register here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
