import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"; // ✅ to get product from Buy Now
import "./Payment.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const singleProduct = location.state?.product; // ✅ product from Buy Now

  const user = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (!singleProduct && user?._id) {
          // ✅ fetch cart only if Buy Now is not used
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
          acc + (item?.product.price ?? 0) * (item?.product.quantity ?? 1), // ✅ FIXED
        0
      );

  return (
    <>
      <div className="payment-container">
        <h2 className="cart-title">💳 Payment Summary</h2>

        {/* ✅ Case 1: Buy Now (single product) */}
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
          /* ✅ Case 2: Normal Cart Checkout */
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
                      <p>Qty: {quantity}</p> {/* ✅ FIXED */}
                    </div>
                    <span className="price">
                      ₹{(price * quantity).toFixed(2)} {/* ✅ FIXED */}
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

      {/* ✅ Keep your Footer same as before */}
    </>
  );
};

export default Payment;
