import React from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";

export const AppHeader = () => {
  return (
    <div className={styles.appHeader}>
      <AddTodo />

      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
    </div>
  );
};
