import React from 'react';
import Snorlax from '../Assets/snorlax-404.svg';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <p className={styles.p}>A wild Snorlax appears!</p>
      <p>
        4<img src={Snorlax} alt="Snorlax" />4
      </p>
    </div>
  );
};

export default NotFound;
