import apiRequest from "../utils/apiCommunication";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userOperations } from "../utils/userData";
import "../Register/Auth.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (userOperations.isAllChecksPassed()) {
      toast.info("You are already Signed In");
      navigate("/");
    }
  }, [navigate]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/[0-9]/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&]/,
        "Password must contain at least one special character (@, $, !, %, *, ?, &)"
      ),
  });

  const loginRequest = async (values: { email: string; password: string }) => {
    const apiResponse = await apiRequest("login", values);
    toast(apiResponse?.description);
    if (!apiResponse.error) {
      navigate("/");
    }
  };

  return (
    <>
      {!userOperations.isAllChecksPassed() ? (
        <Box className="auth-body">
          <Typography variant="h4" gutterBottom>
            Login
          </Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={loginRequest}
          >
            {({ errors, touched, isValid, dirty }) => (
              <Form className="auth-form">
                <Field
                  as={TextField}
                  name="email"
                  label="Email Address"
                  variant="standard"
                  placeholder="Your key to the Site."
                  fullWidth
                  autoComplete="email"
                  margin="normal"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  aria-describedby="email-error"
                />

                <Field
                  as={TextField}
                  type="password"
                  name="password"
                  label="Password"
                  variant="standard"
                  placeholder="Hope you remembered!"
                  fullWidth
                  autoComplete="current-password"
                  margin="normal"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  aria-describedby="password-error"
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="auth-button"
                  disabled={
                    !isValid || !dirty || Object.keys(errors).length > 0
                  }
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>

          <Box textAlign="center" mt={4}>
            <Typography variant="body2">
              Don't have an account yet? Let's
              <Button color="primary" onClick={() => navigate("/register")}>
                Sign Up
              </Button>
            </Typography>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default Login;
