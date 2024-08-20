"use client";
import { Box, Button, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { products } from "./data";
import useDimenstions from "@hooks/useDimentions";

interface ProductsProps {
  slidesPerView?: number;
  spaceBetween?: number;
}
const Products = ({ slidesPerView = 3, spaceBetween = 30 }: ProductsProps) => {
  const { width, height } = useDimenstions();
  return (
    <Box
      sx={{
        marginY: "2rem",
      }}
    >
      {/* Products */}
      <Swiper
        slidesPerView={width <= 768 ? 1 : slidesPerView}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        modules={[Pagination, Autoplay]}
        style={{
          paddingBottom: "2rem",
        }}
        className="mySwiper"
      >
        {products.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "center",
                  gap: 2,
                  backgroundColor: "primary.light",
                  padding: "1.5rem",
                  position: "relative",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  height={400}
                  width={400}
                  style={{
                    borderRadius: "0.2rem",
                    textAlign: "center",
                    objectFit: "cover",
                  }}
                />
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1">{item.description}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button variant="outlined">Add</Button>
                  <Typography variant="body2" color="primary.main">
                    ${item.price}
                  </Typography>
                </Box>

                <FavoriteBorderIcon
                  sx={{
                    position: "absolute",
                    top: "0.5rem",
                    right: "0.5rem",
                  }}
                  fontSize="medium"
                  color="primary"
                />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Products;
