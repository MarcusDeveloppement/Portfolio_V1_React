import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>MK</div>
      <div className={styles.navigation}>
        <nav>
          <a href="#about">A propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}
