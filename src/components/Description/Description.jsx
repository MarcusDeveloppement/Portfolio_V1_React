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
            Passionné par l'IT, j'ai récemment opéré un changement de cap
            professionnel en me dirigeant vers le développement informatique.
            Cependant, c'est en approfondissant mes connaissances et en suivant
            ma curiosité que j'ai réalisé que le réseau offrait des aspects plus
            concrets et tangibles, répondant davantage à mes attentes
            professionnelles.
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
