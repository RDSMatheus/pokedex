import React from 'react';
import { ReactComponent as PokeBall } from '../Assets/pokeball.svg';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <PokeBall />
    </div>
  );
};

export default Loading;
