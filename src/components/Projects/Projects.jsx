import React, { useState, useEffect } from "react";
import initialData from "../../Data/data.json";
import infraData from "../../Data/data-infra.json";
import styles from "./Projects.module.scss";
import Modale from "../Modale/Modale";
import Carousel from "../Carousel/Carousel";

export default function Projects() {
  const [projetActuel, setProjetActuel] = useState(null);
  const [modaleOuverte, setModaleOuverte] = useState(false);
  const [data, setData] = useState(initialData);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    console.log(projetActuel);
  }, [projetActuel]);

  const ouvrirModale = (id) => {
    const projetTrouve = data.find((projet) => projet.id === id);
    setProjetActuel(projetTrouve);
    setModaleOuverte(true);
  };

  const toggleData = () => {
    if (isInitial) {
      setData(infraData);
    } else {
      setData(initialData);
    }
    setIsInitial(!isInitial);
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
        <button className={styles.h32} onClick={toggleData}>
          <p>
            {isInitial ? "PROJET SYSTÈME & RÉSEAU" : "PROJETS DEV"}
            <i className="fa-regular fa-hand-point-right"></i>
          </p>
        </button>
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
