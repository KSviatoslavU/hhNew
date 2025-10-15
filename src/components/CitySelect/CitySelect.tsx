import { IconMapPin } from "@tabler/icons-react";
import { Select } from "@mantine/core";
import styles from "./CitySelect.module.scss";
import { useTypedDispatch } from "../../hooks/redux";
import { setCitySelect, fetchVacancy } from "../../reducers/vacancySlice";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

export default function CitySelect() {
  const dispatch = useTypedDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const cityValue: Record<string, string> = useMemo(
    () => ({
      113: "Все города",
      1: "Москва",
      2: "Санкт-Петербург",
    }),
    []
  );

  const reverseCityValue: Record<string, string> = useMemo(
    () => ({
      "Все города": "113",
      Москва: "1",
      "Санкт-Петербург": "2",
    }),
    []
  );

  useEffect(() => {
    const areaFromUrl = searchParams.get("area");
    if (!areaFromUrl) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("area", "113");
        return params;
      });
    }
  }, [setSearchParams, searchParams]);

  const area: string = searchParams.get("area") ?? "113";

  const handleChange = (value: string | null) => {
    if (!value) return;
    const selectedId = reverseCityValue[value];
    dispatch(setCitySelect(value));
    dispatch(fetchVacancy({ page: 0 }));
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("area", selectedId);
      return params;
    });
  };

  return (
    <div className={styles.container}>
      <Select
        value={cityValue[area]}
        onChange={(value) => handleChange(value)}
        placeholder="Выберите город"
        autoSelectOnBlur
        searchable
        defaultValue="Все города"
        data={["Все города", "Москва", "Санкт-Петербург"]}
        leftSection={<IconMapPin size={18} color="lightgray" />}
      />
    </div>
  );
}
