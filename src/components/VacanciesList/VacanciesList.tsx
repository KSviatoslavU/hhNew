import { useParams } from "react-router-dom";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { VacancyCard } from "../index";
import { fetchVacancy, setCitySelect } from "../../reducers/vacancySlice";
import { useEffect } from "react";

export default function VacanciesList() {
  const vacancies = useTypedSelector((state) => state.vacancies.vacancies);
  const loading = useTypedSelector((state) => state.vacancies.isLoading);
  const error = useTypedSelector((state) => state.vacancies.error);
  const endLoading = useTypedSelector((state) => state.vacancies.endLoading);
  const dispatch = useTypedDispatch();
  const { city } = useParams();

  useEffect(() => {
    if (!city) return;

    if (city.toLowerCase() === "moscow") {
      dispatch(setCitySelect("Москва"));
    } else if (city.toLowerCase() === "petersburg") {
      dispatch(setCitySelect("Санкт-Петербург"));
    }

    dispatch(fetchVacancy({ page: 0 }));
  }, [city, dispatch]);

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
