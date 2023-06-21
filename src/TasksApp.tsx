import { useEffect, useState } from "react";

import { Layout } from "./components/Layout";
import PageTitle from "./components/PageTitle";

import { AppRouter } from "./router/AppRouter";
import styles from "./styles/modules/app.module.scss";
import { UserActionTypes } from "./helpers/UserTypes";
import { useDispatch } from "react-redux";
import { TaskActionTypes } from "./helpers/taskTypes";
import { TodoList } from "./components/TodoList";
import CircularStatic, { Loader } from "./components/Loader";
import CircularProgress from "@mui/material/CircularProgress";

export const TasksApp = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(true);

  useEffect(() => {
    loadUsers();
    loadTasks();
    intData();
  }, []);

  const intData = () => {
    const timer = setInterval(() => {
      setProgress(false);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  };

  const loadUsers = () => {
    let currentsUsers: any = localStorage.getItem("users");
    currentsUsers = JSON.parse(`${currentsUsers}`) ?? [];

    if (currentsUsers === null) {
      currentsUsers = [];
    }

    dispatch({
      payload: currentsUsers.users ?? [],
      type: UserActionTypes.FETCH_USERS_SUCCESS,
    });
  };

  const loadTasks = () => {
    let currentsTasks: any = localStorage.getItem("tasks");
    currentsTasks = JSON.parse(`${currentsTasks}`) ?? [];

    if (currentsTasks === null) {
      currentsTasks = [];
    }

    dispatch({
      payload: currentsTasks.tasks ?? [],
      type: TaskActionTypes.ADD_TASK,
    });
  };

  return <Layout>{progress ? <CircularProgress /> : <AppRouter />}</Layout>;
};
