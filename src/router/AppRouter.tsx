import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { RegisterPage } from "../auth/pages/RegisterPage";
import { TodoList } from "../components/TodoList";
import { useSelector } from "react-redux";

export const AppRouter = () => {
  const users = useSelector((state: any) => state.users);

  return (
    <BrowserRouter>
      <Routes>
        {users.currentUser ? (
          <>
            <Route path="tasks" element={<TodoList />} />
          </>
        ) : (
          <Route path="login" element={<LoginPage />} />
        )}
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
