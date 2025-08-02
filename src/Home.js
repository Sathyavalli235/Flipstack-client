import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



import c1 from './images/c1.jpg';
import c2 from './images/c2.jpg';
import c3 from './images/c3.jpg';

import wm from './images/wm.jpg';
import fridge from './images/fridge.jpg';
import ac from './images/ac.jpg';
import chimeys from './images/chimeys.jpg';
import kitchen from './images/kitchen.jpg';
import homedecor from './images/homedecor.jpg';
import furniture from './images/furniture.jpg';
 import home from './images/home.jpg';
// import slides from './images/slides.jpg';
// import scating from './images/scating.jpg';
// import tents from './images/tents.jpg';
import pp from './images/pp.jpg';
import sony from './images/sony.jpg';
import cam from './images/cam.jpg';
import pro from './images/pro.jpg';
import dji from './images/dji.jpg';
import printer from './images/printer.jpg'
import b1 from './images/b1.jpg';
import b2 from './images/b2.jpg';
import b3 from './images/b3.jpg';
import b4 from './images/b4.jpg';
import b5 from './images/b5.jpg';
import b6 from './images/b6.jpg';
import b7 from './images/b7.jpg';
import b8 from './images/b8.jpg';
import b9 from './images/b9.jpg';
import a1 from './images/a1.jpg';
import a2 from './images/a2.jpg';
import a3 from './images/a3.jpg';
import a4 from './images/a4.jpg';
import a5 from './images/a5.jpg';
import a6 from './images/a6.jpg';
import a7 from './images/a7.jpg';
import a8 from './images/a8.jpg';
import a9 from './images/a9.jpg';
import d1 from './images/d1.png';
import d2 from './images/d2.png';
import d3 from './images/d3.png';
import d4 from './images/d4.png';
import d5 from './images/d5.png';
import d6 from './images/d6.png';
import './index.css';

