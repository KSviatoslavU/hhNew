import { Button, Input, Divider } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import styles from "../SearchVacancy/SearchVacansy.module.scss";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { setSearchValue, fetchVacancy } from "../../reducers/vacancySlice";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchVacancy() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useTypedDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchValue = useTypedSelector((state) => state.vacancies.searchValue);
  useEffect(() => {
    const urlValue = searchParams.get("name") ?? "";

    if (urlValue !== searchValue) {
      dispatch(setSearchValue(urlValue));
      setInputValue(urlValue);
      dispatch(fetchVacancy({ page: 0 }));
    }

    if (!urlValue && searchValue) {
      dispatch(setSearchValue(""));
      setInputValue("");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  const startSearch = () => {
    if (!inputValue) return;
    dispatch(setSearchValue(inputValue));
    dispatch(fetchVacancy({ page: 0 }));

    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("name", inputValue);
      return params;
    });
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
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  startSearch();
                }
              }}
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
