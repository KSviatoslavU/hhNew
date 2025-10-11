import { Pagination, Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux";
import { fetchVacancy } from "../../reducers/vacancySlice";

export default function PaginationBar() {
  const dispatch = useTypedDispatch();
  const [activePage, setPage] = useState(1);
  const searchValue = useTypedSelector((state) => state.vacancies.searchValue);
  const vacancies = useTypedSelector((state) => state.vacancies.vacancies);
  const totalPages = useTypedSelector((state) => state.vacancies.totalPages);

  useEffect(() => {
    setPage(1);
  }, [searchValue]);

  const handleChange = (page: number) => {
    if (vacancies.length) {
      setPage(page);
      dispatch(fetchVacancy({ page: page - 1 }));
    }
  };
  return (
    <Flex justify="center" mt="lg">
      <Pagination
        total={totalPages}
        radius="xs"
        withEdges
        value={activePage}
        onChange={handleChange}
      />
    </Flex>
  );
}