const Home = () => {
  const navigate = useNavigate();

  const goToOrders = () => {
    navigate('/Products');
  };

  return (
    <>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={c1} alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c2} alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={c3} alt="Slide 3" />
        </Carousel.Item>
      </Carousel>


      {/* Deals Section */}
      <div className="deals-container">
        <div className="deal-box">
          <h5>Up to 65% off | Offers on home appliances</h5>
          <div className="deal-grid">
            <div className="deal-item">
              <img src={wm} alt="Washing machines" />
              <p>Washing machines</p>
            </div>
            <div className="deal-item">
              <img src={fridge} alt="Refrigerators" />
              <p>Refrigerators</p>
            </div>
            <div className="deal-item">
              <img src={ac} alt="Air conditioners" />
              <p>Air conditioners</p>
            </div>
            <div className="deal-item">
              <img src={chimeys} alt="Chimneys" />
              <p>Chimneys</p>
            </div>
          </div>
          <a href="/products" className="see-all">See all offers</a>
        </div>

        <div className="deal-box">
          <h5>Minimum 50% off | Kitchen & more</h5>
          <div className="deal-grid">
            <div className="deal-item">
              <img src={kitchen} alt="Kitchen" />
              <p>Kitchen</p>
            </div>
            <div className="deal-item">
              <img src={homedecor} alt="Home Decor" />
              <p>Decor</p>
            </div>
            <div className="deal-item">
              <img src={furniture} alt="Furniture" />
              <p>Furniture</p>
            </div>
            <div className="deal-item">
              <img src={home} alt="Improvement" />
              <p>Improvement</p>
            </div>
          </div>
          <a href="/products" className="see-all">See all offers</a>
        </div>
         <div className="deal-box full-banner">
  <h5>Most awaited launches of the year | Join Prime now</h5>
  <div className="deal-grid">
    <div className="deal-item">
      <img src={pp} alt="Launch Banner" />
    </div>
  </div>
  <a href="/products" className="see-all">See all deals</a>
</div>

          <div className="deal-box">
          <h5>Up to 45% off | Cameras from popular brands</h5>
          <div className="deal-grid">
            <div className="deal-item">
              <img src={sony} alt="Kitchen" />
              <p>Sony </p>
            </div>
            <div className="deal-item">
              <img src={cam} alt="Home Decor" />
              <p>FujiFilm </p>
            </div>
            <div className="deal-item">
              <img src={pro} alt="Furniture" />
              <p>GoPro </p>
            </div>
            <div className="deal-item">
              <img src={dji} alt="Improvement" />
              <p>DJI </p>
            </div>
          </div>
          <a href="/products" className="see-all">See all offers</a>
        </div>
         <div className="deal-box full-banner">
  <h5>Up to 60% off | Amazon Renewed</h5>
  <div className="deal-grid">
    <div className="deal-item">
      <img src={printer} alt="Launch Banner" />
    </div>
  </div>
  <a href="/products"className="see-all">See all deals</a>
</div>
<div className="deal-box furniture-section">
  <h5>🔥 Top Deals 🔥</h5>
  <div className="furniture-scroll">
      <div className="furniture-item" onClick={goToOrders}>
  <div className="product-card">
    <img src={b1} alt="Van Heusen Shirt" className="product-image" />
    <div className="offer-tags">
      <span className="discount-tag">50% off</span>
      <span className="prime-deal">Prime Day Deal</span>
    </div>
    <div className="price-info">
      <span className="current-price">₹549</span>
      <span className="mrp">M.R.P.: <s>₹1,099</s></span>
    </div>
    <p className="product-title">Van Heusen Men's Cotton Solid...</p>
  </div>
</div>
      <div className="furniture-item" onClick={goToOrders}>
     <div className="product-card">
  <img src={b2} alt="Van Heusen Shirt" className="product-image" />
  <div className="offer-tags">
    <span className="discount-tag">82% off</span>
    <span className="prime-deal">Limited Day Deal</span>
  </div>
  <div className="price-info">
    <span className="current-price">₹599</span>
    <span className="mrp">M.R.P.: <s>₹3,396</s></span>
  </div>
  <p className="product-title">Safari Omega spacious/large Laptop...</p>
</div>
    </div>
      <div className="furniture-item" onClick={goToOrders}>
      <div className="product-card">
  <img src={b3} alt="Van Heusen Shirt" className="product-image" />
  <div className="offer-tags">
    <span className="discount-tag">32% off</span>
    <span className="prime-deal">Prime Day Deal</span>
  </div>
  <div className="price-info">
    <span className="current-price">₹917</span>
    <span className="mrp">M.R.P.: <s>₹1,349</s></span>
  </div>
  <p className="product-title">Wakefit 100% Waterproof Premium...</p>
</div>
    </div>
      <div className="furniture-item" onClick={goToOrders}>
     <div className="product-card">
  <img src={b4} alt="Van Heusen Shirt" className="product-image" />
  <div className="offer-tags">
    <span className="discount-tag">79% off</span>
    <span className="prime-deal">Prime Day Deal</span>
  </div>
  <div className="price-info">
    <span className="current-price">₹948</span>
    <span className="mrp">M.R.P.: <s>₹4,499</s></span>
  </div>
  <p className="product-title">Lifelong Flodable Kids Scooter...</p>
</div>
    </div>
      <div className="furniture-item" onClick={goToOrders}>
     <div className="product-card">
  <img src={b5} alt="Van Heusen Shirt" className="product-image" />
  <div className="offer-tags">
    <span className="discount-tag">81% off</span>
    <span className="prime-deal">Prime Day Deal</span>
  </div>
  <div className="price-info">
    <span className="current-price">₹189</span>
    <span className="mrp">M.R.P.: <s>₹999</s></span>
  </div>
  <p className="product-title">Wazdrof Sealing CLip-Portable Mini...</p>
</div>
    </div>
      <div className="furniture-item" onClick={goToOrders}>
      <div className="product-card">
  <img src={b6} alt="Van Heusen Shirt" className="product-image" />
  <div className="offer-tags">
    <span className="discount-tag">35% off</span>
    <span className="prime-deal">Prime Day Deal</span>
  </div>
  <div className="price-info">
    <span className="current-price">₹648</span>
    <span className="mrp">M.R.P.: <s>₹995</s></span>
  </div>
  <p className="product-title">Philips Battery Powered SkinProtect...</p>
</div>
    </div>
      <div className="furniture-item" onClick={goToOrders}>
     <div className="product-card">
  <img src={b7} alt="Van Heusen Shirt" className="product-image" />
  <div className="offer-tags">
    <span className="discount-tag">44% off</span>
    <span className="prime-deal">Prime Day Deal</span>
  </div>
  <div className="price-info">
    <span className="current-price">₹269</span>
    <span className="mrp">M.R.P.: <s>₹480</s></span>
  </div>
  <p className="product-title">Presto! Garbage Bag...</p>
</div>
    </div>
      <div className="furniture-item" onClick={goToOrders}>
      <div className="product-card">
  <img src={b8} alt="Van Heusen Shirt" className="product-image" />
  <div className="offer-tags">
    <span className="discount-tag">56% off</span>
    <span className="prime-deal">Prime Day Deal</span>
  </div>
  <div className="price-info">
    <span className="current-price">₹499</span>
    <span className="mrp">M.R.P.: <s>₹1,130</s></span>
  </div>
  <p className="product-title">Prestige Omega Select Plus...</p>
</div>
    </div>
      <div className="furniture-item" onClick={goToOrders}>
     <div className="product-card">
  <img src={b9} alt="Van Heusen Shirt" className="product-image" />
  <div className="offer-tags">
    <span className="discount-tag">71% off</span>
    <span className="prime-deal">Prime Day Deal</span>
  </div>
  <div className="price-info">
    <span className="current-price">₹699</span>
    <span className="mrp">M.R.P.: <s>₹1,399</s></span>
  </div>
  <p className="product-title">HP x796w 128GB USB 3.2...</p>
</div>
    </div>
  </div>
</div>

<div className="deal-box furniture-section">
  <h5>Starting ₹99 + 20% cashback on first order | Beauty & makeup</h5>
            <a href="/products" className="see-all">See all offers</a>

  <div className="furniture-scroll">
    <div className="furniture-item">
      <img src={a1} alt="Cookware Sets" />
    </div>
    <div className="furniture-item">
      <img src={a2} alt="Pans" />
      
    </div>
    <div className="furniture-item">
      <img src={a3} alt="Wall Clock" />
    </div>
    <div className="furniture-item">
      <img src={a4} alt="Indoor Plants" />
    </div>
    <div className="furniture-item">
      <img src={a5} alt="Pressure Cookers" />
    </div>
      <div className="furniture-item">
      <img src={a6} alt="Pressure Cookers" />
    </div>
      <div className="furniture-item">
      <img src={a7} alt="Pressure Cookers" />
    </div>
      <div className="furniture-item">
      <img src={a8} alt="Pressure Cookers" />
    </div>
      <div className="furniture-item">
      <img src={a9} alt="Pressure Cookers" />
    </div>
  </div>
</div>

<div className="promo-grid">
  <div className="promo-item"><img src={d1} alt="Promo 1" /></div>
  <div className="promo-item"><img src={d2} alt="Promo 2" /></div>
  <div className="promo-item"><img src={d3} alt="Promo 3" /></div>
  <div className="promo-item"><img src={d4} alt="Promo 4" /></div>
  <div className="promo-item"><img src={d5} alt="Promo 5" /></div>
  <div className="promo-item"><img src={d6} alt="Promo 6" /></div>
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

      </div>
    </>
  );
};

export default Home;
