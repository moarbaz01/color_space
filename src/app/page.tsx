import Heropage from "@components/Heropage";
import Products from "@components/Products";
import { Box, Container, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Heropage />
      <Box
        sx={{
          marginY: {
            xs: "2rem",
            md: "0",
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "primary.dark",
            marginY: "2rem",
          }}
        >
          New Arrivals <ArrowRightAltIcon />
        </Typography>
        <Products />
      </Box>
    </Container>
  );
}
