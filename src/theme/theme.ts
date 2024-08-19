// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#1B1B1E", // Custom background color
          color: "#FFFFFF", // Custom text color
          "&:hover": {
            backgroundColor: "#1B1B1E",
            // Custom hover background color
          },
        },
        outlined: {
          backgroundColor: "#FBFFFE", // Custom background color
          color: "#1B1B1E", // Custom text color
          "&:hover": {
            backgroundColor: "#FBFFFE",
            border: "1px solid #1B1B1E", // Custom border color
          },
          border: "1px solid #1B1B1E", // Custom border color
        },
      },
    },
  },
});

export default theme;
