"use client";
import UserContextProvider from "@context/UserContext";
import { ThemeProvider } from "@mui/material";
import theme from "@theme/theme";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <SessionProvider>
      <UserContextProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </UserContextProvider>
    </SessionProvider>
  );
};

export default Provider;
