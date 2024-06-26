import { Typography, Button, Box } from "@mui/material";
import { useEffect } from "react";
import { userOperations } from "../../utils/userData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!userOperations.isAllChecksPassed()) {
      toast.info("You need to be authenticated to visit this page");
      return navigate("/register");
    }
  }, [navigate]);

  const logout = () => {
    userOperations.clearStorage();
    toast.info("You have been logged out of the system");
    navigate("/login");
  };

  return (
    <>
      {userOperations.isAllChecksPassed() ? (
        <Box className="body">
          <Box className="logoutButton">
            <Button
              variant="contained"
              color="secondary"
              sx={{ textTransform: "none" }}
              onClick={logout}
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
      ) : (
        <></>
      )}
    </>
  );
};

export default Welcome;
