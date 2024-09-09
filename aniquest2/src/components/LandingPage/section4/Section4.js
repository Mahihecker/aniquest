import React from 'react';
import styles from './Section4.module.css';
import logo1 from './../../../icons/reddit.svg';
import logo2 from './../../../icons/writeas.svg';
import logo3 from './../../../icons/quora.svg';
import logo4 from './../../../icons/ghost.svg';
import logo5 from './../../../icons/askfm.svg';
import logo6 from './../../../icons/animeplanet.svg';
import logo7 from './../../../icons/wikihow.svg';
import logo8 from './../../../icons/stackexchange.svg';
import logo9 from './../../../icons/answers.svg';
import logo10 from './../../../icons/myanimelist.svg';
import logo11 from './../../../icons/stacjoverflow.svg';
import logo12 from './../../../icons/medium.svg';
import logo13 from './../../../icons/ask.svg';
const Section4 = () => {
    const logosRow1 = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
    const logosRow2 = [logo8, logo9, logo10, logo11, logo12, logo13];
  
    return (
      <div className={styles.section4}>
        <div className={styles.newFrame}>
          <div className={styles.horizontalLine}></div>
          <h3 className={styles.frameText}>The best tool for</h3>
          <div className={styles.horizontalLine}></div>
        </div>
        <div className={styles.logosSection}>
          <div className={styles.logoRow}>
            {logosRow1.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} className={styles.logo} />
            ))}
            {logosRow1.map((logo, index) => (
              <img key={index + logosRow1.length} src={logo} alt={`Logo ${index + 1}`} className={styles.logo} />
            ))}
          </div>
          <div className={styles.logoRow}>
            {logosRow2.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} className={styles.logo} />
            ))}
            {logosRow2.map((logo, index) => (
              <img key={index + logosRow2.length} src={logo} alt={`Logo ${index + 1}`} className={styles.logo} />
            ))}
          </div>
        </div>
        <div className={styles.andManyMore}>And many more</div>
      </div>
    );
  };
  
  export default Section4;