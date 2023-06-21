import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Task } from "../helpers/taskTypes";
import PageTitle from "./PageTitle";

import { AddTodo } from "./AddTodo";
import AddTodoSelect from "./AddTodoSelect";
import { AddNoteCard } from "./AddNoteCard";

export const TodoList: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);

  const handleBuy = () => {
    alert("¡Has comprado la nota!");
  };

  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar la nota?")) {
      alert("La nota ha sido eliminada");
    }
  };
  return (
    <div>
      <PageTitle>Todo List</PageTitle>

      <AddTodo open={true} handleClose={() => {}} noteId={1} />
      {/* <AddNoteCard
        title="Título de la nota"
        description="Descripción de la nota"
        onBuy={handleBuy}
        onDelete={handleDelete}
      /> */}

      {/* <h2>Task List</h2> */}
      {tasks.map((task: Task) => (
        <div
          key={task.id}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <div style={{ display: "flex" }}>
            <button>Comprar</button>
            <button>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
