"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./style.module.css";
import BrushIcon from "@mui/icons-material/Brush";
import Carasoul from "./Carasoul";
const Heropage = () => {
  return (
    <Box className={styles.hero}>
      <Box className={styles.heroLeft}>
        <h1 className={styles.heroLeftHeading}>
          Discover, <span className="text-main_violet">Create</span>, and Sell
          Art That Inspires
        </h1>
        <p className={styles.heroLeftPara}>
          Unleash your creativity on a platform where artists and collectors
          meet. Showcase your talent, connect with buyers, and turn your passion
          into profit.
        </p>

        {/* Desktop */}
        <Box className="flex items-center gap-4">
          <Button
            variant="contained"
            sx={{ paddingY: { xs: "12px", md: "20px" } }}
            size={window.innerWidth >= 768 ? "large" : "medium"}
          >
            <BrushIcon fontSize="large" sx={{ paddingRight: "10px" }} />
            {window.innerWidth >= 768
              ? "Start Selling Your Art"
              : "Explore Creations"}
          </Button>
          {window.innerWidth >= 768 && (
            <Button variant="outlined" sx={{ paddingY: "20px" }} size="large">
              Explore Unique Creations
            </Button>
          )}
        </Box>
      </Box>
      {/* Carasoul */}
      <Carasoul />
    </Box>
  );
};

export default Heropage;
