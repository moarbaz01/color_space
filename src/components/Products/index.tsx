"use client";
import { Box, Button, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// import Image from "next/image";
import "swiper/css";
import { products } from "./data";
import useDimenstions from "@hooks/useDimentions";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface ProductsProps {
  slidesPerView?: number;
  spaceBetween?: number;
}
const Products = ({ slidesPerView = 2, spaceBetween = 30 }: ProductsProps) => {
  const { width } = useDimenstions();
  const router = useRouter();
  return (
    <Box
      sx={{
        marginY: "2rem",
      }}
    >
      {/* Products */}
      <Swiper
        slidesPerView={width < 768 ? 1 : slidesPerView}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        modules={[Pagination, Autoplay]}
        style={{
          paddingBottom: "2rem",
          zIndex: 10,
        }}
        // className="mySwiper"
      >
        {products.map((item, index) => {
          return (
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                zIndex: 1,
                cursor: "pointer",
              }}
              onClick={() => router.push(`art/${item.name}/${item.id}`)}
              key={index}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  backgroundColor: "primary.light",
                  padding: "1.5rem",
                  borderRadius: "0.2rem",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden", // Hide any overflow
                    borderRadius: "0.2rem",
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={400}
                    loading="eager" // Eagerly load images
                    style={{
                      borderRadius: "0.2rem",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    maxWidth: "400px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                  variant="h6"
                >
                  {item.name}
                </Typography>
                <Typography variant="body1">{item.description}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    {" "}
                    <Button variant="outlined">Add</Button>
                    <FavoriteBorderIcon
                      sx={{
                        // position: "absolute",
                        top: "0.5rem",
                        right: "0.5rem",
                      }}
                      fontSize="medium"
                      color="primary"
                    />
                  </Box>
                  <Typography variant="body2" color="primary.main">
                    ${item.price}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Products;
