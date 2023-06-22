import {
  Grid,
  TextField,
  Button,
  Avatar,
  Box,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Img from "../../resources/img/home.jpg";
import "./scss/LoginPage.scss";
import { UserActionTypes } from "../../helpers/UserTypes";

export const LoginPage = () => {
  const users = useSelector((state: any) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUserName = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const existUser = users.find(
      (u: any) =>
        `${u.email}`.toLowerCase() === username.toLowerCase() &&
        `${u.password}`.toLowerCase() === password.toLowerCase()
    );
    if (existUser) {
      localStorage.setItem("currentUser", JSON.stringify(existUser));
      dispatch({
        payload: existUser,
        type: UserActionTypes.CHECK_LOGIN,
      });
      navigate("/tasks");
      toast.success("Inicio exitoso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Error al iniciar", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <Grid container spacing={2} sx={{ width: "100%", height: "100vh" }}>
      <Grid item xs={6} md={6} sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "100%",
            position: "relative",
          }}
        >
          <svg
            className="bg-login"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#0F62FE"
              d="M39.5,-70C52.3,-61,64.4,-52.6,71.6,-41.1C78.7,-29.5,80.7,-14.7,82.2,0.8C83.6,16.4,84.4,32.8,77.8,45.2C71.2,57.7,57.1,66.2,42.9,72.9C28.7,79.7,14.4,84.6,-0.1,84.8C-14.6,85,-29.1,80.4,-42.1,72.9C-55.1,65.4,-66.4,55.2,-74.1,42.5C-81.9,29.9,-86,15,-86.9,-0.5C-87.8,-16,-85.5,-32,-76.9,-43.2C-68.3,-54.3,-53.5,-60.7,-39.7,-69C-25.8,-77.3,-12.9,-87.7,0.2,-88.1C13.4,-88.5,26.7,-79,39.5,-70Z"
              transform="translate(100 100)"
            />
          </svg>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: "white" }}>
            Iniciar sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              name="username"
              autoComplete="email"
              label="email"
              value={username}
              onChange={handleUserName}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="contraseña"
              type="password"
              id="password"
              value={password}
              onChange={handlePassword}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ color: "black", backgroundColor: "white" }}
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  to="/register"
                  className="link"
                  style={{ color: "white" }}
                >
                  olvidaste la contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/register"
                  className="link"
                  style={{ color: "white" }}
                >
                  {"¿No tienes una cuenta? creala"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        md={6}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <img
          src={Img}
          alt="login"
          loading="lazy"
          width={"auto%"}
          style={{ minWidth: "50%" }}
          height={"100%"}
        />
      </Grid>
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
    </Grid>
  );
};
