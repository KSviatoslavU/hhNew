import MainPage from "../../Pages/VacancyListPage";
import VacancyPage from "../../Pages/VacancyPage";
import { Routes, Route, Navigate } from "react-router-dom";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/vacancy" replace />} />
        <Route path="/vacancy" element={<MainPage />} />
        <Route path="/vacancy/:id" element={<VacancyPage />} />
      </Routes>
    </>
  );
}
