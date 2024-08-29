import { Google } from "@mui/icons-material";
import { Box } from "@mui/material";
import { signIn, signOut } from "next-auth/react";

const Form = () => {
  const handleSignIn = () => {
    try {
      signIn("google");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
        }}
        onClick={handleSignIn}
        component="div"
      >
        <Google fontSize="large" />
      </Box>
    </Box>
  );
};

export default Form;
