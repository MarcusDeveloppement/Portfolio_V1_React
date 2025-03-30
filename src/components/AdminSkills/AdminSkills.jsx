import React from "react";
import styles from "../Skills/Skills.module.scss";

function AdminSkills() {
  return (
    <div className={styles.globalCard}>
      <h3 className={styles.titlePrinc}>Administration</h3>
      <div className={styles.threeCard}>
        {/* Compétence en administration de réseau */}
        <div className={styles.card}>
          <h4>
            <i className="fa-solid fa-network-wired"></i> Network Administration
          </h4>
          <p>
            Configuration des équipements réseau, surveillance et optimisation
            de la performance du réseau.
          </p>
        </div>
        {/* Compétence en administration de serveurs Linux */}
        <div className={styles.card}>
          <h4>
            <i className="fa-solid fa-server"></i> Linux Servers
          </h4>
          <p>
            Gestion et configuration des serveurs Linux, maintenance régulière,
            et sécurisation des serveurs.
          </p>
        </div>
        {/* Compétence en administration de Windows Server */}
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-windows"></i> Windows Server
            Administration
          </h4>
          <p>
            Gestion et maintenance de serveurs Windows, incluant la
            configuration des rôles et fonctionnalités, la mise en place de
            stratégies de sécurité, et l'optimisation des services.
          </p>
        </div>
        {/* Compétence en sécurité des infrastructures */}
        <div className={styles.card}>
          <h4>
            <i className="fa-solid fa-shield-alt"></i> Security
          </h4>
          <p>
            Implémentation de politiques de sécurité, gestion des pare-feu et
            des systèmes de détection d'intrusions.
          </p>
        </div>
        {/* Ajout de compétence devops */}
        <div className={styles.card}>
          <h4>
            <i class="fa-brands fa-docker"></i> Docker
          </h4>
          <p>
            Création et gestion de conteneurs Docker pour l'isolation des
            applications et la portabilité.
          </p>
        </div>

        <div className={styles.card}>
          <h4>
            <i className="fa-solid fa-cogs"></i> Kubernetes
          </h4>
          <p>
            Orchestration de conteneurs avec Kubernetes pour gérer des
            applications à grande échelle.
          </p>
        </div>

        {/* Compétence en administration des infrastructures cloud spécifiquement pour Azure */}
        <div className={styles.card}>
          <h4>
            <i className="fa-brands fa-microsoft"></i> Azure Cloud Management
          </h4>
          <p>
            Administration avancée des infrastructures Azure, avec une expertise
            dans la configuration, la gestion et la sécurisation des
            environnements cloud Azure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AdminSkills;
