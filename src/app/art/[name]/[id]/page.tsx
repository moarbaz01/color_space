"use client";

import { products } from "@components/Products/data";
import { Box, Breadcrumbs, Button, Container, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type ProductType = {
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
  id: string;
};

const ProductPage = () => {
  const { id }: { id: string } = useParams();
  const [product, setProduct] = useState<ProductType | undefined>(undefined);
  useEffect(() => {
    if (id) {
      const temp: ProductType | undefined = products.find(
        (item) => item.id === id
      );
      setProduct(temp);
    }
  }, [id, products]);
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        minHeight: {
          md: "100vh",
        },
        paddingTop: {
          md: "8rem",
        },
        gap: "2rem",
        flexDirection: "column",
      }}
    >
      <Breadcrumbs
        separator="›"
        sx={{
          marginBottom: "2rem",
          display: {
            xs: "none",
            md: "block",
          },
        }}
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="/">
          Home
        </Link>
        <Typography
          sx={{
            maxWidth: 400,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          color="text.primary"
        >
          {product?.name}
        </Typography>
      </Breadcrumbs>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          {product?.image && (
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              priority={true}
            />
          )}
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {" "}
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: {
                xs: "1.5rem",
                md: "2.5rem",
              },
            }}
          >
            {product?.name}
          </Typography>
          <Typography variant="body1">{product?.description}</Typography>
          <Typography
            color="primary"
            sx={{
              fontSize: "3rem",
              fontWeight: "bold",
            }}
          >
            ${product?.price}
          </Typography>
          <Button
            variant="contained"
            sx={{
              paddingY: "10px",
            }}
          >
            BUY NOW
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductPage;
