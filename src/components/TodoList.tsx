import React from "react";
import { useSelector } from "react-redux";
import { Task } from "../helpers/taskTypes";
import PageTitle from "./PageTitle";
import { AppHeader } from "./AppHeader";

export const TodoList: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);

  return (
    <div>
      <PageTitle>Todo List</PageTitle>
      <AppHeader />
      <h2>Task List</h2>
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
