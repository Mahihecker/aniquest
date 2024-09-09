import React from "react";
import styles from "./Section6.module.css";
import shape3 from "./../../../icons/shape3.svg"; // Update the path to your image

const Section6 = () => {
  return (
    <section className={styles.section6}>
      <div className={styles.rectangle23}>
        <div className={styles.text}>
          <h2 className={styles.textAboveRectangle}>
            Fantasy Stories and Anime Post Specialized AI
          </h2>
          <p className={styles.aiText}>
            Our artificial intelligence can complete, start, continue or make
            from scratch a good anime and fantasy story, a reddit post or an
            answer to conversations.
          </p>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <h3 className={styles.numberText}>20+</h3>
            <p className={styles.aiPatternText}>
              AI and Machine Learning Patterns
            </p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.numberText1}>76+</h3>
            <p className={styles.aiPatternText1}>
              Users approve and use regularly AI writing
            </p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.numberText2}>{">"}96%</h3>
            <p className={styles.aiPatternText2}>Proven accuracy</p>
          </div>
          <div className={styles.stat}>
            <h3 className={styles.numberText3}>67</h3>
            <p className={styles.aiPatternText3}>Industry leading eNPS score</p>
          </div>
        </div>
        <div className={styles.block}>
          <img src={shape3} alt="shape3" className={styles.shape3} />
          <h2 className={styles.textAboveRectangle2}>
            Within the reach of any anime fan Easy to use and effective
          </h2>
          <h2 className={styles.textAboveRectangle3}>
            Our AI will enhance the quality of your fan fiction or your post, it
            can create an interesting backstory or it can even advise you on how
            to continue with your text or conversation
          </h2>
        </div>
        <div className={styles.rectangle24}></div>
      </div>
    </section>
  );
};

export default Section6;
