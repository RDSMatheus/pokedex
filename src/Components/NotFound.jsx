import React from 'react';
import Snorlax from '../Assets/snorlax-404.svg';
import styles from './NotFound.module.css';
import Head from './Head';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Head description="Página de erro" title="404" />
      <p className={styles.p}>A wild Snorlax appears!</p>
      <p>
        4<img src={Snorlax} alt="Snorlax" />4
      </p>
    </div>
  );
};

export default NotFound;
