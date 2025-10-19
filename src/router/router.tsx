import { createHashRouter, Navigate } from "react-router-dom";
import Layout from "../Pages/Layout";
import { ErrorPage, CurrentVacancy, AboutMe } from "../components/index";
import VacancyPages from "../Pages/VacancyPage";
export const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/vacancies/moscow" replace />,
  },

  { path: "/vacancies", element: <Navigate to="/vacancies/moscow" replace /> },

  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "vacancies/:city",
        element: <VacancyPages />,
      },
      {
        path: "vacancies/:city/:id",
        element: <CurrentVacancy />,
      },
      { path: "about", element: <AboutMe /> },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);
