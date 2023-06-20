import { Grid, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useState } from "react";
import { useSelector } from "react-redux";

export const LoginPage = () => {
  const [userPassword, setUserPassword] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const users = useSelector((state: any) => state.users);
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    event.preventDefault();
    const existUser = users.find(
      (u: any) => u.email === userEmail && u.password === userPassword
    );

    if (existUser) {
      navigate("/tasks");
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </Grid>
          <Grid container xs={12} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="center">
            <Link
              component={RouterLink}
              sx={{
                textDecoration: "none",
                backgroundColor: "#cecece",
                width: "100%",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
              color="inherit"
              to="/register"
            >
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
