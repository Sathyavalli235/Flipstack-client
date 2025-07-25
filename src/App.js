import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Cart from './Cart';
import Products from './Products';
import Contact from './Contact';
import Account from './Account';
import { useCart } from './CartContext'; 
import Payment from './Payment';
import './index.css';


function App() {
  const { cartItems } = useCart(); // ✅ Get the cart items
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // On app load, check localStorage for login status
  useEffect(() => {
    const storedStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedStatus === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userinfo");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
<nav className="navbar navbar-expand-lg custom-navbar text-dark">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold" to="/">FlipStack</Link>

    {/* Hamburger / Toggle Button */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
  <span className="navbar-toggler-icon"></span>
</button>


    {/* Collapsible Menu */}
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/">🏠Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">🛍️Products</Link>
        </li>
      <li className="nav-item">
  <Link className="nav-link" to="/cart">
    🛒Cart <span className="badge bg-dark">{cartItems.length}</span>
  </Link>
</li>

        <li className="nav-item">
          <Link className="nav-link" to="/contact">📞Contact</Link>
        </li>
        {!isLoggedIn ? (
          <li className="nav-item">
            <Link className="nav-link" to="/login">🔐Login</Link>
          </li>
        ) : (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/account">👤Account</Link>
            </li>
            <li className="nav-item">
              
              <button className="btn btn-link nav-link" onClick={handleLogout}>🚪Logout</button>
            </li>
          </>
        )}
      </ul>
    </div>
  </div>
</nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<Contact />} />


<Route path="/payment" element={<Payment />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
