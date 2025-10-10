import { Header } from "../index";
import { SearchVacancy } from "../index";
import { KeySkills } from "../index";
import styles from "./App.module.scss";
import { CitySelect } from "../index";
import { VacanciesList } from "../index";
import { PaginationBar } from "../index";
export default function App() {
  return (
    <>
      <Header />
      <SearchVacancy />
      <main className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <KeySkills />
            <CitySelect />
          </div>
          <div className={styles.content}>
            <VacanciesList />
          </div>
        </div>
      </main>
      <div className={styles.pagination}>
        <PaginationBar />
      </div>
    </>
  );
}
