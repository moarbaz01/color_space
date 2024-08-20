import React from "react";
import art1 from "../../../public/art1.jpg";
import art2 from "../../../public/art2.jpg";
import art3 from "../../../public/art3.jpg";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
const photos = [art1, art2, art3, art1, art2, art3];
import Image from "next/image";
import { Box } from "@mui/material";

const Carasoul = () => {
  return (
    <Swiper
      style={{
        flex: 1,
        width: "100%",
      }}
      modules={[
        Navigation,
        Pagination,
        Scrollbar,
        A11y,
        EffectCoverflow,
        Autoplay,
      ]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      speed={800}
      autoplay={{
        delay: 1000,
      }}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
      }}
      pagination={{ clickable: true }}
    >
      {photos.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={item}
                alt={`Index ${index}`}
                height={600}
                width={600}
                layout="intrinsic"
              />
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carasoul;
