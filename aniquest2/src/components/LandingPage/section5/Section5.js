import React from 'react';
import styles from './Section5.module.css';
import rhombusImage from './../../../icons/rhombus.svg'; // Update the path as needed
import imageAboveRhombus from './../../../icons/image.svg'; // Update the path as needed

const Section5 = () => {
  return (
    <div className={styles.section5}>
      <div className={styles.textContainer}>
        <div className={styles.animeTextHeader}>
          Anime Text in a Blink
          <br />
          Automatic and Immediate
        </div>
        <div className={styles.animeTextSubheader}>
          The technology of our AI assures great writing, without waiting, without
          creative block, instant content only.
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={rhombusImage} alt="Rhombus" className={styles.rhombusImage} />
        <img src={imageAboveRhombus} alt="Above Rhombus" className={styles.imageAboveRhombus} />
      </div>
    </div>
  );
};

export default Section5;
