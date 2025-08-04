import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
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
import axios from 'axios';

function App() {
  const { cartItems, clearCart, addToCart } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // ✅ Now it will work
  const [cartCount , setCartCount] = useState(0);

  useEffect(() => {
    const storedStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(storedStatus === "true");

    fetchCartData();

  }, []);

  

  const fetchCartData = async () => {
    const userId = JSON.parse(localStorage.getItem("userinfo")) ;
    if(userId) {
      const res = await axios.get('http://localhost:5000/api/cart/get');
      const data = res.data
      const cartItem1 = data.filter(item => item.userId === userId._id).map(i => i.product)
      cartItem1.forEach(p => {
        addToCart(p);  
      });
      setCartCount(cartItem1.length);
      
    }
  }

 const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userinfo");
  clearCart();
  setIsLoggedIn(false);
  navigate("/"); // ✅ This now works correctly
};


  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar text-dark">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">FlipStack</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

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
                  🛒Cart <span className="badge bg-dark">{cartCount}</span>
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
         <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products fetchCartData={fetchCartData} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

//export default App;


// product.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'; 
import { useCart } from './CartContext';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import prod1 from './images/b1.jpg'; // sample images
import prod2 from './images/b2.jpg';
import prod3 from './images/b3.jpg';
import prod4 from './images/p18.jpg';
import prod5 from './images/p1.jpg';
import prod6 from './images/p2.jpg';
import prod7 from './images/p3.jpg';
import prod8 from './images/p4.jpg';
import prod9 from './images/p5.jpeg';
import prod10 from './images/p6.jpeg';
import prod11 from './images/b4.jpg';
import prod12 from './images/b5.jpg';
import prod13 from './images/b6.jpg';
import prod14 from './images/b7.jpg';
import prod15 from './images/b8.jpg';
import prod16 from './images/b9.jpg';
import prod17 from './images/p7.jpg';
import prod18 from './images/p8.jpg';
import prod19 from './images/p9.jpg';
import prod20 from './images/p10.jpg';
import prod21 from './images/p11.jpg';
import prod22 from './images/p12.jpg';
import prod23 from './images/p14.jpg';
import prod24 from './images/p16.jpg';
import prod25 from './images/p20.jpg';
import axios from 'axios';


const Products = () => {
  const navigate = useNavigate();
   const { addToCart } = useCart();
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  
  const user = localStorage.getItem("isLoggedIn"); // or use a context if you have

  setIsLoggedIn(!!user); // set to true if user exists
  // if (user && user._id && cartItems.length > 0) {
  //   addToCart(product);
  // }

  // console.log(axios.get('http://localhost:5000/api/cart/get').then(d => d.data.map(d => d)).catch(err => err))
}, []);
// const handleAddToCart = (product) => {
//   if (!isLoggedIn) {
//     alert("Please login to add items to the cart.");
//     return;
//   }

//   const cleanedProduct = {
//     ...product,
//     price: Number(String(product.price).replace(/[^\d.]/g, '')),
//     originalPrice: Number(String(product.originalPrice).replace(/[^\d.]/g, '')),
//   };

//   addToCart(cleanedProduct);
//   alert(`${product.name} added to cart!`);
// };

const handleAddToCart = async (product) => {
  if (!isLoggedIn) {
    alert("Please login to add items to the cart.");
    return;
  }

  const user = JSON.parse(localStorage.getItem("userinfo")); // get logged-in user info
  if (!user || !user._id) {
    alert("User info not found.");
    return;
  }

  const cleanedProduct = {
    ...product,
    price: Number(String(product.price).replace(/[^\d.]/g, '')),
    originalPrice: Number(String(product.originalPrice).replace(/[^\d.]/g, '')),
  };

  try {
    await axios.post('http://localhost:5000/api/cart/add', {
      userId: user._id,
      product: cleanedProduct
    });
    alert(`${product.name} added to cart!`);
    // addToCart(cleanedProduct);
  } catch (err) {
    console.error("Error adding to cart:", err);
    alert("Failed to add item to cart.");
  }
};

