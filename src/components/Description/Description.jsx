import React from "react";
import styles from "./Description.module.scss";
import web from "../../assets/images/hoodie.webp";
export default function Description() {
  return (
    <div id="about" className={styles.describe} data-aos="fade-right">
      <div className={styles.describeContainer}>
        <div className={styles.imageContainer}>
          <img src={web} alt="image web" />
        </div>
        <div className={styles.textContent}>
          <h2>À PROPOS</h2>
          <p>
            Passionné par le monde de l'IT depuis toujours, j'ai récemment pris
            la décision de changer de voie pour poursuivre ma passion. Mon
            parcours m'a conduit à explorer le domaine du développement
            informatique et c'est en allant plus loin dans mes recherche que
            j'ai découvert le réseau et l'administration système.
          </p>
          <div className={styles.wavylines}></div>
          <div className={styles.reseaux}>
            <a
              href="https://www.linkedin.com/in/marc-khamchanh-63aaa4b3/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/Marcus_TechDev" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/marcus_techdev/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://github.com/MarcusDeveloppement?tab=repositories"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
