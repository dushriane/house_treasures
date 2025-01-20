import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Footer from "../components/footer";
import Header from "../components/headerHomepage";

const steps = [
  {
    title: "Browse Listings",
    icon: "🔍",
    details: "Search through a wide range of items to find what you need.",
  },
  {
    title: "Contact Seller",
    icon: "📞",
    details: "Reach out to sellers to negotiate and finalize your purchase.",
  },
  {
    title: "Get Your Item",
    icon: "📦",
    details: "Meet the seller or arrange delivery to receive your item.",
  },
];

const categories = ["Kitchen", "Furniture", "Fashion", "Books"];

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
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <i className={`icon-${category.toLowerCase()}`}></i>
              <p>{category}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-details">{step.details}</p>
            </div>
          ))}
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
