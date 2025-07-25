import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; 
import axios from 'axios';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // init navigator

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      alert(res.data.message || "Login successful");

      if (res.data.success) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userinfo", JSON.stringify(res.data.userinfo));
  setIsLoggedIn(true);  // ✅ Update login status in App
  navigate("/");
}

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };                            

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <form className="login-form shadow p-4 rounded" onSubmit={handleLogin}>
        <h3 className="mb-4 text-center">Login</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">  Sign In
           <a href='/home'> </a>
          </button>
        </div>
        <p className="text-center mt-3">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
