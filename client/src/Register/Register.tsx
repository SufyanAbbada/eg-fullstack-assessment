import * as Yup from "yup";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button, Box, Typography } from "@mui/material";
import "./Register.css";

const Register: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters long")
      .matches(
        /^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/,
        "Name should not contain symbols or numbers"
      )
      .required("Name is Required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is Required"),
    password: Yup.string(),
  });

  const [password, setPassword] = useState("");
  const [passwordChecklist, setPasswordChecklist] = useState({
    minLength: false,
    letterPresent: false,
    numberPresent: false,
    symbolPresent: false,
  });

  const validatePassword = (password: string): void => {
    setPasswordChecklist({
      minLength: password.length > 7,
      letterPresent: /[A-Za-z]/.test(password),
      numberPresent: /[0-9]/.test(password),
      symbolPresent: /[@$!%*?&]/.test(password),
    });
  };

  return (
    <Box className="signup-body">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Form values", values.name, values.email, password);
          setSubmitting(false);
        }}
      >
        {(formik) => (
          <Form className="signup-form">
            <Field
              as={TextField}
              name="name"
              label="Name"
              variant="standard"
              fullWidth
              margin="normal"
              autoComplete="name"
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              aria-describedby="name-error"
            />

            <Field
              as={TextField}
              name="email"
              label="Email Address"
              variant="standard"
              fullWidth
              margin="normal"
              autoComplete="email"
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              aria-describedby="email-error"
            />

            <TextField
              id="password"
              name="standard-textarea"
              label="Password"
              type="password"
              variant="standard"
              placeholder="Hint: Keep it Secret"
              fullWidth
              margin="normal"
              autoComplete="current-password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
            <Box>
              <Typography
                variant="body2"
                color={passwordChecklist.minLength ? "green" : "red"}
              >
                {passwordChecklist.minLength ? "✔" : "✖"} At least 8 Characters
              </Typography>
              <Typography
                variant="body2"
                color={passwordChecklist.letterPresent ? "green" : "red"}
              >
                {passwordChecklist.letterPresent ? "✔" : "✖"} At least one
                Alphabet
              </Typography>
              <Typography
                variant="body2"
                color={passwordChecklist.numberPresent ? "green" : "red"}
              >
                {passwordChecklist.numberPresent ? "✔" : "✖"} At least one
                Number
              </Typography>
              <Typography
                variant="body2"
                color={passwordChecklist.symbolPresent ? "green" : "red"}
              >
                {passwordChecklist.symbolPresent ? "✔" : "✖"} At least one
                Symbol (e.g: @$!%*?&)
              </Typography>
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="signup-button"
              disabled={
                formik.isSubmitting ||
                !formik.dirty ||
                !formik.isValid ||
                !passwordChecklist.minLength ||
                !passwordChecklist.numberPresent ||
                !passwordChecklist.letterPresent ||
                !passwordChecklist.symbolPresent
              }
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Register;
