import React from "react";
import art1 from "../../../public/art1.jpg";
import art2 from "../../../public/art2.jpg";
import art3 from "../../../public/art3.jpg";
import styles from "./style.module.css";

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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const Carasoul = () => {
  return (
    <Swiper
      className={styles.carasoulContainer}
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
        reverseDirection: true,
      }}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
    >
      {photos.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <Image
                src={item}
                alt={`Index ${index}`}
                height={600}
                width={600}
                layout="intrinsic"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carasoul;
