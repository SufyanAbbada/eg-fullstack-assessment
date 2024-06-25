import Welcome from "./Welcome/Welcome";
import Register from "./Register/Register";
import Login from "./Login/Login";
import theme from "./theme";
import React from "react";

import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { ToastContainer } from "react-toastify";

import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <ToastContainer />
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
