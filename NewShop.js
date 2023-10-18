import React, { useState } from "react";

function NewShopForm() {
  const [formData, setFormData] = useState({
    logo: "",
    name: "",
    description: ""
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
      description: ""
    });
  };

  return (
    <div>
      <h2>New Shop</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="logo">Upload Logo:</label>
        </div>
        <div>
          <input
            type="file"
            id="logo"
            name="logo"
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
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewShopForm;
