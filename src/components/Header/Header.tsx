import { Text } from "@mantine/core";
import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg?react";
import AboutMe from "../../assets/aboutMe.svg?react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Logo width={30} height={30} />
          <Text fw={600}>.FrontEnd</Text>
        </div>

        <div className={styles.center}>
          <NavLink
            to="/vacancies"
            end={false}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <Text className={styles.vacancy} fw={500}>
              Вакансии FE
            </Text>
          </NavLink>

          <div className={styles.dot}></div>
          <div className={styles.linkBlock}>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              to={"/about"}
            >
              <div className={styles.aboutMe}>
                <AboutMe />
                <Text fw={500}>Обо мне</Text>
              </div>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
}
