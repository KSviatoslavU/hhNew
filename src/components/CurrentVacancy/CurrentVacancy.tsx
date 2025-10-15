import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Vacancy } from "../../types";
import { VacancyCard } from "../index";
import styles from "./CurrentVacansy.module.scss";
export default function Vacancy() {
  const { id } = useParams<{ id: string }>();
  const [vacancy, setVacancy] = useState<Vacancy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchVacancy() {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.hh.ru/vacancies/${id}`);
        if (!response.ok) {
          throw new Error("Ошибка сервера");
        }

        const data = await response.json();
        setVacancy(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    if (id) {
      fetchVacancy();
    }
  }, [id]);

  if (isLoading) return <div>Загрузка вакансии...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!vacancy) return <div>Вакансия не найдена</div>;

  return (
    <div className={styles.container}>
      <VacancyCard vacancy={vacancy} />
      <div className={styles.info}>
        <h1>Компания: {vacancy.employer?.name}</h1>
        <div dangerouslySetInnerHTML={{ __html: vacancy.description }} />
      </div>
    </div>
  );
}
