import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Payment.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const singleProduct = location.state?.product; 

  const user = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (!singleProduct && user?._id) {
          const res = await axios.get(
            `https://flipstack-server.onrender.com/api/cart/get/${user._id}`
          );
          setCartItems(res.data);
        }
      } catch (error) {
        console.error("Cart fetch error:", error);
      }
    };

    fetchCartItems();
  }, [singleProduct, user?._id]);

  // ✅ Total calculation
  const total = singleProduct
    ? singleProduct.price
    : cartItems.reduce(
        (acc, item) =>
          acc + (item?.product.price ?? 0) * (item?.product.quantity ?? 1), 
        0
      );

  return (
    <>
      <div className="payment-container">
        <h2 className="cart-title">💳 Payment Summary</h2>

        {singleProduct ? (
          <div className="cart-summary-item">
            <img
              src={singleProduct.image || "https://via.placeholder.com/80"}
              alt={singleProduct.name}
              className="product-img"
            />
            <div className="cart-summary-details">
              <h4>{singleProduct.name}</h4>
              <p>Qty: 1</p>
            </div>
            <span className="price">₹{singleProduct.price.toFixed(2)}</span>
          </div>
        ) : (
          <>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => {
                const price = item?.product.price ?? 0;
                const name = item?.product.name ?? "Unnamed Product";
                const image =
                  item?.product.image ?? "https://via.placeholder.com/80";
                const quantity = item?.product.quantity ?? 1; // ✅ FIXED

                return (
                  <div className="cart-summary-item" key={item._id}>
                    <img src={image} alt={name} className="product-img" />
                    <div className="cart-summary-details">
                      <h4>{name}</h4>
                      <p>Qty: {quantity}</p> 
                    </div>
                    <span className="price">
                      ₹{(price * quantity).toFixed(2)} 
                    </span>
                  </div>
                );
              })
            )}
          </>
        )}

        <hr />
        <div className="cart-footer">
          <h3 className="cart-total">Total: ₹{total.toFixed(2)}</h3>
          <button
            className="pay-btn"
            onClick={() => alert("Payment processing not implemented")}
          >
            Proceed to Pay
          </button>
        </div>
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
              FlipStack Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &
              <br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road,
              <br />
              Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
            </p>
            <p>
              <strong>Social:</strong>
            </p>
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
              FlipStack Internet Private Limited,
              <br />
              Buildings Alyssa, Begonia &
              <br />
              Clove Embassy Tech Village,
              <br />
              Outer Ring Road,
              <br />
              Devarabeesanahalli Village,
              <br />
              Bengaluru, 560103,
              <br />
              Karnataka, India
              <br />
              CIN: U51109KA2012PTC066107
              <br />
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
            <img
              src="https://img.icons8.com/color/48/mastercard.png"
              alt="MasterCard"
            />
            <img
              src="https://img.icons8.com/color/48/discover.png"
              alt="Discover"
            />
            <img src="https://img.icons8.com/color/48/rupay.png" alt="Rupay" />
            <img
              src="https://img.icons8.com/color/48/bank-card-back-side.png"
              alt="Net Banking"
            />
            <img
              src="https://img.icons8.com/color/48/money.png"
              alt="Cash on Delivery"
            />
          </div>
        </div>
      </footer>   
      </>
  );
};

export default Payment;
