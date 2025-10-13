import { Button, Input, Divider } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import styles from "../SearchVacancy/SearchVacansy.module.scss";
import { useTypedDispatch } from "../../hooks/redux";
import { setSearchValue, fetchVacancy } from "../../reducers/vacancySlice";
import { useEffect, useState } from "react";

export default function SearchVacancy() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchVacancy({ page: 0 }));
  }, [dispatch]);

  const startSearch = () => {
    if (!inputValue) return;
    dispatch(setSearchValue(inputValue));
    dispatch(fetchVacancy({ page: 0 }));
    setInputValue("");
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
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.currentTarget.value);
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
