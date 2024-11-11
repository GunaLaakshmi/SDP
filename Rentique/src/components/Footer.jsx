import React from 'react';
import './Footer.css'; // Ensure you create and import this CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-section">
          <h5>Help</h5>
          <ul>
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact-us">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Rentique</h5>
          <ul>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#quality">Quality</a></li>
            <li><a href="#franchise">Rentique Franchise</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Our Policies</h5>
          <ul>
            <li><a href="#return-policies">Return Policies</a></li>
            <li><a href="#cancellation-policies">Cancellation Policies</a></li>
            <li><a href="#terms-of-use">Terms of use</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h5>Login Options</h5>
          <ul>
            <li><a href="#peer-login">Peer Login</a></li>
            <li><a href="#sandook-login">Sandook Login</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-contact">
        <div className="footer-phone">
          <span>CALL US</span>
          <span>7798804177</span>
        </div>
        <div className="footer-follow-us">
          <span>Follow Us</span>
          <div className="social-icons">
            <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
            <a href="#twitter"><i className="fab fa-twitter"></i></a>
            <a href="#pinterest"><i className="fab fa-pinterest-p"></i></a>
            <a href="#youtube"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-payment-methods">
        <span>Payment Methods</span>
        <div className="payment-icons">
          <img src={`${process.env.PUBLIC_URL}/assets/visa.png`} alt="Visa" />
          <img src={`${process.env.PUBLIC_URL}/assets/mastercard.png`} alt="MasterCard" />
          <img src={`${process.env.PUBLIC_URL}/assets/maestro.png`} alt="Maestro" />
          <img src={`${process.env.PUBLIC_URL}/assets/netbanking.png`} alt="Net Banking" />
          <img src={`${process.env.PUBLIC_URL}/assets/wallet.png`} alt="Wallets" />
        </div>
      </div>
      <div className="footer-copyright">
        <span>Copyright © 2023 rentanattire.com | All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
