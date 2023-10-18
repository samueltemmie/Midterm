import React, { useState } from "react";

function NewProductForm() {
  const [formData, setFormData] = useState({
    logo: "",
    name: "",
    description: "",
    category: "",
    quantity: "",
    price: ""
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add further processing or submission logic here.
    console.log("Form Data:", formData);
  };

  const handleCancel = () => {
    // Handle cancel action here (e.g., redirect or clear the form).
    setFormData({
      logo: "",
      name: "",
      description: "",
      category: "",
      quantity: "",
      price: ""
    });
  };

  return (
    <div>
      <h2>New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">UPLOAD PHOTO:</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProductForm;
