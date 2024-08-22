"use client";
import {
  CheckoutSummary,
  FormAddress,
  ProductItem,
} from "@components/Checkout";
import { products } from "@components/Products/data";
import { Box, Button, Container, FormLabel, Typography } from "@mui/material";
import { useState } from "react";

const OrderPage = () => {
  const [step, setStep] = useState<number>(1);
  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: {
          md: "8rem",
        },
        paddingBottom: {
          md: "4rem",
        },
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          position: "relative",
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flex: 1,
          }}
        >
          {products.map(
            (item, index) => index < 3 && <ProductItem {...item} key={index} />
          )}
        </Box>

        {/* Address Page */}
        <Box
          sx={{
            flex: 2,
            position: "sticky",
            top: "15%",
            height: "fit-content",
            backgroundColor: "background.default",
            padding: 2,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              marginBottom: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
                backgroundColor: "rgba(0,0,0,0.2)",
                height: 40,
                width: 40,
                borderRadius: "50%",
                color: "primary.light",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              {step}
            </Box>
            <Typography variant="h6" color="text.secondary">
              FILL UP SHIPPING ADDRESS
            </Typography>
          </Box>
          {step === 1 && <FormAddress />}
          {step === 2 && <CheckoutSummary />}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 2,
              gap: 2,
            }}
          >
            {step > 1 && (
              <Button
                onClick={() => setStep((prev) => (step > 1 ? prev - 1 : prev))}
                variant="contained"
              >
                Back
              </Button>
            )}
            <Button onClick={() => setStep(2)} variant="outlined">
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPage;
