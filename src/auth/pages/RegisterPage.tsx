import { Grid, TextField, Button } from "@mui/material";
// const formData = {
//   email: '',
//   password: '',
//   displayName: '',

import { AuthLayout } from "../layout/AuthLayout";

// };
export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Sign up">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="name"
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth
              name="email"
         
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
             
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>

          </Grid>
          <Grid container direction="row" justifyContent="end">
          
          </Grid>

        </Grid>
      </AuthLayout>
    </>
  );
};
