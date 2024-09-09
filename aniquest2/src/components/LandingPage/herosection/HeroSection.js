import React from "react";
import { Link } from "react-router-dom";
import styles from "./heroSection.module.css";
import tick from './../../../icons/tick.svg';

const HeroSection = () => {
  const navigateToPage = (path) => {
    window.location.href = path;
  };
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          Fast and Automatic
          <br />
          Anime and Fantasy
          <br />
          Writing
        </h1>
        <p className={styles.subheading}>
          Texts written by artificial intelligence immediate, easy and with
          amazing results
        </p>
      </div>
      <div className={styles.buttonContainer}>
        <Link to="/Startfreetrail" className={styles.freeTrialButton}>
          FREE TRIAL
        </Link>
        <Link to="/sign-up-google" className={styles.signUpGoogleButton}>
          SIGN UP WITH GOOGLE
        </Link>
      </div>
      <div className={styles.rectangleContainer}>
        <div
          className={styles.rectangle}
          onClick={() => navigateToPage("/publications")}
        >
          <img
            src={tick}
            alt="Icon"
            className={styles.rectangleIcon}
          />
          <div className={styles.rectangleText}>
            <h3>Develop Publications</h3>
          </div>
        </div>
        <div
          className={styles.rectangle}
          onClick={() => navigateToPage("/fanfiction")}
        >
          <img
            src={tick}
            alt="Icon"
            className={styles.rectangleIcon}
          />
          <div className={styles.rectangleText}>
            <h3>Perfect for Fan fiction</h3>
          </div>
        </div>
        <div
          className={styles.rectangle}
          onClick={() => navigateToPage("/writing")}
        >
          <img
            src={tick}
            alt="Icon"
            className={styles.rectangleIcon}
          />
          <div className={styles.rectangleText}>
            <h3>Write, Review and Fix Text</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
