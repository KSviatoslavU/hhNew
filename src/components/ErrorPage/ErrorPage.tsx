import { Button, Image } from "@mantine/core";
import styles from "./ErrorPage.module.scss";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Упс! Такой страницы не существует</h1>

      <div className={styles.row}>
        <p className={styles.text}>Давайте перейдём к началу</p>
        <Button component={Link} to="/vacancies/moscow">
          На главную
        </Button>
      </div>

      <div className={styles.gifWrapper}>
        <Image
          className={styles.gif}
          src="https://media1.tenor.com/m/baBulgRz6XkAAAAd/sad-cat.gif"
          alt="Печальный кот"
          fit="contain"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
