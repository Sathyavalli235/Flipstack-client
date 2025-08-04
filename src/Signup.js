import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    profilePic: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://flipstack-server.onrender.com/signup', user);
      alert(res.data.message || "Signup successful");
      navigate('/login');

    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container d-flex align-items-center justify-content-center">
      <form className="signup-form shadow p-4 rounded" onSubmit={handleSignup}>
        <h3 className="mb-4 text-center">Sign Up</h3>
        
        <div className="mb-3">
          <label>Full Name</label>
          <input type="text" name="name" className="form-control" placeholder="Enter full name" value={user.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input type="email" name="email" className="form-control" placeholder="Enter email" value={user.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password" className="form-control" placeholder="Enter password" value={user.password} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input type="text" name="phone" className="form-control" placeholder="Enter phone" value={user.phone} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input type="text" name="address" className="form-control" placeholder="Enter address" value={user.address} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Profile Picture URL</label>
          <input type="text" name="profilePic" className="form-control" placeholder="Image URL" value={user.profilePic} onChange={handleChange} />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">Register</button>
        </div>

        <p className="text-center mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
