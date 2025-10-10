import { IconMapPin } from "@tabler/icons-react";
import { Select } from "@mantine/core";
import styles from "./CitySelect.module.scss";
import { useTypedDispatch } from "../../hooks/redux";
import { setCitySelect } from "../../reducers/vacancySlice";

export default function CitySelect() {
  const dispatch = useTypedDispatch();
  return (
    <div className={styles.container}>
      <Select
        onChange={(value) => {
          dispatch(setCitySelect(value));
        }}
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
