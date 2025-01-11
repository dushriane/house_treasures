import React from "react";
import { Link } from "react-router-dom";
import "./headerHomepage.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Home</h1>
        <h2>Treasures</h2>
      </div>

      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/aboutUs" className="nav-link">
          About Us
        </Link>
        <Link to="/listings" className="nav-link">
          Listings
        </Link>
        <Link to="/postItem" className="nav-link">
          Sell An Item
        </Link>
      </nav>

      <div className="auth-button">
        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </div>
    </header>
  );
};

export default Header;
