// src/Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css'; // optional styling
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://flipstack-server.onrender.com/contact', form);
      alert(res.data.message);
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      alert(err.response?.data?.message || "Message sending failed");
    }
  };

  return (
    <>
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
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

export default Contact;
