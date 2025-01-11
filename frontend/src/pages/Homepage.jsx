import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Footer from "../components/footer";
import Header from "../components/headerHomepage";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Home Treasures</h1>
          <p>
            Declutter your home and earn extra cash by selling unused items.
            Explore hidden gems from others!
          </p>
          <div className="hero-buttons">
            <Link to="/listings" className="btn-primary">
              Browse Treasures
            </Link>
            <Link to="/postItem" className="btn-secondary">
              Sell Your Item
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="featured-categories">
        <h2>Featured Categories</h2>
        <div className="categories-grid">
          <div className="category-card">Kitchen</div>
          <div className="category-card">Furniture</div>
          <div className="category-card">Fashion</div>
          <div className="category-card">Books</div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to declutter your home?</h2>
        <p>Sign up today and start selling or buying treasures!</p>
        <Link to="/signup" className="btn-primary">
          Get Started
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
