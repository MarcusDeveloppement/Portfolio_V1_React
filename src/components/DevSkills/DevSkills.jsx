import React from "react";
import styles from "../Skills/Skills.module.scss";

function DevSkills() {
  return (
    <div className={styles.globalCard}>
      <h3 className={styles.titlePrinc}>DEV SKILLS</h3>
      <div className={styles.threeCard}>
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-python"></i> Python
          </h4>
          <p>
            J'utilise Sass pour sa facilité de maintenance et parce qu'il s'agit
            d'un préprocesseur CSS qui simplifie considérablement l'organisation
            des feuilles de style.
          </p>
        </div>
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-java"></i> Java
          </h4>
          <p>
            J'utilise Sass pour sa facilité de maintenance et parce qu'il s'agit
            d'un préprocesseur CSS qui simplifie considérablement l'organisation
            des feuilles de style.
          </p>
        </div>
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-react"></i> React JS
          </h4>
          <p>
            J'ai réalisé plusieurs projets en utilisant le framework React,
            intégrant diverses bibliothèques, telles que Redux, pour la gestion
            des états dans les applications.
          </p>
        </div>
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-angular"></i> Angular
          </h4>
          <p>
            J'ai eu l'occasion d'utiliser Angular lors de projets précédents,
            appréciant sa puissance pour les applications complexes côté
            front-end.
          </p>
        </div>
        <div className={styles.card}>
          <h4>
            <i className="fa-solid fa-database"></i> SQL
          </h4>
          <p>
            J'utilise Sass pour sa facilité de maintenance et parce qu'il s'agit
            d'un préprocesseur CSS qui simplifie considérablement l'organisation
            des feuilles de style.
          </p>
        </div>
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-git-alt"></i> Git
          </h4>
          <p>
            J'utilise Sass pour sa facilité de maintenance et parce qu'il s'agit
            d'un préprocesseur CSS qui simplifie considérablement l'organisation
            des feuilles de style.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DevSkills;
