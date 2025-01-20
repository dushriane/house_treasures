import React, { useState } from "react";
import "./postItem.css";
import Footer from "../components/footer.jsx";
import SignedHeader from "../components/header.jsx";
import axios from "axios";

const SellItem = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

 try {
      // Create a FormData object to handle image file upload
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("category", formData.category);
      data.append("price", formData.price);
      data.append("image", formData.image);

      // Send POST request to the backend
      const response = await axios.post("http://localhost:8080/api/items", data, {
        headers: {"Content-Type": "multipart/form-data",
        },
      });

      // Display success message
      setMessage(response.data);
    } catch (error) {
      console.error("Error adding item:", error);
      setMessage("Failed to add item. Please try again.");
    }
  };

  return (
    <div className="sell-item-container">
      <SignedHeader className="signed-header" />
      <h1 className="sell-item-title">Sell Your Treasure</h1>
      <p className="sell-item-subtitle">
        Turn your unused items into extra cash!
      </p>
      
      {message && <p className="message">{message}</p>}
      
      <form className="sell-item-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Item Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the title of your item"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a detailed description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="books">Books</option>
            <option value="furniture">Furniture</option>
            <option value="fashion">Fashion</option>
            <option value="kitchen">Kitchen</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price (USD)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Set a price for your item"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageUpload}
            accept="image/*"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Post Item
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default SellItem;
