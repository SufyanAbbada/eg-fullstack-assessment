import { Typography, Button, Box } from "@mui/material";
import "./Welcome.css";

function Welcome() {
  return (
    <Box className="body">
      <Box className="logoutButton">
        <Button
          variant="contained"
          color="secondary"
          sx={{ textTransform: "none" }}
        >
          Logout
        </Button>
      </Box>

      <Box className="welcomeText">
        <Typography component="h1" variant="h1">
          Welcome to the Application
        </Typography>
      </Box>
    </Box>
  );
}

export default Welcome;
