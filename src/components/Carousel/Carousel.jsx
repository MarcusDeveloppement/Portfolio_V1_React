import React, { useState } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className={styles.carouselContainer}>
      <button onClick={goToPrevious} className={styles.carouselButton}>
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.carouselImage}
      />
      <button onClick={goToNext} className={styles.carouselButton}>
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
