import React, { useState, useEffect } from "react";
import initialData from "../../Data/data.json";
import infraData from "../../Data/data-infra.json";
import styles from "./Projects.module.scss";
import Modale from "../Modale/Modale";
import Carousel from "../Carousel/Carousel";

export default function Projects() {
  const [projetActuel, setProjetActuel] = useState(null);
  const [modaleOuverte, setModaleOuverte] = useState(false);
  const [data, setData] = useState(infraData);
  const [isInitial, setIsInitial] = useState(false);

  useEffect(() => {
    console.log(projetActuel);
  }, [projetActuel]);

  const ouvrirModale = (id) => {
    const projetTrouve = data.find((projet) => projet.id === id);
    if (projetTrouve) {
      setProjetActuel({
        ...projetTrouve,
        images: [
          { url: projetTrouve.image, type: "image" },
          { url: projetTrouve.image2, type: "image" },
          { url: projetTrouve.image3, type: "image" },
          { url: projetTrouve.videoUrl, type: "video" },
        ].filter((item) => item && item.url),
      });
    }
    setModaleOuverte(true);
  };

  const toggleData = () => {
    setData(isInitial ? infraData : initialData);
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
            {isInitial ? "PROJETS INFRA" : "PROJETS DEV"}
            <i className="fa-regular fa-hand-point-right"></i>
          </p>
        </button>
      </div>

      <Modale ouverte={modaleOuverte} fermer={() => setModaleOuverte(false)}>
        {projetActuel && (
          <div className={styles.modalContent}>
            <h2>{projetActuel.titre}</h2>
            {projetActuel.images && projetActuel.images.length > 0 && (
              <Carousel images={projetActuel.images} />
            )}
            {projetActuel.paragraphe &&
              projetActuel.images &&
              projetActuel.images.length > 0 && (
                <p>{projetActuel.paragraphe}</p>
              )}
            <div className={styles.navlink}>
              {projetActuel.site && (
                <a
                  href={projetActuel.site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Le projet
                </a>
              )}
              {projetActuel.github && (
                <a
                  href={projetActuel.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "10px" }}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        )}
      </Modale>
    </section>
  );
}
