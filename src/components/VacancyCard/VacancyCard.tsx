import { Badge, Button, Card, Stack, Text } from "@mantine/core";
import styles from "./VacancyCard.module.scss";
import type { Vacancy } from "../../types";
import { Link } from "react-router-dom";
interface VacancyCardProps {
  vacancy: Vacancy;
}

export default function VacancyCard({ vacancy }: VacancyCardProps) {
  if (!vacancy) return null;
  const renderBadges = (vacancy: Vacancy) => {
    if (!vacancy.work_format || vacancy.work_format.length === 0) return null;

    return vacancy.work_format.map((format) => {
      switch (format.id) {
        case "REMOTE":
          return (
            <Badge key={format.id} color="primary" size="xs" radius="xs">
              Можно удалённо
            </Badge>
          );

        case "ON_SITE":
          return (
            <Badge
              key={format.id}
              color="ultraLight"
              size="xs"
              radius="xs"
              styles={{ label: { color: "gray" } }}
            >
              Офис
            </Badge>
          );

        case "HYBRID":
          return (
            <Badge key={format.id} color="black1" size="xs" radius="xs">
              Гибрид
            </Badge>
          );

        default:
          return (
            <Badge key={format.id} color="gray" size="xs" radius="xs">
              Формат не указан
            </Badge>
          );
      }
    });
  };

  return (
    <Card className={styles.card} padding="lg" radius="md">
      <Stack gap="xs">
        <Text size="xl" fw={600} c="darkPrimary">
          {vacancy.name}
        </Text>
        <div className={styles.total}>
          {vacancy?.salary ? (
            <Text size="md" fw={400} c="black1">
              {vacancy.salary.from && vacancy.salary.to
                ? `${vacancy.salary.from} – ${vacancy.salary.to} ${vacancy.salary.currency}`
                : vacancy.salary.from
                ? `от ${vacancy.salary.from} ${vacancy.salary.currency}`
                : vacancy.salary.to
                ? `до ${vacancy.salary.to} ${vacancy.salary.currency}`
                : "Зарплата не указана"}
            </Text>
          ) : (
            <Text size="md" fw={400} c="black1">
              Зарплата не указана
            </Text>
          )}
          <Text size="sm" fw={400} c="gray">
            {vacancy?.experience?.name}
          </Text>
        </div>
        <div className={styles.info}>
          <Text size="sm" fw={400} c="gray">
            {vacancy?.employer?.name}
          </Text>
          <div className={styles.badgeWrapper}> {renderBadges(vacancy)}</div>
          <Text size="md" fw={400} c="black1">
            {vacancy?.address?.city ?? "Город не указан"}
          </Text>
        </div>
        <div className={styles.buttonContainer}>
          <Link
            to={`/vacancy/${vacancy.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={styles.buttonPrimary}>Смотреть вакансию</Button>
          </Link>
          <Button
            className={styles.buttonSecondary}
            component="a"
            href={vacancy?.alternate_url ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Откликнуться
          </Button>
        </div>
      </Stack>
    </Card>
  );
}
