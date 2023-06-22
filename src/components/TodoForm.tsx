import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Container,
  CssBaseline,
  InputBase,
  TextField,
  alpha,
  styled,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TaskActionTypes } from "../helpers/taskTypes";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from "@mui/icons-material/Search";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  boxShadow: "#919eab33 0 0 6px, #919eab1f 0 12px 24px -4px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
interface TodoFormProps {
  open: boolean;
  handleClose: any;
  handleOpen: any;
  noteId: any;
  handleSearchTerm: (search: string) => void;
}
export const TodoForm = (props: TodoFormProps) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const tasks = useSelector((state: any) => state.tasks.tasks);

  const handleCreateNote = () => {
    let currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      currentUser = JSON.parse(currentUser);
      const currentTasks = {
        id: uuidv4(),
        title: title,
        description: description,
        user: currentUser,
      };
      let newTasks = [];
      newTasks = [tasks.flat(), currentTasks].flat();
      toast.success("Nota Creada", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch({
        payload: newTasks.flat(),
        type: TaskActionTypes.ADD_TASK,
      });
    }
  };

  return (
    <Box
      sx={{
        boxShadow: "#919eab33 0 0 6px, #919eab1f 0 12px 24px -4px;",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#1976d2cc",
        width: "100%",
        marginBottom: 8,
        padding: 4,
        borderRadius: "15px",
      }}
      className="todo"
    >
      <Button
        variant="contained"
        onClick={() => props.handleOpen()}
        endIcon={<AddCircleIcon />}
      >
        Nueva Tarea
      </Button>

      <Search
        onChange={(e: any) => {
          setSearchTerm(e.target.value);
          props.handleSearchTerm(e.target.value);
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container
          component="main"
          maxWidth="xs"
          sx={{ marginTop: 8, backgroundColor: "white", padding: "16px" }}
        >
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Tareas
            </Typography>
            <Box
              component="form"
              onSubmit={handleCreateNote}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                name="title"
                autoComplete="title"
                label="title"
                value={title}
                onChange={(e: any) => setTitle(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="description"
                label="description"
                type="description"
                id="description"
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Crear tarea
              </Button>
            </Box>
          </Box>
        </Container>
      </Modal>
    </Box>
  );
};
