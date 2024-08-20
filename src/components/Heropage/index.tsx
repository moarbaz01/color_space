"use client";
import { Box, Button, Typography } from "@mui/material";
import Carasoul from "./Carasoul";
const Heropage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
        alignItems: "center",
        paddingBottom: {
          xs: "5rem",
          md: "0rem",
        },
        minHeight: {
          xs: "auto",
          md: "100vh",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          flex: "1",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: {
              xs: "2.5rem",
              md: "4rem",
            },
          }}
        >
          Discover,{" "}
          <Typography
            variant="inherit"
            color="primary.main"
            sx={{ display: "inline" }}
          >
            Create
          </Typography>
          , and Sell Art That Inspires
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
          Unleash your creativity on a platform where artists and collectors
          meet. Showcase your talent, connect with buyers, and turn your passion
          into profit.
        </Typography>

        {/* Desktop */}
        <Button
          sx={{
            paddingY: "10px",
            width: { xs: "full", md: "40%" },
          }}
          size="large"
          variant="contained"
        >
          Explore Unique Creations
        </Button>
      </Box>
      <Carasoul />
    </Box>
  );
};

export default Heropage;
