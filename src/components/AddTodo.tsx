import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { TaskActionTypes } from "../helpers/taskTypes";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AddTodo = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState("");
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
  return (
    <div>
      <Button
        type="button"
        onClick={handleOpen}
        sx={{ backgroundColor: "cyan" }}
      >
        Añadir Tarea
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Crear nota
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField
              label="Titulo"
              value={title}
              onChange={handleTitleChange}
            />
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, borderRadius: "10px" }}
          >
            <TextField
              aria-label="Descripción"
              placeholder="Escribe la descripción"
              value={description}
              onChange={handleDescriptionChange}
            />
          </Typography>
          <Button
            variant="contained"
            onClick={handleCreateNote}
            sx={{ mt: 2, backgroundColor: "purple" }}
          >
            Crear Nota
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
