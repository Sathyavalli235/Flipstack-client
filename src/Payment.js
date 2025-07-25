// src/Payment.js
import React from 'react';
import { useCart } from './CartContext';
import './Payment.css'; // optional

const Payment = () => {
  const { getTotalPrice } = useCart();
  const totalAmount = getTotalPrice();

  return (
    <div className="payment-container">
      <h2>Payment Gateway</h2>
<p>Total amount to be paid: <strong>₹{!isNaN(totalAmount) ? totalAmount.toFixed(2) : "0.00"}</strong></p>

      {/* You can stop the flow here or simulate a confirmation */}
      <button className="btn btn-success" onClick={() => alert("Payment processing not implemented")}>
        Proceed to Pay
      </button>
    </div>
  );
};

export default Payment;
