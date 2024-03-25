import React, { useState } from "react";
import data from "../../Data/data.json";
import styles from "./Projects.module.scss";
import Modale from "../Modale/Modale";
import Carousel from "../Carousel/Carousel";

export default function Projects() {
  const [projetActuel, setProjetActuel] = useState(null);
  const [modaleOuverte, setModaleOuverte] = useState(false);
  console.log(projetActuel);

  const ouvrirModale = (id) => {
    const projetTrouve = data.find((projet) => projet.id === id);
    setProjetActuel(projetTrouve);
    setModaleOuverte(true);
  };

  return (
    <section
      id="projects"
      className={styles.projectsContainer}
      data-aos="fade-down"
    >
      <div className={styles.buttonContainer}>
        <h2 className={styles.h31}>MES PROJETS</h2>
        {data.map((projet) => (
          <button
            key={projet.id}
            onClick={() => ouvrirModale(projet.id)}
            className={`${styles.projectButton} ${styles[projet.type]}`}
          >
            <p>{projet.titre}</p>
          </button>
        ))}
        <a
          className={styles.h32}
          href="https://github.com/MarcusDeveloppement?tab=repositories"
          target="_blank"
        >
          <p>
            VOIR PLUS <i className="fa-regular fa-hand-point-right"></i>
          </p>
        </a>
      </div>

      <Modale ouverte={modaleOuverte} fermer={() => setModaleOuverte(false)}>
        {projetActuel && (
          <div className={styles.modalContent}>
            <h2>{projetActuel.titre}</h2>
            <Carousel
              images={[
                projetActuel.image,
                projetActuel.image2,
                projetActuel.image3,
              ].filter(Boolean)}
            />
            <p>{projetActuel.paragraphe}</p>
            <div className={styles.navlink}>
              {" "}
              <a
                href={projetActuel.site}
                target="_blank"
                rel="noopener noreferrer"
              >
                Site du projet
              </a>
              <a
                href={projetActuel.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "10px" }}
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </Modale>
    </section>
  );
}
