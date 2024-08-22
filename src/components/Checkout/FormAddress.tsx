// pages/index.tsx
"use client";
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const FormAddress: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        margin: "0 auto",
        padding: 2,
        backgroundColor: "#f9f9f9",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Fill Address
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Address 1"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Address 2"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        label="Zip Code"
        name="zip"
        type="number"
        value={formData.zip}
        onChange={handleChange}
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        Save
      </Button>
    </Box>
  );
};

export default FormAddress;
