import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // init navigator

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://flipstack-server.onrender.com/login', {
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
    <>
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
         <button type="submit" className="btn btn-primary">Sign In</button>
        </div>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
       <footer className="footer-container">
                <div className="footer-top">
                  <div>
                    <h6>ABOUT</h6>
                    <p>Contact Us</p>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>FlipStack Stories</p>
                    <p>Press</p>
                    <p>Corporate Information</p>
                  </div>
                  <div>
                    <h6>GROUP COMPANIES</h6>
                    <p>Myntra</p>
                    <p>Cleartrip</p>
                    <p>Shopsy</p>
                  </div>
                  <div>
                    <h6>HELP</h6>
                    <p>Payments</p>
                    <p>Shipping</p>
                    <p>Cancellation & Returns</p>
                    <p>FAQ</p>
                  </div>
                  <div>
                    <h6>CONSUMER POLICY</h6>
                    <p>Cancellation & Returns</p>
                    <p>Terms Of Use</p>
                    <p>Security</p>
                    <p>Privacy</p>
                    <p>Sitemap</p>
                    <p>Grievance Redressal</p>
                    <p>EPR Compliance</p>
                  </div>
                  <div>
                    <h6>Mail Us:</h6>
                    <p>
                      FlipStack Internet Private Limited,<br />
                      Buildings Alyssa, Begonia &<br />
                      Clove Embassy Tech Village,<br />
                      Outer Ring Road,<br />
                      Devarabeesanahalli Village,<br />
                      Bengaluru, 560103,<br />
                      Karnataka, India
                    </p>
                    <p><strong>Social:</strong></p>
                    <div className="social-icons">
                      <FaFacebookF />
                      <FaTwitter />
                      <FaYoutube />
                      <FaInstagram />
                    </div>
                  </div>
                  <div>
                    <h6>Registered Office Address:</h6>
                    <p>
                      FlipStack Internet Private Limited,<br />
                      Buildings Alyssa, Begonia &<br />
                      Clove Embassy Tech Village,<br />
                      Outer Ring Road,<br />
                      Devarabeesanahalli Village,<br />
                      Bengaluru, 560103,<br />
                      Karnataka, India<br />
                      CIN: U51109KA2012PTC066107<br />
                      Telephone: <a href="tel:04445614700">044-45614700</a> /{" "}
                      <a href="tel:04467415800">044-67415800</a>
                    </p>
                  </div>
                </div>
        
                <hr className="footer-separator" />
        
                <div className="footer-bottom">
                  <div className="footer-links">
                    <p>Become a Seller</p>
                    <p>Advertise</p>
                    <p>Gift Cards</p>
                    <p>Help Center</p>
                    <p>© 2007-2025 FlipStack.com</p>
                  </div>
                  <div className="payment-icons">
                    <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
                    <img src="https://img.icons8.com/color/48/mastercard.png" alt="MasterCard" />
                    <img src="https://img.icons8.com/color/48/discover.png" alt="Discover" />
                    <img src="https://img.icons8.com/color/48/rupay.png" alt="Rupay" />
                    <img src="https://img.icons8.com/color/48/bank-card-back-side.png" alt="Net Banking" />
                    <img src="https://img.icons8.com/color/48/money.png" alt="Cash on Delivery" />
                  </div>
                </div>
              </footer>
              </>
  );
};

export default Login;
