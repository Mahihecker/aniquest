import React from "react";
import { Link } from "react-router-dom";
import styles from "./section3.module.css";
import background2 from "../../../icons/background2.svg"; // Adjust the path as needed
import tickIcon from "../../../icons/tick.svg"; // Adjust the path as needed
import vector from "../../../icons/Vector.svg"; // Adjust the path as needed

const Section3 = () => {
  return (
    <div className={styles.section3}>
      <div className={styles.imageAndTextSection}>
        <img src={background2} alt="Background 2" className={styles.image} />
        <div className={styles.textSection}>
          <h2>Anime Text in a Blink Automatic and Immediate</h2>
          <p>
            The technology of our AI assures great writing, without waiting,
            without creative block, instant content only.
          </p>
          <div className={styles.tickPoint}>
            <img src={tickIcon} alt="Tick Icon" />
            <p>Powered by GPT-3 from OpenAI</p>
          </div>
          <div className={styles.tickPoint}>
            <img src={tickIcon} alt="Tick Icon" />
            <p>Different genres and tones</p>
          </div>
          <div className={styles.tickPoint}>
            <img src={tickIcon} alt="Tick Icon" />
            <p>To publish on networks or use them in your campaigns</p>
          </div>
          <Link to="/read-more" className={styles.readMoreLink}>
            Read More
            <img src={vector} alt="Arrow Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section3;
