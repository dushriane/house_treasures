import React from "react";
import "./header.css";

const SignedHeader = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <h1>Home</h1>
        <h2>Treasures</h2>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search here" />
        <button className="search-button">
          <span role="img" aria-label="search">
            🔍
          </span>
        </button>
      </div>
      <nav className="category-navigation">
        <a href="/listings">New Listings</a>
        {/* <a href="/books">Books</a>
        <a href="/furniture">Furniture</a>
        <a href="/fashion">Fashion</a>
        <a href="/kitchen">Kitchen</a> */}
      </nav>
      <div className="user-actions">
        <a href="/listings" className="orders">
          <span role="img" aria-label="orders">
            📦
          </span>
        </a>
        <a href="/listings" className="cart">
          <span role="img" aria-label="cart">
            🛒
          </span>
          <span className="cart-count">3</span>
        </a>
        <a href="/listings" className="profile">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="profile-image"
          />
        </a>
      </div>
    </header>
  );
};

export default SignedHeader;
