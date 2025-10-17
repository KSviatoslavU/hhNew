import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";
import type { VacanciesResponse, Vacancy } from "../types";
export const fetchVacancy = createAsyncThunk<
  VacanciesResponse,
  { page?: number },
  { state: RootState }
>(
  "vacancies/fetchVacancies",
  async function ({ page }, { rejectWithValue, getState }) {
    try {
      const state = getState();
      const cityId = state.vacancies.cityId;
      const searchValue = state.vacancies.searchValue;

      const response = await fetch(
        `https://api.hh.ru/vacancies?industry=7&professional_role=96&search_field=name&search_field=company_name&text=${searchValue}&area=${cityId}&per_page=10&page=${page}`
      );
      // `https://api.hh.ru/vacancies?industry=7&professional_role=96&text=${searchValue}&area=${cityId}&per_page=10&page=${page}` поиск везде
      // `https://api.hh.ru/vacancies?industry=7&professional_role=96&search_field=name&text=${searchValue}&area=${cityId}&per_page=10&page=${page}` по названию
      //  `https://api.hh.ru/vacancies?industry=7&professional_role=96&search_field=name&search_field=company_name&text=${searchValue}&area=${cityId}&per_page=10&page=${page}` названию и компании
      if (!response.ok) {
        throw new Error("Server Error!");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue("Unknown");
    }
  }
);

interface VacanciesState {
  vacancies: Vacancy[];
  isLoading: boolean;
  error: string | null;
  searchValue: string;
  cityId: string;
  endLoading: boolean;
  totalPages: number;
}

const initialState: VacanciesState = {
  vacancies: [],
  isLoading: false,
  error: null,
  searchValue: "",
  cityId: "1",
  endLoading: false,
  totalPages: 0,
};

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setCitySelect: (state, action) => {
      switch (action.payload) {
        case "Все города": {
          state.cityId = "113";
          break;
        }
        case "Москва": {
          state.cityId = "1";
          break;
        }
        case "Санкт-Петербург": {
          state.cityId = "2";
          break;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVacancy.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchVacancy.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vacancies = action.payload.items;
        state.endLoading = true;
        state.totalPages = action.payload.pages;
      })
      .addCase(fetchVacancy.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default vacanciesSlice.reducer;
export const { setSearchValue, setCitySelect } = vacanciesSlice.actions;
