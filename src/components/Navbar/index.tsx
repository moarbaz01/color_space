"use client";
import { Box, Button, Drawer, Menu, MenuItem, Typography } from "@mui/material";
import styles from "./style.module.css";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "../../../public/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import { useRef, useState } from "react";

const user = true;
const Navbar = () => {
  const anchorEl = useRef<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const handleClose = () => {
    anchorEl.current = null;
    setIsOpen((prev) => !prev);
  };

  const handleOpenSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Hello");
    anchorEl.current = event.currentTarget;
    setIsOpen((prev) => !prev);
  };
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbarContainer}>
        <Link href={"/"}>
          <div className="flex-center gap-2">
            <Image alt="color space" height={40} width={40} src={logo} />
            <h1 className={styles.logo}>
              <span className={styles.logoFirst}>Color</span>
              <span className={styles.logoSecond}>Space</span>
            </h1>
          </div>
        </Link>

        <div className={styles.buttonContainer}>
          <HomeIcon fontSize="large" />

          {!user ? (
            <>
              <Button variant="contained" size="large">
                Log In
              </Button>
              <Button variant="outlined" size="large">
                Sign Up
              </Button>
            </>
          ) : (
            <div className={styles.profileImageContainer}>
              <Image
                className={styles.logoImage}
                alt="Logo"
                height={40}
                width={40}
                src={logo}
                onClick={handleOpen}
              />
              <Menu
                anchorEl={anchorEl.current}
                open={isOpen}
                onClose={handleClose}
                sx={{
                  marginTop: "45px",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <MenuItem>
                  <div className="flex-center gap-2">
                    <Image
                      alt="Logo"
                      className={styles.logoImage}
                      height={40}
                      width={40}
                      src={logo}
                    />
                    <p>John Doe</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </div>

        <div onClick={handleOpenSidebar} className={styles.iconContainer}>
          <MenuIcon fontSize="large" />
        </div>
        <Drawer
          sx={{ zIndex: "10000" }}
          open={isSidebarOpen}
          onClose={handleCloseSidebar}
        >
          <Box className={styles.sidebarContainer}>
            <Box className={styles.sbImageContainer}>
              <Image alt="Logo" height={100} width={100} src={logo} />
              <Box className={styles.sbUserDetailsContainer}>
                <Typography variant="h5">John Doe</Typography>
                <Typography variant="caption">Buyer</Typography>
              </Box>
            </Box>
            <Box>
              <p>Home</p>
              <HomeIcon fontSize="large" />
            </Box>
          </Box>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
