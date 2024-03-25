import React from "react";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={styles.content} data-aos="fade-up">
      <div className={styles.title}>
        <h2>SKILLS</h2>
      </div>
      <div className={styles.container}>
        <article className={styles.skills}>
          <div className={styles.cardContent}>
            <div className={styles.globalCard}>
              <h3>Front-End</h3>
              <div className={styles.threeCard}>
                <div className={styles.card}>
                  <h4>
                    {" "}
                    <i className="fa-brands fa-react"></i> React JS
                  </h4>
                  <p>
                    J'ai déjà réalisé plusieurs projets en utilisant le
                    framework React, et j'ai intégré diverses bibliothèques,
                    telles que Redux, pour la gestion des états au sein des
                    applications.
                  </p>
                </div>
                <div className={styles.card}>
                  <h4>
                    {" "}
                    <i className="fa-brands fa-sass"></i>Sass
                  </h4>
                  <p>
                    J'utilise Sass en raison de sa facilité de maintenance et
                    parce que c'est un préprocesseur CSS qui simplifie
                    grandement l'organisation des feuilles de style.
                  </p>
                </div>
                <div className={styles.card}>
                  <h4>
                    {" "}
                    <i className="fa-brands fa-bootstrap"></i>Bootstrap
                  </h4>
                  <p>
                    J'ai eu l'occasion d'utiliser Bootstrap durant ma première
                    année de développement chez Study. Bien que je n'aie réalisé
                    que quelques projets avec, j'ai trouvé ce framework
                    extrêmement pratique pour déployer rapidement des
                    applications côté front-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.skills}>
          <div className={styles.cardContent}>
            <div className={styles.globalCard}>
              <h3>Back-End</h3>
              <div className={styles.threeCard}>
                <div className={styles.card}>
                  <h4>
                    <i className="fa-brands fa-php"></i>PHP
                  </h4>
                  <p>
                    J'utilise PHP en combinaison avec PDO, que ce soit dans une
                    approche procédurale ou orientée objet. J'ai débuté dans le
                    développement web avec ce langage.
                  </p>
                </div>

                <div className={styles.card}>
                  <h4>
                    <i className="fa-solid fa-database"></i>MySql
                  </h4>
                  <p>
                    J'utilise MySQL pour établir la relation entre ma base de
                    données et mon PHP, en employant SQL pour les échanges de
                    données.
                  </p>
                </div>
                <div className={styles.card}>
                  <h4>
                    <i className="fa-brands fa-symfony"></i>Symphony
                  </h4>
                  <p>
                    Je suis actuellement en cours d'apprentissage du framework
                    Symfony, ce qui va me permettre d'utiliser PHP plus
                    efficacement en implémentant divers bundles et en adoptant
                    l'architecture MVC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.skills}>
          <div className={styles.cardContent}>
            <div className={styles.globalCard}>
              <h3>Autres | Tools</h3>
              <div className={styles.threeCard}>
                <div className={styles.card}>
                  <h4>
                    <i className="fa-brands fa-figma"></i>Figma
                  </h4>
                  <p>
                    J'utilise Figma pour concevoir les maquettes de projets ou
                    pour découper des maquettes déjà conçues par un designer.
                  </p>
                </div>
                <div className={styles.card}>
                  <h4>
                    <i className="fa-brands fa-github"></i>Github
                  </h4>
                  <p>
                    J'utilise GitHub pour versionner mes différents projets, en
                    employant des commandes directement depuis VSCode.
                  </p>
                </div>
                <div className={styles.card}>
                  <h4>
                    <i className="fa-brands fa-wordpress"></i>Wordpress
                  </h4>
                  <p>
                    C'est durant ma première année que j'ai appris à utiliser
                    WordPress, et même aujourd'hui, je continue de l'utiliser,
                    bien que rarement. Pour le développement local, je me sers
                    de la plateforme XAMPP.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
