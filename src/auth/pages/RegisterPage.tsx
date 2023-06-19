import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useForm } from "../../hooks";
import { creatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  name: "",
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { formState, email, password, name, isFormValid } = useForm(formData);

  const onSubmit = (event: any) => {
    event.preventDefault();
    setFormSubmitted(true);
    // dispatch(creatingUserWithEmailPassword(email, password, name));
  };

  return (
    <>
      <AuthLayout title="Sign up">
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="name"
                placeholder="Nombre completo"
                fullWidth
                name="name"
                value={name}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={email}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={password}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={12}>
                <Button type="submit" variant="contained" fullWidth>
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1 }}>Ya tienes cuenta?</Typography>
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
                to="/auth/register"
              >
                ingresa
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
