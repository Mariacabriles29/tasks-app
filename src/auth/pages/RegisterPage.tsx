import { Grid, TextField, Button, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useDispatch, useSelector, useStore } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

import { fetchUsers } from "../../store/actions/userActions";
import { UserActionTypes } from "../../helpers/UserTypes";
import { useNavigate } from "react-router-dom";

const formData = {
  email: "",
  password: "",
  name: "",
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const users = useSelector((state: any) => state.users.users);
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (
      userName.length != 0 &&
      userPassword.length != 0 &&
      userEmail.length != 0
    ) {
      const currentUser = {
        id: 1,
        name: userName,
        email: userEmail,
        password: userPassword,
      };
      let newUsers = [];
      newUsers = [users.flat(), currentUser].flat();

      dispatch({
        payload: newUsers.flat(),
        type: UserActionTypes.FETCH_USERS_SUCCESS,
      });
      navigate("/login");
    }
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                sx={{ fontSize: 16 }}
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
              <Grid item xs={12} sm={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ fontSize: "1.2rem" }}
                >
                  Crear cuenta
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Typography sx={{ mr: 1, fontSize: "1.5rem" }}>
                Ya tienes cuenta?
              </Typography>
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
                  fontSize: "1.5rem",
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
