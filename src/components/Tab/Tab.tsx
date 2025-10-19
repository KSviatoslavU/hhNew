import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Tabs } from "@mantine/core";

export default function Tab() {
  const navigate = useNavigate();
  const { city } = useParams();
  const location = useLocation();

  console.log(location);
  return (
    <Tabs
      defaultValue="moscow"
      value={city}
      onChange={(value) => {
        if (value) navigate(`/vacancies/${value}${location.search}`);
      }}
    >
      <Tabs.List>
        <Tabs.Tab value="moscow">Москва</Tabs.Tab>
        <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
