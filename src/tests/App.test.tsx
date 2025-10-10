import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "../store/store";
import KeySkills from "../components/KeySkills/KeySkills";
import CitySelect from "../components/CitySelect/CitySelect";
import PaginationBar from "../components/PaginationBar/PaginationBar";
import VacanciesList from "../components/VacanciesList/VacanciesList";
import "@testing-library/jest-dom";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserver;

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

afterEach(() => cleanup());

function renderWithProviders(ui: React.ReactElement) {
  return render(
    <MantineProvider>
      <Provider store={store}>{ui}</Provider>
    </MantineProvider>
  );
}

test("рендерит KeySkills и добавляет новый навык", () => {
  renderWithProviders(<KeySkills />);

  expect(screen.getByText("TypeScript")).toBeInTheDocument();

  const input = screen.getByPlaceholderText("Навык");
  fireEvent.change(input, { target: { value: "Next.js" } });
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

  expect(screen.getByText("Next.js")).toBeInTheDocument();
});

test("рендерит CitySelect с placeholder", () => {
  renderWithProviders(<CitySelect />);
  expect(screen.getByPlaceholderText("Выберите город")).toBeInTheDocument();
});

test("рендерит PaginationBar и показывает первую страницу", () => {
  renderWithProviders(<PaginationBar />);
  expect(screen.getByText("1")).toBeInTheDocument();
});

test("рендерит VacanciesList с текстом при отсутствии вакансий", () => {
  renderWithProviders(<VacanciesList />);
  expect(screen.getByText(/Введите должность/i)).toBeInTheDocument();
});
