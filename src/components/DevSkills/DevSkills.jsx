import React from "react";
import styles from "../Skills/Skills.module.scss";

function DevSkills() {
  return (
    <div className={styles.globalCard}>
      <h3 className={styles.titlePrinc}>Developpement Web</h3>
      <div className={styles.threeCard}>
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-python"></i> Python
          </h4>
          <p>
            J'ai utilisé Python dans un contexte professionnel pour le
            développement web en employant le framework Flask. J'emploie
            également Python pour automatiser certains scripts.
          </p>
        </div>
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-java"></i> Java
          </h4>
          <p>
            J'ai employé Java en combinaison avec Angular pour le développement
            full-stack, en utilisant PlayFramework dans un contexte
            professionnel
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
            J'ai utilisé Angular dans des projets professionnels pour développer
            des applications front-end complexe
          </p>
        </div>
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-php"></i> PHP
          </h4>
          <p>
            J'ai utilisé php en pdo dans des projets personnels pour développer
            des Projet CRUD, sutout pour la compréhensiond du principe en POO.
          </p>
        </div>
        <div className={styles.card}>
          <h4>
            <i className="fa-solid fa-database"></i> SQL
          </h4>
          <p>
            J'ai utilisé SQL, en particulier PostgreSQL, pour gérer efficacement
            les bases de données dans des projets full-stack.
          </p>
        </div>
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-git-alt"></i> Git
          </h4>
          <p>
            Dans tous mes environnements de développement, j'utilise GIT pour la
            gestion de versions. Professionnellement, je me sers de GitLab, et
            pour mes projets personnels, j'opte pour GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DevSkills;
