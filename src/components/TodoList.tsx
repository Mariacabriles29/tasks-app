import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task, TaskActionTypes } from "../helpers/taskTypes";
import PageTitle from "./PageTitle";
import { TodoForm } from "./TodoForm";
import { AddNoteCard } from "./AddNoteCard";
import { AuthLayout } from "../auth/layout/AuthLayout";
import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import { UserActionTypes } from "../helpers/UserTypes";
import { useNavigate } from "react-router-dom";

import { ExitToAppOutlined } from "@mui/icons-material";
export const TodoList: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState<any>("");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let updateUser = localStorage.getItem("currentUser");
    updateUser = JSON.parse(`${updateUser}`);
    setCurrentUser(updateUser ?? "");
  }, []);

  const handleBuy = () => {
    alert("¡Has comprado la nota!");
  };

  const handleDelete = (id: string) => {
    const newListTasks = tasks.filter((t: any) => t.id != id);

    dispatch({
      payload: newListTasks,
      type: TaskActionTypes.ADD_TASK,
    });

    toast.success("Nota Eliminada", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    dispatch({
      payload: null,
      type: UserActionTypes.CHECK_LOGIN,
    });

    navigate("/login");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <AuthLayout>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "100px",
            marginTop: "30px",
            marginRight: "1rem",
          }}
        >
          <PageTitle> lista De Tareas</PageTitle>
          <Button
            variant="contained"
            onClick={() => handleLogout()}
            endIcon={<ExitToAppOutlined />}
          >
            Exit
          </Button>
        </Box>

        <TodoForm
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          handleOpen={() => {
            setOpen(true);
          }}
          noteId={1}
          handleSearchTerm={(search: string) => {
            setSearchTerm(search);
          }}
        />
        {tasks
          .filter(
            (t: any) =>
              t?.user?.id === currentUser?.id &&
              t.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((task: Task) => (
            <AddNoteCard
              key={task.id}
              id={task.id}
              title={task.title}
              description={task.description}
              onBuy={handleBuy}
              onDelete={handleDelete}
            />
          ))}
      </AuthLayout>
    </Box>
  );
};
