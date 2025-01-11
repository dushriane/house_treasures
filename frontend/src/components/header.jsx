import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <h1>
          <span>Home</span> Treasures
        </h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search here" />
        <button className="search-button">
          <span role="img" aria-label="search">
            🔍
          </span>
          Search
        </button>
      </div>
      <nav className="category-navigation">
        <a href="/new-listings">New Listings</a>
        <a href="/books">Books</a>
        <a href="/furniture">Furniture</a>
        <a href="/fashion">Fashion</a>
        <a href="/kitchen">Kitchen</a>
      </nav>
      <div className="user-actions">
        <a href="/orders" className="orders">
          <span role="img" aria-label="orders">
            📦
          </span>
          Orders
        </a>
        <a href="/cart" className="cart">
          <span role="img" aria-label="cart">
            🛒
          </span>
          Cart <span className="cart-count">3</span>
        </a>
        <a href="/profile" className="profile">
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

export default Header;
