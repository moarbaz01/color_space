"use client";
import UserContextProvider from "@context/UserContext";
import { ThemeProvider } from "@mui/material";
import theme from "@theme/theme";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <UserContextProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UserContextProvider>
  );
};

export default Provider;
