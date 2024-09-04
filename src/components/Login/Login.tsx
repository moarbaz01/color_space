"use client";
import { Google, Instagram } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { redirect, useRouter } from "next/navigation";
import type { Errors, FormData } from "./types";

const Login = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>({
    email: false,
    password: false,
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      setErrors((prev) => ({
        ...prev,
        email: true,
      }));
      return;
    }
    if (!formData.password) {
      setErrors((prev) => ({
        ...prev,
        password: true,
      }));
      return;
    }
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: formData.email as string,
      password: formData.password as string,
    });
    setLoading(false);
    if (res?.error) {
      setError(res.error);
    }
  };

  const handleGoogleLogin = () => {
    signIn("google");
    redirect("/");
  };
  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        height: {
          xs: "auto",
          md: "100vh",
        },
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: {
            xs: "100%",
            md: "40%",
          },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2rem",
          gap: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            paddingY: "1rem",
          }}
        >
          Login
        </Typography>
        <TextField
          name="email"
          label="Enter your email"
          color={errors.email ? "error" : "primary"}
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: errors.email ? "error.main" : undefined,
              },
            },
          }}
          value={formData.email}
          onChange={handleChange}
        />
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          <TextField
            name="password"
            type={showPassword ? "text" : "password"}
            label="Enter your password"
            value={formData.password}
            onChange={handleChange}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: errors.password ? "error.main" : undefined,
                },
              },
            }}
          />
          <Box
            component="div"
            onClick={() => setShowPassword((prev) => !prev)}
            sx={{
              position: "absolute",
              right: "1rem",
              top: "1rem",
              cursor: "pointer",
              "& :hover": {
                opacity: 0.8,
              },
            }}
          >
            {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </Box>
        </Box>
        <Button variant="contained" type="submit">
          {loading ? <CircularProgress /> : "Login"}
        </Button>

        <Box component="div" sx={{ textAlign: "center" }}>
          Don't have an account?{" "}
          <Typography
            onClick={() => {
              router.push("/auth/signup");
            }}
            component="span"
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          >
            Sign up
          </Typography>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            textDecoration: "underline",
            paddingY: "1rem",
          }}
        >
          OR
        </Typography>

        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            component="div"
            onClick={handleGoogleLogin}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              cursor: "pointer",
              padding: "0.8rem",
              background: "#fff",
              borderRadius: "0.2rem",
            }}
          >
            <Google />
            <Typography variant="body1">SIGN IN WITH GOOGLE</Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              cursor: "pointer",
              padding: "0.8rem",
              background: "#fff",
              borderRadius: "0.2rem",
            }}
          >
            <Instagram />
            <Typography variant="body1">SIGN IN WITH INSTAGRAM</Typography>
          </Box>
        </Box>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={error ? true : false}
        autoHideDuration={2000}
        onClose={() => setError("")}
        message={error}
      />
    </Container>
  );
};

export default Login;
