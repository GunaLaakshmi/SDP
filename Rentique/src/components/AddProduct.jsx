import React, { useState } from 'react';

const AddProduct = ({ onSubmit }) => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
    image: ''
  });

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    console.log('Product added:', product);
    // Add logic to handle product addition (e.g., send to backend)
    setProduct({ title: '', description: '', category: '', image: '' });
    onSubmit(); // Navigate back to the dashboard or another view after submission
  };

  return (
    <div style={styles.contentBox}>
      <h2>Add Product</h2>
      <form onSubmit={handleProductSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={handleProductChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleProductChange}
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleProductChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Image URL:</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleProductChange}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Add Product</button>
      </form>
    </div>
  );
};

const styles = {
  contentBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    width: '300px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  textarea: {
    width: '300px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#343a40',
    color: '#fff',
    cursor: 'pointer',
  },
};

export default AddProduct;
