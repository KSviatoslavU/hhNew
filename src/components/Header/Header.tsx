import { Text } from "@mantine/core";
import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg?react";
import AboutMe from "../../assets/aboutMe.svg?react";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Logo width={30} height={30} />
          <Text fw={600}>.FrontEnd</Text>
        </div>

        <div className={styles.center}>
          <Text className={styles.vacancy} component="a" href="" fw={500}>
            Вакансии FE
          </Text>
          <div className={styles.dot}></div>
          <a href="" className={styles.linkBlock}>
            <div className={styles.aboutMe}>
              <AboutMe />
              <Text fw={500}>Обо мне</Text>
            </div>
          </a>
        </div>
      </header>
    </>
  );
}
