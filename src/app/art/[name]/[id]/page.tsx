"use client";

import { products } from "@components/Products/data";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const ProductPage = () => {
  const { id }: { id: string } = useParams();
  const product = useMemo(() => {
    return products.find((item) => item.id === id);
  }, []);
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Image
            src={product?.image}
            alt={product?.name}
            width={600}
            height={600}
          />
        </Box>
        <Box>
          {" "}
          <Typography variant="h3" >{product?.name}</Typography>
          <Typography variant="body1">{product?.description}</Typography>
          <Typography>${product?.price}</Typography>
          <Button variant="contained">BUY NOW</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductPage;
