import styles from "./MainPage.module.scss";
import {
  PaginationBar,
  KeySkills,
  SearchVacancy,
  Header,
} from "../components/index";
import { Outlet } from "react-router-dom";
import Tab from "../components/Tab/Tab";

export default function VacancyListPage() {
  return (
    <>
      <Header />
      <SearchVacancy />
      <main className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <KeySkills />
          </div>
          <div className={styles.content}>
            <Tab />
            <Outlet />
          </div>
        </div>
      </main>
      <div className={styles.pagination}>
        <PaginationBar />
      </div>
    </>
  );
}
