import React, { useState } from "react";
import styles from "./Skills.module.scss";
import DevSkills from "../DevSkills/DevSkills";
import AdminSkills from "../AdminSkills/AdminSkills";

export default function Skills() {
  // State pour suivre l'index du composant de compétences visible
  const [skillIndex, setSkillIndex] = useState(0);

  // Tableau des composants pour chaque ensemble de compétences
  const skillsComponents = [<AdminSkills />, <DevSkills />];

  // Fonctions pour naviguer entre les compétences
  const goNext = () => {
    setSkillIndex((prevIndex) => (prevIndex + 1) % skillsComponents.length);
  };

  const goPrevious = () => {
    setSkillIndex(
      (prevIndex) =>
        (prevIndex - 1 + skillsComponents.length) % skillsComponents.length
    );
  };

  return (
    <section id="skills" className={styles.content} data-aos="fade-up">
      <div className={styles.title}>
        <h2>SKILLS</h2>
      </div>
      <div className={styles.container}>
        {/* Affichage du composant de compétences actuel */}
        {skillsComponents[skillIndex]}
        {/* Flèche Précédente */}
        {skillIndex > 0 && (
          <div className={styles.arrowLeft} onClick={goPrevious}>
            <div className={styles.arrowStyle2}>
              <i className="fa-solid fa-arrow-left"></i>
              <p>Back</p>
            </div>
          </div>
        )}

        {/* Flèche Suivante */}
        {skillIndex < skillsComponents.length - 1 && (
          <div className={styles.arrowRight} onClick={goNext}>
            <div className={styles.arrowStyle}>
              <p>Next</p>
              <i className=" fa-solid fa-arrow-right"></i>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
