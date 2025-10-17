import { createHashRouter, Navigate } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import { Error, CurrentVacancy, VacanciesList } from "../components/index";
export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/vacancy/moscow" replace />,
    errorElement: <Error />,
  },

  {
    path: "/vacancy",
    element: <MainPage />,
    errorElement: <Error />,
    children: [
      {
        path: ":city",
        element: <VacanciesList />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: "/vacancy/:city/:id",
    element: <CurrentVacancy />,
    errorElement: <Error />,
  },
]);
