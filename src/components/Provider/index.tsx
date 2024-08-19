"use client"
import { ThemeProvider } from "@mui/material";
import theme from "@theme/theme";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
