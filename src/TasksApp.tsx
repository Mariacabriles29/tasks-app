import { AppHeader } from "./components/AppHeader";
import { Layout } from "./components/Layout";
import PageTitle from "./components/PageTitle";
import { AppRouter } from "./router/AppRouter";
import styles from "./styles/modules/app.module.scss";

export const TasksApp = () => {
  return (
    <Layout>
      <AppRouter />
      <PageTitle>Todo List</PageTitle>
      <div className={styles.app__wrapper}>
        <AppHeader />
      </div>
    </Layout>
  );
};
