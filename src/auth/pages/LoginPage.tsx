import { Grid, TextField,Button } from "@mui/material";

import { AuthLayout } from "../layout/AuthLayout";
import { Link, Link as RouterLink } from "react-router-dom";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login" >

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
        <Grid container xs={12} sx={{ mb: 2, mt: 2}} >
          <Grid item xs={12} sm={6}>
           <Button type="submit" variant="contained" fullWidth>Login</Button>

          </Grid>

        </Grid>
        <Grid container direction="row" justifyContent="center">
        
          <RouterLink to="register" color="inherit">
            Crear cuenta
          </RouterLink>
        
      </Grid>

      </Grid>

    </AuthLayout>
      
    
  );
};
