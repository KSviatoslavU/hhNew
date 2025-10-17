import { useNavigate, useParams } from "react-router-dom";
import { Tabs } from "@mantine/core";

export default function Tab() {
  const navigate = useNavigate();
  const { city } = useParams();

  return (
    <Tabs value={city} onChange={(value) => navigate(`/vacancy/${value}`)}>
      <Tabs.List>
        <Tabs.Tab value="moscow">Москва</Tabs.Tab>
        <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
