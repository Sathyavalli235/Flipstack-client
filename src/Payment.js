import React, { useEffect, useState } from "react";
import axios from "axios";

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);

  const user = JSON.parse(localStorage.getItem("userinfo"));

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (user?._id) {
          const res = await axios.get(
            `http://localhost:5000/api/cart/get/${user._id}`
          );
          setCartItems(res.data);
        }
      } catch (error) {
        console.error("Cart fetch error:", error);
      }
    };

    fetchCartItems();
  }, [user?._id]);

  // console.log(cartItems);

  const total = cartItems.reduce(
    (acc, item) => acc + (item?.product.price ?? 0),
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Your Cart Summary</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => {
            const price = item?.product.price ?? 0;

            return (
              <div
                key={item._id}
                style={{
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <p><strong>{item.name}</strong></p>
                <p>Price: ₹{price.toFixed(2)}</p>
              </div>
            );
          })}

          <hr />
          <h3>Total: ₹{total.toFixed(2)}</h3>

          <button
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              background: "green",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => alert("Payment processing not implemented")}
          >
            Proceed to Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default Payment;
