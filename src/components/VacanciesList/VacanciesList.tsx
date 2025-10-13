import { useTypedSelector } from "../../hooks/redux";

import { VacancyCard } from "../index";

export default function VacanciesList() {
  const vacancies = useTypedSelector((state) => state.vacancies.vacancies);
  const loading = useTypedSelector((state) => state.vacancies.isLoading);
  const error = useTypedSelector((state) => state.vacancies.error);
  const endLoading = useTypedSelector((state) => state.vacancies.endLoading);

  return (
    <>
      {endLoading && !vacancies.length && <h1>Ничего не найдено</h1>}
      {error && <h1>{error}</h1>}
      {loading && <h1>Загрузка...</h1>}
      {vacancies.map((vacancy) => {
        return <VacancyCard key={vacancy.id} vacancy={vacancy} />;
      })}
    </>
  );
}
