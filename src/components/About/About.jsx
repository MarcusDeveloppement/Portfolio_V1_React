import React from "react";
import styles from "./About.module.scss";
import imgMe from "../../assets/images/Moi.webp";
import CV from "../../assets/images/CV.pdf";

export default function About() {
  return (
    <div
      className={`${styles.about_content} ${styles.containAbout}`}
      data-aos="fade-down"
    >
      <div className={styles.nameContent}>
        <div className={styles.name}>
          <h1>Marc</h1>
          <h2>KHAMCHANH</h2>
          <p>Administrateur Infrastructures Sécurisées</p>
        </div>
        <div className={styles.btn}>
          <button>
            <a href="#contact" className={styles.buttona}>
              Contactez-moi
            </a>
          </button>
          <button>
            <a
              href={CV}
              download="CV_MarcKhamchanh.pdf"
              className={styles.buttona}
            >
              Télécharger CV
            </a>
          </button>
        </div>
      </div>
      <div className={styles.containerImg}>
        <img className={styles.picture} src={imgMe} alt="photo de profile" />
      </div>
    </div>
  );
}
