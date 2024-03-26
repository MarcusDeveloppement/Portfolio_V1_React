import React from "react";
import styles from "./About.module.scss";
import imgMe from "../../assets/images/Moi.webp";
export default function About() {
  return (
    <div className={styles.about_content} data-aos="fade-down">
      <div className={styles.nameContent}>
        <div className={styles.name}>
          <h1>Marc</h1>
          <h2>KHAMCHANH</h2>
          <p>Web développeur</p>
        </div>
        <div className={styles.btn}>
          <button>Contactez-moi</button>
          <button>Mon CV</button>
        </div>
      </div>
      <div className={styles.containerImg}>
        <div className={styles.circle}></div>
        <img className={styles.picture} src={imgMe} alt="photo de profile" />
        <div className={styles.fade}></div>
      </div>
    </div>
  );
}
