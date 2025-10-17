import { createHashRouter, Navigate } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import { CurrentVacancy, VacanciesList } from "../components";
import Error from "../components/Error/Error";
export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/vacancy/moscow" replace />,
    errorElement: <Error />,
  },

  {
    path: "/vacancy",
    element: <MainPage />,
    errorElement: <h1>Ошибка</h1>,
    children: [
      {
        path: ":city",
        element: <VacanciesList />,
        errorElement: <h1>Ошибка</h1>,
      },
    ],
  },
  {
    path: "/vacancy/:city/:id",
    element: <CurrentVacancy />,
    errorElement: <h1>Ошибка</h1>,
  },
]);
