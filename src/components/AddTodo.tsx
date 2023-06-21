import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, CssBaseline, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TaskActionTypes } from "../helpers/taskTypes";
import AddTodoSelect from "./AddTodoSelect";
import { SelectChangeEvent } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const style = {
  top: "50%",
  left: "50%",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

interface AddTodoProps {
  open: boolean;
  handleClose: any;
  noteId: any;
}
export const AddTodo = (props: AddTodoProps) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [selectValue, setSelectValue] = useState<string>("");
  const dispatch = useDispatch();

  const tasks = useSelector((state: any) => state.tasks.tasks);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };
  const handleCreateNote = () => {
    const currentTasks = {
      title: title,
      description: description,
    };
    let newTasks = [];
    newTasks = [tasks.flat(), currentTasks].flat();

    dispatch({
      payload: newTasks.flat(),
      type: TaskActionTypes.ADD_TASK,
    });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setSelectValue(event.target.value);
  };

  return (
    <div>
      <AddTodoSelect value={selectValue} onChange={handleSelectChange} />
      <Box
        sx={{
          boxShadow: "#919eab33 0 0 6px, #919eab1f 0 12px 24px -4px;",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
      >
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
    </div>
  );
};
