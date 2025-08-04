import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Account = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('userinfo');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);
const getInitials = (name) => {
    if (!name) return '';
    return name
      .slice(0, 2)
      .toUpperCase();
  };

  return (
    <>
      <div className="container mt-5">
        <h2>Account Details</h2>
        {userData ? (
          <div className="account-card d-flex align-items-center p-4 shadow rounded" style={{ backgroundColor: "#fff" }}>
            <div className="user-details col-md-8">
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              {userData.phone && <p><strong>Phone:</strong> {userData.phone}</p>}
              {userData.address && <p><strong>Address:</strong> {userData.address}</p>}
              {userData.createdAt && (
                <p><strong>Joined:</strong> {new Date(userData.createdAt).toLocaleDateString()}</p>
              )}
            </div>
            <div className="user-initials col-md-4 d-flex justify-content-center align-items-center">
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#1976d2',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: 'bold',
              }}>
                {getInitials(userData.name)}
              </div>
            </div>
          </div>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
       <footer className="footer-container mt-2">
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

export default Account;
