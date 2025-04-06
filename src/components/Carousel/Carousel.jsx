import React, { useState } from "react";
import styles from "./Carousel.module.scss";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === images.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const renderMedia = (item) => {
    if (item.type === "video") {
      return (
        <video key={currentIndex} controls className={styles.carouselMedia}>
          <source src={item.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img
          key={currentIndex}
          src={item.url}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.carouselMedia}
        />
      );
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <button onClick={goToPrevious} className={styles.carouselButton}>
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      {images[currentIndex] && renderMedia(images[currentIndex])}
      <button onClick={goToNext} className={styles.carouselButton}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Carousel;
