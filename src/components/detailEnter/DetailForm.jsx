import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { addProduct } from '../../service/api';

const DetailForm = () => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(),
    title: {
      shortTitle: '',
      longTitle: '',
    },
    price: {
      mrp: '',
      cost: '',
      discount: ''
    },
    quantity: '',
    tagline: '',
    description: '',
    detailUrl: '',
    url: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested objects in the formData state
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prevState => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value
        }
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    try {
      await addProduct(formData);
      alert('Product added successfully');
    } catch (error) {
      alert('Failed to add product');
      console.log(error.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto' }}>
      <h2>Product Detail Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="ID"
            value={formData.id}
            InputProps={{
              readOnly: true,
            }}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Short Title"
            name="title.shortTitle"
            value={formData.title.shortTitle}
            onChange={handleChange}
            placeholder="Enter Short Title"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            label="Long Title"
            name="title.longTitle"
            value={formData.title.longTitle}
            onChange={handleChange}
            placeholder="Enter Long Title"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            label="MRP"
            name="price.mrp"
            type="number"
            value={formData.price.mrp}
            onChange={handleChange}
            placeholder="Enter MRP"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            label="Cost"
            name="price.cost"
            type="number"
            value={formData.price.cost}
            onChange={handleChange}
            placeholder="Enter Cost"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            label="Discount"
            name="price.discount"
            type="number"
            value={formData.price.discount}
            onChange={handleChange}
            placeholder="Enter Discount Percentage"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter Quantity"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            label="Tagline"
            name="tagline"
            value={formData.tagline}
            onChange={handleChange}
            placeholder="Enter Product Tagline"
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter Description"
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            required
          />
        </div>
        <div>
          <TextField
            label="Detail Image URL"
            name="detailUrl"
            value={formData.detailUrl}
            onChange={handleChange}
            placeholder="Enter Detail Image URL"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <div>
          <TextField
            label="Image URL"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter Image URL"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default DetailForm;
