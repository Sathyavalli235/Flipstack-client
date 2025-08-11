import React, { useEffect, useState } from "react";
import axios from "axios";
import './Cart.css';
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    if (user?._id) {
      axios
        .get(`https://flipstack-server.onrender.com/api/cart/get/${user._id}`)
        .then((res) => setCartItems(res.data))
        .catch((err) => console.error("Cart fetch error", err));
    }
  }, []);

  const increaseQty = async (item) => {
    const updatedQty = item.product.quantity + 1;
    await updateQuantity(item._id, updatedQty);
  };

  const decreaseQty = async (item) => {
    const updatedQty = item.product.quantity - 1;
    if (updatedQty >= 1) await updateQuantity(item._id, updatedQty);
  };

  const updateQuantity = async (cartId, quantity) => {
    try {
      await axios.put(`https://flipstack-server.onrender.com/api/cart/update/${cartId}`, { quantity });
      setCartItems(prev =>
        prev.map(item =>
          item._id === cartId ? { ...item, product: { ...item.product, quantity } } : item
        )
      );
    } catch (err) {
      console.error("Qty update failed", err);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`https://flipstack-server.onrender.com/api/cart/delete/${id}`);
      setCartItems(prev => prev.filter(item => item._id !== id));
    } catch (err) {
      console.error("Remove error", err);
    }
  };

  const getTotalPrice = () =>
    cartItems.reduce((acc, item) => acc + item.product.price * item.product.quantity, 0);

  return (
    <>
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <img src={item.product.image} alt={item.product.name} />
              <div>
                <h4>{item.product.name}</h4>
                <p>Price: ₹{item.product.price}</p>
                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item)}>-</button>
                  <span>{item.product.quantity}</span>
                  <button onClick={() => increaseQty(item)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item._id)}>Remove</button>
              </div>
            </div>
          ))}
          <hr />
          <h3>Total: ₹{getTotalPrice().toFixed(2)}</h3>
          <button className="btn-buy" onClick={() => navigate("/payment")}>Buy Now</button>
        </>
      )}
    </div>
     {/* Footer */}
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
                  Telephone: <a href="tel:04445614700">044-45614700</a> /{' '}
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

export default Cart;
