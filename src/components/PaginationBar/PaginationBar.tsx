import { Pagination, Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { fetchVacancy } from "../../reducers/vacancySlice";
export default function PaginationBar() {
  const searchValue = useTypedSelector((state) => state.vacancies.searchValue);
  const cityId = useTypedSelector((state) => state.vacancies.cityId);
  const dispatch = useTypedDispatch();
  const [activePage, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [searchValue, cityId]);

  const handleChange = (page: number) => {
    if (searchValue) {
      setPage(page);
      dispatch(fetchVacancy({ page: page - 1 }));
    }
  };

  return (
    <Flex justify="center" mt="lg">
      <Pagination
        total={10}
        radius="xs"
        withEdges
        value={activePage}
        onChange={handleChange}
      />
    </Flex>
  );
}
