import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Provider from "@components/Provider";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination"; // Add this
import "swiper/css/autoplay"; // Add this if necessary
import "swiper/css/scrollbar";
import UserContextProvider from "@context/UserContext";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Color Space",
  description: "Art selling web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          <Box
            component="main"
            sx={{
              paddingTop: {
                xs: "8rem",
                md: "0",
              },
              paddingX: {
                xs: "1rem",
                md: "2rem",
              },
            }}
          >
            <Navbar />
            {children}
          </Box>
        </Provider>
      </body>
    </html>
  );
}
