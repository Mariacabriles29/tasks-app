import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Task, TaskActionTypes } from "../helpers/taskTypes";
import PageTitle from "./PageTitle";

import { AddTodo } from "./AddTodo";
import AddTodoSelect from "./AddTodoSelect";
import { AddNoteCard } from "./AddNoteCard";
import { AuthLayout } from "../auth/layout/AuthLayout";
import { ToastContainer, toast } from "react-toastify";
import { Box } from "@mui/material";

export const TodoList: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState<any>("");

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

  return (
    <Box sx={{ width: "100%" }}>
      <PageTitle>lista De Tareas</PageTitle>

      <AuthLayout>
        <AddTodo
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          handleOpen={() => {
            setOpen(true);
          }}
          noteId={1}
        />
        {tasks
          .filter((t: any) => t?.user?.id === currentUser?.id)
          .map((task: Task) => (
            <AddNoteCard
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
