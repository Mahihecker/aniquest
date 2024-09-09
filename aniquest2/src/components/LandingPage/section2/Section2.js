import React from 'react';
import styles from './section2.module.css';
import icon1 from '../../../icons/fullstories.svg'; // Adjust the path as needed
import icon2 from '../../../icons/posting.svg'; // Adjust the path as needed
import icon3 from '../../../icons/feedback.svg'; // Adjust the path as needed

const Section2 = ({ navigateToPage }) => {
  return (
    <div className={styles.section2}>
      <div className={styles.rectangleRow}>
        <div
          className={styles.rectangle1}
          onClick={() => navigateToPage("/full-stories")}
        >
          <div className={styles.circle1}>
            <img src={icon1} alt="Icon 1" />
          </div>
          <h3>Full Stories</h3>
          <p>Interesting and complex, with a good development and ending</p>
        </div>
        <div
          className={styles.rectangle2}
          onClick={() => navigateToPage("/posting")}
        >
          <div className={styles.circle1}>
            <img src={icon2} alt="Icon 2" />
          </div>
          <h3>Posting</h3>
          <p>
            For reddit or Quora, continue your conversation or post in your blog
          </p>
        </div>
        <div
          className={styles.rectangle3}
          onClick={() => navigateToPage("/feedback")}
        >
          <div className={styles.circle1}>
            <img src={icon3} alt="Icon 3" />
          </div>
          <h3>Feedback</h3>
          <p>
            In addition to writing, the AI can review texts and give tips to
            improve them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
