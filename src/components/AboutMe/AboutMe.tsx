import styles from "./AboutMe.module.scss";

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Коростылев Святослав</h2>
        <p>
          Привет! Я - Frontend-разработчик. Пишу приложения на React +
          TypeScript + Redux Toolkit.
        </p>
      </div>
    </div>
  );
}
