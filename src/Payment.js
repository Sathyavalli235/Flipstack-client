import React from 'react';
import { useCart } from './CartContext';
import { useLocation } from 'react-router-dom';
import './Payment.css';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Payment = () => {
  const { cartItems, getTotalPrice } = useCart();
  const location = useLocation();
  const singleProduct = location.state?.product;

  const isSinglePurchase = !!singleProduct;
  const totalAmount = isSinglePurchase
    ? singleProduct.price
    : getTotalPrice();

  return (
    <>
      <div className="payment-container">
        <h2 className="payment-title">🧾 Payment Summary</h2>

        <div className="payment-items">
          {isSinglePurchase ? (
            <div className="payment-product">
              <img src={singleProduct.image} alt={singleProduct.name} />
              <div>
                <h4>{singleProduct.name}</h4>
                <p>₹{singleProduct.price.toFixed(2)}</p>
              </div>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="payment-product">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="payment-total">
          <h3>Total: ₹{!isNaN(totalAmount) ? totalAmount.toFixed(2) : "0.00"}</h3>
        </div>

        <button className="btn btn-success payment-btn" onClick={() => alert("Payment processing not implemented")}>
          Proceed to Pay
        </button>
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

export default Payment;
