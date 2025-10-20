import {
  PaginationBar,
  KeySkills,
  SearchVacancy,
  VacanciesList,
} from "../components/index";
import Tab from "../components/Tab/Tab";
import styles from "./VacancyPage.module.scss";

export default function VacancyPage() {
  return (
    <>
      <SearchVacancy />
      <main className={styles.main}>
        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <KeySkills />
          </div>
          <div className={styles.content}>
            <Tab />
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
