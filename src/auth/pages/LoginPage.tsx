import { Grid, TextField, Button, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Correo"
            type="email"
            placeholder="correo@gmail.com"
            fullWidth
            /* Esto para cuando agregue el form*/
            // name='email'
            // value={email}
            // onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Contraseña"
            type="password"
            placeholder="Contraseña"
            fullWidth
            name="password"
            // value={password}
            // onChange={onInputChange}
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
    </AuthLayout>
  );
};
