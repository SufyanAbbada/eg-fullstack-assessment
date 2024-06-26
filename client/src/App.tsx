import React from "react";
import Welcome from "./views/Welcome/Welcome";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import InvalidPath from "./views/InvalidPath";
import theme from "./config/theme";

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
            <Route path="*" element={<InvalidPath />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
