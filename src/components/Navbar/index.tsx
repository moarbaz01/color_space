"use client";
import { Box, Button, Drawer, Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import logo from "../../../public/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import { useRef, useState } from "react";
import { ShoppingBag } from "@mui/icons-material";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const path = usePathname();
  const anchorEl = useRef<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { data: session } = useSession();

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
    anchorEl.current = event.currentTarget;
    setIsOpen((prev) => !prev);
  };

  if (path.startsWith("/auth")) {
    return null;
  }
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        zIndex: "1000",
        backgroundColor: "rgba(255,255,255,0.5)",
        paddingY: "1.5rem",
        paddingX: "1rem",
        top: "0",
        left: "0",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Box
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Link href={"/"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Image alt="color space" height={40} width={40} src={logo} />
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                }}
              >
                Color
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  transform: "rotateX(180deg)",
                  paddingLeft: "5px",
                }}
              >
                Space
              </Typography>
            </Box>
          </Box>
        </Link>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            alignItems: "center",
            gap: 2,
          }}
        >
          {!session?.user ? (
            <>
              <Button
                onClick={() => router.push("/auth/login")}
                variant="contained"
                size="large"
              >
                Log In
              </Button>
              <Button
                onClick={() => router.push("/auth/signup")}
                variant="outlined"
                size="large"
              >
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Link href="/cart">
                <ShoppingBag fontSize="large" />
              </Link>
              <Box
                sx={{
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <Image
                  alt="Logo"
                  height={40}
                  style={{
                    borderRadius: "50%",
                  }}
                  width={40}
                  src={session.user.image as string}
                  onClick={handleOpen}
                />
                <Menu
                  anchorEl={anchorEl.current}
                  open={isOpen}
                  onClose={handleClose}
                  sx={{
                    marginTop: "45px",
                  }}
                >
                  <MenuItem>
                    <div className="flex-center gap-2">
                      <Image
                        alt="Logo"
                        style={{
                          borderRadius: "50%",
                        }}
                        height={40}
                        width={40}
                        src={session.user.image as string}
                      />
                      <p>John Doe</p>
                    </div>
                  </MenuItem>
                  <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                </Menu>
              </Box>
            </>
          )}
        </Box>

        <Box
          onClick={handleOpenSidebar}
          sx={{
            display: {
              xs: "block",
              md: "none",
            },
          }}
        >
          <MenuIcon fontSize="large" />
        </Box>
        <Drawer
          sx={{ zIndex: "10000" }}
          open={isSidebarOpen}
          onClose={handleCloseSidebar}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              padding: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Image alt="Logo" height={100} width={100} src={logo} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
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
      </Box>
    </Box>
  );
};

export default Navbar;
