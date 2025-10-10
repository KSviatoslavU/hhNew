import { Button, Input, Divider } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import styles from "../SearchVacancy/SearchVacansy.module.scss";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setSearchValue, fetchVacancy } from "../../reducers/vacancySlice";

export default function SearchVacancy() {
  const dispatch = useTypedDispatch();
  const searchValue = useTypedSelector((state) => state.vacancies.searchValue);
  const startSearch = () => {
    if (searchValue) {
      dispatch(fetchVacancy({ page: 1 }));
      //   dispatch(setSearchValue(""));
    }
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div>
            <h2>Список вакансий</h2>
            <p>по профессии Frontend-разработчик</p>
          </div>

          <div className={styles.search}>
            <Input
              value={searchValue}
              onChange={(e) => {
                dispatch(setSearchValue(e.currentTarget.value));
              }}
              color="primary"
              leftSection={<IconSearch size={18} />}
              className={styles.input}
              size="md"
              radius="md"
              placeholder="Должность или название компании"
            />

            <Button size="md" color="primary" radius="sm" onClick={startSearch}>
              Найти
            </Button>
          </div>
        </div>
      </div>

      <Divider color="preLight" />
    </>
  );
}
