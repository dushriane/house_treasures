import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/**  left section*/}
        <div className="footer-left">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/listings">Listings</Link>
            </li>
            <li>
              <Link to="/postItem">Sell Your Item</Link>
            </li>
            <li>
              <Link to="/">Home Page</Link>
            </li>
          </ul>
          <div className="social-icons">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="social-icons">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-center">
          <p>&copy; 2025 Ariane_25584</p>
        </div>
        {/**  right section*/}
        <div className="footer-right">
          <h4>Contact</h4>
          <form className="contact-form">
            <input type="text" placeholder="Full names" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Phone number" required />
            <input type="text" placeholder="Subject" required />
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
