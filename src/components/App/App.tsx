import styles from "./App.module.scss";
import {
  PaginationBar,
  VacanciesList,
  CitySelect,
  KeySkills,
  SearchVacancy,
  Header,
} from "../index";
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
