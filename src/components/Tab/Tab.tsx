import { useNavigate, useParams } from "react-router-dom";
import { Tabs } from "@mantine/core";

export default function Tab() {
  const navigate = useNavigate();
  const { city } = useParams();

  return (
    <Tabs
      defaultValue="moscow"
      value={city}
      onChange={(value) => {
        if (value) navigate(`/vacancy/${value}`);
      }}
    >
      <Tabs.List>
        <Tabs.Tab value="moscow">Москва</Tabs.Tab>
        <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
