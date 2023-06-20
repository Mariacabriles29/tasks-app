import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { TasksApp } from "./TasksApp";
import { Provider } from "react-redux";
import "./styles/GlobalStyles.css";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TasksApp />
    </Provider>
  </React.StrictMode>
);
