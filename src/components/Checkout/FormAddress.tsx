// pages/index.tsx
"use client";
import React, { useContext, useState } from "react";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { UserContext } from "@context/UserContext";

const FormAddress: React.FC = () => {
  const { shippingAddressData: formData, setShippingAddressData: setFormData } =
    useContext(UserContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Helo");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Address 1"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Address 2"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            label="Zip Code"
            name="zip"
            type="number"
            value={formData.zip}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
        }}
      ></Box>
    </Box>
  );
};

export default FormAddress;
