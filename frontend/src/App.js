import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SignUp from "./pages/signup";
import SignIn from "./pages/login";
import AboutUs from "./pages/aboutUs";
import Listings from "./pages/listings";
import SellItem from "./pages/postItem";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage />} />

        {/* Sign Up Route */}
        <Route path="/signup" element={<SignUp />} />

        {/* Sign In Route */}
        <Route path="/login" element={<SignIn />} />

        {/* About Us Route */}
        <Route path="/aboutUs" element={<AboutUs />} />

        {/* Listings Route */}
        <Route path="/listings" element={<Listings />} />

        {/* Sell an Item Route */}
        <Route path="/postItem" element={<SellItem />} />
      </Routes>
    </Router>
  );
};

export default App;
