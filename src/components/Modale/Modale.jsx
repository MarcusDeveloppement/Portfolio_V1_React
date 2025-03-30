import styles from "./Modale.module.scss";
import React from "react";

function Modale({ ouverte, fermer, children }) {
  if (!ouverte) return null;

  return (
    <div className={styles.modalOverlay} onClick={fermer}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <div className={styles.btnContent}>
          <button onClick={fermer} className={styles.closeButton}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modale;
