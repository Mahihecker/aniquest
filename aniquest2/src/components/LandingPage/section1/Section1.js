import React from 'react';
import styles from './section1.module.css';

const Section1 = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.footer}>
        <h2>Quality Content In just One click</h2>
      </div>
      <div className={styles.text}>
        <h2>
          Whether you need it urgently or just don't like to wait, our AI takes
          just seconds to deliver a complete work, no more waiting in commission
          queue.
        </h2>
      </div>
    </section>
  );
};

export default Section1;
