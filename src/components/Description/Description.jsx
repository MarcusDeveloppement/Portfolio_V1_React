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
            Passionné par les technologies, j’ai entamé une formation en
            développement web il y a quatre ans. Cette expérience m’a permis de
            décrocher un poste d’ingénieur logiciel, où j’ai pu approfondir mes
            compétences sur le terrain. Aujourd’hui, je poursuis ma montée en
            compétences à travers une formation en{" "}
            <strong>Administration des Infrastructures Sécurisées (AIS)</strong>
            , avec un fort intérêt pour les systèmes, les réseaux et la
            cybersécurité.
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
