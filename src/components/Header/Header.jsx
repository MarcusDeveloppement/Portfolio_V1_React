import React, { useState } from "react";
import styles from "./Header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>MK</div>
      <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#about" onClick={handleCloseMenu}>
              A propos
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleCloseMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleCloseMenu}>
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleCloseMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
