import styles from "./VacancyPage.module.scss";
import {
  PaginationBar,
  KeySkills,
  SearchVacancy,
  VacanciesList,
} from "../components/index";
import Tab from "../components/Tab/Tab";

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