const handleBuyNow = (product) => {
  if (!isLoggedIn) {
    alert("Please login to proceed with buying.");
    return;
  }

  const cleanedProduct = {
    ...product,
    price: Number(String(product.price).replace(/[^\d.]/g, '')),
    originalPrice: Number(String(product.originalPrice).replace(/[^\d.]/g, '')),
  };

  navigate("/payment", { state: { product: cleanedProduct } });
};


  const products = [
    {
      id: 1,
      name: "Van Heusen Men's Shirt",
      price: "₹549",
      originalPrice: "₹1,099",
      image: prod1,
    },
    {
      id: 2,
      name: "Safari Laptop Backpack",
      price: "₹599",
      originalPrice: "₹3,396",
      image: prod2,
    },
    {
      id: 3,
      name: "Wakefit Waterproof Mattress",
      price: "₹917",
      originalPrice: "₹1,349",
      image: prod3,
    },
    {
      id:4,
      name:"Blue Star 1.5 Ton 3 Star Inverter Split AC",
      price:"₹36,999",
      originalPrice:"₹40,000",
      image:prod4,
    },
     {
      id:5,
      name:"Giglick 4xl Bean Bag Cushion ",
      price:"₹2100",
      originalPrice:"₹4900",
      image:prod5,
    },
    {
      id:6,
      name:" Wooden 3 Leg Round Coffee Table,End Table ",
      price:"₹1300",
      originalPrice:"₹3500",
      image:prod6,
    },
      {
      id:7,
      name:" Solimo Bean Bag 1 kg Refill Pack|Quick & Easy to Fill ",
      price:"₹519",
      originalPrice:"₹1000",
      image:prod7,
    },
      {
      id:8,
      name:" Godrej 180 L 2 Star Advanced Capillary Technology ",
      price:"₹12,490",
      originalPrice:"₹17,500",
      image:prod8,
    },
     {
      id:9,
      name:" Armchair Room Maren Living Room Accent Chairs  ",
      price:"₹9500",
      originalPrice:"₹15,000",
      image:prod9,
    },
     {
      id:10,
      name:" Teak Wood, Size 75*72, Head Carving Work, Top Covered  ",
      price:"₹15,750",
      originalPrice:"₹20,500",
      image:prod10,
    },
    
    {
      id:11,
      name:" Road Runner Astro, the 3-wheeler  Astro Man style  ",
      price:"₹15,750",
      originalPrice:"₹20,500",
      image:prod11,
    },
    {
      id:12,
      name:"  MaxSmile Portable Mini Sealing  – Reseal with a Smile! ",
      price:"₹500",
      originalPrice:"₹750",
      image:prod12,
    },
    {
      id:13,
      name:" PHILIPS Power Series P-1 Beard Trimmer-VHTH-25 ",
      price:"₹934",
      originalPrice:"₹1500",
      image:prod13,
    },
    {
      id:14,
      name:" Ezee Premium Garbage Bag (Medium, Black) ",
      price:"₹450",
      originalPrice:"₹600",
      image:prod14,
    },
    {
      id:15,
      name:" Non-Stick Dosa Tawa 4 Coating 4mm (30 Cm) ",
      price:"₹1,349",
      originalPrice:"₹2000",
      image:prod15,
    },
     {
      id:16,
      name:" HP v236w 16GB USB 2.0 Pen Drive  ",
      price:"₹378",
      originalPrice:"₹500",
      image:prod16,
    },
    {
      id:17,
      name:" fackelmann stainless steel egg whisk ",
      price:"₹300",
      originalPrice:"₹400",
      image:prod17,
    },
    {
      id:18,
      name:"  Microfiber Cleaning Cloth | 12 Pack  ",
      price:"₹750",
      originalPrice:"₹1500",
      image:prod18,
    },
    {
      id:19,
      name:" Rice Washing Bowl / Filter Cleaning Pasta  ",
      price:"₹378",
      originalPrice:"₹500",
      image:prod19,
    },
    {
      id:20,
      name:" Sauce and Oil Bottle with Silicone Brushz ",
      price:"₹388",
      originalPrice:"₹500",
      image:prod20,
    },
    {
      id:21,
      name:" NH10 DESIGNS Stainless Steel 3-Tier Kitchen Rack ",
      price:"₹529",
      originalPrice:"₹750",
      image:prod21,
    },
    {
      id:22,
      name:" Skylike 6Pcs Fridge Storage Boxes, Fridge Organizer  ",
      price:"₹398",
      originalPrice:"₹650",
      image:prod22,
    },
    {
      id:23,
      name:" Godrej 7.5 Kg 5 Star Rollercoaster Wash Technology,  ",
      price:"₹13,990",
      originalPrice:"₹15,550",
      image:prod23,
    },
    {
      id:24,
      name:" V-Guard VGSD 50 Supreme Stabilizer for Refrigerator   ",
      price:"₹1898",
      originalPrice:"₹2500",
      image:prod24,
    },
     {
      id:25,
      name:" boAt Lunar Discovery w/ 1.39,, Turn-by Navigation ",
      price:"₹1399",
      originalPrice:"₹2500",
      image:prod25,
    }
  ];

  return (
    <>
    <div className="orders-container">
      <div className="orders-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h4>{product.name}</h4>
            <p>
              <span className="price">{product.price}</span>{" "}
              <span className="original-price"><s>{product.originalPrice}</s></span>
            </p>
            <div className="product-buttons">
              <button onClick={() => handleAddToCart(product)} className="btn-cart">Add to Cart</button>
<button onClick={() => handleBuyNow(product)} className="btn-buy">Buy Now</button>
            </div>
          </div>
        ))}
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

export default Products;
  