import { Box, Container, CssBaseline, Typography } from "@mui/material";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

type AuthLayoutProps = {
  children: ReactNode;
  title?: string;
};

export const AuthLayout = ({ children, title = "" }: AuthLayoutProps) => {
  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          height: "100%",
          maxWidth: "1000px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ mb: 1, textAlign: "center", color: "white" }}
        >
          {title}
        </Typography>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Box>
    </Container>
  );
};
