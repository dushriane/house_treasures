import React from "react";
import "./login.css";
import Footer from "../components/footer";
import Header from "../components/headerHomepage";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic
    console.log("Sign-in submitted");
  };

  return (
    <div className="signin-container">
      <Header />
      <div className="signin-card">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="signin-btn">
            Sign In
          </button>
        </form>
        <div className="signin-footer">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
